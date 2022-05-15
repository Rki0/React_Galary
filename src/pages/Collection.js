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

const CollectionBackground = styled.div`
  background-color: #be9c91;
`;

const CollectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainTitle = styled.h1`
  font-family: "DM Serif Text", serif;
  font-size: 26px;
`;
