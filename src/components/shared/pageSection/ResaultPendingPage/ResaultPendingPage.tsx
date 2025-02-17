"use client";
import React from "react";
import {
  IconImage,
  PendingResultImage,
} from "../MotivationalPage/MotivationalStyle";
import { assests } from "../../../../../public/assests";
import { ProgressStatusBar } from "./ProgressStatusBar";
import HeaderLarge from "@/components/template/text/HeaderLarge";
import { useEffect } from "react";
import styled from "styled-components";
import { ResaultPendingPageProps } from "@/types/types";

const ResaultPendingPage: React.FC<ResaultPendingPageProps> = ({
  showPercentageResultPending,
  percentage,
}) => {
  useEffect(() => {
    showPercentageResultPending();
  }, []);

  return (
    <ResaultContainer>
      <IconImage
        loading="lazy"
        src={assests.SOYUMMY_MAIN_LOGO_SMALL}
        alt="Food waste icon"
        marginbottom="2rem"
      />
      <ProgressStatusBar percentage={percentage} />
      <HeaderLarge
        fontSize="medium"
        letterSpacing="0"
        textshadow="0px 12px 56px rgba(0, 0, 0, 0.25)"
        margin="15px 0px"
      >
        YOUR PERFECT MATCH IS...
      </HeaderLarge>
      <PendingResultImage src={assests.RESAULTPENDING} />
    </ResaultContainer>
  );
};

const ResaultContainer = styled.div`
  position: relative;
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

export default ResaultPendingPage;
