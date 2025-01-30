import * as React from "react";
import styled from "styled-components";

interface ProgressBarProps {
  percentage: number;
}

export const ProgressStatusBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  return (
    <ProgressContainer>
      <ProgressBackground>
        <ProgressFill percentage={percentage}>
          {percentage}%
        </ProgressFill>
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
  display: flex;
  flex-direction: column;
`;

const ProgressFill = styled.div<{ percentage: number }>`
  z-index: 10;
  border-radius: 54px;
  background-color: #DB3512;
  width: ${props => `${props.percentage}%`};
  max-width: 100%;
  transition: width 0.3s ease;
  display: flex;
  align-items: center;  /* Vertically center the text */
  justify-content: center;  /* Horizontally center the text */
  padding: 1px 70px;
  color: var(--color-basic-white);
  font-family: var(--font-hind-bold);
  font-size: 1.25rem;
`;
