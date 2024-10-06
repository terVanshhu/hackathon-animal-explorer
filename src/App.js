import React, { useState } from 'react';
import SearchForm from './components/SearchForm/SearchForm';
import AnimalInfo from './components/AnimalInfo/AnimalInfo';
import './App.css';

function App() {
  const [animalData, setAnimalData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchAnimal = async (animalName) => {
    setLoading(true);
    setError(null);
    try {
      // Fetch data from Wikipedia API
      const wikiResponse = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${animalName}`);
      const wikiData = await wikiResponse.json();

      if (wikiData.type === 'standard') {
        setAnimalData({
          name: wikiData.title,
          description: wikiData.extract,
          image_link: wikiData.thumbnail ? wikiData.thumbnail.source : null
        });
      } else {
        throw new Error('Animal not found');
      }
    } catch (error) {
      setError('Unable to find information about this animal. Please try another search.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Animal Explorer</h1>
      <SearchForm onSearch={searchAnimal} />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {animalData && <AnimalInfo animal={animalData} />}
    </div>
  );
}

export default App;
