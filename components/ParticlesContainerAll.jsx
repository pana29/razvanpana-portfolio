import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import React, { useCallback } from 'react';

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      className="w-full h-full absolute translate-z-0"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: '', 
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: ['repulse', 'bubble', 'connect'], 
            },
            resize: true,
          },
          modes: {
            bubble: {
              size: 1,
              distance: 100,
              duration: 1,
              color: '#ff0000',
            },
            connect: {
              distance: 80,
              lineLinked: {
                opacity: 0.5,
              },
            },
            repulse: {
              distance: 140,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: ['#F13024'], 
          },
          links: {
            color: '#f5d393',
            distance: 100,
            enable: true,
            opacity: 0.2,
            width: 0.2,
          },
          move: {
            enable: true,
            speed: 0.3,
            direction: 'none',
            random: true,
            straight: false,
            outModes: {
              default: 'bounce',
            },
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200,
            },
          },
          number: {
            value: 15, 
          },
          opacity: {
            value: 0.5,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
            },
          },
          shape: {
            type: ['square'], 
          },
          size: {
            value: { min: 1, max: 1.2 },
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.1,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;
