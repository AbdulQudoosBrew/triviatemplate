"use client";
import * as React from "react";
import styled from "styled-components";
import { HeroSection } from "./HeroSection";
import { ActionButton } from "@/components/template/button/NextQuestionButton";
import { assests } from "../../../../../public/assests/index";
import { QuizIntro } from "./quizIntro";

export const MainQuiz: React.FC = () => {
  const handleStartQuiz = () => {
    // Quiz start logic here
  };

  return (
    <QuizContainer>
      <LogoImage
        src={assests.SOYUMMY_MAIN_LOGO}
        alt="main-logo"
        width={115}
        height={27}
      />
      <HeroSection />
      <QuizIntro />
      <ActionButton
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

const QuizContainer = styled.main`
  background-color: #fefaf5;
  display: flex;
  max-width: 480px;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
`;

const LogoImage = styled.img`
  margin: 10px auto;
  object-fit: contain;
`;
