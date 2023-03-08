import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';





import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Navbar from './Navbar';

import logo from './assets/logo.png';

const MyButton = styled.button`
  padding: 4em;
  background-color: papayawhip;
`;

const LogoContainer = styled.div`
  max-width: 10.5rem;
  grid-area: logo;
 
`;

const StyledImg = styled.img`
  width: 100%;
  height: 18vh;
`;

const MainContainer = styled.div`
  grid-area: main;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: 7rem repeat(3, 1fr) 10rem;
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas: 
  "logo top top top top"
  "main main main main main"
  "main main main main main"
  "main main main main main"
  "footer footer footer footer footer";
  min-height: 100vh;
`;

const StyledFooter = styled.footer`
background-color: black;
padding: 2rem;
color:#fff;
grid-area: footer;
/* display: flex; */
align-items: center;
`;

const IconContainer=styled.div`
display: flex;
justify-content: center;
`
const IconLink= styled.a`
  color: #fff;
  padding: 2rem;
`



function App() {

  return (
    <Router>
      <GridContainer>
     
        <LogoContainer>
          <StyledImg src={logo} alt="Logo" />
        </LogoContainer>
        <Navbar />
        <MainContainer>
          <Switch>
            <Route path="/about">
              <p>About</p>
            </Route>
            <Route path="/portfolio">
              <p>Portfolio</p>
            </Route>
            <Route path="/">
              <p>Home</p>
            </Route>
          </Switch>
          <h1>Hello Nadin</h1>
        </MainContainer>
        <StyledFooter>
      <IconContainer>
        <IconLink href="https://www.linkedin.com/in/myname/">
          <FontAwesomeIcon icon={faLinkedin}/>
          <IconLink href="https://www.facebook.com/myname/">
          <FontAwesomeIcon icon={faFacebook} />
          <IconLink href="https://github.com/myname/">
          <FontAwesomeIcon icon={faGithub} />
        </IconLink>
        </IconLink>
          
        </IconLink>
      </IconContainer>
      <p>(C) 2023 </p>
    </StyledFooter>
      </GridContainer>
    </Router>
  );
}

// Läxa tills 7/3:
// Skapa din personliga footer i samråd med andra på Discord.
// titta på exempel på andra portföljer
// Du kan t.ex ha med linkedin-ikon och github-ikon figma-ikon?
// Tips att researcha: "fontawesome"
// Obs. Discord är ICKE frivilligt, men ni behöver inte göra hela läxan på discord
// Om du blir klar med detta, gör samma sak med Navbar
// Pusha ditt projek till din github, skicka länk till mig.


export default App;