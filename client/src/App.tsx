import React, { useEffect, useState } from 'react';
import GetTodos from './api/api';
import './App.css';
import AddButton from './components/common/AddButton';
import Notebook from './components/notebook/Notebook';
import { Todo } from './types/Todo';

export default function App() {

  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    if (!todos.length)
      getTodos();
  }); 

  const getTodos = async () => {
    const todos = await GetTodos();
    setTodos(todos);
  }

  return (
    <div className="App">
      <Notebook todos={todos} />
    </div>
  );
}
