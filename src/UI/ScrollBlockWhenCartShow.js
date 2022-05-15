import { useState, useEffect } from "react";

const ScrollBlockWhenCartShow = (isCartHide) => {
  // 스크롤 잠금 여부
  const [scrollBlock, setScrollBlock] = useState(false);

  useEffect(() => {
    // 카트를 보여주면 스크롤 잠금 여부를 true로 설정.
    if (!isCartHide) {
      setScrollBlock(true);
    } else {
      setScrollBlock(false);
    }

    // 스크롤 잠금 여부가 true라면 body 태그에 스크롤 잠금을 건다.
    // 따라서 화면이 안 움직이게 됨.
    // cssText는 인라인 함수로 style을 여러개 지정할 때 사용
    if (scrollBlock) {
      document.body.style.cssText = `
      position: fixed; 
      // window.scrollY는 스크롤의 현 위치를 표시함.
      // scrollY는 최신 언어이므로, 구 버전의 브라우저에서도 동작하고자한다면 pageYOffset을 사용하자.
      // -window.scrollY가 도대체 무슨 의미냐?
      // 현재 스크롤의 위치가 55만큼 내려가있다고 가정해보자. 이러면 window.scrollY는 55가 출력된다.
      // 여기서 -55px을 top 속성에 부여하면 화면 가장 위로 스크롤이 이동하게 된다.
      top: -${window.scrollY}px;
      // body 태그에 스타일을 적용했으므로 width가 100%가 아니라면 화면이 줄어듦.
      width: 100%;`;
    }

    // useEffect의 Clean-up 함수.
    // effect 함수를 해지하는 것으로, 메모리 누수가 발생하지 않도록 해준다.
    // useEffect의 무한 반복을 막아주기도 한다.
    return () => {
      document.body.style.cssText = "";
    };

    // isCartHide와 scrollBlock을 감시하여 작동
    // 작성된 코드 상 첫 렌더링 때 useEffect가 실행되는데, 이로 인해 다른 페이지에서 스크롤이 막히는 것을 방지하기 위해
    // 조건문으로 스크롤 잠금을 제어했다.
    // 첫 렌더링을 막는 방법으로 커스텀 훅을 사용하는게 있는데, 아무래도 공부가 더 필요한 부분인 것 같다.
  }, [isCartHide, scrollBlock]);
};

export default ScrollBlockWhenCartShow;
