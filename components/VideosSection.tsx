'use client';

import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';

const VideosSection = () => {
  // Datos de ejemplo para los videos
  const videos = [
    { id: 1, titulo: 'Video Corporativo', tipo: 'Empresarial' },
    { id: 2, titulo: 'Redes Sociales', tipo: 'Marketing' },
    { id: 3, titulo: 'Tutorial Formativo', tipo: 'Educativo' },
    { id: 4, titulo: 'Video Corporativo', tipo: 'Empresarial' }, // Repetir para loop
    { id: 5, titulo: 'Redes Sociales', tipo: 'Marketing' },
    { id: 6, titulo: 'Tutorial Formativo', tipo: 'Educativo' }
  ];

  return (
    <section 
      id="videos" 
      style={{ 
        padding: '100px 0',
        background: 'var(--color-gray-light)'
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
              Desarrollamos para:
            </motion.h2>
          </Col>
        </Row>
        
        {/* Carrusel de videos */}
        <Row className="mb-5">
          <Col xs={12}>
            <div style={{ 
              overflow: 'hidden', 
              position: 'relative',
              height: '250px'
            }}>
              <motion.div
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: 'linear'
                }}
                style={{
                  display: 'flex',
                  height: '100%',
                  width: '200%'
                }}
              >
                {videos.map((video, index) => (
                  <div
                    key={index}
                    style={{
                      flex: '0 0 calc(100% / 6)',
                      height: '100%',
                      background: 'var(--color-primary)',
                      margin: '0 10px',
                      borderRadius: '15px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      padding: '20px'
                    }}
                  >
                    <div style={{
                      width: '80px',
                      height: '80px',
                      background: 'rgba(255,255,255,0.2)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '15px'
                    }}>
                      ▶
                    </div>
                    <h4 style={{ fontSize: '1rem', margin: '0 0 5px 0' }}>
                      {video.titulo}
                    </h4>
                    <span style={{ fontSize: '0.8rem', opacity: '0.8' }}>
                      {video.tipo}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </Col>
        </Row>
        
        {/* Carrusel de marcas */}
        <Row>
          <Col lg={8} className="mx-auto">
            <div style={{ 
              overflow: 'hidden', 
              position: 'relative',
              height: '120px',
              background: 'white',
              borderRadius: '15px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}>
              <motion.div
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'linear'
                }}
                style={{
                  display: 'flex',
                  height: '100%',
                  width: '200%',
                  alignItems: 'center'
                }}
              >
                {[1, 2, 1, 2].map((marca, index) => (
                  <div
                    key={index}
                    style={{
                      flex: '0 0 50%',
                      height: '80px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      fontWeight: '600',
                      color: 'var(--color-primary)'
                    }}
                  >
                    Marca {marca}
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

export default VideosSection;
