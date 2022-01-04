import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
// import metaMaskLogo from './assets/metamask.svg'

import { useDispatch, useSelector } from 'react-redux'
import { connect, disconnect } from '../../redux/blockchain/blockchainActions'
import { fetchData } from '../../redux/data/dataActions'

import twitterLogo from '../../assets/twitter.jpg'
import discordLogo from '../../assets/discord.jpg'


const WalletCard = () => {
  // const [userBalance, setUserBalance] = useState(null)
  const [connButtonText, setConnButtonText] = useState('Connect')
  const dispatch = useDispatch()
  const blockchain = useSelector(state => state.blockchain)
  // const data = useSelector(state => state.data)
  const account = blockchain.account
  useEffect(
    () => {
      if (blockchain.account !== '' && blockchain.smartContract !== null) {
        dispatch(fetchData(blockchain.account))

        if (account) {
          setConnButtonText(
            account.substring(0, 4) + '___' + account.substring(38, 42)
          )
        } else {
          setConnButtonText('Connect')
          dispatch(disconnect())
        }
      }
    },
    [blockchain.smartContract, blockchain.account, dispatch, account]
  )

  //setConnButtonText(data.name?.substring(0, 4) + "___" + data.name?.substring(38, 42));

  const handleConnectClick = e => {
    e.preventDefault()
    if (blockchain.account === '' || blockchain.smartContract === null) {
      dispatch(connect())
    } else {
      if (account) {
        alert(
          `You are already connected with wallet ${account}. If you wish to change it please use metamask.`
        )
      } else {
        dispatch(connect())
      }
    }
  }

  return (
    <ConnectButton
      isConnected={
        account &&
        (blockchain.account === '' || blockchain.smartContract !== null)
      }
      onClick={handleConnectClick}
    >
      {/* <img
        src={metaMaskLogo}
        alt="metamask"
        style={{ height: '50px', width: '30px' }}
      /> */}
      {connButtonText}
    </ConnectButton>
  )
}

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
            <Logo>XYZ LOGO</Logo>
          </NavIcon>

          <RightPlacement>
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
            <WalletCard />

            {/* only for small devices */}
            <NavIconCross to='#'>
              {!showSidebar ?
                <FaIcons.FaBars onClick={sidebarToggle} /> :
                <AiIcons.AiOutlineClose onClick={sidebarToggle} />
              }
            </NavIconCross>
          </RightPlacement>


        </Nav>
      </IconContext.Provider>
    </>);
};

export default TopNav;

const Nav = styled.div`
  background: #15171c;
  opacity: 0.9;
  position: sticky;
  top: 0;
  height: 90px;
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
@media (min-width: 992px) {
 display: none;
}
`

const SocialAnchor = styled.a`
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

const ConnectButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  border: ${props =>
    props.isConnected ? 'solid 1px #86dc3d;' : 'solid 1px red;'};
  height: 40px;
  width: 145px;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: ${props => (!props.isConnected ? '20px;' : '15px;')};
  margin: 8px;

  &:hover {
    opacity: 0.65;
  }
`

const RightPlacement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-weight: 1000;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
`