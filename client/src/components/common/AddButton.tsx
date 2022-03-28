import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Function } from "@babel/types";

const RoundImageButton = styled.button`

`;

interface AddButtonProps {
  icon: IconProp;
  function: Function;
}

export default function AddButton ({ icon, function }: AddButtonProps) {

  return (
    <RoundImageButton>
      <FontAwesomeIcon icon={icon} />
    </RoundImageButton>
  );
}