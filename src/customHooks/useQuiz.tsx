import { useState } from "react";

const useQuiz = () => {
  const [isQuizStart, setIsQuizStart] = useState(false);
  const handleStartQuiz = () => {
    console.log("Quiz Started");
    setIsQuizStart(true);
  };
  const quizes = [
    {
      quizName: "Meal Preferences",
      quizData: [
        {
          question: "What's your ultimate goal for winning at mealtime?",
          options: [
            { text: "Save time on cooking/prep", icon: "/icons/time.png" },
            {
              text: "Eat healthier or manage my diet",
              icon: "/icons/health.png",
            },
            {
              text: "Explore new recipes and flavors",
              icon: "/icons/recipes.png",
            },
            { text: "Save money on food", icon: "/icons/money.png" },
          ],
          correctAnswer: "eat_healthier",
        },
        {
          question: "Which type of meals do you prefer?",
          options: [
            {
              text: "Vegetarian",

              icon: "/icons/vegetarian.png",
            },
            { text: "Vegan", icon: "/icons/vegan.png" },
            { text: "Keto", icon: "/icons/keto.png" },
            {
              text: "No preference",
              icon: "/icons/no_pref.png",
            },
          ],
          correctAnswer: "no_preference",
        },
      ],
    },
    {
      quizName: "Fitness & Lifestyle",
      quizData: [
        {
          question: "What is your primary fitness goal?",
          options: [
            {
              text: "Lose weight",

              icon: "/icons/weight_loss.png",
            },
            {
              text: "Build muscle",
              icon: "/icons/muscle.png",
            },
            {
              text: "Increase endurance",
              icon: "/icons/endurance.png",
            },
            {
              text: "Stay active",
              icon: "/icons/active.png",
            },
          ],
          correctAnswer: "build_muscle",
        },
        {
          question: "How often do you exercise?",
          options: [
            { text: "Every day", icon: "/icons/daily.png" },
            {
              text: "A few times a week",

              icon: "/icons/few_times.png",
            },
            { text: "Rarely", icon: "/icons/rarely.png" },
            { text: "Never", icon: "/icons/never.png" },
          ],
          correctAnswer: "few_times",
        },
      ],
    },
    {
      quizName: "Travel Preferences",
      quizData: [
        {
          question: "What type of traveler are you?",
          options: [
            {
              text: "Adventure seeker",
              icon: "/icons/adventure.png",
            },
            {
              text: "Luxury traveler",
              icon: "/icons/luxury.png",
            },
            {
              text: "Cultural explorer",
              icon: "/icons/culture.png",
            },
            {
              text: "Relaxation seeker",
              icon: "/icons/relax.png",
            },
          ],
          correctAnswer: "adventure",
        },
        {
          question: "Which destination appeals to you most?",
          options: [
            {
              text: "Mountains",
              icon: "/icons/mountains.png",
            },
            { text: "Beach", icon: "/icons/beach.png" },
            { text: "City life", icon: "/icons/city.png" },
            {
              text: "Countryside",
              icon: "/icons/countryside.png",
            },
          ],
          correctAnswer: "beach",
        },
      ],
    },
    {
      quizName: "Technology Habits",
      quizData: [
        {
          question: "Which device do you use most often?",
          options: [
            {
              text: "Smartphone",
              icon: "/icons/smartphone.png",
            },
            { text: "Laptop", icon: "/icons/laptop.png" },
            { text: "Tablet", icon: "/icons/tablet.png" },
            {
              text: "Smartwatch",
              icon: "/icons/smartwatch.png",
            },
          ],
          correctAnswer: "smartphone",
        },
        {
          question: "How do you consume media?",
          options: [
            {
              text: "Streaming services",
              icon: "/icons/streaming.png",
            },
            {
              text: "Podcasts",
              icon: "/icons/podcasts.png",
            },
            {
              text: "Social media",
              icon: "/icons/social.png",
            },
            { text: "Traditional TV", icon: "/icons/tv.png" },
          ],
          correctAnswer: "streaming",
        },
      ],
    },
    {
      quizName: "Personality Traits",
      quizData: [
        {
          question: "How do you handle challenges?",
          options: [
            {
              text: "Stay calm and adapt",
              icon: "/icons/calm.png",
            },
            {
              text: "Face them head-on",

              icon: "/icons/head_on.png",
            },
            {
              text: "Seek help from others",
              icon: "/icons/help.png",
            },
            {
              text: "Avoid them if possible",
              icon: "/icons/avoid.png",
            },
          ],
          correctAnswer: "head_on",
        },
        {
          question: "Which word best describes you?",
          options: [
            {
              text: "Optimistic",

              icon: "/icons/optimistic.png",
            },
            {
              text: "Analytical",

              icon: "/icons/analytical.png",
            },
            {
              text: "Creative",

              icon: "/icons/creative.png",
            },
            {
              text: "Practical",

              icon: "/icons/practical.png",
            },
          ],
          correctAnswer: "creative",
        },
      ],
    },
  ];

  return {
    isQuizStart,
    setIsQuizStart,
    handleStartQuiz,
    quizes,
  };
};

export default useQuiz;
