import React from 'react';

function AnimalInfo({ animal }) {
  return (
    <div className="animal-info">
      <h2>{animal.name}</h2>
      {animal.image_link && (
        <img src={animal.image_link} alt={animal.name} className="animal-image" />
      )}
      <p>{animal.description || animal.habitat}</p>
      {animal.diet && <p><strong>Diet:</strong> {animal.diet}</p>}
      {animal.latin_name && <p><strong>Scientific Name:</strong> {animal.latin_name}</p>}
    </div>
  );
}

export default AnimalInfo;
