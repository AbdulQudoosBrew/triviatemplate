export interface NextQuestionButtonProps {
  children: React.ReactNode,
  type: string;
  onClick: () => void;
  completionTime?: string;
  timerIcon?: string;
  height?: string;
  maxWidth?: string;
  setMarginTop?: string;
}

export interface HeroSectionProps {
  title: string;
  imageSrc: string;
}

export interface QuizIntroProps {
  heading: string;
  description: string;
}

export interface OptionCardProps {
  icon: string;
  text: string;
  isFirst?: boolean;
}

export interface ProgressBarProps {
  current: number;
  total: number;
}

export interface TextBlockProps {
  text: string;
  boldText?: string;
}

