import type { ReactNode } from "react";

interface SectionContentProps {
  children: ReactNode;
  className?: string;
}

const SectionContent = ({ children, className }: SectionContentProps) => {
  return <div className={`mt-3 ${className}`}>{children}</div>;
};

export default SectionContent;
