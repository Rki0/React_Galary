import styled from "styled-components";
import { keyframes } from "styled-components";

function Home() {
  return (
    <HomeBackground>
      <HomeTitleDiv>
        <h1>aimée Furnitures</h1>
        <Hr />
        <SecondTitle>
          Design <br />
          <TitleHighlight>Your Only One</TitleHighlight>
        </SecondTitle>
      </HomeTitleDiv>
    </HomeBackground>
  );
}

export default Home;

const HomeBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(./assets/main_furnitures.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #7f703d;
  text-align: center;
  font-family: "DM Serif Text", serif;
`;

const DisplayTitle = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const HomeTitleDiv = styled.div`
  display: block;
  box-sizing: border-box;
  width: 450px;
  height: 280px;
  padding: 0 40px;
  background-color: white;
  border: 5px double #7f703d;
  animation: ${DisplayTitle} 1000ms ease-in-out 0ms;
`;

const Hr = styled.hr`
  border: none;
  border-top: 2px solid #7f703d;
  overflow: visible;

  // after의 배경색은 hr이 들어갈 배경색과 일치시켜야 hr이 끊긴 효과를 낼 수 있음.
  &:after {
    content: "For";
    display: inline-block;
    position: relative;
    background: white;
    font-size: 20px;
    padding: 0 10px;
    top: -15px;
  }
`;

const SecondTitle = styled.h1`
  margin: 0;
`;

const TitleHighlight = styled.span`
  display: inline-block;
  margin-top: 10px;
  font-size: 40px;
  font-style: italic;
`;
