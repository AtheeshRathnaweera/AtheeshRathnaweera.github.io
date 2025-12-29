import { type CSSProperties, type ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

const Section = ({ id, children, style, className = "" }: SectionProps) => (
  <motion.section
    id={id}
    style={style}
    className={`
    min-h-screen
    flex
    flex-col
    justify-center
    ${className}
  `}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.section>
);

export default Section;
