import styled from "styled-components";
import * as React from "react";
import { TestimonialProps } from "@/types/types";
import Image from "next/image";
import MediumHeading from "../text/MediumHeading";
import SmallParagraph from "../text/SmallParagraph";

export const TestimonialCard: React.FC<TestimonialProps> = ({
  rating,
  author,
  content,
  imageSrc,
}) => {
  return (
    <CardContainer>
      <RatingMain>
        <RatingStars>
          {Array.from({ length: rating }, (_, index) => (
            <RatingImage
              key={index}
              height={28}
              width={28}
              loading="lazy"
              src={imageSrc}
              alt={`${rating} rating`}
            />
          ))}
        </RatingStars>
        <MediumHeading
          fontSize="large"
          alignment="center"
        >{`${rating} / 5`}</MediumHeading>
      </RatingMain>
      <Divider />
      <MediumHeading fontSize="large" alignment="center">
        {author}
      </MediumHeading>
      <SmallParagraph alignment="center" fontSize="large">
        {content}
      </SmallParagraph>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  border-radius: 15px;
  background-color: rgba(247, 209, 197, 1);
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
  font: 400 30px/1 Palmer Lake Print, -apple-system, Roboto, Helvetica,
    sans-serif;

  @media (max-width: 640px) {
    padding: 20px;
    gap: 15px;
  }
`;
const RatingMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const RatingStars = styled.div`
  display: flex;
`;

const RatingImage = styled(Image)`
  aspect-ratio: 5.15;
  object-fit: contain;
  object-position: center;
  /* width: 200px; */
  align-self: center;
  margin: 0;
`;

const Divider = styled.div`
  align-self: stretch;
  width: 100%;
  height: 1px;
  margin: 10px 0;
  border: none;
  border-top: 2px dashed rgba(219, 53, 18, 1);
  border-image: repeating-linear-gradient(
      to right,
      rgba(219, 53, 18, 1),
      rgba(219, 53, 18, 1) 10px,
      transparent 10px,
      transparent 20px
    )
    1;
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
