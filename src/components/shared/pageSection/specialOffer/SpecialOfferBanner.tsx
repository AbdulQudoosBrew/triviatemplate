"use client";
import * as React from "react";
import styled from "styled-components";

interface SpecialOfferBannerProps {
  offerText?: string;
  highlightedText?: string;
  brandName?: string;
}

export const SpecialOfferBanner: React.FC<SpecialOfferBannerProps> = () => {
  return (
    <BannerContainer>
      <BannerWrapper>
        <OfferButton>
          Get Your <BoldText>Special Offer</BoldText> From HelloFresh Now
        </OfferButton>
      </BannerWrapper>
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  background-color: transparent;
`;

const BannerWrapper = styled.div`
  background-color: #fae3da;
  display: flex;
  width: 100%;
  /* max-width: 375px; */
  flex-direction: column;
  justify-content: center;
  padding: 10px 26px;
  border-radius: 10px 10px 0 0;
`;

const OfferButton = styled.button`
  text-shadow: 0 12px 56px rgba(0, 0, 0, 0.25);
  border-radius: 70px;
  background-color: #db3512;
  box-shadow: 0 0 16px rgba(211, 58, 72, 0.2);
  margin: 10px 0 30px;
  padding: 20px 55px;
  border: none;
  cursor: pointer;
  color: inherit;
  font: inherit;
  width: 100%;
  font: 500 18px/22px var(--font-hind-semi-bold);
  &:focus {
    outline: 2px solid #fefaf5;
    outline-offset: 2px;
  }

  &:hover {
    background-color: #c52f10;
  }
`;

const BoldText = styled.span`
  font: 700 18px/22px var(--font-hind-bold);
`;

export default SpecialOfferBanner;
