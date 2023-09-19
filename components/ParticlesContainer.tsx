'use client'
import { useCallback } from 'react'
import Particles from 'react-particles'
import type { Container, Engine } from 'tsparticles-engine'
import { loadFull } from 'tsparticles'

type optionsSetProps = {
  background: {
    color: {
      value: string
    }
  }
  fullScreen: {
    enable: boolean
  }
  style: {
    position: string
  }
  fpsLimit: number
  interactivity: {
    events: {
      onClick: {
        enable: boolean
        mode: string
      }
      onHover: {
        enable: boolean
        mode: string
      }
      resize: boolean
    }
    modes: {
      push: {
        quantity: number
      }
      repulse: {
        distance: number
        duration: number
      }
    }
  }
  particles: {
    color: {
      value: string
    }
    links: {
      color: string
      distance: number
      enable: boolean
      opacity: number
      width: number
    }
    move: {
      direction: 'none' | 'left' | 'right' | 'bottom' | 'top'
      enable: boolean
      outModes: {
        default: 'split' | 'none' | 'bounce'
      }
      random: boolean
      speed: number
      straight: boolean
    }
    number: {
      density: {
        enable: boolean
        area: number
      }
      value: number
    }
    opacity: {
      value: number
    }
    shape: {
      type: string
    }
    size: {
      value: { min: number; max: number }
    }
  }
  detectRetina: boolean
}

const optionsSet: optionsSetProps = {
  background: {
    color: {
      value: '',
    },
  },
  fullScreen: {
    enable: true,
  },
  style: {
    position: 'absolute',
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: 'repulse',
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
      value: '#e68e2e',
    },
    links: {
      color: '#f5d393',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'bounce',
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
      type: 'circle',
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
}

interface IParticlesContainerProps {}

const ParticlesContainer: React.FC<IParticlesContainerProps> = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await container
    },
    []
  )

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={optionsSet}
    />
  )
}

export default ParticlesContainer
