import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
`;

export const StyledInput = styled.input`
  width: 72px;
  height: 38px;
  background-color: ${props => props.theme['base-button']};
  border-radius: 6px;
  text-align: center;
`;

export const MinusIcon = styled.i`
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
`;

export const PlusIcon = styled.i`
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
`;