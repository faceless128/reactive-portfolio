import React from 'react';
import resumePdf from '../../assets/resume/resume.pdf';

function Nav(props) {
    const {
        portfolioSelected,
        setPortfolioSelected,
        contactSelected,
        setContactSelected
      } = props;

    return(
        <header className="nav" id="nav">
            <h1>I&nbsp;Made&nbsp;This</h1>
             <ul>
                <li className={`${ !contactSelected && !portfolioSelected && 'navActive'}`}>
                    <span className="about-me" onClick={() => {
                        setPortfolioSelected(false);
                        setContactSelected(false);
                    }}>About Me</span>
                </li>
                <li className={`${portfolioSelected && 'navActive'}`}>
                    <span className="show-portfolio" onClick={() => {
                        setPortfolioSelected(true);
                        setContactSelected(false);
                    }}>Portfolio</span>
                </li>
                <li className={`${contactSelected && 'navActive'}`}>
                    <span className="contact-me" onClick={() => {
                        setPortfolioSelected(false);
                        setContactSelected(true);
                    }}>Contact Me</span>
                </li>
                <li>
                    <a href={resumePdf} target="_blank" rel="noreferrer">Resume</a>
                </li>
            </ul>
    </header>
    );
}

export default Nav;