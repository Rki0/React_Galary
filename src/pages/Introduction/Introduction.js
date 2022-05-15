import introductionVideo from "./introduction.mp4";
import styled, { keyframes } from "styled-components";
import { GiScrollUnfurled } from "react-icons/gi";
import { useEffect, useRef } from "react";

function Introduction() {
  // 애니메이션 적용으로 인해 움직이는 요소로 스크롤을 이동시켜보자!
  const anchorRef = useRef(null);

  useEffect(() => {
    // try 1.
    // offsetTop을 이용해 요소가 맨 위에서 얼만큼 떨어졌는지 확인하고
    // 그 값을 scrollTo에 대입해서 스크롤을 이동시킴.
    // 원하는 위치까지 도달하지 못함.
    // const destination = document.querySelector(".scrollToHere").offsetTop;
    // window.scrollTo({ top: destination, behavior: "smooth" });

    // try 2.
    // scrollTo에 똑같은 값을 주고, 애니메이션의 시작과 끝에서 각각 실행시켜봤다.
    // 그 결과, 같은 값임에도 애니메이션 시작시 실행된 scrollTo는 250까지 가지 않았고
    // 애니메이션 종료시 실행된 scrollTo는 250까지 갔다.
    // 구글링을 열심히 해본 결과, 이는 렌더링 속도의 차이 때문이라고 한다. 사실 정확한 답변을 찾기가 힘들다.

    // 개인적으로는 애니메이션 시작과 동시에 scrollTo가 실행되서, 애니메이션 종료 위치가 아닌 시작 위치로 이동하는 것이라고 생각한다.
    // 그래서 원하는 위치보다 더 위에서 스크롤이 멈추는 것인듯.
    // 아니다!! 애니메이션에서 top 변화를 지웠는데도 같은 현상이 일어난다.

    // 나는 애니메이션 시작시 250으로 옮기고 싶은데..어떻게 해야할까?
    // addEventListener로는 원하는 동작이 안된다...
    // const title = document.querySelector(".scrollToHere");

    // title.addEventListener("animationstart", (e) => {
    //   e.target.scrollIntoView({ behavior: "smooth" });
    //   // window.scrollTo({ top: 150, behavior: "smooth" });
    // });

    // title.addEventListener("animationend", (e) => {
    //   e.target.scrollIntoView({ behavior: "smooth" });
    //   // window.scrollTo({ top: 250, behavior: "smooth" });
    // });

    // try 3.
    // scrollIntoView() 사용하기.
    // useRef로 원하는 요소에 ref를 주고 그 요소를 보여주게 만듦.
    // 마찬가지로, 원하는 위치까지 도달하지 못했음.
    // anchorRef.current.scrollIntoView({ behavior: "smooth" });

    // try 4.
    // setInterval로 설정한 시간마다 스크롤 이동 함수 실행하기.
    // setInterval을 100으로 잡으니 엄청 끊기면서 작동하지만, 원하는 위치까지 도달했다.
    // 이걸로 보아 애니메이션 요소의 렌더링 속도 때문에 스크롤 이동이 잘 안되는 것이 맞는 것 같다.
    // 이 방법은 UX가 너무 안 좋아서 사용하면 안될 것 같다.
    // setInterval(() => {
    //   anchorRef.current.scrollIntoView({ behavior: "smooth" });
    // }, 500);

    // try 5.
    // setTimeout으로 설정한 시간 후 스크롤 이동 함수 실행하기.
    // 성공!!!!!!!!!!!
    // 스크롤 이동 함수와 애니메이션 요소의 렌더링 시간 차이가 문제였다고 확정했기에
    // 100ms의 텀을 두고 스크롤 이동 함수를 실행했다.
    // 100ms의 시간동안 애니메이션 요소는 렌더링이 됐을 것이라고 생각된다.
    // cascading 특성으로 인해서 useEffect가 먼저 실행됐기 때문에 위 방법들이 원하는대로 동작하지 않은 것으로 판정!
    // 100ms도 바로 실행되는 것처럼 매끄러운데, 더 짧게 만들고 싶으면 40ms까지는 줄일 수 있다.
    // 그 아래로 가면 위에서 발생한 문제와 같은 문제 발생.
    // 이는 개발자 도구 network를 보면 알 수 있음.
    // bundle.js의 content download가 시작되는 시간부터 response(요청에 대한 서버 응답이 돌아온 것)가 시작된다고 보면 된다.
    // 따라서, 이 시간 전에 스크롤 함수를 실행시키면 동작이 잘 안되는 것임.
    setTimeout(() => {
      // 두 방법 모두 잘 동작함.
      // anchorRef.current.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({ top: 240, behavior: "smooth" });
    }, 100);
  }, []);

  return (
    <IntroductionDiv>
      <BackgroundVideo>
        <video autoPlay loop muted>
          <source src={introductionVideo} type="video/mp4" />
        </video>
      </BackgroundVideo>

      <Title className="scrollToHere" ref={anchorRef}>
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
  height: 100%;
  overflow: hidden;
  margin: 0;
  position: relative;
`;

const AppearTitle = keyframes`
  0% {
    top: 230px;
    left: 20px;
    opacity: 0;
  }
  100% {
    top: 250px;
    left: 40px;
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
  margin-top: 0;
  top: 250px;
  left: 40px;
  opacity: 1;
  animation: ${AppearTitle} 1500ms ease-in-out 0ms;
`;

const AppearTextDiv = keyframes`
0% {
  top: 380px;
  left: 52px;
  opacity: 0;
}
100% {
  top: 400px;
  left: 72px;
  opacity: 1;
}
`;

const IntroTextDiv = styled.div`
  position: absolute;
  width: 600px;
  // % 단위로 표현하게 되면 쇼핑 카트 호출 시 화면 크기에 변동이 생기기 때문에 페이지가 깨짐.
  // screen.width, screen.height으로 값에 %를 곱해서 px 단위로 사용.
  // screen은 기기마다 전부 다르기 때문에 내 컴퓨터가 아닌 곳에서 사용하면 다르게 보일 수도 있다는 점 유의!
  // top: 45%;
  // left: 5%;
  top: 400px;
  left: 72px;
  border: 10px double #8d6e63;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0 20px;
  animation: ${AppearTextDiv} 2000ms ease-in-out 0ms;
`;

const IntroText = styled.p`
  color: #4b2c20;
  font-size: 38px;
  // web-kit 기반 브라우저에서만 작동하는 글자 테두리 CSS
  -webkit-text-stroke: 2px #a1887f;
`;

const TextDeco = styled.span`
  color: #4caf50;
  -webkit-text-stroke: 2px #cfff95;
`;
