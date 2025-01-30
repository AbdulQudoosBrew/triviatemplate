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
  lineHeight?: string;
  textAlign?: string;
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
}

export interface StepCardProps {
  number: string;
  title: string;
  iconSrc?: string;
  iconComponent?: React.ReactNode;
}

export interface MealStepsProps {
  steps: StepCardProps[];

  border?: string;
  fontFamily?: string;
  lineHeight?: string;
}
