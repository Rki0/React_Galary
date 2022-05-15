import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { RiDeleteBackFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../Redux/CartManage";
import CartDecreaseBtn from "../UI/CartDecreaseBtn";
import CartIncreaseBtn from "../UI/CartIncreaseBtn";
import ScrollBlockWhenCartShow from "../UI/ScrollBlockWhenCartShow";

function CartModal({ isCartHide, setIsCartHide }) {
  // 리덕스 스토어에서 이미지, 색상, 수량, 가격을 꺼내서 사용할 것.
  // 배열에 있는 각각의 원소는 객체이므로 배열 인덱스와, 객체 key를 적절히 사용해서 데이터를 뽑을 것.
  // CartModalElement 컴포넌트를 list.map으로 감싸는게 제일 이상적인 사용 방법인 것 같다.
  const list = useSelector((state) => state.carts.list);
  const numbers = useSelector((state) => state.carts.numbers);

  const dispatch = useDispatch();

  // 카트 내 상품 총 합산 금액 구하기
  // totalCharge가 아닌 그냥 charge가 list에 들어가도록 변경함. 따라서 여기서 totalCharge를 계산해야함.
  // step 1. list.charge만 뽑아서 배열 만들기
  let chargeList = [];

  for (let i = 0; i < list.length; i++) {
    chargeList.push(list[i].charge);
  }

  // step 2. 인덱스 번호가 일치하는 chargeList의 원소와 numbers의 원소를 곱셈 연산해서 수량에 맞는 가격 생성.
  // list와 numbers의 원소 개수가 똑같이 유지되기 때문에 list의 index를 numbers의 index로 사용해도 무방.
  const totalChargeList = chargeList.map(
    (charge, index) => charge * numbers[index].number
  );

  // tatalChargeList를 list에 넣어서 아래 list.map에서 편하게 활용하게 만들어줌.
  // dispatch(addCart(totalChargeList));
  // 문제 발생! DetailPage.js에서 이미 addCart를 해버려서 여기서 addCart를 하면 원소 내부의 값으로 들어가지않고, 배열 내부의 하나의 인덱스를 차지하게 됨.
  // 따라서, 아래 코드 전부 오류 발생

  // 다른 방법.
  // totalChargeList에 들어있는 원소들을 list.map()을 통해 사용해야하므로 인덱스를 따로 뽑아놓을 필요가 있음.
  // list.map()이 진행 될 때 하나의 원소씩 반복이 되는데, 이 때의 인덱스 번호를 활용해서 totalChargeList의 원소들을 뽑아낼 것이기 때문.
  // map()을 활용해서 list 배열에 존재하는 인덱스 번호들을 가져옴.
  // 참고! 0,1,2번 상품이 카트에 존재할 때, 1번 상품을 지우면 인덱스는 0,1로 자동으로 바뀜.
  // 인덱스 번호만 가져온 것이기 때문에 인덱스 번호에 해당하는 내용과는 관계없다는 의미.
  // 또한, 방금 언급했듯이 인덱스 번호가 자동으로 바뀌기 때문에, 해당 인덱스에 어떤 상품이 있는지 확인할 id를 같이 넣어줄 필요가 있음.
  const indexList = list.map((element, index) => {
    // id에 list 배열 요소의 id를 할당.
    let id = element.id;

    // list 배열의 원소를 의미하는 element에 index를 할당해서 인덱스 번호를 가지는 배열로 바꿔버림.
    // map()은 복사본을 return하므로 list에는 영향 없음.
    element = index;

    return { index, id };
  });

  // step 3. reduce()를 이용해 배열 요소 합산 구하기
  // sum = 0으로 설정함. chargeList에 있는 값들을 하나씩 불러와서 currentValue에 저장. return에 저장된 연산을 반복 실행. 합이 점점 누적됨.
  const total = totalChargeList.reduce(function add(sum, currentValue) {
    return sum + currentValue;
  }, 0);

  // 카트 화면에서 뒷 배경이 스크롤되는 현상을 없애는 커스텀 함수
  ScrollBlockWhenCartShow(isCartHide);

  return (
    <CartBg className={isCartHide ? "" : "show"}>
      <CartModalDiv>
        <CartModalHeader>
          <CartToggleBtn onClick={() => setIsCartHide((prev) => !prev)}>
            <IoIosArrowForward />
          </CartToggleBtn>
          쇼핑 카트 ({list.length})
        </CartModalHeader>
        <CartModalMain>
          <CartElements>
            {list.map((element) => (
              <CartElement key={element.id}>
                <CartImgDiv>
                  <img
                    src={process.env.PUBLIC_URL + element.image}
                    alt="furniture"
                  />
                </CartImgDiv>
                <CartInfoDiv>
                  <p> &#60; &#60; 제품명 &#62; &#62;</p>
                  <p>색상{element.whichColor}</p>
                  <p>수량</p>
                  <CartNumberDiv>
                    <CartDecreaseBtn element={element} numbers={numbers} />

                    {/* find()를 사용해서 조건에 맞는 것들 중 가장 첫번 째 배열 값을 추출 */}
                    {/* 여기서는 element.id와 numbers 배열 중 원소의 id가 같은 경우의 number를 추출함 */}
                    {/* 이 방법이 가능한 이유는 id가 계속 증가해서 겹치는 상황이 없기 때문. */}
                    {numbers.find((number) => element.id === number.id).number}

                    <CartIncreaseBtn element={element} numbers={numbers} />
                  </CartNumberDiv>
                  <p>
                    ₩{" "}
                    {
                      totalChargeList[
                        indexList.find((item) => element.id === item.id).index
                      ]
                    }
                  </p>
                </CartInfoDiv>
                <CartDeleteBtn onClick={() => dispatch(removeCart(element.id))}>
                  <RiDeleteBackFill />
                </CartDeleteBtn>
              </CartElement>
            ))}
          </CartElements>
        </CartModalMain>
        <CartModalFooter>
          <p>
            소계
            <br />
            <strong>₩ {total}</strong>
          </p>
          <FooterBtn>주문 하기</FooterBtn>
        </CartModalFooter>
      </CartModalDiv>
    </CartBg>
  );
}

export default CartModal;

const CartBg = styled.div`
  display: none;

  &.show {
    display: block;
    position: relative;
    top: -40px;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10000;
  }
`;

const CartModalDiv = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  width: 25%;
  height: 100vh;
  background-color: white;
`;

const CartModalHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: #a98274;
  color: white;
  font-weight: bold;
  font-size: 25px;
`;

const CartToggleBtn = styled.button`
  all: unset;
  cursor: pointer;
`;

// 쇼핑 카트가 일정 개수 이상 넘어가면 나중에 추가된 애들은 화면에 잘려서 안 보임.
// 따라서 보여줄 수 있는 범위가 넘어가면 스크롤이 작동하도록 만들어야함.
// height로 최대 표시 영역을 만들어주고 넘어가면 자동으로 스크롤이 생성 되게 만듦.
const CartModalMain = styled.main`
  margin: 5px 0 0 5px;
  padding: 0;
  height: 500px;
  overflow: auto;
`;

const CartElements = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const CartElement = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #a98274;
`;

const CartImgDiv = styled.div`
  width: 125px;
  height: 125px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const CartInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;

  p {
    margin: 5px 0;
    padding: 0;
  }
`;

const CartNumberDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartDeleteBtn = styled.button`
  all: unset;
  position: relative;
  top: -50px;
  background-color: transparent;
  color: #a98274;
  cursor: pointer;
`;

const CartModalFooter = styled.footer`
  display: flex;
  padding: 0px 0 30px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
  background-color: white;
  color: black;
`;

const FooterBtn = styled.button`
  all: unset;
  cursor: pointer;
  display: block;
  width: 300px;
  height: 50px;
  color: white;
  font-weight: bold;
  background-color: #a98274;
  border-radius: 5px;
`;
