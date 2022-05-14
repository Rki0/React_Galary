import styled from "styled-components";
import { useDispatch } from "react-redux";
import { increaseNumber } from "../Redux/CartManage";

function CartIncreaseBtn({ element, numbers }) {
  const dispatch = useDispatch();

  return (
    <IncreaseBtn
      onClick={() => {
        // find()를 통해 element.id와 같은 id를 갖는 numbers 배열 원소의 id를 찾음.
        // id는 카트가 추가, 제거되는 상황에서 변하지 않는 값을 가지기 때문에 지표로 사용하기 좋음. 그와 반대로, 인덱스는 계속 변함.
        const thisId = numbers.find((number) => element.id === number.id).id;

        // 디스패치 되는 원소의 인덱스 번호 추출
        const index = numbers.indexOf(
          numbers.find((number) => thisId === number.id)
        );

        // numbers 배열과 클릭된 카트 상품의 index를 액션의 payload로 전달하기 위해 object로 묶어줌.
        // numbers 배열을 리덕스 스토어 내부에서 바로 쓰려고했으나 에러가 발생해서, 결국 디스패치할 때 다시 보내주는 것으로 결정함.
        const increaseObject = {
          numbers,
          index,
        };

        dispatch(increaseNumber(increaseObject));
      }}
    >
      +
    </IncreaseBtn>
  );
}

export default CartIncreaseBtn;

const IncreaseBtn = styled.button`
  all: unset;
  border: 1px solid gray;
  border-radius: 5px;
  width: 25px;
  height: 25px;
  text-align: center;
  cursor: pointer;
`;
