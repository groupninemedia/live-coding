import styled from 'styled-components';

const ContentWrap = styled.div`
  max-width: 1000px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 20px 30px;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
`;

const CarouselWrap = styled.div`
  overflow: hidden;
`;

const PageTitle = styled.div`
  margin-bottom: 50px;
  font: bold 30px arial;
`;

const CarouselItem = styled.div`
  width: 270px;
`;

const CarouselItemLink = styled.a`
  display: block;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const CarouselItemImg = styled.div`
  > img {
    width: 100%;
  }
`;

const CarouselItemTitle = styled.div`
`;


export default { 
  ContentWrap, 
  PageTitle, 
  CarouselWrap, 
  CarouselItem, 
  CarouselItemLink, 
  CarouselItemImg, 
  CarouselItemTitle
}