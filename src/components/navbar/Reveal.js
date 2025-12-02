import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, from = "up", delay = 0 }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShow(true);
          io.unobserve(e.target);
        }
      },
      { threshold: 0.15 } // thấy 15% là kích hoạt
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${show ? `reveal-in from-${from}` : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
