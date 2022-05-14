import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const ProductModal = (props) => {
  const { isOpen, close, img } = props;

  return (
    <ModalDiv className={isOpen ? "openModal modal" : "modal"}>
      {isOpen ? (
        <ModalSection>
          <ModalImg src={process.env.PUBLIC_URL + img} alt="furniture" />
          <ModalMain>
            {props.children}
            <CloseBtn onClick={close}>&times;</CloseBtn>
          </ModalMain>
        </ModalSection>
      ) : null}
    </ModalDiv>
  );
};

export default ProductModal;

const ModalBgShow = keyframes`
  from{
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ModalDiv = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: auto;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1011;

  &.openModal {
    display: flex;
    align-items: center;
    animation: ${ModalBgShow} 0.3s;
  }
`;

const ModalShow = keyframes`
  from{
    opacity: 0;
    margin-top: -50px;
  }
  to{
    opacity: 1;
    margin-top: 0;
  }
`;

const ModalSection = styled.section`
  // width: 90%;
  width: 70%;
  height: 800px;
  // max-width: 450px;
  margin: 0 auto;
  border-radius: 0.3rem;
  background-color: #fff;
  animation: ${ModalShow} 0.3s;
  overflow: hidden;
`;

const CloseBtn = styled.button`
  outline: none;
  cursor: pointer;
  border: 0;
  position: absolute;
  top: 15px;
  right: 15px;
  width: 30px;
  font-size: 21px;
  font-weight: 700;
  text-align: center;
  color: #999;
  background-color: transparent;
`;

const ModalMain = styled.main`
  padding: 16px;
  border-bottom: 1px solid #dee2e6;
  border-top: 1px solid #dee2e6;
`;

const ModalImg = styled.img`
  display: block;
  width: 300px;
  height: auto;
`;
