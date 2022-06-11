# 🌌 갤러리 - 쇼핑몰 만들기

이번 프로젝트는 사실 쇼핑몰을 만들어볼까하다가, 갤러리를 만들게 되었는데, 그러다가 다시 쇼핑몰을 한 통 부어버린 특이한 과정을 거쳤다.  
Redux를 활용해서 수량 조절을 하는 기능과 장바구니 기능을 구현한 것이 포인트이다.

## 📂 파일 구조

<img width="165" alt="스크린샷 2022-06-11 오후 3 40 31" src="https://user-images.githubusercontent.com/86224851/173176673-02595137-2dbb-4b63-a63d-404bfe181c49.png">

큰 틀은 위 사진과 같다.  
파일을 구분해서 사용하는 법을 연습해보고자, 기능별로 파일을 나눴는데 확실하게 감이 잡히지는 않는다.  
세부 파일은 다음과 같다.

<img width="169" alt="스크린샷 2022-06-11 오후 4 01 19" src="https://user-images.githubusercontent.com/86224851/173177337-9d4b3c37-45c9-461f-96b5-48622e10d28d.png">

<img width="162" alt="스크린샷 2022-06-11 오후 4 01 50" src="https://user-images.githubusercontent.com/86224851/173177359-202ee2a5-83f4-4302-8ca9-d81310ec3811.png">

UI 파일 같은 경우에는 쪼갤 수 있는 단위까지 쪼개다보니 양이 많아졌다.

## 🗂 src/index.js

react-redux와 react-router-dom을 사용했기 때문에 한번 살펴볼 필요가 있다.

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

< BrowserRouter >로 < App />을 감싸서 Route 기능을 사용할 수 있게 만들었다. basename은 프로젝트를 Github에 업로드하는 과정에 문제가 생겨서 추가했다. 프로젝트의 기본 경로를 설정해주는 기능이다!  
< Provider >는 Redux를 활용하기 위한 것으로 프로젝트에서 store에 저장된 것들을 꺼내서 사용하고자 < App />을 감싸줬다.

## 🗂 src/App.js

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

예제로도 많이 돌아다닐 것만같은 구조이다.  
< Route >를 사용하기 위해서는 < Routes >로 감싸줘야한다.  
"어느 페이지"에서든 보이고자하는 < Header />를 Route의 기본 path에 설정하고, 그 내부에 "어느 페이지"들을 넣어줬다.  
이를 "중첩 라우팅"이라고 한다.  
path="/"로 기본경로를 설정하고, index를 사용해서 기본경로 값을 사용한다.  
따라서, index가 있는 < Home /> 컴포넌트가 홈페이지로 사용된다는 것을 알 수 있다.  
이제 컴포넌트들을 하나씩 살펴보자.

## 🗂 src/pages/Home.js

```js
import styled from "styled-components";
import { keyframes } from "styled-components";

// 생략

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

Home.js에서는 화면이 랜더링 됐을 때 타이틀이 스스륵 보여지게되는 효과를 넣고자 했다. 밋밋함을 없애고자 했기 때문에..  
styled-components에서 animation 속성을 사용하는 방법은 위 코드와 같다. keyframes를 따로 생성하고 그것을 사용하고자하는 컴포넌트에서 변수로 넣어주면 된다. import를 꼭 해줘야한다는 것을 잊지말자!

## 🗂 src/pages/Collection.js

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

Collection.js에서는 딱히 볼만한 코드가 없다. 하지만 이 페이지에 끌어오는 컴포넌트가 굉장히 많다. 컴포넌트로 쪼개기를 실천하기 위해 부단히도 노력했다..  
여기서 잠깐! ChairCollection, DeskCollection, InteriorCollection은 전부 다른 이미지를 캐러샐 슬라이드에 보내기 위한 컴포넌트로, 같은 코드를 사용한다. 따라서 한 가지만 살펴보기로 한다.(지금와서 생각해보니 얘는 왜 다 다른 컴포넌트로 만들어둔거지??)

## 🗂 src/components/ChairCollection.js

```js
import CollectionSlider from "../UI/CollectionSlider";
import { useRef } from "react";

function ChairCollection() {
  // chair 이미지를 넣기 위한 빈 배열
  let chairImg = [];

  // 이미지를 렌더링할 때 li에 사용할 key 값을 미리 생성
  const nextId = useRef(0);

  // 이름을 통일한 chair 이미지를 빈 배열에 삽입
  for (let i = 0; i < 8; i++) {
    chairImg[i] = { img: `/assets/chairs/chair${i}.jpg`, id: nextId.current };

    nextId.current += 1;
  }

  return <CollectionSlider furnitureImg={chairImg} whatFurniture="chairs" />;
}

