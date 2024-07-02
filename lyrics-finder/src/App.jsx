import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import LyricsDisplay from './components/LyricsDisplay';
import './App.css';

const App = () => {
  const [lyrics, setLyrics] = useState('');
  const [artist, setArtist] = useState('');
  const [title, setTitle] = useState('');

  const fetchLyrics = async (artist, title) => {
    try {
      const response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`);
      const data = await response.json();
      setLyrics(data.lyrics);
      setArtist(artist);
      setTitle(title);
    } catch (error) {
      setLyrics('Letra não encontrada.');
      setArtist('');
      setTitle('');
    }
  };

  return (
    <div className="App">
      <h1 className='head-app'>Lyrics Finder</h1>
      <SearchForm onSearch={fetchLyrics} />
      {artist && title && <LyricsDisplay lyrics={lyrics} artist={artist} title={title} />}
    </div>
  );
};

export default App;
