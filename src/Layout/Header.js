import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import LoginToggle from "../UI/LoginBtn";
import CartModal from "../components/CartModal";
import { useSelector } from "react-redux";

function Header() {
  const [isCartHide, setIsCartHide] = useState(true);
  const [isHide, setIsHide] = useState(true);

  // 카트에 담은 상품 개수 확인용.
  const list = useSelector((state) => state.carts.list);

  return (
    <div>
      <MenuBar>
        <MenuDiv>
          <StyledNavLink activeclassname="active" to="/">
            메인
          </StyledNavLink>
          <StyledNavLink activeclassname="active" to="/collection">
            컬렉션
          </StyledNavLink>
          <StyledNavLink activeclassname="active" to="/introduction">
            소개
          </StyledNavLink>
          <StyledNavLink activeclassname="active" to="/loginpage">
            로그인
          </StyledNavLink>

          <CartBtn onClick={() => setIsCartHide((prev) => !prev)}>
            <FontAwesomeIcon icon={faCartShopping} size="2x" />
            <CartNum>{list.length}</CartNum>
          </CartBtn>
          <CartModal isCartHide={isCartHide} setIsCartHide={setIsCartHide} />

          {/* onMouseEnter는 LoginBtn에만 반응하기 때문에 svg 아이콘에 닿을 때는 실행이 안됨. 반면 onMouseOver는 아이콘에서도 실행되서 드문드문 LoginToggle이 사라져버릴 때가 있음. */}
          <LoginBtn onMouseEnter={() => setIsHide((prev) => !prev)}>
            <FontAwesomeIcon icon={faUser} size="2x" />
          </LoginBtn>
          <LoginToggle isHide={isHide} setIsHide={setIsHide} />
        </MenuDiv>
      </MenuBar>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Header;

const MenuBar = styled.header`
  display: flex;
  width: 100%;
  text-align: center;
  align-items: center;
  padding: 20px 0px 20px;
  background-color: #ffffff;
  color: #7f703d;
  font-size: 15px;
  z-index: 5000;
`;

const MenuDiv = styled.div`
  width: 100%;
  height: 20px;
  position: relative;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  margin: 0 30px;

  &:hover {
    color: black;
  }

  &.active {
    color: black;
    font-weight: bold;
  }
`;

const CartBtn = styled.button`
  display: flex;
  padding: 0;
  border: none;
  background-color: transparent;
  color: inherit;
  position: absolute;
  top: 0;
  right: 150px;
  cursor: pointer;

  &:hover {
    color: #795548;
  }
`;

const CartNum = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  font-size: 20px;
  background-color: #7f703d;
  color: #ffffff;
  border-radius: 50%;
`;

const LoginBtn = styled.button`
  border: none;
  padding: 0;
  background-color: transparent;
  color: inherit;
  position: absolute;
  right: 100px;
  cursor: pointer;

  &:hover {
    color: #795548;
  }
`;
