'use client';
import { useState } from 'react';
import { employees } from '../../data/employees';

export default function Employees() {
  const [selectedEmployee, setSelectedEmployee] = useState(employees[0]);

  return (
    <div className="flex min-h-screen">
      <aside className="w-1/4 bg-gray-200 p-4">
        <h2 className="text-xl font-bold mb-4">Employees</h2>
        <ul>
          {employees.map((employee) => (
            <li
              key={employee.id}
              className={`p-2 cursor-pointer ${selectedEmployee.id === employee.id ? 'bg-gray-300' : ''}`}
              onClick={() => setSelectedEmployee(employee)}
            >
              {employee.firstName} {employee.lastName}
            </li>
          ))}
        </ul>
      </aside>
      <main className="w-3/4 p-8">
        <h2 className="text-2xl font-bold mb-4">Employee Details</h2>
        {selectedEmployee ? (
          <div>
            <p><strong>First Name:</strong> {selectedEmployee.firstName}</p>
            <p><strong>Last Name:</strong> {selectedEmployee.lastName}</p>
            <p><strong>Employee ID:</strong> {selectedEmployee.id}</p>
            <p><strong>Department:</strong> {selectedEmployee.department}</p>
            <p><strong>Position:</strong> {selectedEmployee.position}</p>
            <p><strong>Date Joined:</strong> {selectedEmployee.dateJoined}</p>
            <p><strong>Date of Leave:</strong> {selectedEmployee.dateOfLeave ? selectedEmployee.dateOfLeave : 'N/A'}</p>
          </div>
        ) : (
          <p>Select an employee to see their details.</p>
        )}
      </main>
    </div>
  );
}