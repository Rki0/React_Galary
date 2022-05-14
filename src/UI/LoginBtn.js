import styled from "styled-components";
import { Link } from "react-router-dom";

function LoginToggle({ isHide, setIsHide }) {
  return (
    <LoginMenu className={isHide ? "" : "show"}>
      <LoginUl>
        {/* Link가 아닌 a 태그로 작성한 이유는 새로고침으로 LoginMenu를 닫기 위해서이다. LoginMenu가 li 클릭시 이동과 동시에 다시 사라지게 할 수 있다면 Link가 랜더링 효율 훨씬 좋음. */}
        {/* 카트 기능을 구현하다보니 a 태그의 새로고침으로 인해 카트 리셋이 발생해서, Link를 사용해야할 필요성을 느낌. */}
        {/* 클릭 시 사라지는 것은 setState를 이전 컴포넌트에서 가져와서 li 클릭 시 false가 되도록 만들어 줌. */}
        <LoginLi onClick={() => setIsHide((prev) => !prev)}>
          <StyledLink to="/loginpage">로그인</StyledLink>
        </LoginLi>
        <LoginLi onClick={() => setIsHide((prev) => !prev)}>
          <StyledLink to="/joinpage">회원가입</StyledLink>
        </LoginLi>
        <LoginLi onClick={() => setIsHide((prev) => !prev)}>
          <StyledLink to="/loginpage">마이페이지</StyledLink>
        </LoginLi>
      </LoginUl>
    </LoginMenu>
  );
}

export default LoginToggle;

const LoginMenu = styled.div`
  display: none;

  &.show {
    display: block;
    width: 100px;
    position: absolute;
    right: 167.5px;
    z-index: 3000;
  }
`;

const LoginUl = styled.ul`
  list-style: none;
  padding: 0;
  text-align: center;
  color: white;

  &:after {
    content: "";
    border-top: 0px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #a98274;
    border-left: 10px solid transparent;
    position: absolute;
    top: 10px;
    left: 45%;
  }
`;

const StyledLink = styled(Link)`
  all: unset;
  cursor: pointer;
`;

// 맨 위, 맨 아래 li에만 스타일을 적용하는 방법으로 메뉴의 border-radius를 꾸몄는데, ul에서 바로 만드는 것도 방법 중 하나일 것 같다.
const LoginLi = styled.li`
  width: 100%;
  padding: 5px;
  background-color: #a98274;
  border-bottom: 1px solid #4b2c20;

  &:first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  &:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
