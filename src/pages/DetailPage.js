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

  // 이 방법으로 이미지를 조절하면 다양한 크기의 이미지를 임의로 통일된 크기를 가지게 할 수 있지만
  // 가구 등을 보여주는 컨셉이므로 원본 이미지의 비율을 그대로 유지한채로 크기만 작아지는게 좋아보여서
  // 이 방법은 사용하지않고 이미지를 직접 조절하는걸로 하자.
  // const ImgDiv = styled.div`
  //   display: block;
  //   width: 650px;
  //   height: 600px;
  //   background: url(../../assets/chairs/${image}.jpg) no-repeat contain;
  // `;

  // 색상 선택을 위한 변수
  const [whichColor, setWhichColor] = useState("");

  // 수량 선택을 위한 변수
  const [number, setNumber] = useState(1);

  // 금액 표시를 위한 변수. 사실 얘는 이미지, 아이디 있는 파일에서 각 상품에 대해 미리 만들어놓고 꺼내 쓰는게 더 맞는 방법이라고 생각함.
  // pages/ChairCollection.js에서 chairImg[] 만들 때 거기에 가격도 같이 원소로 넣어놓는게 상품마다 다른 가격을 표시할 때 더 효율적.
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
          {/* 이 부분부터는 리덕스를 사용하지않으면 너무 복잡함. 빈 배열에 전달해야할 props들을 object로 묶어서 하나의 원소로 넣고, 필요한 곳에서 꺼내서 사용하는게 좋아보임. */}
          <AddBtn
            onClick={() => {
              // 여기서 totalCharge를 계산하면, 카트 내부에서 수량 변경을 했을 때 소계에 반영되지 않음.
              // components/CartModal.js에서는 numbers에 있는 number만 변경되기 때문.
              // 모든 상품 가격이 같게 설정되어 있으므로, charge를 이 파일에서 setState하지말고 리덕스 스토어에 저장한 뒤, CartModal.js에서 꺼내서 totalCharge를 계산하는게 맞다고 생각됨.
              // 문제 발생! 아래 addCart()는 list에 객체를 삽입하므로, charge를 따로 미리 만들어버리면, 코드를 갈아엎어야한다.
              // 따라서, charge만 여기서 선언해서 addCart()에 넣고, totalCharge는 CartModal.js에서 numbers의 number와 함께 계산하는게 나을 것 같다.
              // let totalCharge = number * charge;
              // setCharge(totalCharge);
              const charge = 300000;

              dispatch(
                addCart({
                  image,
                  id: productId,
                  whichColor,
                  number,
                  // totalCharge,
                  charge,
                })
              );

              // 다시 변수 초기화
              setWhichColor("");
              setNumber(1);
              // setCharge(300000);

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

const ParentDiv = styled.div`
  display: block;
  width: 90%;
  height: 600px;
  margin: 0 auto;
  padding: 20px 50px;
  background-color: beige;
  border-radius: 15px;
`;

const Header = styled.header`
  display: flex;
  font-weight: bold;
  margin: 10px 0 10px 200px;
`;

const StyledLink = styled(Link)`
  all: unset;
  cursor: pointer;
`;

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const ImgAndDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 45%;
  height: 550px;
`;

const FurnitureImg = styled.img`
  display: block;
  max-width: 550px;
  height: 450px;
`;

const ItemName = styled.h1`
  font-size: 26px;
  margin: 0;
`;

const Price = styled.strong`
  font-size: 30px;
  margin-bottom: 10px;
`;

const ColorTitle = styled.h2`
  margin-bottom: 5px;
`;

const ColorDiv = styled.div`
  display: flex;
  width: 150px;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const NumberTitle = styled.h2`
  margin-bottom: 5px;
`;

const NumberInput = styled.input`
  width: 60px;
  height: 30px;
  font-size: 20px;
  margin-bottom: 10px;
`;

const AddBtn = styled.button`
  all: unset;
  display: block;
  width: 300px;
  height: 50px;
  background-color: #7f703d;
  color: white;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
`;
