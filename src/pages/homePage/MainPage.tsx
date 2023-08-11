import AboutUs from "../../components/AboutItem";
import MyButton from "../../components/Common/MyButton";
import { Container } from "../../components/navBar/styles";
import {
  About,
  AboutImg,
  AboutSubTitile,
  AboutTitile,
  AboutWrapper,
  SubTitle,
  Title,
  Wrapper,
} from "./styles";



function MainPage() {
  interface AboutItemData {
    img: string;
    title: string;
    subtitle: string;
  }
  const AboutData: AboutItemData[] = [
    {
      img: "https://thumb.tildacdn.com/tild6563-6132-4039-a434-323636643430/-/cover/130x130/center/center/-/format/webp/settings.png",
      title: "Работаем по стандартам",
      subtitle:
        'Prime Clinic использует стандарты московского медицинского центра "Открытая Клиника". Наши врачи используют стандартизированные алгоритмы приёма пациентов.',
    },
    {
      img: "https://cdn2.vectorstock.com/i/1000x1000/77/56/clinic-rounded-icon-vector-7367756.jpg",
      title: "Работаем по стандартам",
      subtitle:
        'Prime Clinic использует стандарты московского медицинского центра "Открытая Клиника". Наши врачи используют стандартизированные алгоритмы приёма пациентов.',
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/5717/5717514.png",
      title: "Работаем по стандартам",
      subtitle:
        'Prime Clinic использует стандарты московского медицинского центра "Открытая Клиника". Наши врачи используют стандартизированные алгоритмы приёма пациентов.',
    },
  ];
  const videoId = "b8JbrexVM3o"; // Extracted from the URL
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  return (
    <>
      <Wrapper imageUrl="https://baker.edu.au/-/media/images/page-images/responsive-block/labs-page-image.png">
        <Container>
          <Title>
            ЭДАС <SubTitle>Массаж борбору</SubTitle>
          </Title>
          <SubTitle>
            ЮТ/висцеральной массажист 🔹ЛЕЧИТЕСЬ БЕЗ ХИМИИ! 🔹Стаж работы более
            8 лет 🔹Более 17000 (99%)довольных пациентов ЗДОРОВЬЕ-вопрос номер
            один!
          </SubTitle>
          <MyButton>Кабыл алууга жазылуу</MyButton>
        </Container>
      </Wrapper>
      <Container>
        <About>
          <AboutTitile>Биздин клиника жонундо</AboutTitile>
          <AboutSubTitile>
            Аллахым берсин шыпаасын Алтынбек кылсын кызматын!
          </AboutSubTitile>
          <AboutWrapper>
            <div>
              {AboutData.map((item, index) => (
                <AboutUs
                  key={index}
                  img={item.img}
                  title={item.title}
                  subtitle={item.subtitle}
                />
              ))}
            </div>
            <iframe
              width="600" // Set the width of the video
              height="400" // Set the height of the video
              src={embedUrl}
              title="YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </AboutWrapper>
        </About>
      </Container>
    </>
  );
}

export default MainPage;
