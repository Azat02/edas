import styled from "styled-components";

export const Title = styled.div`
  width: 200px;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #fff;
`;

export const SubTitle = styled.div`
  width: 300px;
  font-size: 20px;
  margin-bottom: 40px;
  font-weight: 400;
  color: #fff;
`;

interface StyledContainerProps {
  imageUrl: string;
}

export const Wrapper = styled.div<StyledContainerProps>`
  padding: 150px 0;
  width: 100%;
  height: 650px;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
`;

export const About = styled.div`
  width: 100%;
  min-height: 250px;
  padding: 50px 0;
`;

export const AboutTitile = styled.div`
  color: #5050f6;
  text-align: center;
  font-size: 32px;
  font-weight: 900;
`;

export const AboutSubTitile = styled.div`
  text-align: center;
  font-size: 20px;
  color: #505050;
  font-weight: 600;
  width: 560px;
  margin: 30px auto;
`;

export const AboutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
`;

export const AboutImg = styled.img`
  width: 560px;
  height: 373px;
`;
