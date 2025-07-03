'use client';

import styles from './HeroBackground.module.css';

const HeroBackground = () => {
  return (
    <div className={styles.symbolsContainer}>
      {/* Símbolos + grandes */}
      <svg className={`${styles.symbol}`} style={{top: '-20%', left: '-10%', width: '70vw', height: '70vw'}}>
        <path d="M35 5 L35 65 M5 35 L65 35" stroke="white" strokeWidth="8" fill="none"/>
      </svg>

      <svg className={`${styles.symbol}`} style={{top: '20%', left: '60%', width: '50vw', height: '50vw'}}>
        <path d="M25 3 L25 47 M3 25 L47 25" stroke="white" strokeWidth="6" fill="none"/>
      </svg>
      
      <svg className={`${styles.symbol}`} style={{top: '70%', left: '-15%', width: '40vw', height: '40vw'}}>
        <path d="M20 2 L20 38 M2 20 L38 20" stroke="white" strokeWidth="5" fill="none"/>
      </svg>
      
      <svg className={`${styles.symbol}`} style={{top: '-10%', left: '40%', width: '35vw', height: '35vw'}}>
        <path d="M17.5 2 L17.5 33 M2 17.5 L33 17.5" stroke="white" strokeWidth="4.5" fill="none"/>
      </svg>
      
      <svg className={`${styles.symbol}`} style={{top: '45%', left: '80%', width: '30vw', height: '30vw'}}>
        <path d="M15 1.5 L15 28.5 M1.5 15 L28.5 15" stroke="white" strokeWidth="4" fill="none"/>
      </svg>
      
      {/* Símbolos * grandes */}
      <svg className={`${styles.symbol}`} style={{top: '10%', left: '15%', width: '60vw', height: '60vw'}}>
        <g transform="translate(30, 30)">
          <path d="M0 -25 L0 25 M-21.7 -12.5 L21.7 12.5 M-21.7 12.5 L21.7 -12.5" stroke="white" strokeWidth="7" fill="none"/>
        </g>
      </svg>
      
      <svg className={`${styles.symbol}`} style={{top: '50%', left: '45%', width: '45vw', height: '45vw'}}>
        <g transform="translate(22.5, 22.5)">
          <path d="M0 -18 L0 18 M-15.6 -9 L15.6 9 M-15.6 9 L15.6 -9" stroke="white" strokeWidth="5.5" fill="none"/>
        </g>
      </svg>
      
      <svg className={`${styles.symbol}`} style={{top: '80%', left: '70%', width: '35vw', height: '35vw'}}>
        <g transform="translate(17.5, 17.5)">
          <path d="M0 -14 L0 14 M-12.1 -7 L12.1 7 M-12.1 7 L12.1 -7" stroke="white" strokeWidth="4.5" fill="none"/>
        </g>
      </svg>
      
      <svg className={`${styles.symbol}`} style={{top: '-5%', left: '75%', width: '25vw', height: '25vw'}}>
        <g transform="translate(12.5, 12.5)">
          <path d="M0 -10 L0 10 M-8.7 -5 L8.7 5 M-8.7 5 L8.7 -5" stroke="white" strokeWidth="3.5" fill="none"/>
        </g>
      </svg>
      
      {/* Símbolos medianos */}
      <svg className={`${styles.symbol}`} style={{top: '35%', left: '25%', width: '20vw', height: '20vw'}}>
        <path d="M10 1 L10 19 M1 10 L19 10" stroke="white" strokeWidth="3" fill="none"/>
      </svg>
      
      <svg className={`${styles.symbol}`} style={{top: '15%', left: '85%', width: '18vw', height: '18vw'}}>
        <g transform="translate(9, 9)">
          <path d="M0 -7 L0 7 M-6.1 -3.5 L6.1 3.5 M-6.1 3.5 L6.1 -3.5" stroke="white" strokeWidth="2.8" fill="none"/>
        </g>
      </svg>
      
      <svg className={`${styles.symbol}`} style={{top: '65%', left: '10%', width: '15vw', height: '15vw'}}>
        <path d="M7.5 0.8 L7.5 14.2 M0.8 7.5 L14.2 7.5" stroke="white" strokeWidth="2.5" fill="none"/>
      </svg>
      
      <svg className={`${styles.symbol}`} style={{top: '85%', left: '50%', width: '12vw', height: '12vw'}}>
        <g transform="translate(6, 6)">
          <path d="M0 -5 L0 5 M-4.3 -2.5 L4.3 2.5 M-4.3 2.5 L4.3 -2.5" stroke="white" strokeWidth="2.2" fill="none"/>
        </g>
      </svg>
      
      <svg className={`${styles.symbol}`} style={{top: '25%', left: '5%', width: '10vw', height: '10vw'}}>
        <path d="M5 0.5 L5 9.5 M0.5 5 L9.5 5" stroke="white" strokeWidth="2" fill="none"/>
      </svg>
      
      <svg className={`${styles.symbol}`} style={{top: '75%', left: '85%', width: '10vw', height: '10vw'}}>
        <g transform="translate(5, 5)">
          <path d="M0 -4 L0 4 M-3.5 -2 L3.5 2 M-3.5 2 L3.5 -2" stroke="white" strokeWidth="1.8" fill="none"/>
        </g>
      </svg>
    </div>
  );
};

export default HeroBackground;
