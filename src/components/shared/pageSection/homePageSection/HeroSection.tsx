import styled from 'styled-components';
import { assests } from '../../../../../public';

export const HeroSection = () => {
    return (
        <HeroWrapper>
            <HeroImage src={assests.MAIN_BACKGROUNG_IMAHE} alt="background" loading="lazy" />
            <HeroTitle>DIG INTO FUN</HeroTitle>
        </HeroWrapper>
    );
};

const HeroWrapper = styled.section`
  position: relative;
  border-radius: 15px;
  aspect-ratio: 0.901;
  width: 100%;
  max-width: 319px;
  margin-top: 53px;
`;

const HeroImage = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 15px;
`;

const HeroTitle = styled.h1`
  position: relative;
  color: #fff;
  font: 700 40px/34px Hind, sans-serif;
  border: 5px solid #fff;
  border-radius: 15px;
  padding: 48px 6px 154px;
`;