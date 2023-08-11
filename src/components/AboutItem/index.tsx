import { AboutItem, ItemSubTitle, ItemTitle } from './styles';

interface AboutUsProps {
  img: string;
  title: string;
  subtitle: string;
}

function AboutUs(props: AboutUsProps) {
  return (
    <AboutItem>
      <img style={{width: '80px', height: '80px'}} src={props.img} alt="" />
      <div>
        <ItemTitle>{props.title}</ItemTitle>
        <ItemSubTitle>{props.subtitle}</ItemSubTitle>
      </div>
    </AboutItem>
  );
}

export default AboutUs;
