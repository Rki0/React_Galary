# ๐ ๊ฐค๋ฌ๋ฆฌ - ์ผํ๋ชฐ ๋ง๋ค๊ธฐ

์ด๋ฒ ํ๋ก์ ํธ๋ ์ฌ์ค ์ผํ๋ชฐ์ ๋ง๋ค์ด๋ณผ๊นํ๋ค๊ฐ, ๊ฐค๋ฌ๋ฆฌ๋ฅผ ๋ง๋ค๊ฒ ๋์๋๋ฐ, ๊ทธ๋ฌ๋ค๊ฐ ๋ค์ ์ผํ๋ชฐ์ ํ ํต ๋ถ์ด๋ฒ๋ฆฐ ํน์ดํ ๊ณผ์ ์ ๊ฑฐ์ณค๋ค.  
Redux๋ฅผ ํ์ฉํด์ ์๋ ์กฐ์ ์ ํ๋ ๊ธฐ๋ฅ๊ณผ ์ฅ๋ฐ๊ตฌ๋ ๊ธฐ๋ฅ์ ๊ตฌํํ ๊ฒ์ด ํฌ์ธํธ์ด๋ค.

## ๐ ํ์ผ ๊ตฌ์กฐ

<img width="165" alt="แแณแแณแแตแซแแฃแบ 2022-06-11 แแฉแแฎ 3 40 31" src="https://user-images.githubusercontent.com/86224851/173176673-02595137-2dbb-4b63-a63d-404bfe181c49.png">

ํฐ ํ์ ์ ์ฌ์ง๊ณผ ๊ฐ๋ค.  
ํ์ผ์ ๊ตฌ๋ถํด์ ์ฌ์ฉํ๋ ๋ฒ์ ์ฐ์ตํด๋ณด๊ณ ์, ๊ธฐ๋ฅ๋ณ๋ก ํ์ผ์ ๋๋ด๋๋ฐ ํ์คํ๊ฒ ๊ฐ์ด ์กํ์ง๋ ์๋๋ค.  
์ธ๋ถ ํ์ผ์ ๋ค์๊ณผ ๊ฐ๋ค.

<img width="169" alt="แแณแแณแแตแซแแฃแบ 2022-06-11 แแฉแแฎ 4 01 19" src="https://user-images.githubusercontent.com/86224851/173177337-9d4b3c37-45c9-461f-96b5-48622e10d28d.png">

<img width="162" alt="แแณแแณแแตแซแแฃแบ 2022-06-11 แแฉแแฎ 4 01 50" src="https://user-images.githubusercontent.com/86224851/173177359-202ee2a5-83f4-4302-8ca9-d81310ec3811.png">

UI ํ์ผ ๊ฐ์ ๊ฒฝ์ฐ์๋ ์ชผ๊ฐค ์ ์๋ ๋จ์๊น์ง ์ชผ๊ฐ๋ค๋ณด๋ ์์ด ๋ง์์ก๋ค.

## ๐ src/index.js

react-redux์ react-router-dom์ ์ฌ์ฉํ๊ธฐ ๋๋ฌธ์ ํ๋ฒ ์ดํด๋ณผ ํ์๊ฐ ์๋ค.

```js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/index";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
```

< BrowserRouter >๋ก < App />์ ๊ฐ์ธ์ Route ๊ธฐ๋ฅ์ ์ฌ์ฉํ  ์ ์๊ฒ ๋ง๋ค์๋ค. basename์ ํ๋ก์ ํธ๋ฅผ Github์ ์๋ก๋ํ๋ ๊ณผ์ ์ ๋ฌธ์ ๊ฐ ์๊ฒจ์ ์ถ๊ฐํ๋ค. ํ๋ก์ ํธ์ ๊ธฐ๋ณธ ๊ฒฝ๋ก๋ฅผ ์ค์ ํด์ฃผ๋ ๊ธฐ๋ฅ์ด๋ค!  
< Provider >๋ Redux๋ฅผ ํ์ฉํ๊ธฐ ์ํ ๊ฒ์ผ๋ก ํ๋ก์ ํธ์์ store์ ์ ์ฅ๋ ๊ฒ๋ค์ ๊บผ๋ด์ ์ฌ์ฉํ๊ณ ์ < App />์ ๊ฐ์ธ์คฌ๋ค.

## ๐ src/App.js

```js
import { Route, Routes } from "react-router-dom";
import Header from "./Layout/Header";
import Collection from "./pages/Collection";
import DetailPage from "./pages/DetailPage";
import Home from "./pages/Home";
import Introduction from "./pages/Introduction/Introduction";
import LoginPage from "./pages/LoginPage";
import JoinPage from "./pages/JoinPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/detailpage" element={<DetailPage />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/joinpage" element={<JoinPage />} />
      </Route>
    </Routes>
  );
}

export default App;
```

์์ ๋ก๋ ๋ง์ด ๋์๋ค๋ ๊ฒ๋ง๊ฐ์ ๊ตฌ์กฐ์ด๋ค.  
< Route >๋ฅผ ์ฌ์ฉํ๊ธฐ ์ํด์๋ < Routes >๋ก ๊ฐ์ธ์ค์ผํ๋ค.  
"์ด๋ ํ์ด์ง"์์๋  ๋ณด์ด๊ณ ์ํ๋ < Header />๋ฅผ Route์ ๊ธฐ๋ณธ path์ ์ค์ ํ๊ณ , ๊ทธ ๋ด๋ถ์ "์ด๋ ํ์ด์ง"๋ค์ ๋ฃ์ด์คฌ๋ค.  
์ด๋ฅผ "์ค์ฒฉ ๋ผ์ฐํ"์ด๋ผ๊ณ  ํ๋ค.  
path="/"๋ก ๊ธฐ๋ณธ๊ฒฝ๋ก๋ฅผ ์ค์ ํ๊ณ , index๋ฅผ ์ฌ์ฉํด์ ๊ธฐ๋ณธ๊ฒฝ๋ก ๊ฐ์ ์ฌ์ฉํ๋ค.  
๋ฐ๋ผ์, index๊ฐ ์๋ < Home /> ์ปดํฌ๋ํธ๊ฐ ํํ์ด์ง๋ก ์ฌ์ฉ๋๋ค๋ ๊ฒ์ ์ ์ ์๋ค.  
์ด์  ์ปดํฌ๋ํธ๋ค์ ํ๋์ฉ ์ดํด๋ณด์.

