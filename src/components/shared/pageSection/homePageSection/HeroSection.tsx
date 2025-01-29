import styled from "styled-components";
import { assests } from "../../../../../public/assests";

export const HeroSection = () => {
  return (
    <HeroWrapper>
      <HeroImage
        src={assests.MAIN_BACKGROUNG_IMAHE}
        alt="background"
        loading="lazy"
      />
      <HeroTitle>DIG <br /> INTO <br /> FUN</HeroTitle>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.section`
  position: relative;
  border-radius: 15px;
  aspect-ratio: 0.901;
  width: 100%;
  max-width: 319px;
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
  color: var(--color-basic-white);
  font-family: var(--font-hind-bold);
  font-size: 2.5rem;
  border: 5px solid var(--color-basic-white);
  border-radius: 15px;
  padding: 45px 13px 182px;
  margin: 7px 7px 0 0;
  line-height: 34px;
`;
