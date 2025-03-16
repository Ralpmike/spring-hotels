import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

// Define the rotation animation
const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Cursor = styled.div`
  position: fixed;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  pointer-events: none;
  transition: transform 0.1s ease-out;

  /* Wrapping the inner rotating element */
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border-top: 2px solid goldenrod;
    animation: ${rotate} 1.5s linear infinite;
  }
`;

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <Cursor
      style={{ left: `${position.x - 12}px`, top: `${position.y - 12}px` }}
    />
  );
};

export default CustomCursor;
