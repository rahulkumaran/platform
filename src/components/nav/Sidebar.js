import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';


/* 
  Sidebar component renders a fixed sidebar on medium and large devices
  Sidebar component renders a toggleable sidebar which cover the entire screem on small and extra small edvices
*/
const Sidebar = ({ showSidebar, closeSidebar }) => {
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <SidebarNav sidebar={showSidebar}>
          <SidebarWrap>
            {
              SidebarData.map((item, index) => {
                return <SubMenu item={item} key={index} closeSidebar={closeSidebar} />;
              })}

          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>);
};

export default Sidebar;

const SidebarNav = styled.nav`
  background: #15171c;
  opacity: 0.9;
  width:  250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  left: 0;
  transition: 150ms;
  z-index: 10;

  @media (max-width: 992px) {
    width: 100vw;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  } 
`;

const SidebarWrap = styled.div`
  width: 100%;
`;