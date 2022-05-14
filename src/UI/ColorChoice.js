import styled from "styled-components";

function ColorChoice({ value, colorNumber, setWhichColor }) {
  // props로 받아 온 값을 사용하기 위해 내부에 선언
  const WhichColor = styled.button`
    cursor: pointer;
    display: block;
    width: 40px;
    height: 40px;
    border: 2px solid black;
    border-radius: 50%;
    background-color: ${colorNumber};
  `;

  function checkColor() {
    setWhichColor(value);
  }

  return (
    <>
      <WhichColor onClick={checkColor} />
    </>
  );
}

export default ColorChoice;
