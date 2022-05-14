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
