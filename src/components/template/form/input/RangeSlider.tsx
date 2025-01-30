"use client";
import { useState } from "react";
import styled from "styled-components";

const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 20px;
`;

const Track = styled.div`
  position: relative;
  width: 100%;
  height: 5px;
  background: #eb0303;
  border-radius: 2px;
`;

const Step = styled.div<{ position: number }>`
  position: absolute;
  left: ${(props) => props.position}%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  width: 5px;
  height: 30px; 
  background: #eb0303;
`;

const Thumb = styled.div<{ position: number }>`
  position: absolute;
  left: ${(props) => props.position}%;
  transform: translateX(-50%);
  width: 16px;
  height: 16px;
  background: #f10303;
  border-radius: 50%;
  cursor: grab;
  top: -6px;
`;

const Labels = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`;

const Label = styled.span`
  margin-top: 10px;
  font-size: 16px;
  color: #020101;
  font-family:  var(--font-hind-semi-bold);
`;

const RangeSlider = () => {
  const steps = [0, 33, 66, 100]; 
  const labels = ["<$5", "$5-$8", "$8-$10", "$10+"];
  const [value, setValue] = useState(0);

  const handleDrag = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const newX = ((e.clientX - rect.left) / rect.width) * 100;
    let closestStep = steps.reduce((prev, curr) =>
      Math.abs(curr - newX) < Math.abs(prev - newX) ? curr : prev
    );
    setValue(closestStep);
  };

  return (
    <SliderContainer>
      <Track onClick={handleDrag}>
        {steps.map((pos, index) => (
          <Step key={index} position={pos} />
        ))}
        <Thumb position={value} />
      </Track>
      <Labels>
        {labels.map((label, index) => (
          <Label key={index}>{label}</Label>
        ))}
      </Labels>
    </SliderContainer>
  );
};

export default RangeSlider;