export default ChairCollection;
```

따로 사진 데이터를 불러올 DB가 있는게 아니므로, 각 사진 파일의 이름을 최대한 규칙있게 통일해서 사용했다.  
map()을 통해 사진들을 나열할 생각이었기 때문에, useRef()를 통해 사진마다 img와 id를 object로 만들어서 배열에 넣어놨다.  
이 object를 < CollectionSlider />에 props로 보낸다.

## 🗂 src/UI/CollectionSlider.js

```js
import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Products from "../components/Products";
import SlideRightBtn from "./SlideRightBtn";
import SlideLeftBtn from "./SlideLeftBtn";

function CollectionSlider({ furnitureImg, whatFurniture }) {
  // 캐러셀 구현
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
```

캐러샐 슬라이드로 상품을 보여주는 것을 구현했다.  
slideRef로 슬라이드를 구현할 컴포넌트를 지정하고, useEffect()를 통해서 currentSlide가 변할 때만 style에 변화를 줬다.  
< SlideLeftBtn />, < SliderRightBtn />을 통해 currentSlide의 setState를 실행하고, 이를 translateX에 반영하여 왼쪽, 오른쪽 슬라이드가 구현된다.  
map()을 통해 props로 받아온 img와 id를 보여준다.
< SlideLeftBtn />과 < Products />를 살펴보자.

## 🗂 src/UI/SlideLeftBtn.js

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

props로 받아온 값을 이용해서 왼쪽으로 슬라이드를 이동시키는 버튼이다.  
부모 컴포넌트에서 currentSlide가 0으로 설정되어있었는데, 버튼을 눌렀을 때,  
이 값이 0이라면 TOTAL_SLIDES 값(1)로 변화시켜서 왼쪽 슬라이드를 하고,  
이 값이 1이라면 오른쪽으로 슬라이드를 하는 기능을 한다.(왼쪽 방향 버튼이지만)
이게 가능한 것은 부모 컴포넌트에서 useEffect() 통해 currentSlide를 지켜보고 있기 때문이다.

## 🗂 src/components/Products.js

```js
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// 렌더링할 각각의 컴포넌트 내에서 setState 처리해야
// 한번에 버튼이 올라오는 일 없이, 원하는 이미지에만 버튼 생성 가능
const Products = ({ img }) => {
  const [hide, setHide] = useState(true);

  return (
    <ProductDiv
      onMouseEnter={() => setHide(false)}
      onMouseLeave={() => setHide(true)}
    >
      <FurnitureImg src={process.env.PUBLIC_URL + img} alt="furniture" />

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

이번에는 제품 사진에 마우스를 올렸을 때의 경우를 구현한 것이다.  
숨겨져있던 Link 태그가 사진 하단에서부터 올라온다.
이를 구현하기 위해서 overflow:hidden;으로 Link 태그를 숨겨뒀다가,  
MouseEnter 이벤트가 발생하면 hide를 setState로 변경시켜서 < StyledLink />에 className을 추가한다.  
클래스가 추가되면 transition 속성이 활성화되어서 제한된 영역 밖에 있어서 안보였던 Link 태그가 보이는 영역으로 들어오게 된다.  
이 < StyledLink />에 props를 넘겨서 상품 상세 페이지를 보여줄 때 활용한다.  
Link 태그를 통해 이동하므로 재랜더링이 되지 않아 조금 더 UX가 매끄럽다.  
아참! 여기서 주의할 점이, 이런 식으로 사진에 마우스를 올리면 똑같은 버튼이 나온다고 생각해서 공통적으로 버튼을 만들어주려고 Products.js가 아니라 CollectionSlider.js에서 구현을 해버리면, 모든 버튼이 한번에 올라오는 엄청난 일이 발생한다.  
하나의 사진에 대해서 해당 위치의 버튼만 올라오게 하려면, 반드시 개별 컴포넌트 수준까지 들어와서 구현해주자.  
여기서 개별 컴포넌트라는 건 CollectionSlider.js처럼 다른 이미지까지 모여있는 부분이 아니라, Product.js처럼 하나의 이미지만 존재하는 것을 의미한다.

## 🗂 src/pages/DetailPage.js

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
  // Link에서 state로 받아온 props를 사용하는 방법
  const location = useLocation();
  const { image } = location.state;

  // 색상 선택을 위한 변수
  const [whichColor, setWhichColor] = useState("");

  // 수량 선택을 위한 변수
  const [number, setNumber] = useState(1);

  // 금액 표시를 위한 변수. 사실 얘는 이미지, 아이디 있는 파일에서 각 상품에 대해 미리 만들어놓고 꺼내 쓰는게 더 맞는 방법이라고 생각함.
  // components/ChairCollection.js에서 chairImg[] 만들 때 거기에 가격도 같이 원소로 넣어놓는게 상품마다 다른 가격을 표시할 때 더 효율적.
  // const [charge, setCharge] = useState(300000);

  // 배열 인덱스 체크 시 사용할 id. 제품 삭제할 때 filter에서 쓸 id.
  // 왜 이미지 객체에 있는 id를 안 쓰고 이걸 새로 만드는지 의문이 들 수 있다.
  // 카트에 들어가는 상품은 뭐가 될지 모른다. 담기는 순간, 몇 번 째로 담긴 것인지가 중요하기 때문에 새로 id를 만들어주는게 맞다.
  // 만약, 이미지 객체에 있는 id를 사용한다면 같은 상품 종류가 한번에 다 삭제되는 불상사가 일어날 것으로 예상된다.
  // let productId = useRef(0);

  // 추가 문제 발생! useRef가 DetailPage.js에서 선언되었기 때문에 다른 제품을 보기위해 페이지를 나갔다 들어올 때마다 리셋이 된다.
  // 그로 인해서, id가 겹쳐버려서 오류가 발생했다. 어떻게 해결해야할까...
  // useEffect를 활용해봤지만, useEffect 내부에서는 useRef를 사용할 수 없었고, 외부에 별도 함수로 만든 것을 useEffect에 넣어봤지만, 그 때는 변수가 함수 내부에서 끝나버려서 활용 할 수가 없었다.
  // 리덕스 스토어에 id를 만든 뒤 꺼내 쓰는 것이 제일 나아보인다.
  const productId = useSelector((state) => state.carts.nextId);

  const dispatch = useDispatch();

  return (
    <ParentDiv>
      <Header>
        <StyledLink to="/collection">컬렉션/</StyledLink>
        <span>(제품명)</span>
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
            제품에 대한 표현을 적는 곳.
            <br />
            정말 멋지네요. 근사합니다.
            <br />
            지금 당장 구매를 누르세요.
          </p>
        </ImgAndDesc>

        <div>
          <ItemName>제품명</ItemName>
          {/* charge를 리덕스 스토어에 저장했으므로 꺼내쓰는게 맞다고 생각되지만, ,기호를 중간에 넣어야하므로 그냥 문자로 기입함. */}
          {/* chairImg[] 만들 때 같이 charge 항목을 string 형태로 추가해서 이 자리에 사용하고, number 타입으로 사용하려면 ,기호를 파싱해서 변수로 삽입하는게 이상적이라고 생각됨. */}
          <Price>₩ 300,000</Price>

          <ColorTitle>색상{whichColor}</ColorTitle>
          <ColorDiv>
            <ColorChoice
              value=": 흰색"
              colorNumber="white"
              setWhichColor={setWhichColor}
            />
            <ColorChoice
              value=": 검정"
              colorNumber="black"
              setWhichColor={setWhichColor}
            />
            <ColorChoice
              value=": 갈색"
              colorNumber="#795548"
              setWhichColor={setWhichColor}
            />
          </ColorDiv>

          <NumberTitle>수량</NumberTitle>
          <NumberInput
            type="number"
            placeholder="1"
            min="1"
            max="5"
            value={number}
            // input의 type이 number여도 e.target.value를 통해 들어온 값은 string 타입이므로 숫자로 바꿔줘야함.
            onChange={(e) => setNumber(parseInt(e.target.value))}
          />

          {/* AddBtn 클릭시 해당 이미지, 색깔, 개수, 금액이 CartModal에 전달되야함. */}
          {/* 그러면 얘네를 변수로 만들어야 props로 전달할 수 있겠지? */}
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

              // 다시 변수 초기화
              setWhichColor("");
              setNumber(1);

              // 다음에 추가될 상품을 위해 productId 증가
              dispatch(createCartId());
            }}
          >
            카트에 추가
          </AddBtn>

          {/* 버튼 동작과 transition 동작을 따로 적용시키기 위해 컴포넌트 단위로 분리해서 setState를 사용 */}
          {/* View Detail 버튼 만들 때와 같은 이유 */}
          <AboutDetail />
          <AboutChange />
        </div>
      </MainDiv>
    </ParentDiv>
  );
}

