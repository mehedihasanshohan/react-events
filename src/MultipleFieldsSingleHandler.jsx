import { useState } from 'react';

export default function MultipleFieldsSingleHandler() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });

  function handleChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          First name:
        </label>
        <input
          type="text"
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Last name:
        </label>
        <input
          type="text"
          name="lastName"
          value={person.lastName}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email:
        </label>
        <input
          type="email"
          name="email"
          value={person.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
        />
      </div>

      <p className="text-gray-600 text-sm mt-4">
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </div>
  );
}
