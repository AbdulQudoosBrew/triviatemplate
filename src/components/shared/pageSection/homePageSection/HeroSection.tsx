import styled from "styled-components";
import { assests } from "../../../../../public/assests";

export const HeroSection = () => {
  return (
    <HeroWrapper>
      <MainImageDiv>
        <HeroImage
          src={assests.MAIN_BACKGROUNG_IMAHE}
          alt="background"
          loading="lazy"
        />
        <HeroTitleDiv>
          <HeroTitle>DIG <br /> INTO <br /> FUN</HeroTitle>
        </HeroTitleDiv>
      </MainImageDiv>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.section`
  position: relative;
  border-radius: 15px;
  width: 100%;
  margin: 12px 0px
`;

const HeroTitleDiv = styled.div`
position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border: 5px solid var(--color-basic-white);
  border-radius: 15px;
  border-left: none;
  padding-top: 2rem;
  line-height: 34px;
  text-align: left;
`;

const MainImageDiv = styled.div`
  position: relative;
  width: 100%;
  height: 354px;
  border-radius: 15px;
  padding: 10px;
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
  /* position: relative; */
  color: var(--color-basic-white);
  font-family: var(--font-hind-bold);
  font-size: 2.5rem;
  /* overflow: hidden;
  border: 5px solid var(--color-basic-white);
  border-radius: 15px;
  border-left: none;
  padding: 7px 7px 0 0;
  line-height: 34px;
  text-align: left; */
`;
