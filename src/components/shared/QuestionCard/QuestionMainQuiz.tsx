"use client";
import styled from "styled-components";
import { ProgressBar } from "./ProgressBar";
import { OptionCard } from "./OptionCard";
import { assests } from "../../../../public/assests";
import { ActionButton } from "@/components/template/button/NextQuestionButton";

const options = [
    {
        icon: assests.OPTION_ONE,
        text: "Save time on cooking/prep"
    },
    {
        icon: assests.OPTION_TWO,
        text: "Eat healthier or manage my diet"
    },
    {
        icon: assests.OPTION_THREE,
        text: "Explore new recipes and flavors"
    },
    {
        icon: assests.OPTION_FOUR,
        text: "Save money on food"
    }
];

export const MealDeliveryQuiz = () => {
    const handleStartQuiz = () => {
        // Quiz start logic here
    };
    return (
        <QuizContainer>
            <BrandLogo loading="lazy" src={assests.SOYUMMY_MAIN_LOGO_SMALL} />
            <ProgressBar current={1} total={5} />
            <HeaderImage loading="lazy" src={assests.MAIN_BACKGROUNG_IMAHE_TWO} />

            <ContentSection>
                <QuestionContainer>
                    <QuestionText>
                        What&apos;s your primary goal for trying a meal delivery service?
                    </QuestionText>
                </QuestionContainer>

                <OptionsContainer>
                    {options.map((option, index) => (
                        <OptionCard
                            key={index}
                            icon={option.icon}
                            text={option.text}
                            isFirst={index === 0}
                        />
                    ))}
                </OptionsContainer>
            </ContentSection>
            <ActionButton
                setMarginTop="20px"
                height="56px"
                type="button"
                onClick={handleStartQuiz}
                timerIcon={assests.TIMER_ICON}
            >
                Next
            </ActionButton>
        </QuizContainer>
    );
};

const QuizContainer = styled.div`
  background-color: #fefaf5;
  display: flex;
  padding: 30px;
  margin: 0 auto;
  align-items: center;
  gap: 20px;
  color: rgba(0, 0, 0, 1);
  text-align: center;
  justify-content: center;
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

const HeaderImage = styled.img`
  aspect-ratio: 1.62;
  object-fit: contain;
  object-position: center;
  width: 100%;
  border-radius: 0;
  margin-top: 10px;
`;

const ContentSection = styled.div`
  align-self: stretch;
  display: flex;
  margin-top: 9px;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const QuestionContainer = styled.div`
  align-self: stretch;
  display: flex;
  min-height: 74px;
  width: 100%;
  flex-direction: column;
`;

const QuestionText = styled.h1`
  text-shadow: 0px 12px 56px rgba(0, 0, 0, 0.25);
  color: rgba(0, 0, 0, 1);
  font: 500 22px/28px Hind, sans-serif;
  text-align: left;
`;

const OptionsContainer = styled.div`
  width: 100%;
`;
