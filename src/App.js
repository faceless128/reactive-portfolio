import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Links from './components/Links';
import './assets/css/style.css';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <Nav contactSelected={contactSelected} setContactSelected={setContactSelected} ></Nav>
      </header>
      <main>
        {!contactSelected ? (
          <About></About>
        ) : (
          <Contact></Contact>
        )}
      </main>
      <footer>
        <Links></Links>
      </footer>
    </div>
  );
}

export default App;
