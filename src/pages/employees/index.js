'use client';
import { useState } from 'react';
import { employees } from '../../data/employees';

export default function Employees() {
  const [selectedEmployee, setSelectedEmployee] = useState(employees[0]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-1/4 bg-slate-300 p-6 shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Employees</h2>
        <ul className="space-y-4">
          {employees.map((employee) => (
            <li
              key={employee.id}
              className={`p-4 rounded-lg cursor-pointer transition-colors ${
                selectedEmployee.id === employee.id ? 'bg-gray-200' : 'hover:bg-gray-100'
              }`}
              onClick={() => setSelectedEmployee(employee)}
            >
              <span className="text-lg font-medium text-gray-700">{employee.firstName} {employee.lastName}</span>
            </li>
          ))}
        </ul>
      </aside>
      <main className="w-3/4 p-10 bg-black ">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-600">Employee Details</h2>
        {selectedEmployee ? (
          <div className="space-y-4">
            <p className="text-lg"><strong>First Name:</strong> {selectedEmployee.firstName}</p>
            <p className="text-lg"><strong>Last Name:</strong> {selectedEmployee.lastName}</p>
            <p className="text-lg"><strong>Employee ID:</strong> {selectedEmployee.id}</p>
            <p className="text-lg"><strong>Department:</strong> {selectedEmployee.department}</p>
            <p className="text-lg"><strong>Position:</strong> {selectedEmployee.position}</p>
            <p className="text-lg"><strong>Date Joined:</strong> {selectedEmployee.dateJoined}</p>
            <p className="text-lg"><strong>Date of Leave:</strong> {selectedEmployee.dateOfLeave ? selectedEmployee.dateOfLeave : 'N/A'}</p>
          </div>
        ) : (
          <p className="text-lg text-gray-600">Select an employee to see their details.</p>
        )}
      </main>
    </div>
  );
}