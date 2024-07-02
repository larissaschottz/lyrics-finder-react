/* Criar um formulário onde o usuário poderá digitar o nome do artista e o título da música. */

import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [artist, setArtist] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(artist, title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="artist" className='label-app'>Artista:</label>
        <input
          type="text"
          id="artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="title" className='label-app'>Título da Música:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <button type="submit">Buscar Letra</button>
    </form>
  );
};

export default SearchForm;
