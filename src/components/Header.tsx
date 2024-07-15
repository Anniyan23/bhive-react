// src/components/Header.tsx
import React from 'react';
import styled from 'styled-components';
import logoBhive from '../assets/logo-bh.png';
import callSvg from '../assets/call-icon.png';

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  height: 80px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin:10px 80px;

  img {
    margin-right: 10px;
    height: 60px;
    width: 180px;
  }

  h1 {
    font-size: 24px;
    font-weight: bold;
  }

  span {
    display: block;
    font-size: 16px;
  }
`;

const Contact = styled.div`
  display: flex;
  align-items: center;

  img {
  padding:5px;
    height: 44px;
    width: 44px;
    margin-right: 20px;
    border: 1.5px solid #FFBB00;
    border-radius:5px;
    filter: brightness(0) saturate(100%) invert(75%) sepia(65%) saturate(560%) hue-rotate(355deg) brightness(101%) contrast(101%);
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Logo>
        <img src={logoBhive} alt="Logo" />
      </Logo>
      <Contact>
        <img src={callSvg} alt="Call Icon" />
      </Contact>
    </HeaderWrapper>
  );
};

export default Header;
