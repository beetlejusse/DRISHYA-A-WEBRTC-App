'use client'
import { SignIn } from '@clerk/nextjs'
import React, { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { Engine } from 'tsparticles-engine'
import { loadSlim } from 'tsparticles-slim'

export default function SignInPage() {
  const particlesInit = useCallback(async (engine: Engine) => {
      await loadSlim(engine)
    }, [])
  return (
    <main className='flex h-screen w-full flex-center'>
      <Particles
              id="tsparticles"
              init={particlesInit}
              options={{
                background: {
                  color: {
                    value: "#000000",
                  },
                },
                fpsLimit: 120,
                interactivity: {
                  events: {
                    onClick: {
                      enable: true,
                      mode: "push",
                    },
                    onHover: {
                      enable: true,
                      mode: "repulse",
                    },
                    resize: true,
                  },
                  modes: {
                    push: {
                      quantity: 4,
                    },
                    repulse: {
                      distance: 200,
                      duration: 0.4,
                    },
                  },
                },
                particles: {
                  color: {
                    value: "#ffffff",
                  },
                  links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                  },
                  move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                      default: "bounce",
                    },
                    random: false,
                    speed: 1,
                    straight: false,
                  },
                  number: {
                    density: {
                      enable: true,
                      area: 800,
                    },
                    value: 80,
                  },
                  opacity: {
                    value: 0.5,
                  },
                  shape: {
                    type: "circle",
                  },
                  size: {
                    value: { min: 1, max: 5 },
                  },
                },
                detectRetina: true,
              }}
              className="absolute inset-0"
            />
        <SignIn 
        forceRedirectUrl="/home"  
      />
    </main>
  )
}