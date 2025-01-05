'use client';
import { useState } from 'react';
import { employees } from '@/data/employees.data';

export function formatDate(dateString) {
  if (!dateString) return 'N/A';
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

export default function Employees() {
  const [selectedEmployee, setSelectedEmployee] = useState(employees[0]);
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <div className="flex min-h-screen bg-gray-500">
      <aside className="w-1/4 bg-slate-300 p-6 shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 m-2 text-gray-800">
            <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
            <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
          </svg>

          Employees</h2>
        <ul className="space-y-4">
          {employees.map((employee) => (
            <li
              key={employee.id}
              className={`p-4 rounded-lg cursor-pointer transition-colors flex items-center ${selectedEmployee.id === employee.id ? 'bg-gray-200' : 'hover:bg-gray-100'
                }`}
              onClick={() => setSelectedEmployee(employee)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#0f172a" className="size-6 m-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>

              <span className="text-lg font-medium text-slate-700">{employee.personalInfo.firstName} {employee.personalInfo.lastName}</span>
            </li>
          ))}
        </ul>
      </aside>
      <div className="w-3/4 p-10 bg-slate-100">
        <h2 className="text-3xl font-semibold mb-6 text-slate-900">Employee Details</h2>
        <section className="mb-0">
          <button
            className={`px-4 py-2 rounded-md ${activeTab === 'personal' ? 'text-blue-700' : 'text-gray-500'}`}
            onClick={() => setActiveTab('personal')}
          >
            Personal Info
          </button>
          <button
            className={`ml-2 px-4 py-2 rounded-md ${activeTab === 'company' ? 'text-blue-700' : 'text-gray-500'}`}
            onClick={() => setActiveTab('company')}
          >
            Company Info
          </button>
          <button
            className={`ml-2 px-4 py-2 rounded-md ${activeTab === 'contact' ? 'text-blue-700' : 'text-gray-500'}`}
            onClick={() => setActiveTab('contact')}
          >
            Contact Info
          </button>
        </section>
        <main className="bg-slate-300 p-6 shadow-md">
          {selectedEmployee ? (
            <div>
              {activeTab === 'personal' && (
                <div className="space-y-4">
                  <div className="mb-4">
                    <label className="block text-lg font-medium text-slate-950">First Name</label>
                    <input type="text" value={selectedEmployee.personalInfo.firstName} readOnly
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-gray-500" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-lg font-medium text-slate-700">Last Name</label>
                    <input type="text" value={selectedEmployee.personalInfo.lastName} readOnly
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-gray-500" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-lg font-medium text-slate-700">Date of Birth</label>
                    <input type="text" value={formatDate(selectedEmployee.personalInfo.dateOfBirth)} readOnly
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-gray-500" />
                  </div>
                </div>
              )}
              {activeTab === 'company' && (
                <div className="space-y-4">
                  <div className="mb-4">
                    <label className="block text-lg font-medium text-slate-700">Employee ID</label>
                    <input type="text" value={selectedEmployee.id} readOnly
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-gray-500" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-lg font-medium text-slate-700">Department</label>
                    <input type="text" value={selectedEmployee.companyInfo.department} readOnly
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-gray-500" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-lg font-medium text-slate-700">Position</label>
                    <input type="text" value={selectedEmployee.companyInfo.jobTitle} readOnly
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-gray-500" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-lg font-medium text-slate-700">Start Date</label>
                    <input type="text" value={formatDate(selectedEmployee.companyInfo.startDate)} readOnly
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-gray-500" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-lg font-medium text-slate-700">End Date</label>
                    <input type="text" value={selectedEmployee.companyInfo.endDate ? formatDate(selectedEmployee.companyInfo.endDate) : 'N/A'} readOnly
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-gray-500" />
                  </div>
                </div>
              )}
              {activeTab === 'contact' && (
                <div className="space-y-4">
                  <div className="mb-4">
                    <label className="block text-lg font-medium text-slate-700">Email</label>
                    <input type="text" value={selectedEmployee.contactInfo.email} readOnly
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-gray-500" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-lg font-medium text-slate-700">Phone</label>
                    <input type="text" value={selectedEmployee.contactInfo.phone} readOnly
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-gray-500" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-lg font-medium text-slate-700">Address</label>
                    <input type="text" value={selectedEmployee.contactInfo.address} readOnly
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-gray-500" />
                  </div>
                </div>
              )}
            </div>
          ) : (
            <p className="text-lg text-gray-600">Select an employee to see their details.</p>
          )}
        </main>
      </div>
    </div>
  );
}