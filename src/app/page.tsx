"use client";
import { MainQuiz } from "@/components/shared/pageSection/homePageSection/MainQuiz";
import { MealDeliveryQuiz } from "@/components/shared/QuestionCard/QuestionMainQuiz";
import useQuiz from "@/customHooks/useQuiz";

export default function Home() {
  const { isQuizStart, handleStartQuiz, quiz } = useQuiz();
  return (
    <>
      {!isQuizStart ? (
        <MainQuiz handleStartQuiz={handleStartQuiz} />
      ) : (
        <MealDeliveryQuiz quizQuestionLength={quiz.quizData.length} />
      )}
      {/* <MotivationalPage /> */}
      {/* <ResaultPendingPage /> */}
    </>
  );
}
