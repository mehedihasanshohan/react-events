import { useState } from 'react';

export default function NestedObjects() {
  const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value
    });
  }

  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value
      }
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value
      }
    });
  }

  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value
      }
    });
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Name:
        </label>
        <input
          value={person.name}
          onChange={handleNameChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Title:
        </label>
        <input
          value={person.artwork.title}
          onChange={handleTitleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          City:
        </label>
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Image URL:
        </label>
        <input
          value={person.artwork.image}
          onChange={handleImageChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
        />
      </div>

      <div className="text-gray-700 text-sm">
        <p>
          <i>{person.artwork.title}</i> by {person.name}
          <br />
          (located in {person.artwork.city})
        </p>
        <img
          src={person.artwork.image}
          alt={person.artwork.title}
          className="mt-4 rounded-md shadow-md w-full object-cover max-h-60"
        />
      </div>
    </div>
  );
}
