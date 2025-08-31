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
    style={{
      background: "var(--color-bg)",
      color: "var(--color-text)",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      ...style,
    }}
    className={className}
  >
    {children}
  </section>
);

export default Section;
