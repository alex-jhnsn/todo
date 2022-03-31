import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GetTodos from "../../api/api";
import { TodoListItem } from "../../types/TodoListItem";
import ListItem from "./ListItem";
import { v4 as uuid } from "uuid";

const ListContainer = styled.div`
  padding: 0 24px;
`;

export default function List () {

  const [todos, setTodos] = useState<TodoListItem[]>([]);

  useEffect(() => {
    if (!todos.length)
      initTodos();
  }); 

  const initTodos = async () => {
    const todos = await GetTodos();
    setTodos(todos);
  }

  const addTodo = () => {
    setTodos([...todos, {id: uuid(), value: "", isComplete: false}]);
  }

  const removeTodo = (id: string) => {
    setTodos(todos.filter(t => t.id !== id));
  }

  return (
    <ListContainer>
      { todos.map((todo, index) => 
        <ListItem 
          key={todo.id}
          updateFunction={() => {console.log("Update")}} 
          isLastItem={index === todos.length - 1} 
          addNewFunction={addTodo}
          removeFunction={removeTodo}
          {...todo} />) }
    </ListContainer>
  );
}