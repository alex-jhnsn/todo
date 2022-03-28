import React, { useState } from "react";
import styled from "styled-components";

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
}

export default function ListItem (props: ListItemProps) {

  const [isComplete, setIsComplete] = useState(props.isComplete);
  const [value, setValue] = useState(props.value);

  const handleToggleComplete = () => {
    setIsComplete(!isComplete);
  }

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }

  return (
    <Foo>
      <Checkbox type="checkbox" name={value} value={props.id} checked={isComplete} onChange={handleToggleComplete} />
      <Textbox type="text" value={value} onChange={handleValueChange} />
    </Foo>
  )
}