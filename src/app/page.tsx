import { MainQuiz } from "@/components/shared/pageSection/homePageSection/MainQuiz";
import { MealDeliveryQuiz } from "@/components/shared/QuestionCard/QuestionMainQuiz";
import { TestimonialSection } from "@/components/shared/testimonials/TestimonialSection";
import MotivationalPage from "@/components/shared/pageSection/MotivationalPage/MotivationalPage";
import ResaultPendingPage from "@/components/shared/pageSection/ResaultPendingPage/ResaultPendingPage";
import { HeroSection } from "@/components/shared/pageSection/homePageSection/HeroSection";
import { OptionCard } from "@/components/shared/QuestionCard/OptionCard";

export default function Home() {
  return (
    <>
      {/* <MainQuiz /> */}

      <MainQuiz />
      {/* <MotivationalPage /> */}
      {/* <MealDeliveryQuiz /> */}
      {/* <TestimonialSection/> */}
      <ResaultPendingPage />
    </>
  );
}
