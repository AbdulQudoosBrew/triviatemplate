import styled from "styled-components";
import { OptionCardProps } from "@/types/FormTypes";
import SmallParagraph from "../text/SmallParagraph";

export const OptionCard = ({ icon, text }: OptionCardProps) => {
  return (
    <CardWrapper>
      <CardContainer>
        <CardIcon loading="lazy" src={icon} alt="" />
        <SmallParagraph
          textalign="left"
          fontSize="large"
          fontFamily="hindRegular"
          color="#615F5F"
          lineheight="27.6px"
        >
          {text}
        </SmallParagraph>
      </CardContainer>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  margin-top: 12px;
  width: 100%;
  flex-direction: column;
`;

const CardContainer = styled.div`
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  min-height: 57px;
  width: 100%;
  align-items: center;
  gap: 14px;
  padding: 10px;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-2px);
    transition: transform 0.2s ease;
  }
`;

const CardIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 32px;
`;