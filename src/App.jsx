import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import Home from './pages/Home'
import Cookwise from './pages/Cookwise';





import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Navbar from './Navbar';
import Portfolio from './assets/Portfolio.png';







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
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area:main;
  justify-content: flex-start;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: 7rem repeat(3, 1fr) 10rem;
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas: 
  "top top top top top"
  "main main main main main"
  "main main main main main"
  "main main main main main"
  "footer footer footer footer footer";
  min-height: 100vh;
  
`;

const StyledFooter = styled.footer`
background-color:  #F8F8F9;
padding: 5rem;
color:#fff;
grid-area: footer;
align-items: center;
`;

const IconContainer = styled.div`
display: flex;
justify-content: center;
margin: auto;

`
const IconLink = styled.a`
  color: #fff;
  padding: 2rem;
  
 
`
const socialData = [
  { id: 1, href: "https://www.linkedin.com/in/myname/", icon: faLinkedin },
  { id: 2, href: "https://www.facebook.com/myname/", icon: faFacebook },
  { id: 3, href: "https://github.com/myname/", icon: faGithub },
]


function App() {



  return (

    <Router>

      <GridContainer>
        {/* <LogoContainer>
          <StyledImg src={logo} alt="Logo" />
        </LogoContainer> */}
        <Navbar />
        <MainContainer>
          <Switch>
            <Route path="/cookwise">
              <Cookwise />
            </Route>
            <Route path="/about">
              <p>About</p>

            </Route>
            <Route path="/contact">
              <p>Contact</p>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <h1></h1>
        </MainContainer>
        <StyledFooter>
          <IconContainer>
            {socialData.map(({ href, id, icon }) => <IconLink href={href} key={id}> <FontAwesomeIcon icon={icon} /></IconLink>)}
          </IconContainer>
          <p>(C) 2023 </p>
        </StyledFooter>
      </GridContainer>
    </Router>
  );
}




export default App;