import SmallHeading from "@/components/shared/text/SmallHeading";
import SmallParagraph from "@/components/shared/text/SmallParagraph";
import * as React from "react";
import styled from "styled-components";

interface BenefitCardProps {
  title: string;
  description: string;
}

export function BenefitCard({ title, description }: BenefitCardProps) {
  return (
    <CardWrapper>
      <CardContent>
        <IconCircle />
        <TextContent>
          <SmallHeading fontSize="medium">{title}</SmallHeading>
          <SmallParagraph fontFamily="hindLight" fontSize="medium">
            {description}
          </SmallParagraph>
        </TextContent>
      </CardContent>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  border-radius: 0px 0px 0px 0px;
  display: flex;
  width: 90%;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  margin-top: 14px;
  &:first-child {
    margin-top: 0;
  }
`;

const CardContent = styled.div`
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 15px;
  padding: 12px 14px;
`;

const IconCircle = styled.div`
  background-color: rgba(219, 53, 18, 1);
  border-radius: 50%;
  align-self: start;
  display: flex;
  width: 100px;
  height: 40px;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  text-shadow: 0px 12px 56px rgba(0, 0, 0, 0.25);
  font-size: 18px;
  font-weight: 600;
  line-height: 1;
  align-self: start;
  margin: 0;
`;

const CardDescription = styled.p`
  text-shadow: 0px 12px 56px rgba(0, 0, 0, 0.25);
  font-size: 16px;
  font-weight: 300;
  line-height: 22px;
  margin: 4px 0 0 0;
`;
