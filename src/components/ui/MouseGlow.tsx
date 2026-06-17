import { useEffect, useState } from 'react';

export function MouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div
        className="fixed w-80 h-80 rounded-full pointer-events-none z-10"
        style={{
          left: position.x - 160,
          top: position.y - 160,
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
          filter: 'blur(20px)',
          transform: 'translate3d(0, 0, 0)',
        }}
      />
      <div
        className="fixed w-6 h-6 rounded-full pointer-events-none z-10 mix-blend-screen"
        style={{
          left: position.x - 12,
          top: position.y - 12,
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.8), rgba(6, 182, 212, 0.8))',
          boxShadow: '0 0 20px rgba(99, 102, 241, 0.5), 0 0 40px rgba(6, 182, 212, 0.3)',
          transform: 'translate3d(0, 0, 0)',
        }}
      />
    </>
  );
}
