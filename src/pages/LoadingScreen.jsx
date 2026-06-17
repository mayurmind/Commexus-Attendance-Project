import { useEffect, useState } from 'react';

function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const fullText = "SYNQUORA";

  useEffect(() => {
    let currentProgress = 0;

    const interval = setInterval(() => {
      // Smoother, slightly slower jumps so the typing effect is visible
      currentProgress += Math.random() * 6 + 1;
      if (currentProgress > 100) currentProgress = 100;
      setProgress(currentProgress);

      if (currentProgress === 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsFadingOut(true);
          if (onComplete) {
            setTimeout(onComplete, 800);
          }
        }, 800);
      }
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Calculate how many characters to show based on progress (from 0 to length)
  const charCount = Math.floor((progress / 100) * fullText.length);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-50 transition-all duration-700 ease-in-out ${isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'}`}
    >
      <style>
        {`
          .perspective-container {
            perspective: 1000px;
          }
          
          .cube-container {
            width: 160px;
            height: 160px;
            position: relative;
            transform-style: preserve-3d;
            animation: rotateCube 4s infinite cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .cube-face {
            position: absolute;
            width: 160px;
            height: 160px;
            background: rgba(79, 70, 229, 0.05);
            border: 1px solid rgba(79, 70, 229, 0.3);
            backdrop-filter: blur(8px);
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 0 30px rgba(79, 70, 229, 0.1) inset;
          }

          .cube-face-front  { transform: rotateY(  0deg) translateZ(80px); }
          .cube-face-back   { transform: rotateY(180deg) translateZ(80px); }
          .cube-face-right  { transform: rotateY( 90deg) translateZ(80px); }
          .cube-face-left   { transform: rotateY(-90deg) translateZ(80px); }
          .cube-face-top    { transform: rotateX( 90deg) translateZ(80px); }
          .cube-face-bottom { transform: rotateX(-90deg) translateZ(80px); }

          @keyframes rotateCube {
            0% { transform: rotateX(-20deg) rotateY(0deg); }
            25% { transform: rotateX(-20deg) rotateY(90deg); }
            50% { transform: rotateX(-20deg) rotateY(180deg); }
            75% { transform: rotateX(-20deg) rotateY(270deg); }
            100% { transform: rotateX(-20deg) rotateY(360deg); }
          }
        `}
      </style>

      {/* 3D Cube Animation */}
      <div className="perspective-container mb-16 mt-4">
        <div className="cube-container">
          <div className="cube-face cube-face-front">
            <span className="material-symbols-outlined text-indigo-600/80 text-[80px] drop-shadow-sm">bubble_chart</span>
          </div>
          <div className="cube-face cube-face-back">
            <span className="material-symbols-outlined text-indigo-600/80 text-[80px] drop-shadow-sm">sync</span>
          </div>
          <div className="cube-face cube-face-right">
            <span className="material-symbols-outlined text-indigo-600/80 text-[80px] drop-shadow-sm">token</span>
          </div>
          <div className="cube-face cube-face-left">
            <span className="material-symbols-outlined text-indigo-600/80 text-[80px] drop-shadow-sm">api</span>
          </div>
          <div className="cube-face cube-face-top bg-indigo-600/10"></div>
          <div className="cube-face cube-face-bottom bg-indigo-600/10"></div>
        </div>

        {/* Floor shadow */}
        <div className="w-[160px] h-[24px] bg-indigo-900/10 rounded-full blur-md mt-20 mx-auto animate-pulse"></div>
      </div>

      {/* Typography & Progress */}
      <div className="flex flex-col items-center w-full max-w-lg px-8">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-[0.25em] text-slate-800 font-brand mb-8 text-center drop-shadow-sm flex">
          {fullText.split('').map((char, index) => (
            <span
              key={index}
              className={`transition-opacity duration-150 ${index < charCount ? 'opacity-100' : 'opacity-0'}`}
            >
              {char}
            </span>
          ))}
        </h1>

        <div className="w-full relative">
          <div className="flex justify-between items-center mb-2 px-2">
            <span className="text-xs md:text-sm font-semibold tracking-widest text-slate-400 uppercase font-brand">
              {progress < 100 ? 'Loading the SYNQUORA...' : 'System Ready'}
            </span>
            <span className="text-sm md:text-base font-bold text-indigo-600 font-brand">
              {Math.floor(progress)}%
            </span>
          </div>

          {/* Progress Bar Track */}
          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden shadow-inner">
            {/* Progress Bar Fill */}
            <div
              className="h-full bg-black rounded-full transition-all duration-200 ease-out shadow-[0_0_8px_rgba(0,0,0,0.4)]"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
