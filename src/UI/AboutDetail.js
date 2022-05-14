import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";

// 컴포넌트 안에서 자기 이름과 똑같은 컴포넌트를 불러오면 브라우저에서 HUNG 오류가 뜸
// HUNG 오류 뜨면 컴포넌트 내에 자기 자신을 불러오지는 않았나 살펴보자...
function AboutDetail() {
  const [showDetail, setShowDetail] = useState(false);

  const toggleShowDetail = () => {
    setShowDetail((prev) => !prev);
  };

  return (
    <DetailDiv className={showDetail ? "show" : ""}>
      <div>
        <DetailHeader>
          <h2>상세 정보</h2>
          <ShowBtn
            onClick={toggleShowDetail}
            className={showDetail ? "reverse" : ""}
          >
            <IoIosArrowDown />
          </ShowBtn>
        </DetailHeader>

        <DetailDesc>
          제품에 대한 상세 정보를 적는 곳.
          <br />
          재질,크기, 세탁 방법 등등...
        </DetailDesc>
      </div>
    </DetailDiv>
  );
}

export default AboutDetail;

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

const DetailDiv = styled.div`
  border-bottom: 1px solid black;
  height: 60px;
  overflow: hidden;
  transition: all ease-in-out 500ms;

  &.show {
    height: 130px;
  }
`;

const DetailHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DetailDesc = styled.p`
  margin: 0 0 10px;
`;
