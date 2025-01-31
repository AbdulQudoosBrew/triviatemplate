import SmallHeading from "@/components/shared/text/SmallHeading";
import SmallParagraph from "@/components/shared/text/SmallParagraph";
import Image from "next/image";
import * as React from "react";
import styled from "styled-components";

interface BenefitCardProps {
  title: string;
  description: string;
  icon: string;
}

export function BenefitCard({ title, description, icon }: BenefitCardProps) {
  return (
    <CardWrapper>
      <CardContent>
        <IconCircle>
          <Image src={icon} alt="icon" width={40} height={36} />
        </IconCircle>
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
  width: 96%;
  /* padding: 0 20px 0; */
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
  min-height: 139px;
  display: flex;
  gap: 15px;
  padding: 12px 14px;
`;

const IconCircle = styled.div`
  background-color: rgba(219, 53, 18, 1);
  border-radius: 100%;
  align-self: start;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  /* width: 100%; */
  /* max-width: 100px; */
  min-width: 49px;
  height: 49px;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
`;




