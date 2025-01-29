import styled from "styled-components";
import * as React from "react";
import { TestimonialProps } from "@/types/types";
import Image from "next/image";
import MediumHeading from "../text/MediumHeading";
import SmallParagraph from "../text/SmallParagraph";
import { assests } from "../../../../public/assests";

export const TestimonialCard: React.FC<TestimonialProps> = ({
  rating,
  author,
  content,
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
              src={assests.STAR}
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
      <SmallParagraph
        fontFamily="hindRegular"
        alignment="center"
        fontSize="large"
      >
        {content}
      </SmallParagraph>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 300px; /* Adjust as needed */
  padding: 55px;
  border-radius: 15px;
  background-color: rgba(247, 209, 197, 1);
  color: rgba(0, 0, 0, 1);
  min-width: 390px;

  @media (max-width: 640px) {
    min-height: 280px; /* Adjust for mobile */
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
  flex-wrap: wrap;
  justify-content: center;
`;

const RatingImage = styled(Image)`
  aspect-ratio: 1;
  object-fit: contain;
  width: 24px;
  height: 24px;

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
  }
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

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
