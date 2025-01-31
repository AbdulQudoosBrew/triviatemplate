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
  disabled = false,
}) => {
  return (
    <ButtonWrapper maxWidth={maxWidth} setmargintop={setmargintop}>
      <StartButton
        type={type as "button" | "submit" | "reset" | undefined}
        onClick={onClick}
        height={height}
        disabled={disabled}
      >
        {children}
      </StartButton>
      {completionTime && (
        <TimeInfo>
          {timerIcon && <TimerIcon src={timerIcon} alt="" loading="lazy" />}
          <SmallParagraph
            fontSize="small"
            fontFamily="molishMixed"
            textalign="center"
            lineheight="12px"
          >
            {completionTime}
          </SmallParagraph>
        </TimeInfo>
      )}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div<{ maxWidth?: string; setmargintop?: string }>`
  display: flex;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth || ""};
  flex-direction: column;
  align-items: center;
  margin-top: ${({ setmargintop }) => setmargintop || ""};
  padding: 0.625rem 0px;
`;

const StartButton = styled.button<{ height?: string }>`
  display: flex;
  height: ${(props) => props.height};
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-color: ${({ disabled }) =>
    disabled ? "#E9846D" : "#db3512"}; /* Gray when disabled */
  color: #fefaf5; /* Lighter text when disabled */
  font-family: var(--font-hind-medium);
  font-size: 1.375rem;
  padding: 1rem 1.875rem;
  border: none;
  cursor: ${({ disabled }) =>
    disabled ? "not-allowed" : "pointer"}; /* Disable pointer when disabled */
  opacity: ${({ disabled }) =>
    disabled ? 0.6 : 1}; /* Reduce opacity when disabled */
  transition: background-color 0.3s ease, opacity 0.3s ease;
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
