import { ProgressBarProps } from "@/types/FormTypes";
import styled from "styled-components";
import { assests } from "../../../../public/assests";

export const ProgressBar = ({ current, total }: ProgressBarProps) => {
  const progress = (current / total) * 100;
  
  return (
    <ProgressWrapper>
      <ProgressContainer>
        <ProgressBackground>
          <ProgressFill style={{ width: `${progress}%` }} />
        </ProgressBackground>
      </ProgressContainer>
      <ProgressStatus>
        <StatusIcon loading="lazy" src={assests.ARROW_LEFT} />
        <StatusText>{current} / {total}</StatusText>
      </ProgressStatus>
    </ProgressWrapper>
  );
};

const ProgressWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: start;
`;

const ProgressContainer = styled.div`
  border-radius: 8px;
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const ProgressBackground = styled.div`
  border-radius: 4px;
  background-color: rgba(219, 53, 18, 0.21);
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const ProgressFill = styled.div`
  border-radius: 4px;
  background-color: rgba(219, 53, 18, 1);
  height: 8px;
  transition: width 0.3s ease;
`;

const ProgressStatus = styled.div`
  display: flex;
  margin-top: 8px;
  width: 100%;
  align-items: start;
  gap: 40px 100px;
  color: rgba(0, 0, 0, 1);
  justify-content: space-between;
  font: 500 14px/1 Poppins, sans-serif;
`;

const StatusIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
`;

const StatusText = styled.span`
  font-weight: 500;
`;