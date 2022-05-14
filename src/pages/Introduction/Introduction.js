import introductionVideo from "./introduction.mp4";
import styled, { keyframes } from "styled-components";
import { GiScrollUnfurled } from "react-icons/gi";

function Introduction() {
  return (
    <IntroductionDiv>
      <BackgroundVideo>
        <video autoPlay loop muted>
          <source src={introductionVideo} type="video/mp4" />
        </video>
      </BackgroundVideo>

      <Title>
        <GiScrollUnfurled />
        Welcome to aimée Furnitures
      </Title>

      <IntroTextDiv>
        <IntroText>
          Break away from the fixed form.
          <br /> And create your own space.
          <br />
          Whatever your request,
          <br /> we will make it for you.
          <br />
          Our products are harmless <br />
          to the human body <br /> by carefully selecting
          <br />
          <TextDeco> eco-friendly materials</TextDeco>.
        </IntroText>
      </IntroTextDiv>
    </IntroductionDiv>
  );
}

export default Introduction;

const IntroductionDiv = styled.div`
  font-family: "DM Serif Text", serif;
`;

const BackgroundVideo = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 0;
  position: relative;
`;

const AppearTitle = keyframes`
  0% {
    top: 50px;
    left: 43.199999999999996px;
    opacity: 0;
  }
  100% {
    top: 100px;
    left: 86.39999999999999px;
    opacity: 1;
  }
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  font-style: italic;
  font-size: 50px;
  color: #8d6e63;
  position: absolute;
  top: 100px;
  left: 86.39999999999999px;
  opacity: 1;
  animation: ${AppearTitle} 1500ms ease-in-out 0ms;
`;

const AppearTextDiv = keyframes`
0% {
  // top: 35%;
  // left: 3%;
  top: 315px;
  left: 43.199999999999996px;
  opacity: 0;
}
100% {
  top: 405px;
  left: 72px;
  opacity: 1;
}
`;

const IntroTextDiv = styled.div`
  position: absolute;
  width: 650px;
  // % 단위로 표현하게 되면 쇼핑 카트 호출 시 화면 크기에 변동이 생기기 때문에 페이지가 깨짐.
  // screen.width, screen.height으로 값에 %를 곱해서 px 단위로 사용.
  // screen은 기기마다 전부 다르기 때문에 내 컴퓨터가 아닌 곳에서 사용하면 다르게 보일 수도 있다는 점 유의!
  // top: 45%;
  // left: 5%;
  top: 405px;
  left: 72px;
  border: 10px double #8d6e63;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0 20px;
  animation: ${AppearTextDiv} 2000ms ease-in-out 0ms;
`;

const IntroText = styled.p`
  color: #4b2c20;
  font-size: 45px;
  // web-kit 기반 브라우저에서만 작동하는 글자 테두리 CSS
  -webkit-text-stroke: 2px #a1887f;
`;

const TextDeco = styled.span`
  color: #4caf50;
  -webkit-text-stroke: 2px #cfff95;
`;
