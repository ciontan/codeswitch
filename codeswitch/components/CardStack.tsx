"use client";
import { useEffect, useRef, useState } from "react";

interface CardProps {
  color: string;
  sub: string;
  content: string;
}

const cards: CardProps[] = [
  {
    color: "bg-yellow-500",
    sub: "All Engineering",
    content:
      "Beyond programming - explore mechanical, electrical, civil",
  },
  {
    color: "bg-green-500",
    sub: "Project-Based",
    content:
      "Unique assessment focused on creativity and real-world application",
  },
  {
    color: "bg-purple-500",
    sub: "Personalized",
    content: "Custom-made tools that adapt to different learning styles",
  },
  {
    color: "bg-orange-500",
    sub: "Portfolio Building",
    content: "Build real projects and achievements for future opportunities",
  },
  {
    color: "bg-red-500",
    sub: "Creative Control",
    content: "Full creative freedom over projects, fostering innovation",
  },
  {
    color: "bg-teal-500",
    sub: "All-Rounder",
    content: "Maximum exposure to help identify true talents",
  },
];

export default function CardStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewHeight = window.innerHeight;

      // Calculate how much of the container has been scrolled through
      const scrollProgress = Math.max(
        0,
        Math.min(1, -rect.top / (rect.height - viewHeight))
      );

      // Map scroll progress to card indices
      // We want to show cards progressively as we scroll
      const cardIndex = Math.floor(scrollProgress * (cards.length + 1)) - 1;
      const clampedIndex = Math.max(-1, Math.min(cardIndex, cards.length - 1));

      setActiveIndex(clampedIndex);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 pt-24 h-screen flex items-center justify-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`absolute w-[350px] h-[350px] rounded-[25px] p-8 flex flex-col justify-between transition-all duration-500 ease-in-out ${card.color} bg-opacity-90 backdrop-blur-sm shadow-xl`}
            style={{
              top: "50%",
              left: "80%",
              transform:
                index < activeIndex
                  ? `translate(-50%, -50%) translateY(-120vh) rotate(45deg)`
                  : `translate(-50%, -50%) rotate(${
                      Math.max(0, index - Math.max(0, activeIndex)) * 10
                    }deg)`,
              opacity: index < activeIndex ? 0 : 1,
              zIndex: cards.length - Math.abs(index - activeIndex),
              transformOrigin: "center",
            }}
          >
            <div className="font-bold text-xl text-white/90">{card.sub}</div>
            <div className="font-bold text-3xl leading-tight text-white">
              {card.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
