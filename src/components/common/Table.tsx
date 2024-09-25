import React from 'react';
import { Link } from 'react-router-dom';

interface TableProps {
  headers: string[];
  data: any[];
}

const Table: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-blue-500 text-left">
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-6 py-3 border-b-2 border-gray-200 text-gray-600 font-semibold uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              } hover:bg-gray-100 transition-colors duration-150`}
            >
              <td className="px-6 py-4 border-b border-gray-200">{row.id}</td>
              <td className="px-6 py-4 border-b border-gray-200">{row.firstName}</td>
              <td className="px-6 py-4 border-b border-gray-200">{row.lastName}</td>
              <td className="px-6 py-4 border-b border-gray-200">{row.email}</td>
              <td className="px-6 py-4 border-b border-gray-200">{row.gender}</td>
              <td className="px-6 py-4 border-b border-gray-200">{row.age}</td>
              <td className="px-6 py-4 border-b border-gray-200">
                <Link to={`/users/${row.id}`} className="text-blue-600 hover:underline">
                  Click
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
