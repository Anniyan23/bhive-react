// src/components/Options.tsx
import React from 'react';
import styled from 'styled-components';
import { FaDumbbell, FaCoffee, FaCouch, FaMoneyBillWave, FaCalendarCheck, FaBasketballBall, FaWifi } from 'react-icons/fa';
import { MdEvent } from 'react-icons/md';

const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 10%;
  max-width: 100%;

  h2 {
    font-size: 36px;
    font-weight: 600;
    color: #263238;
    margin: 50px 10px;
  }

  .options-content {
    display: flex;
    margin: 30px 0px;
    flex-wrap: wrap;
    gap: 0;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      background-color: #ddd;
      width: 100%;
      height: 1px;
      top: 50%;
      left: 0;
    }
  }

  @media (max-width: 768px) {
    .options-content {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;

      &::before {
        display: none;
      }
    }

    h2 {
      font-size: 28px;
    }
  }
`;

const OptionItemWrapper = styled.div`
  width: 25%;
  position: relative;

  &:not(:first-child)::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 1px;
    background-color: #ddd;
  }

  &:nth-child(4n)::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 1px;
    background-color: #ddd;
  }

  @media (max-width: 768px) {
    width: 48%;
    margin-bottom: 10px;

    &:not(:first-child)::before {
      display: none;
    }

    &:nth-child(4n)::after {
      display: none;
    }
  }
`;

const OptionItem = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;

    .secondary-text {
      opacity: 1;
      transform: translateY(5px);
    }
  }

  svg {
    margin-right: 10px;
    color: #ffbb00;
    transition: color 0.3s;
  }

  .text-content {
    transition: transform 0.3s, opacity 0.3s;
    position: relative;
    z-index: 2;
    text-align: center;

    span {
      display: block;
      font-size: 18px;
    }

    .secondary-text {
      font-size: 12px;
      color: grey;
      opacity: 0;
      transition: opacity 0.3s, transform 0.3s;
    }
  }

  .hover-content {
    opacity: 0;
    transition: opacity 0.3s;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 1;

    span {
      display: block;
      font-size: 16px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    border: 1px solid #ddd;
    background-color: white;

    svg {
      margin-right: 0;
      margin-bottom: 10px;
    }

    .text-content span {
      font-size: 16px;
    }

    .text-content .secondary-text {
      font-size: 14px;
    }
  }
`;

interface OptionType {
  icon: React.ReactNode;
  text: string;
  secondaryText: string;
}

const Options: React.FC = () => {
  const options: OptionType[] = [
    { icon: <MdEvent />, text: "Community Events", secondaryText: "One liner details about the feature" },
    { icon: <FaDumbbell />, text: "Gym Facilities", secondaryText: "Represents fitness and exercise facilities." },
    { icon: <FaWifi />, text: "High-Speed Wifi", secondaryText: "Learn more about us" },
    { icon: <FaCoffee />, text: "Cafe & Tea Bar", secondaryText: "Go to home" },
    { icon: <FaMoneyBillWave />, text: "Affordable", secondaryText: "Manage settings" },
    { icon: <FaCouch />, text: "Comfort Lounges", secondaryText: "Learn more about us" },
    { icon: <FaCalendarCheck />, text: "Quick Booking", secondaryText: "Manage settings" },
    { icon: <FaBasketballBall />, text: "Sports Area", secondaryText: "Learn more about us" }
  ];

  return (
    <OptionsWrapper>
      <h2>Available Options</h2>
      <div className="options-content">
        {options.map((option, index) => (
          <OptionItemWrapper key={index}>
            <OptionItem>
              {option.icon}
              <div style={{ position: 'relative', flex: 1 }}>
                <div className="text-content">
                  <span>{option.text}</span>
                  <span className="secondary-text">{option.secondaryText}</span>
                </div>
              </div>
            </OptionItem>
          </OptionItemWrapper>
        ))}
      </div>
    </OptionsWrapper>
  );
};

export default Options;
