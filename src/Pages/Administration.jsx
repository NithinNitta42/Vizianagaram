import { Search, Users } from 'lucide-react';
import React, { useState } from 'react';
import { departments } from '../Components/data/departments';
import DirectoryList from '../Components/DirectoryList';
const Administration = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('-1');
  return (
    <div className="min-h-screen bg-[#f8f8f8] py-20">
      {/* Header */}
      <header className="bg-black shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-[#E50914]">Official Directory</h1>
            <div className="flex items-center space-x-4">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className=" mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Search and Filter Section */}
        <div className="bg-blue rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Search Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-red-400" />
              </div>
              <input
                type="text"
                className="w-[700px] pl-10 pr-3 py-2 border border-white-300 rounded-md leading-5 bg-red placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Search by name, designation, or phone number..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Department Filter */}
            <div>
              <select
                className="block w-[30%] pl-3 pr-10 py-2 text-base border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                <option value="-1">All Departments</option>
                {departments.map((dept) => (
                  <option key={dept.id} value={dept.id}>
                    {dept.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Directory Listing */}
        <DirectoryList
          searchTerm={searchTerm}
          selectedDepartment={selectedDepartment}
        />
      </main>
    </div>
  )
}
export default Administration
