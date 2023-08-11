import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../Common/Input";
import MyButton from "../Common/MyButton";
import Modal from "../modal/Modal";
import { ModalTitle } from "../modal/style";
import {
  Buttons,
  Container,
  Links,
  Logo,
  Nav,
  StyledLink,
  Wrapper,
} from "./styles";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [consultation, setConsultation] = useState(false);
  return (
    <Nav>
      <Container>
        <Wrapper>
          <Link to="/">
            <img
              style={{ width: "70px", height: "70px" }}
              src="https://seeklogo.com/images/H/hospital-clinic-plus-logo-7916383C7A-seeklogo.com.png"
              alt=""
            />
          </Link>
          <Links>
            <StyledLink to="/">Башкы бет</StyledLink>
            <StyledLink to="/contact">Контакттар</StyledLink>
            <StyledLink to="/contact">Биз жонундо</StyledLink>
            <StyledLink to="/admin">Admin</StyledLink>
          </Links>
          <Buttons>
            <MyButton onClick={() => setOpen(true)}>
              Кабыл алууга жазылуу
            </MyButton>
            <MyButton onClick={() => setConsultation(true)}>
              Консультациягв алууга жазылуу
            </MyButton>
          </Buttons>
        </Wrapper>
      </Container>
      {isOpen && (
        <Modal setOpen={setOpen} isOpen={isOpen}>
          <ModalTitle>Кабыл алууга жазылуу</ModalTitle>
          <Input type="text" placeholder="ФИО" />
          <Input type="text" placeholder="Telephon number" />
          <MyButton onClick={() => setOpen(false)}>Кабылдама калтыруу</MyButton>
        </Modal>
      )}
      {consultation && (
        <Modal setOpen={setConsultation} isOpen={consultation}>
          <ModalTitle>Консультациягв алууга жазылуу</ModalTitle>
          <Input type="text" placeholder="ФИО" />
          <Input type="text" placeholder="Telephon number" />
          <MyButton onClick={() => setConsultation(false)}>Кабылдама калтыруу</MyButton>
        </Modal>
      )}
    </Nav>
  );
}

export default Navbar;
