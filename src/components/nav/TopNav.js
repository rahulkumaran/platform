import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';


import twitterLogo from '../../assets/twitter.jpg'
import discordLogo from '../../assets/discord.jpg'

const TopNav = ({ sidebarToggle, showSidebar }) => {

  /*
   TopNav component renders the top nav bar which holds the logo,
   social icons and burger/close icons on smaller devices and 
  */

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to='#'>
            <Logo>LOGO</Logo>
          </NavIcon>

          <SocialsWrapper>
            <SocialAnchor
              href="#"
              target="_blank"
            >
              <img
                src={twitterLogo}
                alt="twitter"
                style={{ height: '40px', width: '40px' }}
              />
            </SocialAnchor>
            <SocialAnchor href="#" target="_blank">
              <img
                src={discordLogo}
                alt="discord"
                style={{ height: '40px', width: '40px' }}
              />
            </SocialAnchor>
          </SocialsWrapper>

          <NavIconCross to='#'>
            {!showSidebar ?
              <FaIcons.FaBars onClick={sidebarToggle} /> :
              <AiIcons.AiOutlineClose onClick={sidebarToggle} />
            }
          </NavIconCross>
        </Nav>
      </IconContext.Provider>
    </>);
};

export default TopNav;

const Nav = styled.div`
  background: #15171c;
  position: sticky;
  top: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavIcon = styled(Link)`
  text-decoration: none;

  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIconCross = styled(NavIcon)`
margin-right: 10px;
@media (min-width: 850px) {
 display: none;
}
`

const SocialAnchor = styled.a`
  margin-right: 20px;
  &:hover {
    opacity: 0.5;
  }
`
const SocialsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 850px) {
    display: none;
  }
`
const Logo = styled.h2`
  color: white;
`