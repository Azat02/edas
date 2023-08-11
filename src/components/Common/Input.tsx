import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputStyle = styled.input<InputProps>`
  width: 100%;
  height: 50px;
  padding: 0 20px;
  border: 1px solid #5050f6;
  border-radius: 5px;
`;

function Input(props: InputProps) {
  return <InputStyle {...props} />;
}

export default Input;
