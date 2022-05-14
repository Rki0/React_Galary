import CollectionSlider from "../UI/CollectionSlider";
import { useRef } from "react";

function DeskCollection() {
  // desk 이미지를 넣기 위한 빈 배열
  let deskImg = [];

  const nextId = useRef(0);

  // 이름을 통일한 desk 이미지를 빈 배열에 삽입
  for (let i = 0; i < 8; i++) {
    deskImg[i] = { img: `/assets/desks/desk${i}.jpg`, id: nextId.current };

    nextId.current += 1;
  }

  return <CollectionSlider furnitureImg={deskImg} whatFurniture="desks" />;
}

export default DeskCollection;
