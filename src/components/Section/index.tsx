import { type CSSProperties, type ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

const Section = ({ id, children, style, className = "" }: SectionProps) => (
  <section
    id={id}
    style={style}
    className={`
    min-h-screen
    flex
    flex-col
    justify-center
    ${className}
  `}
  >
    {children}
  </section>
);

export default Section;
