import React from 'react';
import { jsPDF } from 'jspdf';

const LyricsDisplay = ({ lyrics, artist, title }) => {
  const saveAsPDF = () => {
    if (!artist || !title) {
      alert('Artista e Título da Música são necessários para salvar como PDF.');
      return;
    }

    const doc = new jsPDF();
    doc.text(`Artista: ${artist}`, 10, 10);
    doc.text(`Título: ${title}`, 10, 20);
    doc.text(lyrics, 10, 30);
    doc.save(`${title} - ${artist}.pdf`);
  };

  return (
    <div>
      <h2>Letra da Música</h2>
      <pre>{lyrics}</pre>
      <button onClick={saveAsPDF}>Salvar como PDF</button>
    </div>
  );
};

export default LyricsDisplay;
