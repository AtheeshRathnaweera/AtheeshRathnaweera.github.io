import type { ReactNode } from "react";

interface SectionContentProps {
  children: ReactNode;
}

const SectionContent = ({ children }: SectionContentProps) => {
  return <div className="mt-3">{children}</div>;
};

export default SectionContent;
