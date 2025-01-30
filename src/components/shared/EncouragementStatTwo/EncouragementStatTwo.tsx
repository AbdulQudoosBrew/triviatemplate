"use client";
import React from "react";
import styled from "styled-components";
import { assests } from "../../../../public/assests";
import { ActionButton } from "@/components/template/button/NextQuestionButton";
import HeaderLarge from "@/components/template/text/HeaderLarge";

export default function EncouragementStatTwo() {
  const handleWowButton = () => {
    // Quiz start logic here
  };
  return (
    <>
      <MainContainer>
        <BrandLogo loading="lazy" src={assests.SOYUMMY_MAIN_LOGO_SMALL} />
        <HeaderLarge fontSize="medium">  SAVE MORE TIME,  <br /> ENJOY MORE MEAL!  </HeaderLarge>
        <Divider />

        <HeaderImage loading="lazy" src={assests.ENOURAGEMENT_STAT_TWO} />
        <ActionButton  setMarginTop="20px" height="56px"  type="button" onClick={handleWowButton}  >   WOW!  </ActionButton>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.section`
  background-color: #fefaf5;
  display: flex;
  padding: 20px;
  margin: 0 auto;
  align-items: center;
  gap: 10px;
  color: rgba(0, 0, 0, 1);
  text-align: center;
  /* justify-content: center; */
  flex-direction: column;
  max-width: 480px;
  width: 100%;
  height: 100vh;
`;

const BrandLogo = styled.img`
  aspect-ratio: 1.59;
  object-fit: contain;
  object-position: center;
  width: 35px;
  height: 22px;
`;

const Divider = styled.div`
  align-self: stretch;
  width: 100%;
  height: 1px;
  margin: 10px 0;
  border: none;
  border-top: 1.5px dashed rgba(219, 53, 18, 1);
  border-image: repeating-linear-gradient(
      to right,
      rgba(219, 53, 18, 1),
      rgba(219, 53, 18, 1) 10px,
      transparent 10px,
      transparent 20px
    )
    1;
`;

const HeaderImage = styled.img`
  aspect-ratio: 0.9;
  object-fit: contain;
  object-position: center;
  width: 100%;
  border-radius: 0;
  margin-top: 5px;
`;