## ๐ src/pages/Home.js

```js
import styled from "styled-components";
import { keyframes } from "styled-components";

// ์๋ต

const DisplayTitle = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const HomeTitleDiv = styled.div`
  display: block;
  box-sizing: border-box;
  width: 450px;
  height: 280px;
  padding: 0 40px;
  background-color: white;
  border: 5px double #7f703d;
  animation: ${DisplayTitle} 1000ms ease-in-out 0ms;
`;
```

Home.js์์๋ ํ๋ฉด์ด ๋๋๋ง ๋์ ๋ ํ์ดํ์ด ์ค์ค๋ฅต ๋ณด์ฌ์ง๊ฒ๋๋ ํจ๊ณผ๋ฅผ ๋ฃ๊ณ ์ ํ๋ค. ๋ฐ๋ฐํจ์ ์์ ๊ณ ์ ํ๊ธฐ ๋๋ฌธ์..  
styled-components์์ animation ์์ฑ์ ์ฌ์ฉํ๋ ๋ฐฉ๋ฒ์ ์ ์ฝ๋์ ๊ฐ๋ค. keyframes๋ฅผ ๋ฐ๋ก ์์ฑํ๊ณ  ๊ทธ๊ฒ์ ์ฌ์ฉํ๊ณ ์ํ๋ ์ปดํฌ๋ํธ์์ ๋ณ์๋ก ๋ฃ์ด์ฃผ๋ฉด ๋๋ค. import๋ฅผ ๊ผญ ํด์ค์ผํ๋ค๋ ๊ฒ์ ์์ง๋ง์!

## ๐ src/pages/Collection.js

```js
import styled from "styled-components";
import HorizonLine from "../UI/HorizonLine";
import ChairCollection from "../components/ChairCollection";
import DeskCollection from "../components/DeskCollection";
import InteriorCollection from "../components/InteriorCollection";

function Collection() {
  return (
    <CollectionBackground>
      <CollectionDiv>
        <MainTitle>- Collection -</MainTitle>
        <HorizonLine />
        <ChairCollection />
        <HorizonLine />
        <DeskCollection />
        <HorizonLine />
        <InteriorCollection />
      </CollectionDiv>
    </CollectionBackground>
  );
}

export default Collection;
```

Collection.js์์๋ ๋ฑํ ๋ณผ๋งํ ์ฝ๋๊ฐ ์๋ค. ํ์ง๋ง ์ด ํ์ด์ง์ ๋์ด์ค๋ ์ปดํฌ๋ํธ๊ฐ ๊ต์ฅํ ๋ง๋ค. ์ปดํฌ๋ํธ๋ก ์ชผ๊ฐ๊ธฐ๋ฅผ ์ค์ฒํ๊ธฐ ์ํด ๋ถ๋จํ๋ ๋ธ๋ ฅํ๋ค..  
์ฌ๊ธฐ์ ์ ๊น! ChairCollection, DeskCollection, InteriorCollection์ ์ ๋ถ ๋ค๋ฅธ ์ด๋ฏธ์ง๋ฅผ ์บ๋ฌ์ ์ฌ๋ผ์ด๋์ ๋ณด๋ด๊ธฐ ์ํ ์ปดํฌ๋ํธ๋ก, ๊ฐ์ ์ฝ๋๋ฅผ ์ฌ์ฉํ๋ค. ๋ฐ๋ผ์ ํ ๊ฐ์ง๋ง ์ดํด๋ณด๊ธฐ๋ก ํ๋ค.(์ง๊ธ์์ ์๊ฐํด๋ณด๋ ์๋ ์ ๋ค ๋ค๋ฅธ ์ปดํฌ๋ํธ๋ก ๋ง๋ค์ด๋๊ฑฐ์ง??)

## ๐ src/components/ChairCollection.js

```js
import CollectionSlider from "../UI/CollectionSlider";
import { useRef } from "react";

function ChairCollection() {
  // chair ์ด๋ฏธ์ง๋ฅผ ๋ฃ๊ธฐ ์ํ ๋น ๋ฐฐ์ด
  let chairImg = [];

  // ์ด๋ฏธ์ง๋ฅผ ๋ ๋๋งํ  ๋ li์ ์ฌ์ฉํ  key ๊ฐ์ ๋ฏธ๋ฆฌ ์์ฑ
  const nextId = useRef(0);

  // ์ด๋ฆ์ ํต์ผํ chair ์ด๋ฏธ์ง๋ฅผ ๋น ๋ฐฐ์ด์ ์ฝ์
  for (let i = 0; i < 8; i++) {
    chairImg[i] = { img: `/assets/chairs/chair${i}.jpg`, id: nextId.current };

    nextId.current += 1;
  }

  return <CollectionSlider furnitureImg={chairImg} whatFurniture="chairs" />;
}

export default ChairCollection;
```

๋ฐ๋ก ์ฌ์ง ๋ฐ์ดํฐ๋ฅผ ๋ถ๋ฌ์ฌ DB๊ฐ ์๋๊ฒ ์๋๋ฏ๋ก, ๊ฐ ์ฌ์ง ํ์ผ์ ์ด๋ฆ์ ์ต๋ํ ๊ท์น์๊ฒ ํต์ผํด์ ์ฌ์ฉํ๋ค.  
map()์ ํตํด ์ฌ์ง๋ค์ ๋์ดํ  ์๊ฐ์ด์๊ธฐ ๋๋ฌธ์, useRef()๋ฅผ ํตํด ์ฌ์ง๋ง๋ค img์ id๋ฅผ object๋ก ๋ง๋ค์ด์ ๋ฐฐ์ด์ ๋ฃ์ด๋จ๋ค.  
์ด object๋ฅผ < CollectionSlider />์ props๋ก ๋ณด๋ธ๋ค.

