import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";

function AboutChange() {
  const [showDetail, setShowDetail] = useState(false);

  const toggleShowDetail = () => {
    setShowDetail((prev) => !prev);
  };

  return (
    <ChangeDiv className={showDetail ? "show" : ""}>
      <ChangeHeader>
        <h2>환불 정책</h2>
        <ShowBtn
          onClick={toggleShowDetail}
          className={showDetail ? "reverse" : ""}
        >
          <IoIosArrowDown />
        </ShowBtn>
      </ChangeHeader>

      <ChangeDesc>
        제품에 대한 환불 정책을 적는 곳.
        <br />
        부디 환불하지 말아주세요...
      </ChangeDesc>
    </ChangeDiv>
  );
}

export default AboutChange;

const ShowBtn = styled.button`
  all: unset;
  cursor: pointer;
  background-color: transparent;
  width: 30px;
  height: 30px;
  transition: transform ease-in-out 500ms;

  &.reverse {
    transform: rotateX(180deg);
  }
`;

const ChangeDiv = styled.div`
  height: 60px;
  overflow: hidden;
  transition: all ease-in-out 500ms;

  &.show {
    height: 130px;
  }
`;

const ChangeHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChangeDesc = styled.p`
  margin: 0 0 10px;
`;
