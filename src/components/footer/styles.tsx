import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterWrapper = styled.div`
  background: #4141ab;
  padding: 45px 0;
  width: 100%;
  height: 250px;
`;

export const Logo = styled.h1`
  color: #fff;
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 20px;
  line-height: 2;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FooterLink = styled.a`
  color: #007bff;
  text-decoration: none;
  margin-right: 20px;
  margin-top: 5px;
  &:hover {
    text-decoration: underline;
  }
`;

export const FindWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
