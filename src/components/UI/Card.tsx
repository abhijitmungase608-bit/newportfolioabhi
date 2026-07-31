import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

function Card({ children, className = '', hover = true, onClick }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : {}}
      className={`bg-white/[0.02] border border-white/5 rounded-lg p-6 ${hover ? 'hover:border-white/20 transition-all duration-300' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}

export default Card;