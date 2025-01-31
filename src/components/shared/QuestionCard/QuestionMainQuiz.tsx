import { useState } from "react";
import styled from "styled-components";
import { ProgressBar } from "./ProgressBar";
import { OptionCard } from "./OptionCard";
import { ActionButton } from "@/components/template/button/NextQuestionButton";
import MediumHeading from "../text/MediumHeading";
import { assests } from "../../../../public/assests";
import useQuiz from "@/customHooks/useQuiz";
import MotivationalPage from "../pageSection/MotivationalPage/MotivationalPage";

export const MealDeliveryQuiz = ({ quiz }: any) => {
  const {
    currentQuestionIndex,
    currentQuestion,
    handleNextQuestion,
    handleOptionClick,
    selectedOption,
    handleNext,
    showMotivationalPage,
  } = useQuiz();

  if (showMotivationalPage) {
    return <MotivationalPage onContinue={handleNext} />;
  }

  return (
    <QuizContainer>
      <BrandLogo loading="lazy" src={assests.SOYUMMY_MAIN_LOGO_SMALL} />
      <ProgressBar
        current={currentQuestionIndex + 1}
        total={quiz.quizData.length}
      />
      <ImageSection>

        <HeaderImage loading="lazy" src={currentQuestion.questionIcon} />
      </ImageSection>
      <ContentSection>
        <MediumHeading
          fontSize="medium"
          fontFamily="hindMedium"
          textalign="left"
          color="var(--color-basic-black)"
        >
          {currentQuestion.question}
        </MediumHeading>
        <OptionsContainer>
          {currentQuestion.options.map((option: any, index: number) => (
            <OptionCard
              key={index}
              icon={option.icon}
              text={option.text}
              isselected={selectedOption === option.text} // Highlight selected option
              handleOptionClick={() => handleOptionClick(option.text)}
            />
          ))}
        </OptionsContainer>
      </ContentSection>
      <ActionButton
        setmargintop="20px"
        height="56px"
        type="button"
        onClick={handleNext}
        timerIcon="/icons/timer.png"
        disabled={!selectedOption} // Disable until an option is selected
      >
        {currentQuestionIndex < quiz.quizData.length - 1 ? "Next" : "Finish"}
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
  /* @media (max-width: 500px) {
  } */
`;

const BrandLogo = styled.img`
  aspect-ratio: 1.59;
  object-fit: contain;
  object-position: center;
  width: 35px;
  height: 22px;
  margin-bottom: 10px;
`;

const HeaderImage = styled.img`
width: 100%;
`;

const ContentSection = styled.div`
  align-self: stretch;
  display: flex;
  margin-top: 0.813rem;
  width: 100%;
  flex-direction: column;
  align-items: center;
  /* gap: 5px; */
`;

const ImageSection = styled.div`
  min-width: 319px;
  width: 100%;
`;

const OptionsContainer = styled.div`
  width: 100%;
`;
