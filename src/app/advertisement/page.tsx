import React from "react";
import { TestimonialSection } from "@/components/shared/testimonials/TestimonialSection";
import { BenefitsSection } from "@/components/shared/pageSection/features/benefits/BenefitsSection";
import { MealSteps } from "@/components/shared/pageSection/mealSteps/MealSteps";

const page = () => {
  return (
    <>
      <MealSteps />;
      <BenefitsSection />;
      <TestimonialSection />;
    </>
  );
};

export default page;
