import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 500px;
  padding: 50px 0;
`;

export const CalendarWrapper = styled.div`
  display: flex;
`;
export const TimesWrapper = styled.div`
  width: 110px;
  height: 265px;
  border: none;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
`;

export const Times = styled.div`
  width: 60px;
  height: 30px;
  background: #fff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    background: #0074d9;
    color: white;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 50px;
`;

