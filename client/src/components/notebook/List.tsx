import React from "react";
import styled from "styled-components";
import { Todo } from "../../types/Todo";
import ListItem from "./ListItem";

interface ListProps {
  todos: Todo[];
}

const ListContainer = styled.div`
  padding: 0 24px;
`;

export default function List ({ todos }: ListProps) {
  return (
    <ListContainer>
      { todos.map(todo => <ListItem key={todo.id} {...todo} />) }
    </ListContainer>
  )
}