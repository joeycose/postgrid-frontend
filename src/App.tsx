import React from 'react';
import './App.css';
import { CreateLetter } from './components/CreateLetter';
import { RetrieveLetterById } from './components/RetrieveLetterById';
import { NavbarMain } from './components/NavbarMain';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          {<NavbarMain />}
        </header>
        <main>
          <CreateLetter />
          <RetrieveLetterById />
          {/* Additionally, add components for RetrieveLetter and ListLetters */}
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;