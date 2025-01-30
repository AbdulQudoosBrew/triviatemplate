import * as React from "react";
import styled from "styled-components";

interface HeroImageProps {
  src: string;
}

export const HeroImage: React.FC<HeroImageProps> = ({ src }) => {
  return <StyledImage loading="lazy" src={src} alt="Cooking ingredients" />;
};

const StyledImage = styled.img`
  aspect-ratio: 1.1;
  object-fit: contain;
  object-position: center;
  width: 100%;
  border-radius: 0;
  align-self: stretch;
`;
