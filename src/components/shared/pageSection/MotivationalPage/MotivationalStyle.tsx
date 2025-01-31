import styled from "styled-components";

export const Container = styled.div`
position: relative;
  background-color: #fefaf5;
  display: flex;
  padding: 10px 30px;
  margin: 0 auto;
  align-items: center;
  color: rgba(0, 0, 0, 1);
  text-align: center;
  flex-direction: column;
  max-width: 480px;
  width: 100%;
  height: 100vh;
  /* @media (max-width: 500px) {
    justify-content: space-between;
  } */
`;

export const IconImage = styled.img<{ marginbottom?: string }>`
  aspect-ratio: 1.59;
  object-fit: contain;
  object-position: center;
  width: 35px;
  align-self: center;
  margin-bottom: ${({ marginbottom }) => marginbottom ? marginbottom : ""};
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


export const StrongSpan = styled.span`
  font-family: var(--font-hind-bold);
  font-size: 1.375rem;
  letter-spacing: -0.12px;
  line-height: 27.6px;
  color: var(--color-basic-black);
`

export const PendingResultImage = styled.img`
  object-fit: contain;
  object-position: center;
  width: 100%;
  border-radius: 15px;
  margin-top: 1rem;
`;