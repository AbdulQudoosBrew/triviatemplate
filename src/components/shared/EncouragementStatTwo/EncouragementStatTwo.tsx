"use client";
import React from "react";
import styled from "styled-components";
import { assests } from "../../../../public/assests";
import { ActionButton } from "@/components/template/button/NextQuestionButton";
import HeaderLarge from "@/components/template/text/HeaderLarge";

export default function EncouragementStatTwo({ onContinue }: any) {
  return (
    <>
      <MainContainer>
        <ContentWrapper>
          <BrandLogo loading="lazy" src={assests.SOYUMMY_MAIN_LOGO_SMALL} />
          <HeaderLarge fontSize="medium">
            {" "}
            SAVE MORE TIME, <br /> ENJOY MORE MEAL!{" "}
          </HeaderLarge>
          <Divider />

          <HeaderImage loading="lazy" src={assests.ENOURAGEMENT_STAT_TWO} />
        </ContentWrapper>
        <ActionButton height="56px" type="button" onClick={onContinue}>
          {" "}
          WOW!{" "}
        </ActionButton>
      </MainContainer>
    </>
  );
}
const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  gap: 10px;
`;
const MainContainer = styled.section`
  background-color: #fefaf5;
  display: flex;
  padding: 20px;
  margin: 0 auto;
  align-items: center;
  color: rgba(0, 0, 0, 1);
  text-align: center;
  flex-direction: column;
  max-width: 480px;
  width: 100%;
  height: 100vh;
  justify-content: space-between;
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
  /* aspect-ratio: 0.9; */
  object-fit: contain;
  object-position: center;
  width: 100%;
  border-radius: 0;
  min-height: 451px;
`;
