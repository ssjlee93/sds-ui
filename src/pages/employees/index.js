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
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Employees</h2>
        <ul className="space-y-4">
          {employees.map((employee) => (
            <li
              key={employee.id}
              className={`p-4 rounded-lg cursor-pointer transition-colors ${selectedEmployee.id === employee.id ? 'bg-gray-200' : 'hover:bg-gray-100'
                }`}
              onClick={() => setSelectedEmployee(employee)}
            >
              <span className="text-lg font-medium text-gray-700">{employee.personalInfo.firstName} {employee.personalInfo.lastName}</span>
            </li>
          ))}
        </ul>
      </aside>
      <div className="w-3/4 p-10 bg-slate-900">
        <h2 className="text-3xl font-semibold mb-6 text-slate-100">Employee Details</h2>
        <section className="mb-0">
          <button
            className={`px-4 py-2 rounded-md ${activeTab === 'personal' ? 'text-indigo-500' : 'text-gray-400'}`}
            onClick={() => setActiveTab('personal')}
          >
            Personal Info
          </button>
          <button
            className={`ml-2 px-4 py-2 rounded-md ${activeTab === 'company' ? 'text-indigo-500' : 'text-gray-400'}`}
            onClick={() => setActiveTab('company')}
          >
            Company Info
          </button>
          <button
            className={`ml-2 px-4 py-2 rounded-md ${activeTab === 'contact' ? 'text-indigo-500' : 'text-gray-400'}`}
            onClick={() => setActiveTab('contact')}
          >
            Contact Info
          </button>
        </section>
        <main className="bg-slate-300 p-6 rounded-lg shadow-md">
          {selectedEmployee ? (
            <div>
              {activeTab === 'personal' && (
                <div className="space-y-4">
                  <div className="mb-4">
                    <label className="block text-lg font-medium text-gray-700">First Name</label>
                    <input type="text" value={selectedEmployee.personalInfo.firstName} readOnly
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-gray-500" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-lg font-medium text-gray-700">Last Name</label>
                    <input type="text" value={selectedEmployee.personalInfo.lastName} readOnly
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-gray-500" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-lg font-medium text-gray-700">Date of Birth</label>
                    <input type="text" value={formatDate(selectedEmployee.personalInfo.dateOfBirth)} readOnly
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-gray-500" />
                  </div>
                </div>
              )}
              {activeTab === 'company' && (
                <div className="space-y-4">
                  <div className="mb-4">
                    <label className="block text-lg font-medium text-gray-700">Employee ID</label>
                    <input type="text" value={selectedEmployee.id} readOnly
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-gray-500" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-lg font-medium text-gray-700">Department</label>
                    <input type="text" value={selectedEmployee.companyInfo.department} readOnly
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-gray-500" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-lg font-medium text-gray-700">Position</label>
                    <input type="text" value={selectedEmployee.companyInfo.jobTitle} readOnly
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-gray-500" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-lg font-medium text-gray-700">Start Date</label>
                    <input type="text" value={formatDate(selectedEmployee.companyInfo.startDate)} readOnly
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-gray-500" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-lg font-medium text-gray-700">End Date</label>
                    <input type="text" value={selectedEmployee.companyInfo.endDate ? formatDate(selectedEmployee.companyInfo.endDate) : 'N/A'} readOnly
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-gray-500" />
                  </div>
                </div>
              )}
              {activeTab === 'contact' && (
                <div className="space-y-4">
                  <div className="mb-4">
                    <label className="block text-lg font-medium text-gray-700">Email</label>
                    <input type="text" value={selectedEmployee.contactInfo.email} readOnly
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-gray-500" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-lg font-medium text-gray-700">Phone</label>
                    <input type="text" value={selectedEmployee.contactInfo.phone} readOnly
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-gray-500" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-lg font-medium text-gray-700">Address</label>
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