## ๐ src/UI/CollectionSlider.js

```js
import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Products from "../components/Products";
import SlideRightBtn from "./SlideRightBtn";
import SlideLeftBtn from "./SlideLeftBtn";

function CollectionSlider({ furnitureImg, whatFurniture }) {
  // ์บ๋ฌ์ ๊ตฌํ
  // ํ ํ์ด์ง์ ๋ค์ด๊ฐ ์ด๋ฏธ์ง ๊ฐ์๋ ์ปดํฌ๋ํธ๋ค์ width๋ฅผ ํตํด ์กฐ์ ํจ.
  // 0,1๋ฒ ์ฌ๋ผ์ด๋๋ก ์ด 2๊ฐ์ ์ฌ๋ผ์ด๋๋ฅผ ๋ง๋ฆ.
  const TOTAL_SLIDES = 1;

  // currentSlide๋ฅผ 0(0ํ์ด์ง ์๋ฏธ)์ผ๋ก ์ค์ .
  // 4๋ฌถ์(0ํ์ด์ง), 4๋ฌถ์(1ํ์ด์ง)์ด๋ฏ๋ก 3ํ์ด์ง๋ก ๊ฐ ๋ state๋ 2 ๊ฐ ๋จ.
  // ์ด ๋ TOTAL_SLIDES๋ฅผ ์ค๋ฒํ๊ธฐ๋๋ฌธ์ ๋ค์ 0์ผ๋ก ์ด๊ธฐํ.
  // ์ด๊ฒ ๋ฐ๋ก 2ํ์ด์ง์ง๋ฆฌ ์ฌ๋ผ์ด๋๋ฅผ ๋ง๋๋๋ฐ TOTAL_SLIDES๋ฅผ 1๋ก ์ค์ ํ ์ด์ .
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
```

์บ๋ฌ์ ์ฌ๋ผ์ด๋๋ก ์ํ์ ๋ณด์ฌ์ฃผ๋ ๊ฒ์ ๊ตฌํํ๋ค.  
slideRef๋ก ์ฌ๋ผ์ด๋๋ฅผ ๊ตฌํํ  ์ปดํฌ๋ํธ๋ฅผ ์ง์ ํ๊ณ , useEffect()๋ฅผ ํตํด์ currentSlide๊ฐ ๋ณํ  ๋๋ง style์ ๋ณํ๋ฅผ ์คฌ๋ค.  
< SlideLeftBtn />, < SliderRightBtn />์ ํตํด currentSlide์ setState๋ฅผ ์คํํ๊ณ , ์ด๋ฅผ translateX์ ๋ฐ์ํ์ฌ ์ผ์ชฝ, ์ค๋ฅธ์ชฝ ์ฌ๋ผ์ด๋๊ฐ ๊ตฌํ๋๋ค.  
map()์ ํตํด props๋ก ๋ฐ์์จ img์ id๋ฅผ ๋ณด์ฌ์ค๋ค.
< SlideLeftBtn />๊ณผ < Products />๋ฅผ ์ดํด๋ณด์.

## ๐ src/UI/SlideLeftBtn.js

```js
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
```

props๋ก ๋ฐ์์จ ๊ฐ์ ์ด์ฉํด์ ์ผ์ชฝ์ผ๋ก ์ฌ๋ผ์ด๋๋ฅผ ์ด๋์ํค๋ ๋ฒํผ์ด๋ค.  
๋ถ๋ชจ ์ปดํฌ๋ํธ์์ currentSlide๊ฐ 0์ผ๋ก ์ค์ ๋์ด์์๋๋ฐ, ๋ฒํผ์ ๋๋ ์ ๋,  
์ด ๊ฐ์ด 0์ด๋ผ๋ฉด TOTAL_SLIDES ๊ฐ(1)๋ก ๋ณํ์์ผ์ ์ผ์ชฝ ์ฌ๋ผ์ด๋๋ฅผ ํ๊ณ ,  
์ด ๊ฐ์ด 1์ด๋ผ๋ฉด ์ค๋ฅธ์ชฝ์ผ๋ก ์ฌ๋ผ์ด๋๋ฅผ ํ๋ ๊ธฐ๋ฅ์ ํ๋ค.(์ผ์ชฝ ๋ฐฉํฅ ๋ฒํผ์ด์ง๋ง)
์ด๊ฒ ๊ฐ๋ฅํ ๊ฒ์ ๋ถ๋ชจ ์ปดํฌ๋ํธ์์ useEffect() ํตํด currentSlide๋ฅผ ์ง์ผ๋ณด๊ณ  ์๊ธฐ ๋๋ฌธ์ด๋ค.

## ๐ src/components/Products.js

```js
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// ๋ ๋๋งํ  ๊ฐ๊ฐ์ ์ปดํฌ๋ํธ ๋ด์์ setState ์ฒ๋ฆฌํด์ผ
// ํ๋ฒ์ ๋ฒํผ์ด ์ฌ๋ผ์ค๋ ์ผ ์์ด, ์ํ๋ ์ด๋ฏธ์ง์๋ง ๋ฒํผ ์์ฑ ๊ฐ๋ฅ
const Products = ({ img }) => {
  const [hide, setHide] = useState(true);

  return (
    <ProductDiv
      onMouseEnter={() => setHide(false)}
      onMouseLeave={() => setHide(true)}
    >
      <FurnitureImg src={process.env.PUBLIC_URL + img} alt="furniture" />

      {/* Link ์ฌ์ฉ ์ props๋ฅผ ์ ๋ฌํ๊ณ  ์ถ์ ๋ state ์์ฑ์ ๊ฐ์ฒด๋ก ๋ฃ์ด์ ์ ๋ฌ */}
      {/* ์ฌ๊ธฐ์ ์ฃผ์ํ  ์ ! ๋ง์ฝ ๋ค์์ ์ด ๋ฐฉ๋ฒ์ ์ฌ์ฉํ๊ณ  ์ ์๋ํ๋์ง ์ํํ  ๋๋ ๋ฐ๋์ ์ด ํ์ด์ง์์ ์ด๋ํ๋ฉด์ ์๋์ ํ์ธํ  ๊ฒ */}
      {/* state๋ Link๋ฅผ ํ๊ณ  ์ด๋ํ  ๋ ์ ๋ฌ๋๊ธฐ ๋๋ฌธ์ ์ ๋ฌ ๋ฐ์ ํ์ด์ง์์ ๊ณ์ ์๋ก๊ณ ์นจํด๋ดค์ ์ ๋์ด */}
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
```

