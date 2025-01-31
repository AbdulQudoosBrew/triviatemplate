import * as React from "react";
import styled from "styled-components";

interface ProgressBarProps {
  percentage: number;
}

export const ProgressStatusBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  return (
    <ProgressContainer>
      <ProgressBackground>
        <TextOverlay>{percentage}%</TextOverlay>
        <ProgressFill percentage={percentage} />
      </ProgressBackground>
    </ProgressContainer>
  );
};

const ProgressContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 1px;
`;

const ProgressBackground = styled.div`
  border-radius: 84px;
  background-color: #F7D1C5;
  width: 100%;
  height: 30px;
  position: relative;
  overflow: hidden;
`;

const ProgressFill = styled.div<{ percentage: number }>`
  border-radius: 54px;
  background-color: #DB3512;
  width: ${props => `${props.percentage}%`};
  max-width: 100%;
  height: 100%;
  transition: width 0.3s ease;
`;

const TextOverlay = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--font-hind-bold);
  font-size: 1.25rem;
  font-weight: bold;
  color: white;
  z-index: 1;
`;

