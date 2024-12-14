import { Phone } from 'lucide-react';
import React from 'react';
import { contacts } from './data/contacts';
import { departments } from './data/departments';
const DirectoryList = ({ searchTerm, selectedDepartment }) => {
    const filteredContacts = contacts.filter((contact) => {
      const matchesSearch =
        searchTerm === '' ||
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.mobile.includes(searchTerm);
  
      const matchesDepartment =
        selectedDepartment === '-1' || contact.departmentId === selectedDepartment;
  
      return matchesSearch && matchesDepartment;
    });
  
    const groupedContacts = filteredContacts.reduce((acc, contact) => {
      const dept = departments.find((d) => d.id === contact.departmentId);
      if (!acc[contact.departmentId]) {
        acc[contact.departmentId] = {
          name: dept?.name || 'Unknown Department',
          contacts: [],
        };
      }
      acc[contact.departmentId].contacts.push(contact);
      return acc;
    }, {});
  
    return (
      <div className="space-y-8 bg-black" >
        {Object.entries(groupedContacts).map(([deptId, { name, contacts }]) => (
          <div
            key={deptId}
            className="bg-black rounded-lg shadow-sm overflow-hidden "
          >
            <div className="px-6 py-4 bg-50 black border-b border-gray-200">
              <h2 className="text-lg font-semibold text-[#E50914]">{name}</h2>
            </div>
            <div className=" bg-[#262424]">
              {contacts.map((contact) => (
                <div key={contact.id} className="p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-white">
                        {contact.name}
                      </h3>
                      <p className="mt-1 text-sm text-white">
                        {contact.designation}
                      </p>
                    </div>
                    <div className="mt-4 sm:mt-0">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-5 w-5 text-gray-400" />
                        <a
                          href={`tel:${contact.mobile}`}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          {contact.mobile}
                        </a>
                      </div>
                      {contact.landline && (
                        <div className="mt-2 flex items-center space-x-2">
                          <Phone className="h-5 w-5 text-gray-400" />
                          <a
                            href={`tel:${contact.landline}`}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            {contact.landline}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default DirectoryList;