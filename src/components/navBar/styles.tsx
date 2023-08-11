import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.div`
  width: 100%;
  height: 90px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px;
  padding: 10px 0;
`;
export const Container = styled.div`
  width: 85%;
  margin: 0 auto;
`;
export const Logo = styled.h1``;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  justify-content: space-between;
`;
export const StyledLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 50%;
`;
export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
