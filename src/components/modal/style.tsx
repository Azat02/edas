import styled from "styled-components";

export const Wrapper = styled.div`
    box-shadow: -30px 30px 50px rgba(28, 28, 30, 0.1);
    border-radius: 25px;
    padding: 40px 60px;
    background: #f9fafb;
    width: 526px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
`

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
`
export const ModalTitle = styled.div`
    font-size: 25px;
    text-align: center;
    font-weight: 600;
`