import styled from "styled-components";

export const QuizIntro = () => {
  return (
    <IntroWrapper>
      <IntroHeading>Find Your Perfect Meal Solution in 2 Minutes!</IntroHeading>
      <IntroDescription>
        Take our
        <span className="font-weight: 600;">quick quiz</span> to discover which
        meal kit or
        <span className="font-weight: 600;">ready-to-heat</span>
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
  font-weight: 400;
  color: #000;
`;

const IntroDescription = styled.p`
  margin-top: 13px;
  font: 18px/22px Hind, sans-serif;
  color: #000;
`;
