import React, { useState } from 'react';
import styled from 'styled-components';


import Card from '../components/card/'

const HomeContainer = styled.div`
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 100vw;
            height: 20em;
            background-color: #F8F8F9;
            display: flex;
            flex-direction: row;
            justify-content: center;
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

function Home() {
    return (
        <HomeContainer>
            {/* <div style={{
            border: '1px solid #ccc',
            borderRadius: '5px',
            width: '100vw',
            backgroundColor: '#F8F8F9',
            position: 'absolute',
            marginTop: "-200px",
        }}> */}
            <Textbox>
                <span>Hello</span>
                <span>UX/UI designer</span>
                <span>React developer</span>
            </Textbox>
            <img src="/src/assets/Portfolio.png" alt="Portfolio " width="200" />
            {/* </div > */}
        </HomeContainer>
    );
}

export default Home;