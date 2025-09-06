import React from "react";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
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
    bg-[var(--color-bg)]
    text-[var(--color-text)]
    ${className}
  `}
  >
    {children}
  </section>
);

export default Section;
