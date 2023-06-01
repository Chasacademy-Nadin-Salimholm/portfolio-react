import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  width: auto;
  height: 350px;
  border-radius: 40px;
  
`;

const StyledParagraph = styled.p`
  font-size: 16px;
  margin-top: 20px;
  
`;

function Cookwise() {
    return (
        <div>
            <StyledImage src="/src/assets/OvenImage.png" alt="Your Image" />
            <StyledParagraph>
                We were tasked with creating a smart app for smart ovens and a complete design system, from idea phase to full-scale design. We worked in a group and stayed within the framework to understand how the app would contribute to a simplified everyday life.
                The assignment was to create a smart app that allows users to set desired temperature, function settings, set a desired time, recipe program, and notifications. I was involved in this project from the idea phase to full-scale design. We conducted interviews, analyzed surveys, and performed user testing. Together, we created wireframes and a complete prototype.
                This project was a real team effort. We divided the project within the group where we all conducted structured interviews, analyzed various surveys, and performed user testing continuously. We also worked together as a group to create wireframes and completed the prototype in full.
            </StyledParagraph>

            <StyledParagraph>
                In the first step of the design process, it is important to begin by identifying the target audience - that is, the people who will use the product or service being created. It is necessary to understand who you are developing for, in order to then develop in the right way.
                After identifying the target audience, it is necessary to create a deeper understanding and empathy for their needs and challenges. This helps to create a strong engagement and focus on the target audience, which is important for creating a product or service that truly meets their needs.

            </StyledParagraph>
        </div>
    );
}

export default Cookwise;