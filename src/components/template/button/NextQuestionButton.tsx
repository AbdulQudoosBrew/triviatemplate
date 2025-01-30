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
  setMarginTop,
}) => {
  return (
    <ButtonWrapper maxWidth={maxWidth} setMarginTop={setMarginTop}>
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
          <TimeText>{completionTime}</TimeText>
        </TimeInfo>
      )}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div<{ maxWidth?: string; setMarginTop?: string }>`
  display: flex;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth || ""};
  flex-direction: column;
  align-items: center;
  margin-top: ${({ setMarginTop }) => setMarginTop || ""};
`;

const StartButton = styled.button<{ height?: string; }>`
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
  padding: 16px 30px;
  border: none;
  cursor: pointer;
`;

const TimeInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 12px;
`;

const TimerIcon = styled.img`
  width: 16px;
  height: 16px;
  object-fit: contain;
`;

const TimeText = styled.span`
  font-family: var(--font-mulish-mixed);
  color: #000000;
  font-size: 0.875rem;
`;
