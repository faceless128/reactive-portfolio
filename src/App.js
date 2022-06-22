import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Links from './components/Links';
import './assets/css/style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav></Nav>
      </header>
      <main>
        <About></About>
      </main>
      <footer>
        <Links></Links>
      </footer>
    </div>
  );
}

export default App;
