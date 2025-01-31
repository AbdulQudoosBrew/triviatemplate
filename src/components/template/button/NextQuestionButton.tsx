import SmallParagraph from "@/components/shared/text/SmallParagraph";
import { NextQuestionButtonProps } from "@/types/FormTypes";
import styled from "styled-components";

export const ActionButton: React.FC<NextQuestionButtonProps> = ({
  children,
  type = "button" as "button" | "submit" | "reset" | undefined,
  onClick,
  completionTime,
  timerIcon,
  height,
  maxWidth,
  setmargintop,
  flex,
  disabled
}) => {
  return (
    <ButtonWrapper
      maxWidth={maxWidth}
      setmargintop={setmargintop}
      flex={flex}
      disabled={disabled}
    >
      <StartButton
        type={type as "button" | "submit" | "reset" | undefined}
        onClick={onClick}
        height={height}
      >
        {children}
      </StartButton>
      {completionTime && (
        <TimeInfo>
          {timerIcon && <TimerIcon src={timerIcon} alt="" loading="lazy" />}
          <SmallParagraph fontSize="small" fontFamily="molishMixed" textalign="center" lineheight="12px">
            {completionTime}
          </SmallParagraph>
        </TimeInfo>
      )}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div<{ maxWidth?: string; setmargintop?: string; flex?: string; disabled?: boolean }>`
  display: flex;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth || ""};
  flex-direction: column;
  align-items: center;
  margin-top: ${({ setmargintop }) => setmargintop || ""};
  padding: 0.625rem 0px;
  /* flex: ${({ flex }) => flex ? flex : ""}; */
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
`;

const StartButton = styled.button<{ height?: string; disabled?: boolean }>`
  display: flex;
  height: ${props => props.height};
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-color: #db3512;
  color: #fefaf5;
  font-family: var(--font-hind-medium);
  font-size: 1.375rem;
  padding: 1rem 1.875rem;
  border: none;
  cursor: pointer;
  
`;

const TimeInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 12px 0px;
  opacity: 80%;
`;

const TimerIcon = styled.img`
  width: 16px;
  height: 16px;
`;
