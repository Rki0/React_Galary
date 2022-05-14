import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Products from "../components/Products";
import SlideRightBtn from "./SlideRightBtn";
import SlideLeftBtn from "./SlideLeftBtn";

function CollectionSlider({ furnitureImg, whatFurniture }) {
  // 캐러셀 구현
  // 이 방법은 한 슬라이드에 하나의 이미지만 보여줄 때 적용 가능.
  // const TOTAL_SLIDES = chairImg.length - 1;

  // const [currentSlide, setCurrentSlide] = useState(0);
  // const slideRef = useRef(null);

  // const nextSlide = () => {
  //   if (currentSlide >= TOTAL_SLIDES) {
  //     setCurrentSlide(0);
  //   } else {
  //     setCurrentSlide(currentSlide + 1);
  //   }
  // };

  // const prevSlide = () => {
  //   if (currentSlide === 0) {
  //     setCurrentSlide(TOTAL_SLIDES);
  //   } else {
  //     setCurrentSlide(currentSlide - 1);
  //   }
  // };

  // useEffect(() => {
  //   slideRef.current.style.transition = "all 1s ease-in-out";
  //   slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  // }, [currentSlide]);
  ////////////////////////////////

  // 나는 슬라이드는 2개만 만들고 싶고, 한 슬라이드에 4개의 이미지를 보여줄 것이다.
  // 한 페이지에 들어갈 이미지 개수는 컴포넌트들의 width를 통해 조절함.
  // 0,1번 슬라이드로 총 2개의 슬라이드를 만듦.
  const TOTAL_SLIDES = 1;

  // currentSlide를 0(0페이지 의미)으로 설정.
  // 4묶음(0페이지), 4묶음(1페이지)이므로 3페이지로 갈 때 state는 2 가 됨.
  // 이 때 TOTAL_SLIDES를 오버했기때문에 다시 0으로 초기화.
  // 이게 바로 2페이지짜리 슬라이드를 만드는데 TOTAL_SLIDES를 1로 설정한 이유.
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    slideRef.current.style.transition = "all 1s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <SlideDiv>
      <SubTitle>- {whatFurniture} -</SubTitle>
      <Container>
        <SlideLeftBtn
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
          TOTAL_SLIDES={TOTAL_SLIDES}
        />

        <SliderContainer ref={slideRef}>
          <ProductUl>
            {furnitureImg.map((furniture) => (
              <li key={furniture.id}>
                <Products img={furniture.img} />
              </li>
            ))}
          </ProductUl>
        </SliderContainer>

        <SlideRightBtn
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
          TOTAL_SLIDES={TOTAL_SLIDES}
        />
      </Container>
    </SlideDiv>
  );
}

export default CollectionSlider;

const SlideDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const SubTitle = styled.h2`
  font-family: "DM Serif Text", serif;
  font-style: italic;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1440px;
  padding: 0 30px;
  position: relative;
  overflow: hidden;
`;

const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const ProductUl = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
`;
