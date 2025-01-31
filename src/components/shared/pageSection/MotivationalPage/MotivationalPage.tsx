"use client";
import React from "react";
import SmallParagraph from "../../text/SmallParagraph";
import HeaderLarge from "@/components/template/text/HeaderLarge";
import { ActionButton } from "@/components/template/button/NextQuestionButton";
import { assests } from "../../../../../public/assests";
import MediumHeading from "../../text/MediumHeading";
import { MotivationalPageProps } from "@/types/types";
import styled from "styled-components";

const MotivationalPage: React.FC<MotivationalPageProps> = ({ onContinue }) => {
    return (
        <Container>
            <FlexSection>
                <IconImage
                    loading="lazy"
                    src={assests.SOYUMMY_MAIN_LOGO_SMALL}
                    alt="Food waste icon"
                />
            </FlexSection>
            <FlexSection>
                <HeaderLarge
                    fontFamily="plamerLakePrintRegular"
                    fontSize="semiLarge"
                    lineheight="30px"
                >
                    DID YOU KNOW?💡
                </HeaderLarge>
                <Divider />
                <InfoCard>
                    <MediumHeading
                        fontFamily="hindRegular"
                        fontSize="medium"
                        lineheight="27.6px"
                    >
                        The average household wastes over $1,300 in food each year.{" "}
                        <StrongSpan>
                            Say goodbye to food rotting in the back of your fridge!
                        </StrongSpan>
                    </MediumHeading>
                    <ContentImage
                        loading="lazy"
                        src={assests.MOTIVATIONAL_IMAGE_ONE}
                        alt="Food waste illustration"
                    />
                </InfoCard>
                <SmallParagraph
                    fontSize="small"
                    fontFamily="hindRegular"
                    lineheight="12px"
                    margin="1.25rem 0.938rem 0px"
                    color="#A0A0A0"
                >
                    William & Mary. Study Calculates True Cost of Food Waste in America.
                    2020.
                </SmallParagraph>
            </FlexSection>
            <FlexSection>
                <ActionButton
                    setmargintop="30px"
                    height="56px"
                    type="button"
                    onClick={() => onContinue()}
                >
                    Let&apos;s keep going!
                </ActionButton>
            </FlexSection>
        </Container>
    );
};

 const Container = styled.div`
  position: relative;
  background-color: #fefaf5;
  display: flex;
  padding: 10px 30px;
  margin: 0 auto;
  align-items: center;
  color: rgba(0, 0, 0, 1);
  text-align: center;
  flex-direction: column;
  max-width: 480px;
  width: 100%;
  height: 100vh;
  justify-content: space-between;
`;

const FlexSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  &:first-child {
    flex-grow: 0.5; 
  }
  
  &:last-child {
    flex-grow: 0.5; 
  }

  @media (max-width: 500px) {
    flex-grow: 1; 
  }
`;

 const IconImage = styled.img<{ marginbottom?: string }>`
  aspect-ratio: 1.59;
  object-fit: contain;
  object-position: center;
  width: 35px;
  align-self: center;
  margin-bottom: ${({ marginbottom }) => marginbottom || ""};
`;

 const Divider = styled.hr`
  margin: 22px 0;
  width: 100%;
  height: 1px;
  border: 1px dashed #DB3512;
`;

 const InfoCard = styled.div`
  border-radius: 0.938rem;
  background-color: #F7D1C5;
  display: flex;
  flex-direction: column;
  letter-spacing: -0.12px;
  line-height: 28px;
  padding: 0.938rem 1.438rem 1.438rem;
  text-align: center;
  width: 323px;
  height: 408px;
`;

 const ContentImage = styled.img`
  aspect-ratio: 1.29;
  object-fit: contain;
  object-position: center;
  width: 100%;
  border-radius: 15px;
  margin-top: 9px;
`;

 const StrongSpan = styled.span`
  font-family: var(--font-hind-bold);
  font-size: 1.375rem;
  letter-spacing: -0.12px;
  line-height: 27.6px;
  color: var(--color-basic-black);
`;


export default MotivationalPage;
