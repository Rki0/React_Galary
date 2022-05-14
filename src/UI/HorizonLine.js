import React from "react";
import styled from "styled-components";
import { IoCut } from "react-icons/io5";

const HorizonLine = () => {
  return (
    <HorizonDiv>
      <span>------------------------------------ </span>
      <IoCut />
      <span> ------------------------------------</span>
    </HorizonDiv>
  );
};

export default HorizonLine;

const HorizonDiv = styled.div`
  color: #5f4339;
  display: flex;
  width: 550px;
  justify-content: space-around;
  align-items: center;
`;
