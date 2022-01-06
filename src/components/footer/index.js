import React from 'react'
import styled from 'styled-components'

const footer = () => {
 return (
  <Footer>
   <P>
    &copy; NFT Launcher 2022

   </P>
   <P>
    Socials
   </P>
  </Footer>
 )
}

export default footer

const Footer = styled.div`
  color: white;
  background: #15171c;
  opacity: 0.9;
  position: sticky;
  top: 0;
  margin-top: 50px;
  margin-left: 250px;
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;

  @media (max-width: 992px) {
   margin-left: 0; 
 } 
`;

const P = styled.p`
 margin-right: 20px;
`
