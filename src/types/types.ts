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
  margin?: number;
  fontWeight?: string;
  children: React.ReactNode;
}