export default DetailPage;
```

이 컴포넌트는 Redux가 사용된다. 막히는 부분이 많아서, 코드를 들어가서 보면 주석이 엄청나게 많다...  
사실 주석 하나하나를 여기에 풀어쓰고 싶지만, 주석과 코드 흐름을 같이 따라가는게 좋을 것 같아서 설명을 최대한 줄이려고한다.  
구현을 한번 싹 다 한 상태에서 리덕스를 수정해야했기 때문에 골치가 아팠다.  
구조적인 문제도 많이 보였는데, 특히나 [pages/ChairCollection.js](#🗂-srccomponentschaircollectionjs)에서 img와 id를 object로 만들 때, 더 다양한 값들을 여기서 선언했으면 활용이 훨씬 편했을 것으로 생각된다.(사실 이 부분은 DB 파트 담당해주시는 분이 계신다면 아무 문제 없는 부분이다.)  
dispatch를 활용해서 Redux에 있는 액션들을 사용했고, 여기에 들어가는 값들은 카트에 추가될 것이다.  
이제 Redux를 어떻게 구현했는지 살펴보자.  
< AboutDetail />, < AboutChange />의 경우 UI 컴포넌트기 때문에 생략!

## 🗂 src/Redux/CartManage.js

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

        // copy된 numbers 배열에서, 클릭했던 카트 상품의 인덱스와 동일한 인덱스에 해당하는 object를 copy
        const copiedObject = { ...copiedArray[index] };

        // 클릭한 제품의 수량을 1 증가시킴.
        copiedObject.number += 1;

        // splice()를 사용해 copy된 numbers 배열의 해당 index에서 1개만큼 삭제하고, 그 자리에 위에서 copy했던 수량이 변경된 object를 삽입.
        copiedArray.splice(index, 1, copiedObject);

        // list.totalCharge도 변경해줘야 수량 변경에 따른 소계를 변경할 수 있음.

        return {
          ...state,
          // initialState.numbers 배열을 수정된 copyiedArray로 교체.
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

Redux는 Redux-Toolkit을 사용했고, createSlice() 메서드로 구현했다.  
이번 프로젝트를 진행하면서 가장 많은 시간을 쏟아부었고, 어려웠던 부분이 Redux이다.  
주석이 너무나도 길어서 전부 삭제했지만, 코드에 들어가서 한번쯤 읽어보는 것도...나의 의식을 따라가기에 굉장히 좋을 것으로 예상...됩니다...  
액션은 총 5개가 있다.  
카트에 상품을 넣는 것, 빼는 것, 카트 내에서 상품 수량을 증가시키는 것, 감소시키는 것, 카트에 들어가는 상품들의 id를 설정하는 것.  
가장 어려웠던 부분은 카트 내에서 상품 수량을 변경하는 것이었다.  
카트에 상품을 추가하는 것까지는 문제가 없었는데, 카트에 들어온 것들 중에서 관리를 하는 것은 또 다른 문제였다.  
카트에서는 상품 삭제가 가능했기에, 들어온 순서대로 id를 매겨서 사용하면 상품을 하나라도 삭제한 뒤부터는 id가 꼬여서 엉뚱한 상품에 액션이 디스패치됐기 때문이다.  
게다가 처음 카트에 추가되었을 때 수량을 변경하는 부분에서 문제가 있었는데, 상품의 object에서 수량 부분만 뽑아오는 것이 계속해서 오류를 냈다.  
첫 번째 문제는 id를 또 하나 만들어주는 방법으로 해결했고, 두 번째 문제는 카트에 들어오는 상품들의 object를 복사해서, 복사본을 다시 저장하는 방식으로 해결했다.  
프로젝트가 전부 완성되고 나서는 코드가 정말 더럽다는 생각을 했지만, 현재 나의 지식 범위 내에서는 최선의 결과라고 생각한다..

## 🗂 src/pages/Introduction.js

```js
import introductionVideo from "./introduction.mp4";
import styled, { keyframes } from "styled-components";
import { GiScrollUnfurled } from "react-icons/gi";
import { useEffect, useRef } from "react";

