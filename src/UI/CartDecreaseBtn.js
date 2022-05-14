import styled from "styled-components";
import { useDispatch } from "react-redux";
import { decreaseNumber } from "../Redux/CartManage";

function CartDecreaseBtn({ element, numbers }) {
  const dispatch = useDispatch();

  return (
    <DecreaseBtn
      onClick={() => {
        const thisId = numbers.find((number) => element.id === number.id).id;

        const index = numbers.indexOf(
          numbers.find((number) => thisId === number.id)
        );

        const decreaseObject = {
          numbers,
          index,
        };

        dispatch(decreaseNumber(decreaseObject));
      }}
    >
      -
    </DecreaseBtn>
  );
}

export default CartDecreaseBtn;

const DecreaseBtn = styled.button`
  all: unset;
  border: 1px solid gray;
  border-radius: 5px;
  width: 25px;
  height: 25px;
  text-align: center;
  cursor: pointer;
`;
