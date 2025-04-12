import { useState } from 'react';

export default function Form() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });

  function handleFirstNameChange(e) {
    setPerson({
      ...person,
      firstName: e.target.value
    });
  }

  function handleLastNameChange(e) {
    setPerson({
      ...person,
      lastName: e.target.value
    });
  }

  function handleEmailChange(e) {
    setPerson({
      ...person,
      email: e.target.value
    });
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-4 mt-10">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          First name:
        </label>
        <input
          value={person.firstName}
          onChange={handleFirstNameChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Last name:
        </label>
        <input
          value={person.lastName}
          onChange={handleLastNameChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email:
        </label>
        <input
          value={person.email}
          onChange={handleEmailChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
        />
      </div>

      <p className="mt-4 text-gray-600 text-sm">
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </div>
  );
}
