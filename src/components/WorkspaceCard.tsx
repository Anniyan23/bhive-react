import React, { useContext } from 'react';
import styled from 'styled-components';
import { DataContext } from '../context/DataContext';
import sixth from '../assets/dummy.jpg';

const TypoGraphy = styled.div`
  .cardhead {
    font-size: 36px;
    color: #263238;
    font-weight: bold;
    margin-bottom: 20px;
    margin-left: 10px;
    position: relative;
    top: -50px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 30%;
  margin-bottom: 20px;
  font-family: 'Inter', sans-serif;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #f8f8f8;
  border-bottom: 1px solid #eaeaea;

  h1 {
    color: #263238;
    font-size: 18px;
    margin: 0;
    font-weight: 600;
  }

  div {
    display: flex;
    align-items: center;
    border: 2px solid #eaeaea;
    border-radius: 10%;
    padding: 5px;

    img {
      width: 24px;
      height: 24px;
      position: relative;
      left: 10px;
    }

    p {
      color: #263238;
      margin: 0 0 0 5px;
      font-size: 12px;
      font-weight: 500;
    }
  }
`;

const CardMain = styled.main`
  position: relative;

  img {
    width: 100%;
    height: 200px; /* Ensures all images have the same height */
    object-fit: cover; /* Ensures the image covers the whole area without distortion */
  }

  sub {
    position: absolute;
    top: 10px;
    left: 10px;
    background: rgba(0, 0, 0, 0.6);
    padding: 5px;
    border-radius: 4px;
    color: #ffbb00;
    font-size: 14px;
    display: flex;
    align-items: center;

    img {
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }

    p {
      margin: 0;
      font-size: 12px;
    }
  }
`;

const CardFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: #f8f8f8;
`;

const PriceSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 48%;
  padding: 10px;
  border-radius: 8px;
  font-size: 12px;

  &.perday {
    background: #f9f9f9;
    border: 1px solid #cec6c6;

    .priceText {
      display: flex;
      flex-direction: column;
      width: 70%;

      p:first-child {
        color: #65624c;
        font-weight: 500;
      }
      p:nth-child(2) {
        color: #263238;
        font-weight: 600;

        &:before {
          content: "₹ ";
        }

        &:after {
          content: "/ Day";
          color: #828282;
        }
      }
    }

    .priceSvg {
      display: flex;
      align-items: center;
      width: 30%;

      img {
        width: 10px;
        height: 10px;
        margin-left: 5px;
      }
    }
  }

  &.tendays {
    background: #ffcf4b;
    border: 1px solid #27ae6o;
    position: relative;

    .discountBox {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: -10px;
      left: 50%;
      transform: translateX(-50%);
      background: #263238;
      color: white;
      padding: 5px;
      height: 3vh;
      border-radius: 4px;

      p {
        font-size: 8px;
        text-align: center;
      }
    }

    .priceText {
      display: flex;
      flex-direction: column;
      width: 70%;

      p:first-child {
        color: #65624c;
        font-weight: 500;
      }
      p:nth-child(2) {
        color: #263238;
        font-weight: 600;

        &:before {
          content: "₹ ";
        }

        &:after {
          content: "/ 10 Days";
          color: #65624c;
        }
      }
    }

    .priceSvg {
      display: flex;
      align-items: center;
      width: 30%;

      img {
        width: 10px;
        height: 10px;
        margin-left: 5px;
      }
    }
  }
`;

const WorkspaceCard: React.FC = () => {
  const { data, loading, error } = useContext(DataContext);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Construct the base URL for raw content from GitHub
  const githubBaseUrl = 'https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/';

  // Dummy data to ensure there are 6 cards
  const dummyData = [
    ...data,
    {
      name: "New Workspace",
      images: [sixth],  // Ensure this is an array
      day_pass_price: "500"
    }
  ];

  return (
    <TypoGraphy>
      <p className='cardhead'>Our Space Overview</p>
      <CardWrapper>
        {dummyData.slice(0, 6).map((center, index) => (
          <Card key={index}>
            <CardHeader>
              <h1>{center.name}</h1>
              <div>
                <img src="https://img.icons8.com/sf-regular-filled/48/route.png" alt="route" />
                <p>6 Kms</p>
              </div>
            </CardHeader>
            <CardMain>
              <img
                src={index === 5 ? center.images[0] : `${githubBaseUrl}${center.images[0]}`}
                alt="Workspace"
              />
              <sub>
                <img src="https://img.icons8.com/ios-glyphs/30/coworking.png" alt="coworking" />
                <p>Workspace</p>
              </sub>
            </CardMain>
            <CardFooter>
              <PriceSection className="perday">
                <div className="priceText">
                  <p>Day Pass</p>
                  <p>{center.day_pass_price}</p>
                </div>
                <div className="priceSvg">
                  <img src="https://img.icons8.com/ios/12/forward--v1.png" alt="forward" />
                  <img src="https://img.icons8.com/ios/12/forward--v1.png" alt="forward" />
                  <img src="https://img.icons8.com/ios/12/forward--v1.png" alt="forward" />
                </div>
              </PriceSection>
              <PriceSection className="tendays">
                <div className="discountBox">
                  <p>20% Discount</p>
                </div>
                <div className="priceText">
                  <p>Bulk Pass</p>
                  <p>2400</p>
                </div>
                <div className="priceSvg">
                  <img src="https://img.icons8.com/ios/12/forward--v1.png" alt="forward" />
                  <img src="https://img.icons8.com/ios/12/forward--v1.png" alt="forward" />
                  <img src="https://img.icons8.com/ios/12/forward--v1.png" alt="forward" />
                </div>
              </PriceSection>
            </CardFooter>
          </Card>
        ))}
      </CardWrapper>
    </TypoGraphy>
  );
};

export default WorkspaceCard;
