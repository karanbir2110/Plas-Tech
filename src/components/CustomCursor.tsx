// src/components/CustomCursor.tsx
import React, { useEffect, useRef } from "react";

const CURSOR_WIDTH = 24;
const CURSOR_HEIGHT = 36;

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const rippleLayerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.body.style.cursor = "none"; // hide native cursor

    let mouseX = 0;
    let mouseY = 0;
    let posX = 0;
    let posY = 0;
    let raf: number;

    function onMouseMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // spawn ripple in separate layer
      if (rippleLayerRef.current) {
        const ripple = document.createElement("span");
        ripple.className = "cursor-ripple";
        ripple.style.left = `${e.clientX}px`;
        ripple.style.top = `${e.clientY}px`;
        rippleLayerRef.current.appendChild(ripple);

        // remove after animation
        ripple.addEventListener("animationend", () => {
          ripple.remove();
        });
      }
    }

    function animate() {
      posX += (mouseX - posX) * 0.25;
      posY += (mouseY - posY) * 0.25;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${posX}px`;
        cursorRef.current.style.top = `${posY}px`;
      }

      raf = requestAnimationFrame(animate);
    }

    document.addEventListener("mousemove", onMouseMove);
    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <>
      {/* ripple layer behind everything */}
      <div
        ref={rippleLayerRef}
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 9998,
        }}
      />
      {/* actual cursor */}
      <div
        ref={cursorRef}
        className="water-cursor"
        style={{
          width: CURSOR_WIDTH,
          height: CURSOR_HEIGHT,
          position: "fixed",
          left: 0,
          top: 0,
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-20%, -30%)",
        }}
      />
    </>
  );
}
