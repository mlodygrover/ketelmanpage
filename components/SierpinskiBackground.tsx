"use client";

import { useMemo } from "react";

export const SierpinskiBackground = () => {
  const createSierpinskiPath = (x: number, y: number, size: number, depth: number): string => {
    if (depth === 0) {
      const h = size * 0.8660254; 
      return `M${x} ${y} L${x - size / 2} ${y + h} H${x + size / 2} Z `;
    }
    const newSize = size / 2;
    const h = newSize * 0.8660254;
    return (
      createSierpinskiPath(x, y, newSize, depth - 1) +
      createSierpinskiPath(x - newSize / 2, y + h, newSize, depth - 1) +
      createSierpinskiPath(x + newSize / 2, y + h, newSize, depth - 1)
    );
  };

  // Zmniejszyłem depth do 5 - przy 6 linie mogą być tak gęste, że zlewają się w plamę przy małym stroke
  const pathData = useMemo(() => createSierpinskiPath(500, 0, 1000, 5), []);

  return (
    <div 
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <svg
        // POPRAWKA 1: Zwiększamy opacity z 15 na 60, żebyś to widział.
        // POPRAWKA 2: Zmieniamy text-accent-blue na standardowy 'text-blue-500' (bezpiecznik, gdyby accent-blue nie działał)
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vh] h-[100vh] md:w-[150vh] md:h-[150vh] text-white-500 opacity-40"
        viewBox="0 0 1000 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style jsx>{`
          @keyframes fractal-zoom {
            0% { transform: scale(1); }
            100% { transform: scale(2); }
          }
          
          .sierpinski-group {
            transform-origin: 500px 0px;
            animation: fractal-zoom 15s linear infinite; /* Zwolniłem do 15s dla płynności */
            will-change: transform;
          }
        `}</style>

        <g className="sierpinski-group">
          <path
            d={pathData}
            vectorEffect="non-scaling-stroke"
            stroke="currentColor"
            // POPRAWKA 3: Zwiększamy grubość linii z 0.5 na 1.0
            strokeWidth="1" 
          />
        </g>
      </svg>
      
      {/* POPRAWKA 4: Zmniejszamy agresywność winiety.
          Zamiast 'via-transparent' dałem gradient, który jest czarny tylko na samym dole.
          Zmienilem opacity z 80 na 40. */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40" />
    </div>
  );
};