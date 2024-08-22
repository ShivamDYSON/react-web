import React, { useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import HeroImage from '../assets/hero-imag.jpg';
import * as THREE from 'three';

// Component for the particles explosion animation
const ParticlesExplosion = () => {
  const particlesRef = useRef();
  const count = 1000; // Reduced particle count for less density

  const positions = new Float32Array(count * 3);
  const sizes = new Float32Array(count);

  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10;
  }

  for (let i = 0; i < count; i++) {
    sizes[i] = Math.random(); // Random sizes for variety
  }

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    particlesRef.current.rotation.x = time * 0.1;
    particlesRef.current.rotation.y = time * 0.2;
  });

  return (
    <points ref={particlesRef} frustumCulled={false}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          array={sizes}
          count={count}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        color="orange" // Original color
        size={0.05}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
};

// Component for the text animation
const TextAnimation = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "Saurabh Prakash";
  const typingSpeed = 100;
  const pauseDuration = 1000;

  useEffect(() => {
    const handleTyping = () => {
      const currentText = fullText.slice(0, text.length + (isDeleting ? -1 : 1));
      setText(currentText);

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting]);

  return (
    <h1 className="text-5xl font-bold mb-2 sacramento-regular">
      I'm{' '}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
        {text}
      </span>
    </h1>
  );
};

// Main Hero component
const Hero = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <ambientLight intensity={0.5} />
          <ParticlesExplosion />
        </Canvas>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <img
          src={HeroImage}
          alt="Profile"
          className="mb-8 w-48 h-48 rounded-full object-cover transform 
          transition-transform duration-300 hover:scale-105"
        />

        <TextAnimation />

        <h2 className="text-4xl font-bold mt-2 mb-4 roboto-mono">
          Full-Stack Developer
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          I specialize in building modern and responsive web applications.
        </p>

        <div className="mt-8 space-x-4">
          <button
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white
              transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          >
            Contact With Me
          </button>
          <button
            className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white
              transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          >
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
