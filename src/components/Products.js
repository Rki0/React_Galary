import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// 렌더링할 각각의 컴포넌트 내에서 setState 처리해야
// 한번에 버튼이 올라오는 일 없이, 원하는 이미지에만 버튼 생성 가능
const Products = ({ img }) => {
  const [hide, setHide] = useState(true);

  // Enter, Leave는 자식요소를 고려하지 않기 때문에 ProductDiv에서만 작동
  // Over, Out은 자식요소를 고려하기 때문에(이벤트 버블링) ProductDiv, FurnitureImg 등에서도 작동
  // 둘 다 사용해본 결과 Enter, Leave 쪽이 매끄러워서 사용
  return (
    <ProductDiv
      onMouseEnter={() => setHide(false)}
      onMouseLeave={() => setHide(true)}
      // onMouseOver={() => setHide(false)}
      // onMouseOut={() => setHide(true)}
    >
      <FurnitureImg src={process.env.PUBLIC_URL + img} alt="furniture" />
      {/* 모달창을 사용하고 싶다면 버튼을 쓰는게 더 맞다. 여기서는 Link를 쓰기로 했으므로 사용 안함. */}
      {/* <ViewDetailBtn className={hide ? "" : "showBtn"}>
        View Detail
      </ViewDetailBtn> */}

      {/* Link 사용 시 props를 전달하고 싶을 때 state 속성에 객체로 넣어서 전달 */}
      {/* 여기서 주의할 점! 만약 다음에 이 방법을 사용하고 잘 작동하는지 시험할 때는 반드시 이 페이지에서 이동하면서 작동을 확인할 것 */}
      {/* state는 Link를 타고 이동할 때 전달되기 때문에 전달 받을 페이지에서 계속 새로고침해봤자 안 나옴 */}
      <StyledLink
        to="/detailpage"
        state={{ image: img }}
        className={hide ? "" : "showBtn"}
      >
        View Detail
      </StyledLink>
    </ProductDiv>
  );
};

// UI/SlideButton.js 관련 이슈
// 얘가 이미지 한가운데로 관통하는 보이지 않는 width를 가지고 있어서
// 중간 부분에 마우스 가져갈 시 버튼이 다시 감춰짐!!!
// 저 파일에서 css를 수정해야할듯..!
// 수정 완료! 두 개의 버튼을 묶어서 만들지 않고, 별개의 컴포넌트로 만들어서 사용함.

export default Products;

const ProductDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
`;

const FurnitureImg = styled.img`
  width: 250px;
  height: auto;
  margin: 0 30px;
`;

// const ViewDetailBtn = styled.button`
//   all: unset;
//   position: absolute;
//   bottom: -50px;
//   width: 300px;
//   height: 50px;
//   text-align: center;
//   font-weight: bold;
//   background-color: rgba(255, 255, 255, 0.6);
//   cursor: pointer;
//   transition: bottom 300ms ease-in-out 0ms;

//   &.showBtn {
//     display: block;
//     bottom: 0px;
//   }
// `;

// display:none으로 가린 것이 아니라 overflow:hidden; 으로 가린 것이기 때문에
// .showBtn이 추가되어도 display:block; 사용 안함.
const StyledLink = styled(Link)`
  all: unset;
  position: absolute;
  bottom: -50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 50px;
  text-align: center;
  margin: auto 0;
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  transition: bottom 300ms ease-in-out 0ms;

  &.showBtn {
    bottom: 0px;
  }
`;
