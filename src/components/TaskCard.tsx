import React from "react";
import styled from "styled-components";
import { ITask } from "../contexts/BoardsContext";

const Wrapper = styled.div`
  cursor: pointer;
  width: 100%;
  min-height: 80px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.elementBackground};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 16px;
  gap: 8px;
  box-shadow: 0px 4px 6px ${(props) => props.theme.colors.boxShadowColor};
  h2 {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: ${(props) => props.theme.fontSizes.headingM};
  }
  span {
    color: ${(props) => props.theme.colors.alternativeTextColor};
    font-size: ${(props) => props.theme.fontSizes.bodyM};
    font-weight: bold;
  }
`;

const TaskCard = ({ item }: { item: ITask }) => {
  function getCompletedTasksNumber() {
    let count = 0;
    item.subtasks.forEach((i) => {
      if (i.completed) {
        count += 1;
      }
    });
    return count;
  }
  return (
    <Wrapper>
      <h2>{item.title}</h2>
      {item.subtasks.length > 0 && (
        <span>
          {getCompletedTasksNumber()} of {item.subtasks.length} subtasks
        </span>
      )}
    </Wrapper>
  );
};

export default TaskCard;
