'use client';

import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

const RenovacionSection = () => {
  // Datos de ejemplo para los proyectos
  const proyectos = [
    { id: 1, nombre: 'Punto de venta', categoria: 'Desarrollo web', imagen: '/proyectos_puntoVenta.png' },
    { id: 2, nombre: 'Interfaces de usuario', categoria: 'Diseño', imagen: '/proyectos_pantallas.png' },
    { id: 3, nombre: 'Dashboard con analíticas', categoria: 'Gestión', imagen: '/proyectos_analiticas.png' },
    { id: 4, nombre: 'Landing Page', categoria: 'Marketing', imagen: '/proyectos_landing.jpeg' },
    { id: 5, nombre: 'Panel de control', categoria: 'Procesos', imagen: '/proyectos_panel.jpg' },
    { id: 6, nombre: 'Simplificación de procesos', categoria: 'Desarrollo', imagen: '/proyectos_calculadora.jpeg' },
    { id: 7, nombre: 'Desarrollo a la medida', categoria: 'Web', imagen: '/proyectos_medida.png' },
    { id: 8, nombre: 'Gestión de bienes', categoria: 'Desarrollo web', imagen: '/proyectos_inventarios.png' },
  ];

  return (
    <section 
      id="servicios" 
      style={{ 
        padding: '100px 0',
        background: 'var(--color-gray-light)'
      }}
    >
      <Container>
        <Row>
          <Col lg={8} className="mx-auto text-center">
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
              ¡Renovación!
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                fontSize: '1.2rem',
                color: 'var(--color-text)',
                lineHeight: '1.7',
                marginBottom: '20px'
              }}
            >
              Desarrollo de soluciones para equipos reducidos, comercios pequeños, o individuales, 
              con la promesa y actitud de fomentar la adopción digital.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                fontSize: '1.1rem',
                color: 'var(--color-primary)',
                fontWeight: '600'
              }}
            >
              Reduzcamos procesos manuales, y mejoremos juntos.
            </motion.p>
          </Col>
        </Row>
        
        {/* Carrusel de proyectos */}
        <Row className="mt-5">
          <Col xs={12}>
            <div style={{ 
              overflow: 'hidden', 
              position: 'relative',
              height: '280px',
              borderRadius: '15px'
            }}>
              <div
                style={{
                  display: 'flex',
                  height: '100%',
                  width: `${proyectos.length * 2 * 100}px`, // Ancho fijo para cada elemento
                  animation: `marqueeScroll ${proyectos.length * 3}s linear infinite`,
                  willChange: 'transform'
                }}
              >
                {/* Duplicar proyectos para efecto marquee seamless */}
                {[...proyectos, ...proyectos].map((proyecto, index) => (
                  <div
                    key={`${proyecto.id}-${index}`}
                    style={{
                      flex: `0 0 380px`, // Ancho fijo para cada elemento
                      height: '100%',
                      margin: '0 10px',
                      borderRadius: '12px',
                      position: 'relative',
                      overflow: 'hidden',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    {/* Imagen de fondo */}
                    <Image
                      src={proyecto.imagen}
                      alt={proyecto.nombre}
                      fill
                      style={{
                        objectFit: 'cover'
                      }}
                      onError={(e) => {
                        // Fallback si la imagen no existe
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.style.background = `linear-gradient(135deg, var(--color-primary), var(--color-accent))`;
                        }
                      }}
                    />
                    
                    {/* Overlay con gradiente */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      padding: '20px',
                      color: 'white'
                    }}>
                      <h5 style={{ 
                        fontSize: '1.1rem', 
                        margin: '0 0 8px 0',
                        fontWeight: '600',
                        textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                      }}>
                        {proyecto.nombre}
                      </h5>
                      
                      <span style={{ 
                        fontSize: '0.9rem', 
                        background: 'rgba(255,255,255,0.2)',
                        padding: '4px 12px',
                        borderRadius: '15px',
                        alignSelf: 'flex-start',
                        backdropFilter: 'blur(10px)'
                      }}>
                        {proyecto.categoria}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Estilos CSS para la animación marquee */}
              <style jsx>{`
                @keyframes marqueeScroll {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }
              `}</style>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default RenovacionSection;
