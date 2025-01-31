import { useState } from "react";
import { assests } from "../../public/assests";

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
          correctAnswer: "Eat healthier and stay on track ",
        },
        {
          question: "How would you describe your cooking vibe?",
          questionIcon: "What's your ultimate goal for winning at mealtime?",
          options: [
            {
              text: "I love cooking but need ideas",
              icon: "/icons/two_meals.png",
            },
            {
              text: "I like it but want it simpler",
              icon: "/icons/three_meals.png",
            },
            {
              text: "Less prep, less mess, please",
              icon: "/icons/more_than_three.png",
            },
            {
              text: "No cooking, just ready-to-eat",
              icon: "/icons/varies.png",
            },
          ],
          correctAnswer: "No cooking, just ready-to-eat",
        },
        {
          question: "What kind of meals are you into?",
          questionIcon: "What's your ultimate goal for winning at mealtime?",
          options: [
            {
              text: "Protein Packed—fuel me up",
              icon: "/icons/vegetarian.png",
            },
            { text: "Quick and Easy—fast meals", icon: "/icons/vegan.png" },
            { text: "Calorie Smart—light bites", icon: "/icons/keto.png" },
            { text: "Veggies—plants all day", icon: "/icons/no_pref.png" },
            { text: "No Preference—surprise me", icon: "/icons/no_pref.png" },
          ],
          correctAnswer: "Calorie Smart—light bites",
        },

        {
          question: "How would you describe your perfect meal setup?",
          questionIcon: "What's your ultimate goal for winning at mealtime?",
          options: [
            {
              text: "Flexible and Customizable",
              icon: "/icons/gluten_free.png",
            },
            {
              text: "Pre-planned and Structured",
              icon: "/icons/dairy_free.png",
            },
            { text: "Quick and On-the-Go", icon: "/icons/nut_free.png" },
            { text: "Family-Focused", icon: "/icons/no_restrictions.png" },
          ],
          correctAnswer: "Family-Focused",
        },
        {
          question: "What’s your   per meal?",
          questionIcon: "What's your ultimate goal for winning at mealtime?",
          options: [
            { text: "Lessthan$5", icon: "/icons/every_day.png" },
            { text: "$5–$8", icon: "/icons/few_times_week.png" },
            { text: "$8–$10", icon: "/icons/once_week.png" },
            { text: "$10+", icon: "/icons/rarely.png" },
          ],
          correctAnswer: "few_times_week",
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

  const quiz = quizes[0];

  return {
    isQuizStart,
    setIsQuizStart,
    handleStartQuiz,
    quizes,
    quiz,
  };
};

export default useQuiz;
