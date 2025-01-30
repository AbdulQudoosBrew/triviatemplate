export interface TestimonialProps {
  rating: number;
  author: string;
  content: string;
}
export interface MediumHeadingProps {
  alignment?: string;
  fontSize?: string;
  fontFamily?: string;
  color?: string;
  margin?: number;
  fontWeight?: string;
  children: React.ReactNode;
}

export interface LargeHeadingProps {
  alignment?: string;
  fontSize?: string;
  color?: string;
  margin?: number;
  fontWeight?: string;
  children: React.ReactNode;
  padding?: string;
  border? : string;
}