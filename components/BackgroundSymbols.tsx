'use client';

import { motion } from 'framer-motion';

interface SymbolProps {
  type: 'plus' | 'asterisk';
  top: string;
  left: string;
  size: string;
  delay?: number;
  reverse?: boolean;
}

const BackgroundSymbol = ({ type, top, left, size, delay = 0, reverse = false }: SymbolProps) => {
  const getSymbolPath = () => {
    if (type === 'plus') {
      return (
        <g>
          <path d="M12.5 2 L12.5 23 M2 12.5 L23 12.5" stroke="#612b7d" strokeWidth="3" fill="none"/>
        </g>
      );
    } else {
      return (
        <g transform="translate(12.5, 12.5)">
          <path d="M0 -10 L0 10 M-8.7 -5 L8.7 5 M-8.7 5 L8.7 -5" stroke="#612b7d" strokeWidth="3" fill="none"/>
        </g>
      );
    }
  };

  return (
    <motion.svg
      className="position-absolute"
      style={{
        top,
        left,
        width: size,
        height: size,
        opacity: 0.08,
        pointerEvents: 'none',
        zIndex: 1
      }}
      viewBox="0 0 25 25"
      animate={{
        y: [0, -20, 0],
        rotate: [0, 90, 0]
      }}
      transition={{
        duration: 15,
        ease: "easeInOut",
        repeat: Infinity,
        delay
      }}
    >
      {getSymbolPath()}
    </motion.svg>
  );
};

const BackgroundSymbols = () => {
  return (
    <div 
      className="position-fixed w-100 h-100"
      style={{
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 1
      }}
    >
      {/* Símbolos + */}
      <BackgroundSymbol type="plus" top="10%" left="5%" size="25vw" />
      <BackgroundSymbol type="plus" top="60%" left="80%" size="20vw" delay={-7} reverse />
      <BackgroundSymbol type="plus" top="80%" left="10%" size="15vw" delay={-4} />
      
      {/* Símbolos * */}
      <BackgroundSymbol type="asterisk" top="30%" left="75%" size="30vw" delay={-10} />
      <BackgroundSymbol type="asterisk" top="5%" left="60%" size="18vw" delay={-2} />
      <BackgroundSymbol type="asterisk" top="70%" left="45%" size="12vw" delay={-6} reverse />
    </div>
  );
};

export default BackgroundSymbols;