์ด๋ฒ์๋ ์ ํ ์ฌ์ง์ ๋ง์ฐ์ค๋ฅผ ์ฌ๋ ธ์ ๋์ ๊ฒฝ์ฐ๋ฅผ ๊ตฌํํ ๊ฒ์ด๋ค.  
์จ๊ฒจ์ ธ์๋ Link ํ๊ทธ๊ฐ ์ฌ์ง ํ๋จ์์๋ถํฐ ์ฌ๋ผ์จ๋ค.
์ด๋ฅผ ๊ตฌํํ๊ธฐ ์ํด์ overflow:hidden;์ผ๋ก Link ํ๊ทธ๋ฅผ ์จ๊ฒจ๋๋ค๊ฐ,  
MouseEnter ์ด๋ฒคํธ๊ฐ ๋ฐ์ํ๋ฉด hide๋ฅผ setState๋ก ๋ณ๊ฒฝ์์ผ์ < StyledLink />์ className์ ์ถ๊ฐํ๋ค.  
ํด๋์ค๊ฐ ์ถ๊ฐ๋๋ฉด transition ์์ฑ์ด ํ์ฑํ๋์ด์ ์ ํ๋ ์์ญ ๋ฐ์ ์์ด์ ์๋ณด์๋ Link ํ๊ทธ๊ฐ ๋ณด์ด๋ ์์ญ์ผ๋ก ๋ค์ด์ค๊ฒ ๋๋ค.  
์ด < StyledLink />์ props๋ฅผ ๋๊ฒจ์ ์ํ ์์ธ ํ์ด์ง๋ฅผ ๋ณด์ฌ์ค ๋ ํ์ฉํ๋ค.  
Link ํ๊ทธ๋ฅผ ํตํด ์ด๋ํ๋ฏ๋ก ์ฌ๋๋๋ง์ด ๋์ง ์์ ์กฐ๊ธ ๋ UX๊ฐ ๋งค๋๋ฝ๋ค.  
์์ฐธ! ์ฌ๊ธฐ์ ์ฃผ์ํ  ์ ์ด, ์ด๋ฐ ์์ผ๋ก ์ฌ์ง์ ๋ง์ฐ์ค๋ฅผ ์ฌ๋ฆฌ๋ฉด ๋๊ฐ์ ๋ฒํผ์ด ๋์จ๋ค๊ณ  ์๊ฐํด์ ๊ณตํต์ ์ผ๋ก ๋ฒํผ์ ๋ง๋ค์ด์ฃผ๋ ค๊ณ  Products.js๊ฐ ์๋๋ผ CollectionSlider.js์์ ๊ตฌํ์ ํด๋ฒ๋ฆฌ๋ฉด, ๋ชจ๋  ๋ฒํผ์ด ํ๋ฒ์ ์ฌ๋ผ์ค๋ ์์ฒญ๋ ์ผ์ด ๋ฐ์ํ๋ค.  
ํ๋์ ์ฌ์ง์ ๋ํด์ ํด๋น ์์น์ ๋ฒํผ๋ง ์ฌ๋ผ์ค๊ฒ ํ๋ ค๋ฉด, ๋ฐ๋์ ๊ฐ๋ณ ์ปดํฌ๋ํธ ์์ค๊น์ง ๋ค์ด์์ ๊ตฌํํด์ฃผ์.  
์ฌ๊ธฐ์ ๊ฐ๋ณ ์ปดํฌ๋ํธ๋ผ๋ ๊ฑด CollectionSlider.js์ฒ๋ผ ๋ค๋ฅธ ์ด๋ฏธ์ง๊น์ง ๋ชจ์ฌ์๋ ๋ถ๋ถ์ด ์๋๋ผ, Product.js์ฒ๋ผ ํ๋์ ์ด๋ฏธ์ง๋ง ์กด์ฌํ๋ ๊ฒ์ ์๋ฏธํ๋ค.

## ๐ src/pages/DetailPage.js

