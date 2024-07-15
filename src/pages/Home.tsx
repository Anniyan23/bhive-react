// src/pages/Home.tsx
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Options from '../components/Options';
import WorkspaceCard from '../components/WorkspaceCard';
import MobileView from '../components/MobileView';
import Footer from '../components/Footer';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  padding: 0 0px;
  .cards{
  margin:50px;
  }
`;

const Home: React.FC = () => {
  return (
    <HomeWrapper>
      <Header />
      <Hero />
      <Options />
      <div className='cards'>
        <WorkspaceCard />
      </div>
      <MobileView />
      <Footer />
    </HomeWrapper>
  );
};

export default Home;
