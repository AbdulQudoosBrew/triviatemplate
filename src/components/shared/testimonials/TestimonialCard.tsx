import styled from "styled-components";
import * as React from "react";
import { TestimonialProps } from "@/types/types";

export const TestimonialCard: React.FC<TestimonialProps> = ({
  rating,
  author,
  content,
  imageSrc,
}) => {
  return (
    <CardContainer>
      <RatingImage loading="lazy" src={imageSrc} alt={`${rating} rating`} />
      <RatingText>{rating}</RatingText>
      <Divider />
      <AuthorName>{author}</AuthorName>
      <TestimonialText>
        {content}
        <br />
        <br />
      </TestimonialText>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  border-radius: 15px;
  background-color: rgba(247, 209, 197, 1);
  display: flex;
  padding: 30px;
  align-items: center;
  gap: 20px;
  color: rgba(0, 0, 0, 1);
  text-align: center;
  justify-content: center;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  font: 400 30px/1 Palmer Lake Print, -apple-system, Roboto, Helvetica,
    sans-serif;

  @media (max-width: 640px) {
    padding: 20px;
    gap: 15px;
  }
`;

const RatingImage = styled.img`
  aspect-ratio: 5.15;
  object-fit: contain;
  object-position: center;
  width: 200px;
  align-self: center;
  margin: 0;
`;

const RatingText = styled.div`
  text-shadow: 0px 12px 56px rgba(0, 0, 0, 0.25);
  align-self: center;
  margin: 0;
`;

const Divider = styled.div`
  align-self: stretch;
  width: 100%;
  height: 1px;
  margin: 10px 0;
  border: 1px dashed rgba(219, 53, 18, 1);
`;

const AuthorName = styled.div`
  text-shadow: 0px 12px 56px rgba(0, 0, 0, 0.25);
  align-self: center;
  margin: 0;
`;

const TestimonialText = styled.div`
  text-shadow: 0px 12px 56px rgba(0, 0, 0, 0.25);
  letter-spacing: -0.12px;
  align-self: stretch;
  margin: 0;
  text-align: left;
  max-width: 100%;
  font: 18px/25px Hind, sans-serif;
`;
