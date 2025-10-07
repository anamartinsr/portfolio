import { useEffect, useRef, useState } from "react";

export default function BlurText({
  text = "Ana Martins",
  delay = 150,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  stepDuration = 350,
  easing = "cubic-bezier(0.22, 1, 0.36, 1)",
}) {
  const elements = animateBy === "words" ? text.split(" ") : Array.from(text);

  const [inView, setInView] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      setReduceMotion(Boolean(mq.matches));
      const handler = (ev) => setReduceMotion(Boolean(ev.matches));
      if (mq.addEventListener) mq.addEventListener("change", handler);
      else mq.addListener(handler);
      return () => {
        if (mq.removeEventListener) mq.removeEventListener("change", handler);
        else mq.removeListener(handler);
      };
    }
  }, []);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <h1 ref={ref} className={`font-bold flex flex-wrap ${className}`}>
      {elements.map((segment, index) => {
        const baseStyle = {
          display: "inline-block",
          willChange: "transform, filter, opacity",
        };

        if (reduceMotion) {
          baseStyle.opacity = 1;
          baseStyle.filter = "none";
          baseStyle.transform = "translateY(0)";
        } else if (!inView) {
          baseStyle.opacity = 0;
          baseStyle.filter = "blur(10px)";
          baseStyle.transform =
            direction === "top" ? "translateY(-20px)" : "translateY(20px)";
        } else {
          baseStyle.animationDuration = `${stepDuration}ms`;
          baseStyle.animationDelay = `${index * delay}ms`;
          baseStyle.animationTimingFunction = easing;
        }

        return (
          <span
            key={index}
            className={`inline-block ${
              inView && !reduceMotion
                ? direction === "top"
                  ? "animate-blurfade-top"
                  : "animate-blurfade-bottom"
                : ""
            }`}
            style={baseStyle}
          >
            {segment === " " ? "\u00A0" : segment}
            {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
          </span>
        );
      })}
    </h1>
  );
}
