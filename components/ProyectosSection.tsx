'use client';

import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';

const ProyectosSection = () => {
  // Datos de ejemplo para los proyectos
  const proyectos = [
    { id: 1, imagen: '/proyecto1.jpg', alt: 'Proyecto 1' },
    { id: 2, imagen: '/proyecto2.jpg', alt: 'Proyecto 2' },
    { id: 3, imagen: '/proyecto3.jpg', alt: 'Proyecto 3' },
    { id: 4, imagen: '/proyecto1.jpg', alt: 'Proyecto 1' }, // Repetir para loop infinito
    { id: 5, imagen: '/proyecto2.jpg', alt: 'Proyecto 2' },
    { id: 6, imagen: '/proyecto3.jpg', alt: 'Proyecto 3' }
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
              ¿Tienes el contenido necesario?
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
              Con videos se entiende el público. Edición de video profesional, para redes sociales, 
              formación, entretenimiento, o difundir una idea breve.
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
        
        {/* Carrusel de proyectos */}
        <Row>
          <Col xs={12}>
            <div style={{ 
              overflow: 'hidden', 
              position: 'relative',
              height: '300px',
              background: 'var(--color-gray-light)',
              borderRadius: '15px'
            }}>
              <motion.div
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear'
                }}
                style={{
                  display: 'flex',
                  height: '100%',
                  width: '200%' // Doble ancho para loop infinito
                }}
              >
                {proyectos.map((proyecto, index) => (
                  <div
                    key={index}
                    style={{
                      flex: '0 0 calc(100% / 6)', // 6 elementos ocupan el 200%
                      height: '100%',
                      background: `linear-gradient(135deg, var(--color-primary), var(--color-accent))`,
                      margin: '0 10px',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '1.2rem',
                      fontWeight: '600'
                    }}
                  >
                    Proyecto {(index % 3) + 1}
                  </div>
                ))}
              </motion.div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProyectosSection;
