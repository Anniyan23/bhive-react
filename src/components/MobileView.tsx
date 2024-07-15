import React from 'react';
import backgroundImage from '../assets/hero-bg.jpg';
import mainLogo from '../assets/mobile-content.avif';
import mainImage from '../assets/BHIVE-Square-Logo-removebg-preview.png';
import subLogo from '../assets/logo-bh.png';
import googlePlayBtn from '../assets/gpb.png';
import appStoreBtn from '../assets/asb.png';
import styled from 'styled-components';

const MobileViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  padding: 20px 0;
  margin: 100px 20px;
  position: relative;
  top: 70px;

  .head {
    max-width: 50%;
    position: relative;
    top: -15%;
    left: 5%;
    font-weight: bold;
    color: #65624c;
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    margin: 20px;
    height: auto;

    .head {
      font-size: 1.5rem;
      position: static;
      text-align: center;
      margin-bottom: 20px;
    }
  }
`;

const MobileViewImage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding-left: 20px;
  position: relative;
  top: 1%;
  height: 100%;
  width: 45%;
  margin-left: 3%;
  margin-bottom: 0px;

  img {
    width: 100%;
    padding-top: 50px;
  }

  .mainMob {
    border: 4px solid #263238;
    border-radius: 5%;
    height: 90vh;
    z-index: 1;
    background: url(${backgroundImage}) no-repeat center center;
    background-size: cover;
    width: 25vw;
  }

  .smallMob {
    border: 4px solid #263238;
    height: 80vh;
    width: 25vw;
    border-radius: 5%;
    position: relative;
    left: -5%;
    background-color: #263238;

    .bottomHead {
      color: white;
      position: relative;
      top: 70%;
      left: 25%;
    }
  }

  sub {
    position: absolute;
    height: 50vh;
    width: 20vw;
    border-radius: 5%;
    background-color: white;

    .mainHead {
      display: flex;
      justify-content: space-between;

      .headerText {
        margin-left: 25px;
        margin-top: 5px;
        font-weight: bold;
      }

      .headerSvg {
        display: flex;
        gap: 5px;

        img {
          height: 10px;
          width: 10px;
        }
      }
    }

    .logo {
      margin-left: 70px;
      margin-top: -60px;

      img {
        height: 70%;
        width: 70%;
      }
    }

    .imgMain {
      margin-left: 50px;
      margin-top: -50px;

      img {
        width: 90%;
        height: 90%;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: flex;
    align-items: center;
   
   
    padding-left: 0;
    width: 100%;
    height: 6vh;

    .mainMob,
    .smallMob {
   position:relative;
   top:300px;
   
      width: 70%;
      height: 40vh;
      margin-bottom: 20px;
    }

    .mainMob {
      height: 50vh;
    }

    .smallMob {
      .bottomHead {
        transform: translateX(-5%);
      }
    }

    sub {
      width: auto;
      height: auto;

      .mainHead {
        .headerText {
          margin-left: 20px;
        }
        .headerSvg {
          justify-content: flex-end;
        }
      }

      .logo,
      .imgMain {
        margin: 0;
        display: flex;
        justify-content: center;

        img {
          height: auto;
          width: 50%;
        }
      }
    }
  }
`;

const Paragraph = styled.div`
  background-color: #f0e5d8;
  height: 50vh;
  padding: 20px;
  border-radius: 5px;
  margin: 20px 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  z-index: -1;
  position: relative;
  bottom: 50%;

  p {
    color: #263238;
    font-size: 16px;
    font-weight: 600;
    margin: 0;
    text-align: left;
    position: relative;
    top: 30%;
    left: 20%;
  }

  .appstore {
    display: flex;
    justify-content: flex-start;
    margin-top: 10px;
    position: relative;
    left: 13%;
    top: 30px;
    gap: 10px;

    img {
      width: 150px;
      height: auto;
    }
  }

  @media (max-width: 768px) {
    height: 70vh;
    width: 100%;
    padding: 0;
    margin: 0;
    justify-content: center;
    align-items: center;

    p {
      
      display: none;
    }

    .appstore {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      justify-content: center;

      img {
      position:relative;
      bottom:-80%;
        width: 90%;
        height: 20%;
      }
    }
  }
`;

const MobileView: React.FC = () => {
  return (
    <MobileViewWrapper>
      <p className='head'>Download our app now</p>
      <MobileViewImage>
        <main className="mainMob">
          <img src={mainImage} alt="main-image" className="main-image" />
        </main>
        <header className="smallMob">
          <sub>
            <header className='mainHead'>
              <p className='headerText'>9:41</p>
              <main className='headerSvg'>
                <img width="10" height="10" src="https://img.icons8.com/ios-filled/50/high-connection.png" alt="high-connection" />
                <img width="10" height="10" src="https://img.icons8.com/material-rounded/24/wifi--v1.png" alt="wifi--v1" />
                <img width="10" height="10" src="https://img.icons8.com/sf-regular/48/full-battery.png" alt="full-battery" />
              </main>
            </header>
            <main className="logo">
              <img src={subLogo} alt="" />
            </main>
            <main className="imgMain">
              <img src={mainLogo} alt="" />
            </main>
          </sub>
          <section className='bottomHead'>
            <img color='white' width="50" height="50" src="https://img.icons8.com/ios-glyphs/30/ellipsis.png" alt="ellipsis" />
            <p>Let's get started</p>
          </section>
        </header>
      </MobileViewImage>
      <Paragraph>
        <p>
          Boost your productivity with the BHIVE Workspace app.
          <br />
          Elevate your workspace, collaborate efficiently, and unlock <br />exclusive perks.
        </p>
        <div className="appstore">
          <img src={googlePlayBtn} alt="Google Play Button" />
          <img src={appStoreBtn} alt="App Store Button" />
        </div>
      </Paragraph>
    </MobileViewWrapper>
  );
};

export default MobileView;
