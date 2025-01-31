import { useState } from "react";
import { assests } from "../../public/assests";

const useQuiz = () => {
  const quizes = [
    {
      quizName: "Meal Preferences",
      quizData: [
        {
          question: "What's your ultimate goal for winning at mealtime?",
          questionIcon: assests.MAIN_BACKGROUNG_IMAHE_TWO,
          options: [
            { text: "Save time in the kitchen", icon: assests.OPTION_ONE },
            {
              text: "Eat healthier and stay on track",
              icon: assests.OPTION_TWO,
            },
            {
              text: "Try exciting new recipes",
              icon: assests.OPTION_THREE,
            },
            { text: "Save money on food", icon: assests.OPTION_FOUR },
          ],
          correctAnswer: "Try exciting new recipes",
        },
        {
          question: "How would you describe your cooking vibe?",
          questionIcon: assests.QUESTION_TWO,
          options: [
            {
              text: "I love cooking but need ideas",
              icon: assests.QUESTION_TWO_OPTION_1,
            },
            {
              text: "I like it but want it simpler",
              icon: assests.QUESTION_TWO_OPTION_2,
            },
            {
              text: "Less prep, less mess, please",
              icon: assests.QUESTION_TWO_OPTION_3,
            },
            {
              text: "No cooking, just ready-to-eat",
              icon: assests.QUESTION_TWO_OPTION_4,
            },
          ],
          correctAnswer: "No cooking, just ready-to-eat",
        },
        {
          question: "What kind of meals are you into?",
          questionIcon: assests.QUESTION_THREE,
          options: [
            {
              text: "Protein Packed—fuel me up",
              icon: assests.QUESTION_THREE_OPTION_1,
            },
            {
              text: "Quick and Easy—fast meals",
              icon: assests.QUESTION_THREE_OPTION_2,
            },
            {
              text: "Calorie Smart—light bites",
              icon: assests.QUESTION_THREE_OPTION_3,
            },
            {
              text: "Veggies—plants all day",
              icon: assests.QUESTION_THREE_OPTION_4,
            },
            {
              text: "No Preference—surprise me",
              icon: assests.QUESTION_THREE_OPTION_5,
            },
          ],
          correctAnswer: "Veggies—plants all day",
        },

        {
          question: "How would you describe your perfect meal setup?",
          questionIcon: assests.QUESTION_FOUR,
          options: [
            {
              text: "Flexible and Customizable",
              icon: assests.QUESTION_FOUR_OPTION_1,
            },
            {
              text: "Pre-planned and Structured",
              icon: assests.QUESTION_FOUR_OPTION_2,
            },
            {
              text: "Quick and On-the-Go",
              icon: assests.QUESTION_FOUR_OPTION_3,
            },
            { text: "Family-Focused", icon: assests.QUESTION_FOUR_OPTION_4 },
          ],
          correctAnswer: "Pre-planned and Structured",
        },
        {
          question: "What’s your   per meal?",
          questionIcon: assests.QUESTION_FIVE,
          options: [
            { text: "Lessthan$5", icon: assests.QUESTION_FIVE_OPTION_1 },
            { text: "$5–$8", icon: assests.QUESTION_FIVE_OPTION_2 },
            { text: "$8–$10", icon: assests.QUESTION_FIVE_OPTION_3 },
            { text: "$10+", icon: assests.QUESTION_FIVE_OPTION_4 },
          ],
          correctAnswer: "few_times_week",
        },
      ],
    },
  ];

  const quiz = quizes[0];
  const [isQuizStart, setIsQuizStart] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const currentQuestion = quiz.quizData[currentQuestionIndex];
  const [showMotivationalPage, setShowMotivationalPage] = useState(false);

  const handleStartQuiz = () => {
    console.log("Quiz Started");
    setIsQuizStart(true);
  };
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      if (currentQuestionIndex === 0) {
        setShowMotivationalPage(false);
        setCurrentQuestionIndex(1);
      }
    }
    // }
  };

  const handleNext = () => {
    if (currentQuestionIndex < quiz.quizData.length - 1) {
      if (showMotivationalPage) {
        setShowMotivationalPage(false);
        setCurrentQuestionIndex(1);
      } else if (currentQuestionIndex === 0) {
        setShowMotivationalPage(true);
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    }
  };

  return {
    isQuizStart,
    setIsQuizStart,
    handleStartQuiz,
    quizes,
    quiz,
    currentQuestionIndex,
    currentQuestion,
    handleNextQuestion,
    handleOptionClick,
    selectedOption,
    handleNext,
    showMotivationalPage,
  };
};

export default useQuiz;
