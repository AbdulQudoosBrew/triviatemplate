export interface MainQuizProps {
  handleStartQuiz: () => void;
}
export interface TestimonialProps {
  rating: number;
  author: string;
  authorImage?: string;
  content: string;
}
export interface MediumHeadingProps {
  alignment?: string;
  fontSize?: string;
  fontFamily?: string;
  color?: string;
  margin?: string;
  fontWeight?: string;
  children: React.ReactNode;
  lineheight?: string;
  textalign?: string;
  Opacity?: string;
}

export interface LargeHeadingProps {
  alignment?: string;
  fontSize?: string;
  color?: string;
  margin?: string;
  fontWeight?: string;
  children: React.ReactNode;
  padding?: string;
  border?: string;
  fontFamily?: string;
  lineheight?: string;
  letterSpacing?: string;
  textshadow?: string;
}

export interface StepCardProps {
  number: string;
  title: string;
  iconSrc?: string;
  iconComponent?: React.ReactNode;
}
export interface BudgetPageProps {
  onContinue: () => void;
  handlePreviousQuestion: () => void;
  current: number;
  total?: number;
}
export interface EncouragementStatTwoProps {
  onContinue: () => void;
}
export interface ResaultPendingPageProps {
  showPercentageResultPending: () => void;
  percentage: number;
}
export interface OptionCardProps {
  icon: string;
  text: string;
  isselected: boolean;
  handleOptionClick: () => void;
}
export interface MealDeliveryQuizProps {
  quiz: {
    quizName: string;
    quizData: {
      question: string;
      questionIcon: string;
      options: { text: string; icon: string }[];
      correctAnswer: string;
    };
  }[];
}

export interface MealStepsProps {
  steps: StepCardProps[];

  border?: string;
  fontFamily?: string;
  lineheight?: string;
}
export interface MotivationalPageProps {
  onContinue?: () => void;
}
