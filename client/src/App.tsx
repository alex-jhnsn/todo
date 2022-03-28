import React, { useEffect, useState } from 'react';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import GetTodos from './api/api';
import './App.css';
import RoundImageButton from './components/common/RoundImageButton';
import Notebook from './components/notebook/Notebook';
import { Todo } from './types/Todo';

export default function App() {



  return (
    <div className="App">
      <Notebook />
    </div>
  );
}
