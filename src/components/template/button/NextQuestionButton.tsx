import { NextQuestionButtonProps } from '@/types/FormTypes';
import styled from 'styled-components';

export const ActionButton: React.FC<NextQuestionButtonProps> = ({ 
  label, 
  onClick, 
  completionTime,
  timerIcon 
}) => {
  return (
    <ButtonWrapper>
      <StartButton onClick={onClick}>{label}</StartButton>
      {completionTime && (
        <TimeInfo>
          {timerIcon && <TimerIcon src={timerIcon} alt="" loading="lazy" />}
          <TimeText>{completionTime}</TimeText>
        </TimeInfo>
      )}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 327px;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
`;

const StartButton = styled.button`
  width: 100%;
  border-radius: 30px;
  background-color: #DB3512;
  box-shadow: 0px 0px 16px rgba(211, 58, 72, 0.2);
  color: #FEFAF5;
  font: 500 22px/1 Hind, sans-serif;
  padding: 16px 30px;
  border: none;
  cursor: pointer;
  text-shadow: 0px 12px 56px rgba(0, 0, 0, 0.25);
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
  font: 400 14px/1 Mulish, sans-serif;
  color: #000;
`;