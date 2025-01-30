import { useState } from "react";

const useQuiz = () => {
  const [isQuizStart, setIsQuizStart] = useState(false);
  const handleStartQuiz = () => {
    console.log("Quiz Started");
    setIsQuizStart(true);
  };

  return {
    isQuizStart,
    setIsQuizStart,
    handleStartQuiz,
  };
};

export default useQuiz;
