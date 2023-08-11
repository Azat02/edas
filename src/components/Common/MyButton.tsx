import { ReactNode, ButtonHTMLAttributes } from "react";
import styled from "styled-components";

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  padding?: string;
  text?: string;
  children: ReactNode;
  color?: string;
}

const Button = styled.button<MyButtonProps>`
  color: ${(props) => props.text || "white"};
  background: ${(props) => props.color || "#5050f6"};
  border: none;
  padding: ${(props) => props.padding || "13px 10px"};
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
`;

function MyButton({ children, ...props }: MyButtonProps) {
  return <Button {...props}>{children}</Button>;
}

export default MyButton;
