import React, { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number; // Distance multiplier (default: 0.25)
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = "",
  strength = 0.25,
  onClick,
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device to disable pointer tracking on mobile for 100% smooth scroll
    if (typeof window !== "undefined") {
      setIsTouchDevice(
        "ontouchstart" in window ||
          navigator.maxTouchPoints > 0 ||
          window.matchMedia("(pointer: coarse)").matches
      );
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice || !buttonRef.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = (clientX - centerX) * strength;
    const deltaY = (clientY - centerY) * strength;

    // Cap movement to max 10px to keep it elegant and subtle
    const maxOffset = 10;
    const clampedX = Math.max(-maxOffset, Math.min(maxOffset, deltaX));
    const clampedY = Math.max(-maxOffset, Math.min(maxOffset, deltaY));

    setPosition({ x: clampedX, y: clampedY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  if (isTouchDevice) {
    return (
      <div onClick={onClick} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{ x: position.x, y: position.y }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
