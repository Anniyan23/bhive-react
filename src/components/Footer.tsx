// src/components/Footer.tsx
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  text-align: center;
  color:white;  
  padding: 10px 0;
  background-color: #263238;
  border-top: 1px solid lightgrey;
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <p>© Copyright 2024. Bhive Private limited</p>
    </FooterWrapper>
  );
};

export default Footer;
