import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Spinner } from '../components/common';

export default function DetailPage() {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      console.log('Fetching user with ID:', id);
      try {
        const response = await axios.get(`/api/users/${id}`);
        setUser(response.data);
      } catch (err: any) {
        setError(err.response ? err.response.data.message : err.message);
      }
    };

    fetchUser();
  }, [id]);

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-600 text-lg">{error}</p>
      </div>
    );
  }

  if (!user) {
    return <Spinner />;
  }

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-around bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <div>
          <h1 className="text-2xl font-bold text-blue-600 mb-4">
            {user.firstName} {user.lastName}
          </h1>
          <p className="text-gray-700 mb-2"><strong>Email:</strong> {user.email}</p>
          <p className="text-gray-700 mb-2"><strong>Gender:</strong> {user.gender}</p>
          <p className="text-gray-700 mb-4"><strong>Age:</strong> {user.age}</p>
          <Link to="/" className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Back to Users List
          </Link>
        </div>
        <div className='image-frame'>
          <img src='https://picsum.photos/id/237/200/300?random="1" ' alt='Random' />
        </div>
      </div>
    </div>
  );
};


