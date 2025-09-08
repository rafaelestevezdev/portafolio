import { useEffect, useState } from "react";


export function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };

    window.addEventListener("pointermove", handleMove);

    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, []);

  return (
   <div
      className="fixed w-10 h-10 rounded-full pointer-events-none opacity-80 z-[9999] bg-white/25 dark:bg-black/65 border-2 border-black dark:border-white transition-colors duration-300"
      style={{
        left: -20,
        top: -20,
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    ></div>
  );
}