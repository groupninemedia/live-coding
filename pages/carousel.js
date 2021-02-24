import Header from '../components/header';
import Styled from './styles/carousel.styles';

const CarouselPage = () => {

  const imgPrefix = "https://assets3.thrillist.com/v1/image";
  const imgSuffix = "600x500/crop;jpeg_quality=60.jpg";

  const data = [
    {
      imgId: 1764145,
      title: "The Sheer Terror of Scaling Colorado's Via Ferrata"
    },
    {
      imgId: 1756850,
      title: "The Most Beautiful Places to Rock Climb in North Carolina"
    },
    {
      imgId: 2945768,
      title: "How to Prep for a Wintry Outdoor Adventure"
    },
    {
      imgId: 1764145,
      title: "Ready to Take a Hike? Load up on Gear From This Nathan Sports Sale First."
    },
  ];

  const CarouselElement = ({item}) => {
    return (
      <Styled.CarouselItem>
        <Styled.CarouselItemLink href="/">
          <Styled.CarouselItemImg>
            <img src={`${imgPrefix}/${item.imgId}/${imgSuffix}`} />
          </Styled.CarouselItemImg>
          <Styled.CarouselItemTitle>
            {item.title}
          </Styled.CarouselItemTitle>
        </Styled.CarouselItemLink>
      </Styled.CarouselItem>
    )
  };

  return process.browser ? (
    <>
      <Header />

      <Styled.ContentWrap>

        <Styled.PageTitle>Rock Climbing Lyfe</Styled.PageTitle>

        <Styled.CarouselWrap>

        </Styled.CarouselWrap>

      </Styled.ContentWrap>
    </>
  ) : null;

};

export default CarouselPage;