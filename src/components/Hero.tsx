// src/components/Hero.tsx
import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/hero-bg.jpg';
import heroImage1 from '../assets/hero-main.png';  // Main hero image
import heroImage2 from '../assets/laptop-icon.png'; // Laptop icon image
import heroImage3 from '../assets/strelitzia plant-cuate.svg'; // Strelitzia plant image

const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90vh;
  padding: 0 20px;
  background: url(${backgroundImage}) no-repeat center center;
  background-size: cover;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    padding: 20px;
  }
`;

const Heading = styled.h1`
  font-size: 58px;
  padding: 20px;
  color: #263238;
  max-width: 70%;
  z-index: 1;

  span {
    color: #FFCF4B;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    max-width: 100%;
    padding: 10px 0;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 0, 0.1);
  width: 30%;
  height: 90vh;
  position: relative;

  img {
    position: absolute;
    object-fit: cover;
  }

  .hero-main {
    position: relative;
    top: 10px;
    height: 400px;
    width: auto;
    z-index: 1;

    @media (max-width: 768px) {
      height: 400px;
     
    }
  }

  .laptop-icon {
    height: 55px;
    width: auto;
    top: 33.2%;
    left: 14%;
    z-index: 2;
    animation: bounce 2s infinite;

    @media (max-width: 768px) {
      height: 35px;
      top: 48%;
      left: 15%;
    }
  }

  .strelitzia-plant {
    height: 105px;
    width: auto;
    bottom: 25%;
    left: 10%;
    z-index: 2;
    animation: bend 3s infinite alternate;

    @media (max-width: 768px) {
      height: 75px;
      bottom: 7%;
      left: 9%;
    }
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes bend {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-3deg);
    }
    100% {
      transform: rotate(3deg);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroWrapper>
      <Heading>
        Host your meeting with world-class amenities starting at <span>₹199/-!</span>
      </Heading>
      <ImageContainer>
        <img src={heroImage1} alt="hero-main" className="hero-main" />
        <img src={heroImage2} alt="laptop-icon" className="laptop-icon" />
        <img src={heroImage3} alt="strelizia plant" className="strelitzia-plant" />
      </ImageContainer>
      
    </HeroWrapper>
  );
};

export default Hero;
