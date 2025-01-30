"use client";
import * as React from "react";
import { TestimonialCard } from "./TestimonialCard";
import { assests } from "../../../../public/assests";
import styled from "styled-components";

export const TestimonialSection: React.FC = () => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);

  const testimonialData = [
    {
      rating: 5,
      author: "Michelle Newman",
      content: `“Exceptional meals that are as healthy as you choose off the menu each week. Easy to follow recipes, all fresh food, herbs, sauces are provided with added extras if required. Serves 2-4 (you choose) with ample ingredients and very filling. Great to try other dishes from other countries that I would normally avoid trying but I've not been disappointed one bit in any of the meals that I have chosen. Great value for super nutritional dishes, sides and desserts.”`,
      authorImage: assests.PERSON,
    },
    {
      rating: 4,
      author: "John Doe",
      content:
        "“I’m on my second box and I’m very pleased! Portioned, healthy meals readily available within 3 minutes. Such a time saver and the peace of mind is priceless! I definitely see myself reaching my weight loss goals even faster because of this service. I also love how there are updated options on a weekly basis so I can try meals I haven’t tried before.”",
      authorImage: assests.PERSON,
    },
    {
      rating: 5,
      author: "Emily Smith",
      content:
        "“Green Chef is an amazing recipe kit box with the ability to cook from scratch with the exact ingredients for every recipe even you are adult or a kid cooking with adults my kids love it many different cuisine to choose from Chinese Mexican Italian Thai American etc”",
      authorImage: assests.PERSON,
    },
    {
      rating: 3,
      author: "David Johnson",
      content:
        "“EveryPlate has made making dinner a delight! It is now a project my husband and I share or take turns doing the cooking. The ingredients are fresh and everything needed to put a delicious meal together comes packaged to use so there is nothing going to waste. There is a really nice variety of healthy meals to choose from weekly and the directions are easy to follow. We are truly enjoying EveryPlate!”",
      authorImage: assests.PERSON,
    },
  ];

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX("touches" in e ? e.touches[0].pageX : e.pageX);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    document.body.style.userSelect = "none";
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = "touches" in e ? e.touches[0].pageX : e.pageX;
    const walk = (x - startX) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.body.style.userSelect = "";
  };

  return (
    <Container>
      <ScrollContainer
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className={isDragging ? "dragging" : ""}
      >
        {testimonialData.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </ScrollContainer>
    </Container>
  );
};
const Container = styled.div`
  padding: 24px 0;
  margin-left: 10px;
  overflow: hidden;
`;

const ScrollContainer = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  cursor: grab;

  &::-webkit-scrollbar {
    display: none;
  }

  &.dragging {
    cursor: grabbing;
    user-select: none;
  }
`;
