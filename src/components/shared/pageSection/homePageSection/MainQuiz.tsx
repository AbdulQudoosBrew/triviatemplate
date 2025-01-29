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
      <HeroSection />
      <QuizIntro />
      <ActionButton
        label="LET'S START 👉"
        onClick={handleStartQuiz}
        completionTime="Less than 2 Minutes to Complete!"
        timerIcon={assests.TIMER_ICON}
      />
    </QuizContainer>
  );
};

const QuizContainer = styled.main`
  background-color: #fefaf5;
  display: flex;
  max-width: 480px;
  width: 100%;
  padding-bottom: 58px;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
  margin: 0 auto;
`;
