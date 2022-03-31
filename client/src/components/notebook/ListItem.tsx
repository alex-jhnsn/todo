import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { isPropertySignature } from "typescript";

const Foo = styled.div`
  margin: 24px 0;
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  width: 24px;
  height: 24px;
  margin: 0 12px 0 0;
`;

const Textbox = styled.input`
  color: #222;
  height: 24px;
  margin: 0;
  width: 100%;
`;

interface ListItemProps {
  id: string;
  value: string;
  isComplete: boolean;
  isLastItem: boolean;
  updateFunction: Function;
  addNewFunction: Function;
  removeFunction: (id: string) => void;
}

export default function ListItem ({ id, value, isComplete, isLastItem, updateFunction, addNewFunction, removeFunction }: ListItemProps) {

  const [isChecked, setIsChecked] = useState(isComplete);
  const [currentValue, setValue] = useState(value);

  useCallback(() => {
    updateFunction();
  }, [value, isChecked]);

  const handleToggleChecked = () => {
    setIsChecked(!isChecked);
  }

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }

  const handleEnterPressed = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter' && isLastItem && currentValue !== ""){
      addNewFunction();
    }
  }

  const handleOnBlur = () => {
    if (currentValue === "")
      removeFunction(id);
  }

  return (
    <Foo>
      <Checkbox 
        type="checkbox"
        name={value}
        value={id}
        checked={isChecked}
        onChange={handleToggleChecked}
        disabled={currentValue === ""} />
      
      <Textbox 
        type="text"
        value={currentValue}
        onChange={handleValueChange}
        onKeyUp={handleEnterPressed}
        onBlur={handleOnBlur}
        autoFocus={isLastItem} />
    </Foo>
  )
}