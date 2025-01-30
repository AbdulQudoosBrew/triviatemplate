import styled from "styled-components";

export const Container = styled.div`
  /* border-radius: 0;
  display: flex;
  max-width: 327px;
  flex-direction: column;
  color: #000;
  text-align: center;
  font: 400 22px Hind, sans-serif;
  justify-content: center;
  align-items: center; */
  /* gap: 10px; */
  background-color: #fefaf5;
  display: flex;
  padding: 30px;
  margin: 0 auto;
  align-items: center;
  color: rgba(0, 0, 0, 1);
  text-align: center;
  flex-direction: column;
  max-width: 480px;
  width: 100%;
  height: 100vh;
`;

export const IconImage = styled.img`
  aspect-ratio: 1.59;
  object-fit: contain;
  object-position: center;
  width: 35px;
  align-self: center;
`;

export const Heading = styled.h1`
  text-shadow: 0px 12px 56px rgba(0, 0, 0, 0.25);
  align-self: center;
  margin-top: 43px;
  font: 48px/1 Palmer Lake Print, sans-serif;
`;

export const Divider = styled.hr`
  margin: 22px 0;
  width: 100%;
  height: 1px;
  border: 1px dashed #DB3512;
`;

export const InfoCard = styled.div`
  border-radius: 0.938rem;
  background-color: #F7D1C5;
  display: flex;
  flex-direction: column;
  letter-spacing: -0.12px;
  line-height: 28px;
  padding: 0.938rem 1.438rem 1.438rem;
`;

export const ContentImage = styled.img`
  aspect-ratio: 1.29;
  object-fit: contain;
  object-position: center;
  width: 100%;
  border-radius: 15px;
  margin-top: 9px;
`;

export const Citation = styled.cite`
  color: #A0A0A0;
  text-shadow: 0px 12px 56px rgba(0, 0, 0, 0.25);
  font-size: 12px;
  line-height: 12px;
  letter-spacing: -0.12px;
  align-self: center;
  margin-top: 23px;
`;

export const CallToAction = styled.button`
  text-shadow: 0px 12px 56px rgba(0, 0, 0, 0.25);
  border-radius: 70px;
  background-color: #DB3512;
  box-shadow: 0px 0px 16px rgba(211, 58, 72, 0.2);
  margin-top: 47px;
  width: 100%;
  color: #FEFAF5;
  font-weight: 500;
  line-height: 1;
  padding: 44px 70px 19px;
  border: none;
  cursor: pointer;
  
  &:focus {
    outline: 2px solid #000;
    outline-offset: 2px;
  }
`;

export const StrongSpan = styled.span`
  font-family: var(--font-hind-bold);
  font-size: 1.375rem;
  letter-spacing: -0.12px;
  line-height: 27.6px;
  color: var(--color-basic-black);
`