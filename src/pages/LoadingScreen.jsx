import { useEffect, useState } from 'react';

function LoadingScreen({ onComplete }) {
  const brandName = "SYNQUORA";
  const [typedText, setTypedText] = useState("");
  const [isFinished, setIsFinished] = useState(false);
  const [scaleUp, setScaleUp] = useState(false);

  useEffect(() => {
    let index = 0;
    const typingSpeed = 150; // ms per letter
    let typeTimeout;

    const typeWriter = () => {
      if (index < brandName.length) {
        setTypedText(brandName.substring(0, index + 1));
        index++;
        typeTimeout = setTimeout(typeWriter, typingSpeed);
      } else {
        setIsFinished(true);
        setTimeout(() => {
          setScaleUp(true);
        }, 100);

        if (onComplete) {
          setTimeout(onComplete, 1200); // Wait for the scale animation, then trigger onComplete
        }
      }
    };

    const initialDelay = setTimeout(typeWriter, 800);

    return () => {
      clearTimeout(typeTimeout);
      clearTimeout(initialDelay);
    };
  }, [onComplete]);

  const progressPercentage = brandName.length > 0 ? (typedText.length / brandName.length) * 100 : 0;

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#ffffff] overflow-hidden">
      <style>
        {`
          @keyframes blink {
              from, to { border-color: transparent }
              50% { border-color: black }
          }
          .typewriter-cursor {
              border-right: 2px solid black;
              animation: blink 0.75s step-end infinite;
              padding-right: 4px;
          }
        `}
      </style>

      {/* Loading Shell */}
      <main className="relative flex flex-col items-center justify-center space-y-stack-unit h-full w-full">
        {/* Brand Content */}
        <div className="relative overflow-hidden flex items-center justify-center w-full px-4">
          <h1 
            className={`font-brand font-bold text-primary tracking-wider min-h-[60px] flex items-center justify-center text-center transition-transform duration-1000 ease-out max-w-full ${!isFinished ? 'typewriter-cursor' : ''}`}
            style={{ 
              transform: scaleUp ? 'scale(1.02)' : 'scale(1)', 
              fontSize: 'clamp(2.5rem, 12vw, 12rem)', 
              lineHeight: '1' 
            }}
          >
            {typedText}
          </h1>
        </div>
        
        {/* Progress Indicator */}
        <div className="w-48 h-[1px] bg-surface-container-highest relative overflow-hidden mt-8">
          <div 
            className="absolute left-0 top-0 h-full bg-primary transition-all duration-100 ease-linear"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

      </main>

      {/* Background Atmospheric Layer */}
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary-fixed to-transparent blur-3xl"></div>
      </div>
    </div>
  );
}

export default LoadingScreen;
