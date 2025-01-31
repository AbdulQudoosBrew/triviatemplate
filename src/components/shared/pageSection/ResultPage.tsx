import React from "react";
import { CookingHero } from "./cookingHero/CookingHero";
import { MealSteps } from "./mealSteps/MealSteps";
import { BenefitsSection } from "./features/benefits/BenefitsSection";
import { TestimonialSection } from "../testimonials/TestimonialSection";
import SpecialOfferBanner from "./specialOffer/SpecialOfferBanner";

const ResultPage = () => {
  return (
    <>
      <CookingHero />;
      <MealSteps />;
      <BenefitsSection />;
      <TestimonialSection />;
      <SpecialOfferBanner />;
    </>
  );
};

export default ResultPage;
