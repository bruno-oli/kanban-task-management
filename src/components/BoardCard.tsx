import React, { useContext } from "react";
import styled from "styled-components";
import { BoardsContext, IBoard } from "../contexts/BoardsContext";

import iconBoard from "../assets/icon-board.svg";
import iconBoardActive from "../assets/icon-board-active.svg";

const Wrapper = styled.div`
  cursor: pointer;
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease-out;
  span {
    font-weight: bold;
    font-size: ${(props) => props.theme.fontSizes.headingM};
    color: ${(props) => props.theme.colors.alternativeTextColor};
  }
  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    left: -34px;
    height: 100%;
    width: 0;
    background-color: ${(props) => props.theme.colors.primaryColor};
    border-radius: 0px 100px 100px 0px;
    transition: width 0.3s ease-out;
  }
  &.active {
    &::before {
      width: calc(100% + 34px);
    }
    span {
      color: ${(props) => props.theme.colors.white};
    }
  }
`;

const BoardCard = ({ item }: { item: IBoard }) => {
  const { setActiveBoard, activeBoard } = useContext(BoardsContext);
  return (
    <Wrapper
      onClick={() => setActiveBoard(item)}
      className={activeBoard?.id === item.id ? "active" : ""}
    >
      <img
        src={activeBoard?.id === item.id ? iconBoardActive : iconBoard}
        alt="icon board"
      />
      <span>{item.name}</span>
    </Wrapper>
  );
};

export default BoardCard;