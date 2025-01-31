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
        // @ts-expect-error: This error is expected due to [explain the reason here]
        <MealDeliveryQuiz quiz={quiz} />
      )}
      {/* <MotivationalPage /> */}
      {/* <ResaultPendingPage /> */}
    </>
  );
}
