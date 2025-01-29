export interface NextQuestionButtonProps {
  children: React.ReactNode,
  type: string;
  onClick: () => void;
  completionTime?: string;
  timerIcon?: string;
  height?: string;
}

export interface HeroSectionProps {
  title: string;
  imageSrc: string;
}

export interface QuizIntroProps {
  heading: string;
  description: string;
}
