import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const ProductModal = (props) => {
  const { open, close, header } = props;

  return (
    <ModalDiv className={open ? "openModal modal" : "modal"}>
      {open ? (
        <ModalSection>
          <ModalHeader>
            {header}
            <HeaderBtn onClick={close}>&times;</HeaderBtn>
          </ModalHeader>
          <ModalMain>{props.children}</ModalMain>
          <ModalFooter>
            <FooterBtn onClick={close}>close</FooterBtn>
          </ModalFooter>
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
  background-color: rgba(0, 0, 0, 0.6);

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

const ModalHeader = styled.header`
  position: relative;
  padding: 16px 64px 16px 16px;
  background-color: #f1f1f1;
  font-weight: 700;
`;

const HeaderBtn = styled.button`
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

const ModalFooter = styled.footer`
  padding: 12px 16px;
  text-align: right;
`;

const FooterBtn = styled.button`
  outline: none;
  cursor: pointer;
  border: 0;
  padding: 6px 12px;
  color: #fff;
  background-color: #6c757d;
  border-radius: 5px;
  font-size: 13px;
`;
