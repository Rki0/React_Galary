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
        // 이 방식으로 list에 할당하면 배열에 상품 정보가 쌓이는게 아니고, 배열 원소 하나가 계속 갱신되는 형태라서 카트에 하나밖에 안 보이게 됨.
        // state.list = action.payload;

        // 이 방식으로 해야지 배열에 상품 정보가 쌓임.
        // state.list = state.list.concat(action.payload);

        // 바로 위 방법도 잘 작동하지만, 불변성을 유지하는 코드가 이상적이므로 spread 연산자를 사용함.
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
        // 여기서 element.id는 nextId이고, action.payload도 nextId이다. 사용된 부분이 달라서 이름이 달라진 것 뿐..
        // console.log(state.list.id);
        // console.log(state.list[0].id);
        // console.log(action.payload);
        // filter가 안 먹히는 이유는 element의 인덱스 번호가 없으면 undefined가 출력되기 때문이다.
        // state.list[0].id는 제대로 출력되지만, state.list.id는 undefined가 출력됨. 어떻게 해결해야할까...
        // state.list.filter((element) => element.id !== action.payload);

        // 이 방법을 쓰면, 삭제된 부분을 채우기 위해 원소가 당겨지므로 splice에 있는 action.payload가 오작동을 하게 된다.
        // id는 nextId이므로, 계속 증가하는데 반해, 배열은 줄었다 늘었다 하기 때문에 id의 크기와 배열의 개수가 안 맞는 경우가 있기 때문이다.
        // state.list.map((element) => {
        //   if (element.id === action.payload) {
        //     state.list.splice(action.payload, 1);
        //   }
        // });

        // 이렇게 써야 위에서 발생한 에러들을 피할 수 있음. 위에서 시도한 것들과 크게 다를게 없는 코드지만, spread 연산자로 state를 복제한 것이 가장 큰 열쇠가 아니었나 싶다.
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

    // DetailPage에서 수량을 결정하고, 그 수량을 initialState.list에 들어있는 number라는 key에 할당한다.
    // 이 number는 카트 내부에서 보여주는 수량이 된다. 리덕스 스토어에서 꺼내 쓰고 있기 때문. DetailPage에서 할당한 것과 동일한 값임.
    // 지금, 이 number를 변경하고 싶은데...
    // 만약, 카트 내부에서 수량을 변경하고싶다면, 카트 내부에 보이는 수량들을 array로 만들 필요가 있어보임. 불변성 관련 오류 때문에 변경이 쉽지않기 때문.
    // initailState에서 number만 또 따로 array로 만들어서 addCart, removeCart에서 추가 삭제를 구현하고, 별도로 증감 액션을 만들면 되지않을까?
    // spread 연산자는 array에 적용되기 때문.
    // 또한 number만 있는 array를 만들 때 id도 같이 넣어서, 어떤 상품에 해당하는 number인지 구분해야함. 안 그러면 삭제할 때 오류 발생할 것 같음.
    // 변경이 되는 것은 initialState의 numbers array이므로 카트에서 보여주는 수량은 list에 있는 number가 아니라 numbers에 있는 것으로 사용해야함.
    // 즉, list는 numbers에 초기 수량 저장용, numbers는 수량 변경용
    // 따라서 increaseNumber를 디스패치할 때 받아올 payload는 id뿐. 나머지는 addCart 디스패치 시 전부 준비됨.

    // 위 방법대로 해본 결과, numbers에 있는 number를 꺼내오는게 쉽지않음. list를 map하고 있기 때문에 코드가 난잡해지고, 데이터 접근이 어려움...

    // 사실 가장 간단한 방법은 map 할 때 element의 인덱스와 동일한 인덱스를 가진 numbers의 number를 뽑으면 됨.
    // id는 카트 상품을 추가,삭제 할 때마다 달라지므로, id를 인덱스 번호로 사용하면 안됨.
    // state.numbers[action.payload].number를 해봤는데 제대로 출력이 되지않음. 아까는 잘됐는데...
    increaseNumber: {
      reducer: (state, action) => {
        // state 전체를 object로 받아와서 필요한 부분만 수정해서 return 부분에서 그대로 numbers에 넣는다면?
        // state는 받아오는데 인덱스 번호가 없어서 numbers에서 원소 찾는게 안됨.
        // 따라서 nubmers랑 인덱스 번호를 payload로 가져오는 방법으로 전환.

        // payload에 있는 index 값을 변수로 생성
        // 예를들어 카트 첫 번째 상품을 클릭했다면 index = 0이 된다.
        const index = action.payload.index;

        // 불변성을 지키기 위해 spread 연산자를 사용하여 numbers 배열을 copy
        // 불변성을 지키기 위해 copy를 한다는 것을 까맣게 잊고 2일을 여기에만 쏟아부은게 너무 화난다.
        // 값을 수정하려면 꼭 copy를 해서 적용하자..
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

    // - 연산을 제외하고 모든게 increaseNumber와 동일
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
