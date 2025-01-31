"use client";
import { MainQuiz } from "@/components/shared/pageSection/homePageSection/MainQuiz";
import { MealDeliveryQuiz } from "@/components/shared/QuestionCard/QuestionMainQuiz";
import { TestimonialSection } from "@/components/shared/testimonials/TestimonialSection";
import MotivationalPage from "@/components/shared/pageSection/MotivationalPage/MotivationalPage";
import ResaultPendingPage from "@/components/shared/pageSection/ResaultPendingPage/ResaultPendingPage";
import { HeroSection } from "@/components/shared/pageSection/homePageSection/HeroSection";
import { OptionCard } from "@/components/shared/QuestionCard/OptionCard";
import useQuiz from "@/customHooks/useQuiz";

export default function Home() {
  const { isQuizStart, handleStartQuiz, quiz } = useQuiz();
  console.log("🚀 ~ Home ~ isQuizStart:", isQuizStart);
  return (
    <>
      {/* <MainQuiz /> */}
      {/* {!isQuizStart ? (
        <MainQuiz handleStartQuiz={handleStartQuiz} />
      ) : (
        <MealDeliveryQuiz quiz={quiz} />
      )} */}
       <MotivationalPage />
      {/* <ResaultPendingPage /> */}
    </>
  );
}
