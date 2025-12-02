export type headingType = "h1" | "h2" | "h3" | "h4";
export type HeadingProps = {
  children: React.ReactNode;
  align?: "start" | "center" | "end";
  lineColor?: string;
  type?: headingType;
  className?: string;
};
