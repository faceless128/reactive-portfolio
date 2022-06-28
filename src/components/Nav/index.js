import React from 'react';

function Nav(props) {
  const {
    portfolioSelected,
    setPortfolioSelected,
    contactSelected,
    setContactSelected,
    resumeSelected,
    setResumeSelected
  } = props;

  return (
    <header className="nav" id="nav">
      <h1>I&nbsp;Made&nbsp;This</h1>
      <ul>
        <li className={`${!contactSelected && !portfolioSelected && !resumeSelected && 'navActive'}`}>
          <span className="about-me" onClick={() => {
            setPortfolioSelected(false);
            setContactSelected(false);
            setResumeSelected(false);
          }}>About Me</span>
        </li>
        <li className={`${portfolioSelected && !resumeSelected && 'navActive'}`}>
          <span className="show-portfolio" onClick={() => {
            setPortfolioSelected(true);
            setContactSelected(false);
            setResumeSelected(false);
          }}>Portfolio</span>
        </li>
        <li className={`${contactSelected && !resumeSelected && 'navActive'}`}>
          <span className="contact-me" onClick={() => {
            setPortfolioSelected(false);
            setContactSelected(true);
            setResumeSelected(false);
          }}>Contact Me</span>
        </li>
        <li className={`${contactSelected && !portfolioSelected && 'navActive'}`}>
          <span className="my-resume" onClick={() => {
            setPortfolioSelected(false);
            setContactSelected(false);
            setResumeSelected(true);
          }}>Resume</span>
        </li>
      </ul>
    </header>
  );
}

export default Nav;