function Introduction() {
  const anchorRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      // 두 방법 모두 잘 동작함.
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
        Welcome to aimée Furnitures
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

addEventListener를 진행할 때, 렌더링이 되지 않은 컴포넌트에 애니메이션을 부여했기 때문에 스크롤 자동 이동 동작이 버벅였는데, 이는 setTimeOut()을 통해 렌더링 완료 후 동작하는 것으로 해결할 수 있었다.  
자동 스크롤을 구현하려고 몇 번이고 실패를 반복하면서 고민했기에 코드 파일에서 주석을 꼭 읽어보자..  
useRef()와 getBoundingClientRect()를 섞어서 사용했다면 더 깔끔하게 동작했을 것 같기도 하다!

## 이 외 파트

사실 지금까지 설명한 부분 외에는 css가 대부분을 차지하는 페이지들 밖에 없어서 굳이 별도의 설명을 붙일 것은 없다.

## 🤔 회고

아직 공부가 덜 되었지만, 로그인 기능을 꼭 구현해보고싶다.  
수많은 예제들을 찾아보았지만, 이해가 잘 되지 않고있다!  
그리고 이런 작은 프로젝트에서도 Redux 구현에 애를 먹는데, 규모가 큰 상황에서는 어떻게 관리가 되고, 사용이 되는건지 정말 궁금하다.  
혼자서 이미지 등 정보를 구현하고, 불러오고 하다보니 시간이 많이 소모되는데, 이 부분도 백엔드를 하시는 분과 협력하면 원활하게 할 수 있을 것 같다는 생각이 든다.
