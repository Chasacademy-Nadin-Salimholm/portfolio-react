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

const StyledA = styled.a`
    color: #000000;
    background-color:#fbf7f7;
    //border-radius: 8px;
    
`;
// local = false betyder React Router Link till undersida
// local = true betyder "lokal länk", dvs inte react router, som kan gå till
// 1. anchor tag (dvs scroll ner till viss punkt på sidan)
// 2. länk till extern sida, t.ex Figma, Github, Linkedin, Pdf you name it
const links = [
    {
        id: 1,
        to: "/",
        text: "Home",
        local: false
    },
    {
        id: 2,
        href: "/#case-studies",
        text: "Case Studies",
        local: true
    },
    {
        id: 3,
        to: "/about",
        text: "About",
        local: false
    },
    {
        id: 4,
        to: "/contact",
        text: "Contact",
        local: false
    },

]

//[{link:"/", text:"home"},{link:"/contact"},]


const Navbar = () => {

    return (
        <StyledNav>
            {links.map(({ to, id, text, href, local }) => local ? <StyledA href={href}>{text}</StyledA> : <StyledLink to={to} key={id}>{text}</StyledLink>)}
        </StyledNav>

    );
}

export default Navbar;

