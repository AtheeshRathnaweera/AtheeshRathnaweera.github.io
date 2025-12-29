import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface DivContainerProps {
  children: ReactNode;
  className?: string;
}

const DivContainer = ({ children, className = "" }: DivContainerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default DivContainer;
