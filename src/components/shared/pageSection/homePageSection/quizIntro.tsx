import HeaderLarge from "@/components/template/text/HeaderLarge";
import styled from "styled-components";

export const QuizIntro = () => {
  return (
    <IntroWrapper>
      <HeaderLarge
        fontSize="semiLarge"
        letterSpacing="0"
        textshadow='0px 12px 56px rgba(0, 0, 0, 0.25)'
      >
        Find Your Perfect Meal Solution in 2 Minutes!
      </HeaderLarge>
      <IntroDescription>
        Take our{" "}
        <StrongText> quick quiz </StrongText> to discover which
        meal kit or{" "}
        <StrongText> ready-to-heat </StrongText>
        option fits your lifestyle best.
      </IntroDescription>
    </IntroWrapper>
  );
};

const IntroWrapper = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  text-align: center;
`;

const IntroDescription = styled.p`
  margin-top: 1rem;
  font-family: var(--font-hind-regular);
  font-size: 1.125rem;
  color: var(--color-basic-black);
  line-height: 22px;
`;

const StrongText = styled.span`
  font-weight: bold;
  font-family: var(--font-hind-semi-bold);
`;
