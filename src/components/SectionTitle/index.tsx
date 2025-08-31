import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle = ({ children, className = "" }: SectionTitleProps) => (
  <h4 className={`text-3xl font-semibold mb-8 dark:text-white ${className}`}>
    {children}
  </h4>
);

export default SectionTitle;
