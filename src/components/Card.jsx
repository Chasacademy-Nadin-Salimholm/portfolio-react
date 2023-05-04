import React from "react";
import styled from 'styled-components';

import reactPic from '../assets/reactPic.jpg';
import compPic from '../assets/compPic.jpg';




export const CardContainer = styled.div`
    display:flex;
    flex-direction:column;
    width: 20rem;
`

export const StyledcompPic = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`;

export const StyledreactPic = styled.img`
width: 40%;
align-items: center;
margin-top: -2em;
border: 5px solid white;
border-radius:50%;
`

function Card() {
    return (
        <CardContainer>
            <StyledreactPic src={reactPic} alt="reactPic" />
            <StyledcompPic src={compPic} alt="compPic" />


        </CardContainer>
    );
}



export default Card;
