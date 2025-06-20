
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
// STAP 1: Importeer de hero afbeelding
import heroImage from '../assets/hero-afbeelding.png';


interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
  life: number; // Max life in frames
  currentLife: number;
}

const particleColors = ['#F472B6', '#A78BFA', '#60A5FA', '#FFD700', '#C0C0C0']; // Pink, Purple, Blue, Gold, Silver

const ParticleHero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [imageOpacity, setImageOpacity] = useState(1);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameIdRef = useRef<number | null>(null);

  const createParticle = useCallback((canvasWidth: number, canvasHeight: number) => {
    const size = Math.random() * 3 + 1;
    const emitX = canvasWidth * (0.5 + (Math.random() - 0.5) * 0.4);
    const emitY = canvasHeight * (0.5 + (Math.random() - 0.5) * 0.2);
    
    return {
      x: emitX,
      y: emitY,
      size: size,
      speedX: (Math.random() - 0.5) * 1.5,
      speedY: -(Math.random() * 1.5 + 0.5),
      color: particleColors[Math.floor(Math.random() * particleColors.length)],
      opacity: Math.random() * 0.5 + 0.5,
      life: Math.random() * 120 + 80,
      currentLife: 0,
    };
  }, []);

  const drawParticles = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx || !canvas) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesRef.current.forEach((particle, index) => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      particle.opacity -= (1 / particle.life) * 0.7;
      particle.currentLife++;

      if (particle.opacity <= 0 || particle.currentLife >= particle.life) {
        particlesRef.current.splice(index, 1);
        return;
      }

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2, false);
      ctx.fillStyle = `rgba(${hexToRgb(particle.color)}, ${particle.opacity})`;
      ctx.fill();
    });

    const numNewParticles = Math.floor((1 - imageOpacity) * 2);
    if (particlesRef.current.length < 150 && imageOpacity < 0.95 && canvas.width > 0 && canvas.height > 0) {
      for (let i = 0; i < numNewParticles; i++) {
        if (Math.random() < 0.5) {
             particlesRef.current.push(createParticle(canvas.width, canvas.height));
        }
      }
    }
    
    animationFrameIdRef.current = requestAnimationFrame(drawParticles);
  }, [imageOpacity, createParticle]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        canvas.width = entry.contentRect.width;
        canvas.height = entry.contentRect.height;
      }
    });
    resizeObserver.observe(container);
    
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;

    animationFrameIdRef.current = requestAnimationFrame(drawParticles);

    return () => {
      if (animationFrameIdRef.current !== null) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      resizeObserver.disconnect();
      particlesRef.current = [];
    };
  }, [drawParticles]);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current || !containerRef.current) return;

      const heroSectionHeight = containerRef.current.offsetHeight;
      const scrollPosition = window.scrollY;
      
      const fadeStart = 0; 
      const fadeEnd = heroSectionHeight * 0.66;

      let newOpacity = 1;
      if (scrollPosition > fadeStart) {
        newOpacity = Math.max(0, 1 - (scrollPosition - fadeStart) / (fadeEnd - fadeStart));
      }
      setImageOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function hexToRgb(hex: string): string {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '255,255,255';
  }

  return (
    <div ref={containerRef} className="relative h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden text-center text-white">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-10" />
      <img
        ref={imageRef}
        // STAP 2: Gebruik de geïmporteerde variabele
        src={heroImage} 
        alt="Webbiecorn Eenhoorn op Laptop met grafiek"
        className="absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ease-out z-20"
        style={{ opacity: imageOpacity }}
      />
      <div className="relative z-30 p-4" style={{ opacity: Math.min(1, imageOpacity + 0.3)}}>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          <span className="block text-[#E0D9F7]">Social Media</span>
          <span className="block gradient-text mt-1 md:mt-2">Magie die Werkt.</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-[#E0D9F7]/90">
          Ontketen de kracht van creativiteit en data. Webbiecorn transformeert uw social media aanwezigheid in pure magie.
        </p>
        <div className="mt-10">
          <Link to="/diensten" className="px-8 py-3 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-[#F472B6] via-[#A78BFA] to-[#60A5FA] hover:opacity-90 transition-opacity duration-300 shadow-lg">
            Ontdek Onze Toverkracht
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ParticleHero;