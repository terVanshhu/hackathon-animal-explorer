import React, { useState } from 'react';

function SearchForm({ onSearch }) {
  const [animalName, setAnimalName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (animalName.trim()) {
      onSearch(animalName.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        value={animalName}
        onChange={(e) => setAnimalName(e.target.value)}
        placeholder="Enter animal name"
        required
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;