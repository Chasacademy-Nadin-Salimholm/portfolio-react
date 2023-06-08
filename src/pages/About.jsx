import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;



`;

const StyledParagraph = styled.p`
  font-size: 16px;
  margin-top: 20px;
  text-align: left;
  margin-left: 40px;
`;

function About() {
    return (
        <Container>
            <StyledParagraph>
                Hi, my name is Nadin and I am a junior UX/UI designer with front-end skills. Based in Stockholm, Sweden.
                I draw immense inspiration from delving into the intricacies of human behavior, observing the patterns and habits that drive our actions.
                It's this deep understanding of how people interact with their surroundings that fuels my creativity and motivates me to create products and
                user solutions that are truly forward-thinking and innovative.
                I have a passion for UX/UI design and front-end development and I am always eager to learn more about user behavior and research. Additionally,
                I am strongly committed to accessibility and believe that every user deserves a fantastic user experience.
            </StyledParagraph>
            <StyledParagraph>
                One of my favorite parts of working in UX and front-end is that I get to be involved in projects from start to finish.
                As an organized person with excellent prioritization skills, I ensure that all details are taken care of and that every aspect of a project receives the attention it deserves.
                When I am not working, I am a happy person who loves spending time with family and friends. I am also passionate about cooking and love experimenting with new pasta recipes in my free time.
                With my positive attitude and dedication to my craft, I am confident that I would be an asset to any team.
            </StyledParagraph>
        </Container>


    );
}

export default About;