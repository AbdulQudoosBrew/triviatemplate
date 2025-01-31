export interface NextQuestionButtonProps {
  children: React.ReactNode;
  type: string;
  onClick: () => void;
  completionTime?: string;
  timerIcon?: string;
  height?: string;
  maxWidth?: string;
  setmargintop?: string;
  disabled?: boolean;
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
  correctAnswer: string;
  handleOptionClick: () => void;
  isFirst?: boolean;
  isselected?: boolean;
}

export interface ProgressBarProps {
  current: number;
  total: number;
}

export interface TextBlockProps {
  text: string;
  boldText?: string;
}