```js
import React, { useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import AboutDetail from "../UI/AboutDetail";
import AboutChange from "../UI/AboutChange";
import ColorChoice from "../UI/ColorChoice";
import { useDispatch, useSelector } from "react-redux";
import { addCart, createCartId } from "../Redux/CartManage";

function DetailPage() {
  // Link์์ state๋ก ๋ฐ์์จ props๋ฅผ ์ฌ์ฉํ๋ ๋ฐฉ๋ฒ
  const location = useLocation();
  const { image } = location.state;

  // ์์ ์ ํ์ ์ํ ๋ณ์
  const [whichColor, setWhichColor] = useState("");

  // ์๋ ์ ํ์ ์ํ ๋ณ์
  const [number, setNumber] = useState(1);

  // ๊ธ์ก ํ์๋ฅผ ์ํ ๋ณ์. ์ฌ์ค ์๋ ์ด๋ฏธ์ง, ์์ด๋ ์๋ ํ์ผ์์ ๊ฐ ์ํ์ ๋ํด ๋ฏธ๋ฆฌ ๋ง๋ค์ด๋๊ณ  ๊บผ๋ด ์ฐ๋๊ฒ ๋ ๋ง๋ ๋ฐฉ๋ฒ์ด๋ผ๊ณ  ์๊ฐํจ.
  // components/ChairCollection.js์์ chairImg[] ๋ง๋ค ๋ ๊ฑฐ๊ธฐ์ ๊ฐ๊ฒฉ๋ ๊ฐ์ด ์์๋ก ๋ฃ์ด๋๋๊ฒ ์ํ๋ง๋ค ๋ค๋ฅธ ๊ฐ๊ฒฉ์ ํ์ํ  ๋ ๋ ํจ์จ์ .
  // const [charge, setCharge] = useState(300000);

  // ๋ฐฐ์ด ์ธ๋ฑ์ค ์ฒดํฌ ์ ์ฌ์ฉํ  id. ์ ํ ์ญ์ ํ  ๋ filter์์ ์ธ id.
  // ์ ์ด๋ฏธ์ง ๊ฐ์ฒด์ ์๋ id๋ฅผ ์ ์ฐ๊ณ  ์ด๊ฑธ ์๋ก ๋ง๋๋์ง ์๋ฌธ์ด ๋ค ์ ์๋ค.
  // ์นดํธ์ ๋ค์ด๊ฐ๋ ์ํ์ ๋ญ๊ฐ ๋ ์ง ๋ชจ๋ฅธ๋ค. ๋ด๊ธฐ๋ ์๊ฐ, ๋ช ๋ฒ ์งธ๋ก ๋ด๊ธด ๊ฒ์ธ์ง๊ฐ ์ค์ํ๊ธฐ ๋๋ฌธ์ ์๋ก id๋ฅผ ๋ง๋ค์ด์ฃผ๋๊ฒ ๋ง๋ค.
  // ๋ง์ฝ, ์ด๋ฏธ์ง ๊ฐ์ฒด์ ์๋ id๋ฅผ ์ฌ์ฉํ๋ค๋ฉด ๊ฐ์ ์ํ ์ข๋ฅ๊ฐ ํ๋ฒ์ ๋ค ์ญ์ ๋๋ ๋ถ์์ฌ๊ฐ ์ผ์ด๋  ๊ฒ์ผ๋ก ์์๋๋ค.
  // let productId = useRef(0);

  // ์ถ๊ฐ ๋ฌธ์  ๋ฐ์! useRef๊ฐ DetailPage.js์์ ์ ์ธ๋์๊ธฐ ๋๋ฌธ์ ๋ค๋ฅธ ์ ํ์ ๋ณด๊ธฐ์ํด ํ์ด์ง๋ฅผ ๋๊ฐ๋ค ๋ค์ด์ฌ ๋๋ง๋ค ๋ฆฌ์์ด ๋๋ค.
  // ๊ทธ๋ก ์ธํด์, id๊ฐ ๊ฒน์ณ๋ฒ๋ ค์ ์ค๋ฅ๊ฐ ๋ฐ์ํ๋ค. ์ด๋ป๊ฒ ํด๊ฒฐํด์ผํ ๊น...
  // useEffect๋ฅผ ํ์ฉํด๋ดค์ง๋ง, useEffect ๋ด๋ถ์์๋ useRef๋ฅผ ์ฌ์ฉํ  ์ ์์๊ณ , ์ธ๋ถ์ ๋ณ๋ ํจ์๋ก ๋ง๋  ๊ฒ์ useEffect์ ๋ฃ์ด๋ดค์ง๋ง, ๊ทธ ๋๋ ๋ณ์๊ฐ ํจ์ ๋ด๋ถ์์ ๋๋๋ฒ๋ ค์ ํ์ฉ ํ  ์๊ฐ ์์๋ค.
  // ๋ฆฌ๋์ค ์คํ ์ด์ id๋ฅผ ๋ง๋  ๋ค ๊บผ๋ด ์ฐ๋ ๊ฒ์ด ์ ์ผ ๋์๋ณด์ธ๋ค.
  const productId = useSelector((state) => state.carts.nextId);

  const dispatch = useDispatch();

  return (
    <ParentDiv>
      <Header>
        <StyledLink to="/collection">์ปฌ๋ ์/</StyledLink>
        <span>(์ ํ๋ช)</span>
      </Header>
      <MainDiv>
        <ImgAndDesc>
          <div>
            <FurnitureImg
              src={process.env.PUBLIC_URL + image}
              alt="furniture"
            />
          </div>
          <p>
            ์ ํ์ ๋ํ ํํ์ ์ ๋ ๊ณณ.
            <br />
            ์ ๋ง ๋ฉ์ง๋ค์. ๊ทผ์ฌํฉ๋๋ค.
            <br />
            ์ง๊ธ ๋น์ฅ ๊ตฌ๋งค๋ฅผ ๋๋ฅด์ธ์.
          </p>
        </ImgAndDesc>

        <div>
          <ItemName>์ ํ๋ช</ItemName>
          {/* charge๋ฅผ ๋ฆฌ๋์ค ์คํ ์ด์ ์ ์ฅํ์ผ๋ฏ๋ก ๊บผ๋ด์ฐ๋๊ฒ ๋ง๋ค๊ณ  ์๊ฐ๋์ง๋ง, ,๊ธฐํธ๋ฅผ ์ค๊ฐ์ ๋ฃ์ด์ผํ๋ฏ๋ก ๊ทธ๋ฅ ๋ฌธ์๋ก ๊ธฐ์ํจ. */}
          {/* chairImg[] ๋ง๋ค ๋ ๊ฐ์ด charge ํญ๋ชฉ์ string ํํ๋ก ์ถ๊ฐํด์ ์ด ์๋ฆฌ์ ์ฌ์ฉํ๊ณ , number ํ์์ผ๋ก ์ฌ์ฉํ๋ ค๋ฉด ,๊ธฐํธ๋ฅผ ํ์ฑํด์ ๋ณ์๋ก ์ฝ์ํ๋๊ฒ ์ด์์ ์ด๋ผ๊ณ  ์๊ฐ๋จ. */}
          <Price>โฉ 300,000</Price>

          <ColorTitle>์์{whichColor}</ColorTitle>
          <ColorDiv>
            <ColorChoice
              value=": ํฐ์"
              colorNumber="white"
              setWhichColor={setWhichColor}
            />
            <ColorChoice
              value=": ๊ฒ์ "
              colorNumber="black"
              setWhichColor={setWhichColor}
            />
            <ColorChoice
              value=": ๊ฐ์"
              colorNumber="#795548"
              setWhichColor={setWhichColor}
            />
          </ColorDiv>

          <NumberTitle>์๋</NumberTitle>
          <NumberInput
            type="number"
            placeholder="1"
            min="1"
            max="5"
            value={number}
            // input์ type์ด number์ฌ๋ e.target.value๋ฅผ ํตํด ๋ค์ด์จ ๊ฐ์ string ํ์์ด๋ฏ๋ก ์ซ์๋ก ๋ฐ๊ฟ์ค์ผํจ.
            onChange={(e) => setNumber(parseInt(e.target.value))}
          />

          {/* AddBtn ํด๋ฆญ์ ํด๋น ์ด๋ฏธ์ง, ์๊น, ๊ฐ์, ๊ธ์ก์ด CartModal์ ์ ๋ฌ๋์ผํจ. */}
          {/* ๊ทธ๋ฌ๋ฉด ์๋ค๋ฅผ ๋ณ์๋ก ๋ง๋ค์ด์ผ props๋ก ์ ๋ฌํ  ์ ์๊ฒ ์ง? */}
          <AddBtn
            onClick={() => {
              const charge = 300000;

              dispatch(
                addCart({
                  image,
                  id: productId,
                  whichColor,
                  number,
                  charge,
                })
              );

              // ๋ค์ ๋ณ์ ์ด๊ธฐํ
              setWhichColor("");
              setNumber(1);

              // ๋ค์์ ์ถ๊ฐ๋  ์ํ์ ์ํด productId ์ฆ๊ฐ
              dispatch(createCartId());
            }}
          >
            ์นดํธ์ ์ถ๊ฐ
          </AddBtn>

          {/* ๋ฒํผ ๋์๊ณผ transition ๋์์ ๋ฐ๋ก ์ ์ฉ์ํค๊ธฐ ์ํด ์ปดํฌ๋ํธ ๋จ์๋ก ๋ถ๋ฆฌํด์ setState๋ฅผ ์ฌ์ฉ */}
          {/* View Detail ๋ฒํผ ๋ง๋ค ๋์ ๊ฐ์ ์ด์  */}
          <AboutDetail />
          <AboutChange />
        </div>
      </MainDiv>
    </ParentDiv>
  );
}

export default DetailPage;
```

