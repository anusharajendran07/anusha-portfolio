import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });
  const positionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const nextPosition = { x: e.clientX, y: e.clientY };
      positionRef.current = nextPosition;
      setPosition(nextPosition);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', handleMouseMove);

    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, .interactive, .project-card, .skill-card, [role="button"]'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Smooth ring animation
    let animationId;
    const animateRing = () => {
      setRingPosition((prev) => ({
        x: prev.x + (positionRef.current.x - prev.x) * 0.12,
        y: prev.y + (positionRef.current.y - prev.y) * 0.12,
      }));
      animationId = requestAnimationFrame(animateRing);
    };

    animationId = requestAnimationFrame(animateRing);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      {/* Cursor dot */}
      <motion.div
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
        animate={{
          width: isHovering ? '6px' : '12px',
          height: isHovering ? '6px' : '12px',
        }}
        transition={{ duration: 0.2 }}
      />
      {/* Cursor ring */}
      <motion.div
        className="custom-cursor-ring"
        style={{
          left: `${ringPosition.x}px`,
          top: `${ringPosition.y}px`,
        }}
        animate={{
          width: isHovering ? '50px' : '36px',
          height: isHovering ? '50px' : '36px',
        }}
        transition={{ duration: 0.3 }}
      />
    </>
  );
};

export default CustomCursor;
