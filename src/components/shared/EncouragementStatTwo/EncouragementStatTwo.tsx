"use client";
import React from "react";
import styled from "styled-components";
import { assests } from "../../../../public/assests";
import { ActionButton } from "@/components/template/button/NextQuestionButton";
import HeaderLarge from "@/components/template/text/HeaderLarge";
import Divider from "@/components/template/Divider";

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
        </ContentWrapper>
        <Divider />
        <HeaderImage loading="lazy" src={assests.ENOURAGEMENT_STAT_TWO} />

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
  margin-top: 10px;
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
  margin-bottom: 20px;
`;

const HeaderImage = styled.img`
  /* aspect-ratio: 0.9; */
  object-fit: contain;
  object-position: center;
  width: 100%;
  border-radius: 0;
  min-height: 451px;
`;
