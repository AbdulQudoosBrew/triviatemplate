import styled from "styled-components";

export const QuizIntro = () => {
  return (
    <IntroWrapper>
      <IntroHeading>Find Your Perfect Meal Solution in 2 Minutes!</IntroHeading>
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
  max-width: 327px;
  flex-direction: column;
  text-align: center;
  margin-top: 24px;
`;

const IntroHeading = styled.h2`
  text-shadow: 0px 12px 56px rgba(0, 0, 0, 0.25);
  font-family: var(--font-palmerlakeprint-regular);
  font-size: 2.75rem;
  line-height: 30px;
  font-weight: 500;
  color: var(--color-basic-black);
  letter-spacing: 2px;
  font-weight: bold;
`;

const IntroDescription = styled.p`
  margin-top: 13px;
  font-family: var(--font-hind-regular);
  font-size: 1.125rem;
  color: var(--color-basic-black);
  line-height: 22px;
`;

const StrongText = styled.span`
  font-weight: bold;
  font-family: var(--font-hind-semi-bold);
`;
