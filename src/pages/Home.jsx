import React, { useState, } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import portfolioPic from '../assets/Portfolio.png';
import Iphonex2 from '../assets/Iphonex2.png';
import korai from '../assets/korai.png';
import Ipad from '../assets/Ipad.png';



const HomeContainer = styled.div`
            border: 1px solid #F8F8F9;
            border-radius: 5px;
            width: 100vw;
            
            background-color: #F8F8F9;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
         
            align-items: center;
            
            /* position: absolute; */
            /* margin-top: -200px; */
`;


const Textbox = styled.div`
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            padding-bottom: 5em;
            font-size: 22px;
            /* position: absolute; */
            /* margin-top: -200px; */


                span:first-child {
                    color: red;
                    font-size: 2em;
                    
                }

                span {
                    font-weight: 800;
                }
            
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px; /* Adjust the gap as per your preference */
  font-size: 18px;
  text-align: start;
`;
const TextContent = styled.div`
  word-wrap: break-word;
  display: flex;
  flex-direction: column;
  margin-top :auto;
   margin: 100px;
  justify-content:space-evenly;
`;
const TextContenth1 = styled.div`
font-size: 8em;
font-family:montserrat,sans-serif;
color: #CCCCCC;
font-weight: bolder;

`;
const OuterWrapper = styled.div`
  display: flex;
  gap: 20px; /* Adjust the gap as per your preference */
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
  justify-content: center;
`;


const GreyBox1 = styled.div`
    background-color: #F8F8F9;
    padding:20px;
    display: flex;
    flex-direction: column;
    align-items: center;
border: 2px solid #F8F8F9;
margin-top: 80px;
   
   
`;


const Header = styled.div`
display: flex;
justify-content: center;
        background-color: #F8F8F9;
        width: 100%;
`

const StyledImage = styled.img`
width: auto;
height: 350px;

`;


function Home() {

    const handleImageClick = () => {

        console.log('Image clicked!');

    };

    return (
        <HomeContainer>
            <Header>
                <Textbox>
                    <span>Hello</span>
                    <span>I'm UX/UI designer</span>
                    <span>React developer.</span>
                </Textbox>
                <img src={portfolioPic} alt="Portfolio " width="340" />
            </Header>

            <OuterWrapper>
                <InnerWrapper>
                    <TextContent id="case-studies"> <TextContenth1>
                        <span>01</span> </TextContenth1>
                        <span>The Task was to create a smart app that allows </span>
                        <span>users to set desired temperature, function settings</span>
                        <span>set a desired time, recipe program, and notifications.</span>



                    </TextContent>
                    <TextContent>
                        <TextContenth1>
                            <span>02</span> </TextContenth1>
                        <span>The assignment was to create a brand style guide  </span>
                        <span>that contains typography, pattern, color palette, </span>
                        <span>logo, imagery to a fictitious company.</span>

                    </TextContent>
                    <TextContent><TextContenth1>
                        <span>03</span> </TextContenth1>
                        <span>The case was to redesign the</span>
                        <span>Amazon website using </span>
                        <span>Scrum- method.</span>

                    </TextContent>
                </InnerWrapper>

                <InnerWrapper>
                    <GreyBox1>
                        <Link to="/cookwise" onClick={handleImageClick}>
                            <StyledImage img src={Iphonex2} alt="Your Image" />

                        </Link>
                    </GreyBox1>

                    <GreyBox1>
                        <a href="https://6fb81698-7915-4226-abaa-4903c7d2e1fa.filesusr.com/ugd/0f2a81_cdc3b10a909b49e38dbfacdbf9ffe3de.pdf" target="_blank" rel="noopener noreferrer">
                            <StyledImage img src={korai} alt="korai " />
                        </a>
                    </GreyBox1>
                    <GreyBox1>
                        <a href="https://6fb81698-7915-4226-abaa-4903c7d2e1fa.filesusr.com/ugd/0f2a81_86281013bb67463882c5f51dd7c03732.pdf" target="_blank" rel="noopener noreferrer">
                            <StyledImage img src={Ipad} alt="Ipad" />
                        </a>
                    </GreyBox1>
                </InnerWrapper>
            </OuterWrapper>
        </HomeContainer>

    );
}


export default Home;