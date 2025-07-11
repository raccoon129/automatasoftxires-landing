'use client';

import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

const ProyectosSection = () => {
  // Datos de ejemplo para los proyectos
  const proyectos = [
    { id: 1, imagen: '/proyecto-video1.jpg', alt: 'Proyecto Video 1', titulo: 'Video Corporativo' },
    { id: 2, imagen: '/proyecto-video2.jpg', alt: 'Proyecto Video 2', titulo: 'Redes Sociales' },
    { id: 3, imagen: '/proyecto-video3.jpg', alt: 'Proyecto Video 3', titulo: 'Tutorial Educativo' },
  ];

  return (
    <section 
      id="proyectos" 
      style={{ 
        padding: '100px 0',
        background: 'var(--color-background)'
      }}
    >
      <Container>
        <Row>
          <Col lg={8} className="mx-auto text-center mb-5">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: 'var(--color-primary)',
                marginBottom: '30px'
              }}
            >
              Difundamos más allá tus ideas
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                fontSize: '1.2rem',
                color: 'var(--color-text)',
                lineHeight: '1.7',
                marginBottom: '10px'
              }}
            >
              ¿Tienes o quieres el contenido necesario?
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                fontSize: '1.1rem',
                color: 'var(--color-text-light)',
                lineHeight: '1.7'
              }}
            >
              Con videos se entiende el público. Edición de video profesional para redes sociales, 
              formación, entretenimiento, o difundir una idea breve. Consulta un presupuesto.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{
                fontSize: '1.1rem',
                color: 'var(--color-primary)',
                fontWeight: '600',
                marginTop: '20px'
              }}
            >
              ¡Trabajemos juntos!
            </motion.p>
          </Col>
        </Row>
        
        {/* Carrusel de proyectos optimizado */}
        <Row>
          <Col xs={12}>
            <div 
              className="carousel-container"
              style={{ 
                overflow: 'hidden', 
                position: 'relative',
                height: '300px',
                background: 'var(--color-gray-light)',
                borderRadius: '15px'
              }}
            >
              <div
                className="carousel-track"
                style={{
                  display: 'flex',
                  height: '100%',
                  width: 'fit-content',
                }}
              >
                {/* Primera copia de proyectos */}
                {proyectos.map((proyecto) => (
                  <div
                    key={`a-${proyecto.id}`}
                    style={{
                      flex: '0 0 calc(100vw / 3 - 40px)',
                      minWidth: '300px',
                      height: '100%',
                      margin: '0 10px',
                      borderRadius: '10px',
                      position: 'relative',
                      overflow: 'hidden',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    <Image
                      src={proyecto.imagen}
                      alt={proyecto.alt}
                      fill
                      style={{
                        objectFit: 'cover'
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.style.background = `linear-gradient(135deg, var(--color-primary), var(--color-accent))`;
                        }
                      }}
                    />
                    
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)',
                      display: 'flex',
                      alignItems: 'flex-end',
                      justifyContent: 'center',
                      padding: '20px',
                      color: 'white'
                    }}>
                      <span style={{
                        fontSize: '1.2rem',
                        fontWeight: '600',
                        textAlign: 'center',
                        textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                      }}>
                        {proyecto.titulo}
                      </span>
                    </div>
                  </div>
                ))}
                
                {/* Segunda copia para el loop infinito */}
                {proyectos.map((proyecto) => (
                  <div
                    key={`b-${proyecto.id}`}
                    style={{
                      flex: '0 0 calc(100vw / 3 - 40px)',
                      minWidth: '300px',
                      height: '100%',
                      margin: '0 10px',
                      borderRadius: '10px',
                      position: 'relative',
                      overflow: 'hidden',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    <Image
                      src={proyecto.imagen}
                      alt={proyecto.alt}
                      fill
                      style={{
                        objectFit: 'cover'
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.style.background = `linear-gradient(135deg, var(--color-primary), var(--color-accent))`;
                        }
                      }}
                    />
                    
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)',
                      display: 'flex',
                      alignItems: 'flex-end',
                      justifyContent: 'center',
                      padding: '20px',
                      color: 'white'
                    }}>
                      <span style={{
                        fontSize: '1.2rem',
                        fontWeight: '600',
                        textAlign: 'center',
                        textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                      }}>
                        {proyecto.titulo}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Estilos CSS para la animación optimizada */}
              <style jsx>{`
                .carousel-track {
                  animation: loop 25s linear infinite;
                  will-change: transform;
                }
                
                @keyframes loop {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }
                
                /* Pausa la animación al pasar el ratón */
                .carousel-container:hover .carousel-track {
                  animation-play-state: paused;
                }
              `}</style>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProyectosSection;
