import React from 'react';
import styled from 'styled-components';
import oven from '../assets/OvenImage.png';
import Define from '../assets/Define.png';
import Sketch from '../assets/Sketch.png';
import Hifi from '../assets/Hifi.png';
import Lofi from '../assets/Lofi.png';

const CookwiseContainer = styled.div`
  grid-area: main;
  
 
  
`;

const StyledDefineImage = styled.img`
  width: 800px;
  margin: 50px;
`;
const StyledSketchImage = styled.img`
  width: 500px;
  margin: 10px;
  border-radius: 20px;
`;
const StyledHifiLofiContainer = styled.div`
  display: flex;
  margin: 40px;
`;

const StyledHifiImage = styled.img`
  flex: 0;
`;

const StyledLofiImage = styled.img`
  flex: 0;
  margin-left: 20px;
`;



const StyledImage = styled.img`
  width: auto;
  height: 350px;
  border-radius: 40px;
`;

const StyledParagraph = styled.p`
  font-size: 16px;
  margin-top: 20px;
`;

const GreyBox = styled.div`
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 100%;
  margin-top: 40px;
`;
const Quote = styled.span`
  font-size: 16px;
  color: white;
  text-align: left;
  justify-content: space-between;
  text-align: center;
`;

function Cookwise() {
  return (
    <CookwiseContainer>
      <StyledImage src={oven} alt="Your Image" />
      <StyledParagraph>
        We were tasked with creating a smart app for smart ovens and a complete design system, from idea phase to full-scale design. We worked in a group and stayed within the framework to understand how the app would contribute to a simplified everyday life.
        The assignment was to create a smart app that allows users to set desired temperature, function settings, set a desired time, recipe program, and notifications. I was involved in this project from the idea phase to full-scale design. We conducted interviews, analyzed surveys, and performed user testing. Together, we created wireframes and a complete prototype.
        This project was a real team effort. We divided the project within the group where we all conducted structured interviews, analyzed various surveys, and performed user testing continuously. We also worked together as a group to create wireframes and completed the prototype in full.
      </StyledParagraph>
      <StyledParagraph>
        <h2> Design process</h2>
        In the first step of the design process, it is important to begin by identifying the target audience - that is, the people who will use the product or service being created. It is necessary to understand who you are developing for, in order to then develop in the right way.
        After identifying the target audience, it is necessary to create a deeper understanding and empathy for their needs and challenges. This helps to create a strong engagement and focus on the target audience, which is important for creating a product or service that truly meets their needs.
      </StyledParagraph>
      <StyledParagraph>

        <h2> Interview</h2>
        We used a quantitative method with 25 interview questions for 8 acquaintances, which gave us insight into what users want in a smart oven app. We focused on accessibility, colors, features, and control of other devices. The results showed that safety, easy navigation, user-friendliness, and preset functions were important for integration with the app.
        During the creation of our Cookwise app, we chose to focus on several questions that were central to understanding users' needs and desires. We prioritized questions related to the app's accessibility, such as which features would be easy to find and how many steps were needed to perform different tasks.
        We also asked about color schemes associated with smart oven apps and which features users would most like to see in the app. Finally, we also wanted to know if users use their mobile device to control other smart devices.
        By using a quantitative method in the form of interview questions and by analyzing the responses from the 8 people we interviewed, we were able to determine that safety, easy navigation in the app, user-friendliness, and preset functions were the areas that needed to be in focus for the app to be easy to integrate and use. By focusing on these aspects, we were able to create an app that satisfied users' needs and requirements for a simple, safe, and user-friendly solution for smart ovens.
      </StyledParagraph>
      <GreyBox>

        <Quote>"I would like to have some sort of code to enter the first page,  for security purposes and child safety" </Quote>
        <Quote>"I have knowledge about smart applications as I use smart apps for things like music and lighting" </Quote>
        <Quote>"This would simplify my daily life as I can preheat the oven well in advance before I come home" </Quote>

      </GreyBox>
      <span> <h2> Define & analyze</h2></span>
      < StyledDefineImage src={Define} alt="Define Image" />
      <StyledParagraph> We used an affinity diagram to analyze our brainstorming and divide our thoughts into three categories.
        This enabled us to focus on the most important challenges, ideas,
        and uncertainties in order to create a simple and easy-to-navigate app.
      </StyledParagraph>


      <StyledParagraph>
        <span> <h2> Wireframe & Skiss</h2></span>
        We sketched on paper together how each frame would look to have a foundation to work from.
        We brainstormed how wireframes would look like and where to place functions, buttons, recipes, navbar, etc. on the iPhone 14 Pro

      </StyledParagraph>
      < StyledSketchImage src={Sketch} alt="Sketch Image" />
      <span> <h2> High-fidelity & Low-fidelity  wireframes</h2></span>

      <StyledHifiLofiContainer>
        <StyledHifiImage src={Hifi} alt="Hifi" />
        <StyledLofiImage src={Lofi} alt="Lofi" />
      </StyledHifiLofiContainer>
      <StyledParagraph>
        <span> <h2> User Testing</h2></span>
        We conducted A/B testing with acquaintances to choose the best version before finalizing our application. We were able to make adjustments based on user navigation.
        After completing the design and functionalities, we asked the user to test the application again to ensure that everything was ready.

      </StyledParagraph>





    </CookwiseContainer>


  );
}

export default Cookwise;