์ด ์ปดํฌ๋ํธ๋ Redux๊ฐ ์ฌ์ฉ๋๋ค. ๋งํ๋ ๋ถ๋ถ์ด ๋ง์์, ์ฝ๋๋ฅผ ๋ค์ด๊ฐ์ ๋ณด๋ฉด ์ฃผ์์ด ์์ฒญ๋๊ฒ ๋ง๋ค...  
์ฌ์ค ์ฃผ์ ํ๋ํ๋๋ฅผ ์ฌ๊ธฐ์ ํ์ด์ฐ๊ณ  ์ถ์ง๋ง, ์ฃผ์๊ณผ ์ฝ๋ ํ๋ฆ์ ๊ฐ์ด ๋ฐ๋ผ๊ฐ๋๊ฒ ์ข์ ๊ฒ ๊ฐ์์ ์ค๋ช์ ์ต๋ํ ์ค์ด๋ ค๊ณ ํ๋ค.  
๊ตฌํ์ ํ๋ฒ ์น ๋ค ํ ์ํ์์ ๋ฆฌ๋์ค๋ฅผ ์์ ํด์ผํ๊ธฐ ๋๋ฌธ์ ๊ณจ์น๊ฐ ์ํ ๋ค.  
๊ตฌ์กฐ์ ์ธ ๋ฌธ์ ๋ ๋ง์ด ๋ณด์๋๋ฐ, ํนํ๋ [pages/ChairCollection.js](#๐-srccomponentschaircollectionjs)์์ img์ id๋ฅผ object๋ก ๋ง๋ค ๋, ๋ ๋ค์ํ ๊ฐ๋ค์ ์ฌ๊ธฐ์ ์ ์ธํ์ผ๋ฉด ํ์ฉ์ด ํจ์ฌ ํธํ์ ๊ฒ์ผ๋ก ์๊ฐ๋๋ค.(์ฌ์ค ์ด ๋ถ๋ถ์ DB ํํธ ๋ด๋นํด์ฃผ์๋ ๋ถ์ด ๊ณ์ ๋ค๋ฉด ์๋ฌด ๋ฌธ์  ์๋ ๋ถ๋ถ์ด๋ค.)  
dispatch๋ฅผ ํ์ฉํด์ Redux์ ์๋ ์ก์๋ค์ ์ฌ์ฉํ๊ณ , ์ฌ๊ธฐ์ ๋ค์ด๊ฐ๋ ๊ฐ๋ค์ ์นดํธ์ ์ถ๊ฐ๋  ๊ฒ์ด๋ค.  
์ด์  Redux๋ฅผ ์ด๋ป๊ฒ ๊ตฌํํ๋์ง ์ดํด๋ณด์.  
< AboutDetail />, < AboutChange />์ ๊ฒฝ์ฐ UI ์ปดํฌ๋ํธ๊ธฐ ๋๋ฌธ์ ์๋ต!

## ๐ src/Redux/CartManage.js

```js
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "carts",

  initialState: {
    list: [],
    numbers: [],
    nextId: 0,
  },

  reducers: {
    addCart: {
      reducer: (state, action) => {
        return {
          ...state,
          list: state.list.concat(action.payload),
          numbers: state.numbers.concat({
            number: action.payload.number,
            id: action.payload.id,
          }),
        };
      },
    },

    removeCart: {
      reducer: (state, action) => {
        return {
          ...state,
          list: state.list.filter((element) => element.id !== action.payload),
          numbers: state.numbers.filter(
            (element) => element.id !== action.payload
          ),
        };
      },
    },

    createCartId: {
      reducer: (state, action) => {
        state.nextId++;
      },
    },

    increaseNumber: {
      reducer: (state, action) => {
        const index = action.payload.index;

        const copiedArray = [...action.payload.numbers];

        // copy๋ numbers ๋ฐฐ์ด์์, ํด๋ฆญํ๋ ์นดํธ ์ํ์ ์ธ๋ฑ์ค์ ๋์ผํ ์ธ๋ฑ์ค์ ํด๋นํ๋ object๋ฅผ copy
        const copiedObject = { ...copiedArray[index] };

        // ํด๋ฆญํ ์ ํ์ ์๋์ 1 ์ฆ๊ฐ์ํด.
        copiedObject.number += 1;

        // splice()๋ฅผ ์ฌ์ฉํด copy๋ numbers ๋ฐฐ์ด์ ํด๋น index์์ 1๊ฐ๋งํผ ์ญ์ ํ๊ณ , ๊ทธ ์๋ฆฌ์ ์์์ copyํ๋ ์๋์ด ๋ณ๊ฒฝ๋ object๋ฅผ ์ฝ์.
        copiedArray.splice(index, 1, copiedObject);

        // list.totalCharge๋ ๋ณ๊ฒฝํด์ค์ผ ์๋ ๋ณ๊ฒฝ์ ๋ฐ๋ฅธ ์๊ณ๋ฅผ ๋ณ๊ฒฝํ  ์ ์์.

        return {
          ...state,
          // initialState.numbers ๋ฐฐ์ด์ ์์ ๋ copyiedArray๋ก ๊ต์ฒด.
          numbers: copiedArray,
        };
      },
    },

    decreaseNumber: {
      reducer: (state, action) => {
        const index = action.payload.index;

        const copiedArray = [...action.payload.numbers];

        const copiedObject = { ...copiedArray[index] };

        copiedObject.number -= 1;

        copiedArray.splice(index, 1, copiedObject);

        return {
          ...state,
          numbers: copiedArray,
        };
      },
    },
  },
});

export const {
  addCart,
  removeCart,
  createCartId,
  increaseNumber,
  decreaseNumber,
} = cartSlice.actions;
export default cartSlice.reducer;
```

Redux๋ Redux-Toolkit์ ์ฌ์ฉํ๊ณ , createSlice() ๋ฉ์๋๋ก ๊ตฌํํ๋ค.  
์ด๋ฒ ํ๋ก์ ํธ๋ฅผ ์งํํ๋ฉด์ ๊ฐ์ฅ ๋ง์ ์๊ฐ์ ์์๋ถ์๊ณ , ์ด๋ ค์ ๋ ๋ถ๋ถ์ด Redux์ด๋ค.  
์ฃผ์์ด ๋๋ฌด๋๋ ๊ธธ์ด์ ์ ๋ถ ์ญ์ ํ์ง๋ง, ์ฝ๋์ ๋ค์ด๊ฐ์ ํ๋ฒ์ฏค ์ฝ์ด๋ณด๋ ๊ฒ๋...๋์ ์์์ ๋ฐ๋ผ๊ฐ๊ธฐ์ ๊ต์ฅํ ์ข์ ๊ฒ์ผ๋ก ์์...๋ฉ๋๋ค...  
์ก์์ ์ด 5๊ฐ๊ฐ ์๋ค.  
์นดํธ์ ์ํ์ ๋ฃ๋ ๊ฒ, ๋นผ๋ ๊ฒ, ์นดํธ ๋ด์์ ์ํ ์๋์ ์ฆ๊ฐ์ํค๋ ๊ฒ, ๊ฐ์์ํค๋ ๊ฒ, ์นดํธ์ ๋ค์ด๊ฐ๋ ์ํ๋ค์ id๋ฅผ ์ค์ ํ๋ ๊ฒ.  
๊ฐ์ฅ ์ด๋ ค์ ๋ ๋ถ๋ถ์ ์นดํธ ๋ด์์ ์ํ ์๋์ ๋ณ๊ฒฝํ๋ ๊ฒ์ด์๋ค.  
์นดํธ์ ์ํ์ ์ถ๊ฐํ๋ ๊ฒ๊น์ง๋ ๋ฌธ์ ๊ฐ ์์๋๋ฐ, ์นดํธ์ ๋ค์ด์จ ๊ฒ๋ค ์ค์์ ๊ด๋ฆฌ๋ฅผ ํ๋ ๊ฒ์ ๋ ๋ค๋ฅธ ๋ฌธ์ ์๋ค.  
์นดํธ์์๋ ์ํ ์ญ์ ๊ฐ ๊ฐ๋ฅํ๊ธฐ์, ๋ค์ด์จ ์์๋๋ก id๋ฅผ ๋งค๊ฒจ์ ์ฌ์ฉํ๋ฉด ์ํ์ ํ๋๋ผ๋ ์ญ์ ํ ๋ค๋ถํฐ๋ id๊ฐ ๊ผฌ์ฌ์ ์๋ฑํ ์ํ์ ์ก์์ด ๋์คํจ์น๋๊ธฐ ๋๋ฌธ์ด๋ค.  
๊ฒ๋ค๊ฐ ์ฒ์ ์นดํธ์ ์ถ๊ฐ๋์์ ๋ ์๋์ ๋ณ๊ฒฝํ๋ ๋ถ๋ถ์์ ๋ฌธ์ ๊ฐ ์์๋๋ฐ, ์ํ์ object์์ ์๋ ๋ถ๋ถ๋ง ๋ฝ์์ค๋ ๊ฒ์ด ๊ณ์ํด์ ์ค๋ฅ๋ฅผ ๋๋ค.  
์ฒซ ๋ฒ์งธ ๋ฌธ์ ๋ id๋ฅผ ๋ ํ๋ ๋ง๋ค์ด์ฃผ๋ ๋ฐฉ๋ฒ์ผ๋ก ํด๊ฒฐํ๊ณ , ๋ ๋ฒ์งธ ๋ฌธ์ ๋ ์นดํธ์ ๋ค์ด์ค๋ ์ํ๋ค์ object๋ฅผ ๋ณต์ฌํด์, ๋ณต์ฌ๋ณธ์ ๋ค์ ์ ์ฅํ๋ ๋ฐฉ์์ผ๋ก ํด๊ฒฐํ๋ค.  
ํ๋ก์ ํธ๊ฐ ์ ๋ถ ์์ฑ๋๊ณ  ๋์๋ ์ฝ๋๊ฐ ์ ๋ง ๋๋ฝ๋ค๋ ์๊ฐ์ ํ์ง๋ง, ํ์ฌ ๋์ ์ง์ ๋ฒ์ ๋ด์์๋ ์ต์ ์ ๊ฒฐ๊ณผ๋ผ๊ณ  ์๊ฐํ๋ค..

## ๐ src/pages/Introduction.js

```js
import introductionVideo from "./introduction.mp4";
import styled, { keyframes } from "styled-components";
import { GiScrollUnfurled } from "react-icons/gi";
import { useEffect, useRef } from "react";

function Introduction() {
  const anchorRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      // ๋ ๋ฐฉ๋ฒ ๋ชจ๋ ์ ๋์ํจ.
      // anchorRef.current.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({ top: 240, behavior: "smooth" });
    }, 100);
  }, []);

  return (
    <IntroductionDiv>
      <BackgroundVideo>
        <video autoPlay loop muted>
          <source src={introductionVideo} type="video/mp4" />
        </video>
      </BackgroundVideo>

      <Title className="scrollToHere" ref={anchorRef}>
        <GiScrollUnfurled />
        Welcome to aimรฉe Furnitures
      </Title>

      <IntroTextDiv>
        <IntroText>
          Break away from the fixed form.
          <br /> And create your own space.
          <br />
          Whatever your request,
          <br /> we will make it for you.
          <br />
          Our products are harmless <br />
          to the human body <br /> by carefully selecting
          <br />
          <TextDeco> eco-friendly materials</TextDeco>.
        </IntroText>
      </IntroTextDiv>
    </IntroductionDiv>
  );
}

export default Introduction;
```

addEventListener๋ฅผ ์งํํ  ๋, ๋ ๋๋ง์ด ๋์ง ์์ ์ปดํฌ๋ํธ์ ์ ๋๋ฉ์ด์์ ๋ถ์ฌํ๊ธฐ ๋๋ฌธ์ ์คํฌ๋กค ์๋ ์ด๋ ๋์์ด ๋ฒ๋ฒ์๋๋ฐ, ์ด๋ setTimeOut()์ ํตํด ๋ ๋๋ง ์๋ฃ ํ ๋์ํ๋ ๊ฒ์ผ๋ก ํด๊ฒฐํ  ์ ์์๋ค.  
์๋ ์คํฌ๋กค์ ๊ตฌํํ๋ ค๊ณ  ๋ช ๋ฒ์ด๊ณ  ์คํจ๋ฅผ ๋ฐ๋ณตํ๋ฉด์ ๊ณ ๋ฏผํ๊ธฐ์ ์ฝ๋ ํ์ผ์์ ์ฃผ์์ ๊ผญ ์ฝ์ด๋ณด์..  
useRef()์ getBoundingClientRect()๋ฅผ ์์ด์ ์ฌ์ฉํ๋ค๋ฉด ๋ ๊น๋ํ๊ฒ ๋์ํ์ ๊ฒ ๊ฐ๊ธฐ๋ ํ๋ค!

## ์ด ์ธ ํํธ

์ฌ์ค ์ง๊ธ๊น์ง ์ค๋ชํ ๋ถ๋ถ ์ธ์๋ css๊ฐ ๋๋ถ๋ถ์ ์ฐจ์งํ๋ ํ์ด์ง๋ค ๋ฐ์ ์์ด์ ๊ตณ์ด ๋ณ๋์ ์ค๋ช์ ๋ถ์ผ ๊ฒ์ ์๋ค.

## ๐ค ํ๊ณ 

์์ง ๊ณต๋ถ๊ฐ ๋ ๋์์ง๋ง, ๋ก๊ทธ์ธ ๊ธฐ๋ฅ์ ๊ผญ ๊ตฌํํด๋ณด๊ณ ์ถ๋ค.  
์๋ง์ ์์ ๋ค์ ์ฐพ์๋ณด์์ง๋ง, ์ดํด๊ฐ ์ ๋์ง ์๊ณ ์๋ค!  
๊ทธ๋ฆฌ๊ณ  ์ด๋ฐ ์์ ํ๋ก์ ํธ์์๋ Redux ๊ตฌํ์ ์ ๋ฅผ ๋จน๋๋ฐ, ๊ท๋ชจ๊ฐ ํฐ ์ํฉ์์๋ ์ด๋ป๊ฒ ๊ด๋ฆฌ๊ฐ ๋๊ณ , ์ฌ์ฉ์ด ๋๋๊ฑด์ง ์ ๋ง ๊ถ๊ธํ๋ค.  
ํผ์์ ์ด๋ฏธ์ง ๋ฑ ์ ๋ณด๋ฅผ ๊ตฌํํ๊ณ , ๋ถ๋ฌ์ค๊ณ  ํ๋ค๋ณด๋ ์๊ฐ์ด ๋ง์ด ์๋ชจ๋๋๋ฐ, ์ด ๋ถ๋ถ๋ ๋ฐฑ์๋๋ฅผ ํ์๋ ๋ถ๊ณผ ํ๋ ฅํ๋ฉด ์ํํ๊ฒ ํ  ์ ์์ ๊ฒ ๊ฐ๋ค๋ ์๊ฐ์ด ๋ ๋ค.
