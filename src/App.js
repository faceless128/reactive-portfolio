import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Links from './components/Links';
import './assets/css/style.css';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <Nav portfolioSelected={portfolioSelected} setPortfolioSelected={setPortfolioSelected} contactSelected={contactSelected} setResumeSelected={setResumeSelected} resumeSelected={resumeSelected} setContactSelected={setContactSelected} ></Nav>
      </header>
      <main>
        {
        !contactSelected && !portfolioSelected && !resumeSelected? ( <About></About> ) :
        contactSelected ? ( <Contact></Contact> ) : 
        portfolioSelected ? ( <Portfolio></Portfolio> ) :
        resumeSelected ? ( <Resume></Resume> ) :
        <></>
      }
      </main>
      <footer>
        <Links></Links>
      </footer>
    </div>
  );
}

export default App;
