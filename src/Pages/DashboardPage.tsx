import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Spinner } from '../components/common';
import { toast } from 'react-toastify';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  gender: string;
  age: number;
}


const headers = ['ID', 'First Name', 'Last Name', 'Email', 'Gender', 'Age', 'URL'];

export default function DashBoardPage() {
  const [data, setData] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/users');
      setData(response.data);
      setError(null);
    } catch (err: any) {
      setError(err.response ? err.response.data.message : 'Failed to fetch users');
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    toast.error(error)
    return <div>{error}</div>;
  }

  const filteredData = Array.isArray(data) ? data.filter((user) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      user.firstName.toLowerCase().includes(searchLower) ||
      user.lastName.toLowerCase().includes(searchLower) ||
      user.email.toLowerCase().includes(searchLower) ||
      user.gender?.toLowerCase().includes(searchLower) ||
      (user.age !== undefined && user.age.toString().includes(searchLower))
    );
  }) : [];
  

  return (
    <div className='page-container'>
      <div className='flex flex-col mt-10 w-full gap-6'>
        <h1 style={{textAlign: "center", fontSize: '20px'}}>Dash Board</h1>
        <input
          type="text"
          placeholder="Search by name, email, gender or age..."
          className='px-3 py-2 rounded-md focus:outline-none focus:ring-2'
          style={{width: "70%", alignSelf: 'center'}}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Table headers={headers} data={filteredData} />
      </div>

      </div>
  );
};
