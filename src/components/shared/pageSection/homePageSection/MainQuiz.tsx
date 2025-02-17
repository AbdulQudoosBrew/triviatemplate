"use client";
import * as React from "react";
import styled from "styled-components";
import { HeroSection } from "./HeroSection";
import { ActionButton } from "@/components/template/button/NextQuestionButton";
import { assests } from "../../../../../public/assests/index";
import { QuizIntro } from "./quizIntro";
import { MainQuizProps } from "@/types/types";
import Image from "next/image";

export const MainQuiz: React.FC<MainQuizProps> = ({ handleStartQuiz }) => {
  return (
    <QuizContainer>
      <LogoImage
        src={assests.SOYUMMY_MAIN_LOGO}
        alt="main-logo"
        width={115}
        height={27}
        loading="lazy"
      />
      <HeroSection />
      <QuizIntro />
      <ActionButton
        // setmargintop="8px"
        height="56px"
        type="button"
        onClick={handleStartQuiz}
        completionTime="Less than 2 Minutes to Complete!"
        timerIcon={assests.TIMER_ICON}
      >
        LET&apos;S START 👉
      </ActionButton>
    </QuizContainer>
  );
};

const QuizContainer = styled.div`
  background-color: #fefaf5;
  display: flex;
  padding: 5px 30px;
  margin: 0 auto;
  align-items: center;
  text-align: center;
  flex-direction: column;
  max-width: 480px;
  width: 100%;  
  height: 100vh;
  justify-content: space-around;
`;

const LogoImage = styled(Image)`
  object-fit: contain;
  margin: 10px 0px;
`;
