import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";

function SlideButton({ currentSlide, setCurrentSlide, TOTAL_SLIDES }) {
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <ButtonDiv>
      <Button onClick={prevSlide}>
        <BsArrowLeft size="30" />
      </Button>
    </ButtonDiv>
  );
}

export default SlideButton;

const ButtonDiv = styled.div`
  display: flex;
  width: 50px;
  justify-content: space-between;
  z-index: 100;
`;

const Button = styled.button`
  all: unset;
  color: rgba(0, 0, 0, 0.3);

  &:hover {
    transition: all 0.3s ease-in-out;
    color: #fff;
    cursor: pointer;
  }
`;
