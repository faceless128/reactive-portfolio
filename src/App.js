import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Links from './components/Links';
import './assets/css/style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav></Nav>
      </header>
      <main>
        <Portfolio></Portfolio>
      </main>
      <footer>
        <Links></Links>
      </footer>
    </div>
  );
}

export default App;
