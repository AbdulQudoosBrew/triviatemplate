"use client";
import * as React from "react";
import { TestimonialCard } from "./TestimonialCard";
import IMAGES from "../../../../public/assests";
export const TestimonialSection: React.FC = () => {
  const testimonialData = {
    rating: "5/5",
    author: "Michelle Newman",
    content:
      "Exceptional meals that are as healthy as you choose off the menu each week. Easy to follow recipes, all fresh food, herbs, sauces are provided with added extras if required. Serves 2-4 (you choose) with ample ingredients and very filling. Great to try other dishes from other countries that I would normally avoid trying but I've not been disappointed one bit in any of the meals that I have chosen. Great value for super nutritional dishes, sides and desserts.",
    imageSrc: IMAGES.STAR,
  };

  return <TestimonialCard {...testimonialData} />;
};
