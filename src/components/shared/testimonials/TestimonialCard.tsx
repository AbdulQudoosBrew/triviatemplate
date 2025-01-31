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
  authorImage,
}) => {
  return (
    <CardContainer>
      <CardHeader>
        <CircularImage loading="lazy" src={authorImage} alt={"authorImage"} />
        <MediumHeading fontSize="large" alignment="center">
          {author}
        </MediumHeading>
      </CardHeader>
      <Divider />
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
      </RatingMain>

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
  padding-top: 15px;
  padding-bottom: 45px;
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 15px;
  background-color: rgba(247, 209, 197, 1);
  color: rgba(0, 0, 0, 1);
  min-width: 340px;
  max-width: 340px;

  @media (max-width: 640px) {
    min-height: 280px; /* Adjust for mobile */
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  /* padding-bottom: 5px; */
`;

const CircularImage = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 100%;
  border-radius: 50%;
  max-width: 52px;
`;

const RatingMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-bottom: 10px;
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
  margin: 15px 0;
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



