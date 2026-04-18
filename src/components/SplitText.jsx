// src/components/SplitText.jsx
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const SplitText = ({
  text,
  className = "",
  delay = 0.05,
  duration = 0.6,
  ease = "power3.out",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  tag: Tag = "p",
  onComplete,
}) => {
  const containerRef = useRef(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    const letters = containerRef.current.querySelectorAll(".split-char");

    // ✅ Animate immediately (no scrollTrigger)
    gsap.fromTo(
      letters,
      { ...from },
      {
        ...to,
        duration,
        ease,
        stagger: delay,
        onComplete: () => onComplete?.(),
      }
    );
  }, [text]);

  // Split text into spans
  const renderText = text.split("").map((char, i) => (
    <span key={i} className="split-char inline-block">
      {char === " " ? "\u00A0" : char}
    </span>
  ));

  return (
    <Tag ref={containerRef} className={`overflow-hidden ${className}`}>
      {renderText}
    </Tag>
  );
};

export default SplitText;
