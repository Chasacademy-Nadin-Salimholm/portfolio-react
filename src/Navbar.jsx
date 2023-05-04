import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    grid-area:top;
    background-color:#fbf7f7;
    justify-content: flex-end;
    

 

`;


const StyledLink = styled(Link)`
    color: #000000;
    background-color:#fbf7f7;
    //border-radius: 8px;
    
`;

const links = [
    {
        id: 1,
        to: "/",
        text: "Home"
    },
    {
        id: 2,
        to: "/contact",
        text: "Contact"
    },
    {
        id: 3,
        to: "/about",
        text: "About"
    },
    {
        id: 4,
        to: "/portfolio",
        text: "Portfolio"
    },

]

//[{link:"/", text:"home"},{link:"/contact"},]


const Navbar = () => {

    return (
        <StyledNav>
            {links.map(({ to, id, text }) => <StyledLink to={to} key={id}>{text}</StyledLink>)}



        </StyledNav>

    );
}

export default Navbar;

