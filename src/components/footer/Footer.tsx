import { Link } from "react-router-dom";
import { Title } from "../../pages/homePage/styles";
import { Container } from "../navBar/styles";
import {
  FindWrapper,
  FooterLink,
  FooterWrapper,
  LinkWrapper,
  Logo,
  StyledLink,
  Wrapper,
} from "./styles";

function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Wrapper>
          <Link to="/">
            <img
              style={{ width: "70px", height: "70px" }}
              src="https://seeklogo.com/images/H/hospital-clinic-plus-logo-7916383C7A-seeklogo.com.png"
              alt=""
            />
          </Link>
          <LinkWrapper>
            <StyledLink to="/">Башкы бет</StyledLink>
            <StyledLink to="/contact">Контакттар</StyledLink>
            <StyledLink to="/contact">Биз жонундо</StyledLink>
          </LinkWrapper>
          <LinkWrapper>
            <StyledLink to="/">Башкы бет</StyledLink>
            <StyledLink to="/contact">Контакттар</StyledLink>
            <StyledLink to="/contact">Биз жонундо</StyledLink>
          </LinkWrapper>
          <LinkWrapper>
            <Title>Контакттар</Title>
            <h4 style={{ color: "white" }}>Лущихина 99г</h4>
            <FooterLink href="tel:+996770114114">
              +996 770 114-114
            </FooterLink>
            <FooterLink href="tel:+996770114114">
            +996 770 114-114
            </FooterLink>
            <FooterLink href="tel:+996770114114">
            +996 770 114-114
            </FooterLink>
            <FooterLink href="mailto:info@unimed.kg">info@unimed.kg</FooterLink>
          </LinkWrapper>
          <FindWrapper>
            <Title style={{ color: "white" }}>Найдите нас</Title>
            <div>
              <FooterLink
                href="https://www.facebook.com/Unimed-Clinic-1046019432220340"
                target="_blank"
              >
                <img src="http://unimed.kg/assets/img/fb_icon.png" alt="" />
              </FooterLink>
              <FooterLink
                href="https://www.instagram.com/unimed_clinic/"
                target="_blank"
              >
                <img src="http://unimed.kg/assets/img/ins_icon.png" alt="" />
              </FooterLink>
            </div>
          </FindWrapper>
        </Wrapper>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
