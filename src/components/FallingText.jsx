import { useRef, useState, useEffect } from 'react';
import Matter from 'matter-js';
import './FallingText.css';

const FallingText = ({
  className = '',
  text = '',
  highlightWords = [],
  highlightClass = 'highlighted',
  trigger = 'auto',
  gravity = 1,
  fontSize = '2rem'
}) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  const [effectStarted, setEffectStarted] = useState(false);

  // ✅ Highlight text
  useEffect(() => {
    if (!textRef.current) return;
    const words = text.split(' ');
    const newHTML = words
      .map(word => {
        const isHighlighted = highlightWords.some(hw => word.startsWith(hw));
        return `<span class="word ${isHighlighted ? highlightClass : ''}">${word}</span>`;
      })
      .join(' ');
    textRef.current.innerHTML = newHTML;
  }, [text, highlightWords, highlightClass]);

  //✅ Start effect only when section is visible
  useEffect(() => {
    if (trigger !== "scroll") {
      setEffectStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEffectStarted(true);
          observer.disconnect(); // run once
        }
      },
      { threshold: 0.3 } // trigger when 30% of container is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [trigger]);


  // ✅ Falling effect
  useEffect(() => {
    if (!effectStarted) return;
    const { Engine, World, Bodies, Runner, Mouse, MouseConstraint } = Matter;

    const containerRect = containerRef.current.getBoundingClientRect();
    const width = containerRect.width || 600;
    const height = containerRect.height || 200;

    const engine = Engine.create();
    engine.world.gravity.y = gravity || 1;

    // ✅ Get words from DOM
    const wordSpans = textRef.current.querySelectorAll('.word');
    const wordBodies = [...wordSpans].map(elem => {
      const rect = elem.getBoundingClientRect();
      const wordWidth = rect.width > 0 ? rect.width : 60;
      const wordHeight = rect.height > 0 ? rect.height : 30;

      // ✅ spawn evenly inside container
      const x = Math.random() * (width - wordWidth - 40) + wordWidth / 2 + 20;
      const y = 60;

      const body = Bodies.rectangle(x, y, wordWidth, wordHeight, {
        restitution: 0.8,
        frictionAir: 0.02
      });
      return { elem, body };
    });

    // ✅ Shared options for static walls
    const boundaryOptions = { isStatic: true, render: { fillStyle: 'transparent' } };

    // ✅ Container walls (inside box)
    const padding = 20; // space inside container

    const floor = Bodies.rectangle(width / 2, height - padding / 2, width - padding * 2, 20, boundaryOptions);
    const ceiling = Bodies.rectangle(width / 2, padding / 2, width - padding * 2, 20, boundaryOptions);
    const leftWall = Bodies.rectangle(padding / 2, height / 2, 20, height - padding * 2, boundaryOptions);
    const rightWall = Bodies.rectangle(width - padding / 2, height / 2, 20, height - padding * 2, boundaryOptions);

    World.add(engine.world, [
      floor,
      ceiling,
      leftWall,
      rightWall,
      ...wordBodies.map(wb => wb.body)
    ]);

    // ✅ Mouse drag support
    const mouse = Mouse.create(containerRef.current);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.2, render: { visible: false } }
    });
    // ✅ Allow page scrolling while still dragging words
      mouse.element.removeEventListener("wheel", mouse.mousewheel);
      mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

    World.add(engine.world, mouseConstraint);

    const runner = Runner.create();
    Runner.run(runner, engine);

    // ✅ Sync DOM with Matter.js
    const updateLoop = () => {
      wordBodies.forEach(({ body, elem }) => {
        const { x, y } = body.position;
        elem.style.left = `${x}px`;
        elem.style.top = `${y}px`;
        elem.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
        elem.style.position = 'absolute';
      });
      requestAnimationFrame(updateLoop);
    };
    updateLoop();

    return () => {
      Runner.stop(runner);
      World.clear(engine.world);
      Engine.clear(engine);
    };
  }, [effectStarted, gravity]);

  return (
    <div ref={containerRef} className={`falling-text-container ${className}`}>
      <div
        ref={textRef}
        className="falling-text-target"
        style={{ fontSize, position: 'relative' }}
      />
    </div>
  );
};

export default FallingText;
