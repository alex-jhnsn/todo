import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const RoundButton = styled.button`
  padding: 12px;
  border-radius: 50%;
  width: 50px;
  height: 50px;

  > svg {
    width: 18px;
    height: 18px;
  }
`;

interface ImageButtonProps {
  icon: IconProp;
  functionHandler: Function;
  disabled?: boolean
}

export default function RoundImageButton ({ icon, functionHandler, disabled }: ImageButtonProps) {

  return (
    <RoundButton onClick={() => functionHandler()} disabled={disabled} >
      <FontAwesomeIcon icon={icon} />
    </RoundButton>
  );
}