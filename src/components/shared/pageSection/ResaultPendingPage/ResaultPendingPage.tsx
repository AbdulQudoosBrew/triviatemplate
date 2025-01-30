"use client";
import { Container, IconImage, PendingResultImage } from "../MotivationalPage/MotivationalStyle";
import { assests } from "../../../../../public/assests";
import { ProgressStatusBar } from "./ProgressStatusBar";
import HeaderLarge from "@/components/template/text/HeaderLarge";
import { useEffect, useState } from "react";

const ResaultPendingPage = () => {
  const [percentage, setPercentage] = useState(0); // Start with 0%

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev < 88) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return 88;
        }
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <IconImage
        loading="lazy"
        src={assests.SOYUMMY_MAIN_LOGO_SMALL}
        alt="Food waste icon"
        marginBottom="2rem"
      />
      <ProgressStatusBar percentage={percentage} />
      <HeaderLarge
        fontSize="semiMidLarge"
        letterSpacing="0"
        textShadow='0px 12px 56px rgba(0, 0, 0, 0.25)'
        margin="15px 0px"
      >
        YOUR PERFECT MATCH IS...
      </HeaderLarge>
      <PendingResultImage src={assests.RESAULTPENDING} />
    </Container>
  );
};

export default ResaultPendingPage;
