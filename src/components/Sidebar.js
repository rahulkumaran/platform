import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';


const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            {/* <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon> */}
            {
              SidebarData.map((item, index) => {
                return <SubMenu item={item} key={index} />;
              })}



          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>);
};

export default Sidebar;

const Nav = styled.div`
  background: #15171c;
  position: sticky;
  top: 0;
  height: 80px;
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

const SidebarNav = styled.nav`
  background: #15171c;
  width:  250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  // left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  left: 0;
  transition: 150ms;
  z-index: 10;

  @media (max-width: 850px) {
    width: 100vw;
  } 
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const SocialAnchor = styled.a`
  margin-right: 20px;
  &:hover {
    opacity: 0.5;
  }
`
const SocialsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    display: none;
  }
`
const Logo = styled.h2`
  color: white;
`