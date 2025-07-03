'use client';

import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

const VideosSection = () => {
  // Datos de ejemplo para los videos
  const videos = [
    { id: 1, titulo: 'Video Corporativo', tipo: 'Empresarial', imagen: '/video1.jpg' },
    { id: 2, titulo: 'Redes Sociales', tipo: 'Marketing', imagen: '/video2.jpg' },
    { id: 3, titulo: 'Tutorial Formativo', tipo: 'Educativo', imagen: '/video3.jpg' },
    { id: 4, titulo: 'Video Corporativo', tipo: 'Empresarial', imagen: '/video1.jpg' }, // Repetir para loop
    { id: 5, titulo: 'Redes Sociales', tipo: 'Marketing', imagen: '/video2.jpg' },
    { id: 6, titulo: 'Tutorial Formativo', tipo: 'Educativo', imagen: '/video3.jpg' }
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
                      margin: '0 10px',
                      borderRadius: '15px',
                      position: 'relative',
                      overflow: 'hidden',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    {/* Imagen de fondo */}
                    <Image
                      src={video.imagen}
                      alt={video.titulo}
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
                          parent.style.background = 'var(--color-primary)';
                        }
                      }}
                    />
                    
                    {/* Overlay con contenido */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      padding: '20px'
                    }}>
                      {/* Botón de play */}
                      <div style={{
                        width: '60px',
                        height: '60px',
                        background: 'rgba(255,255,255,0.9)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '15px',
                        color: 'var(--color-primary)',
                        fontSize: '1.5rem',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                      }}>
                        ▶
                      </div>
                      
                      <h4 style={{ 
                        fontSize: '1rem', 
                        margin: '0 0 5px 0',
                        textAlign: 'center',
                        textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                      }}>
                        {video.titulo}
                      </h4>
                      
                      <span style={{ 
                        fontSize: '0.8rem', 
                        background: 'rgba(255,255,255,0.2)',
                        padding: '4px 12px',
                        borderRadius: '15px',
                        backdropFilter: 'blur(10px)'
                      }}>
                        {video.tipo}
                      </span>
                    </div>
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
                {[
                  { id: 1, imagen: '/marca1.png', alt: 'Marca 1' },
                  { id: 2, imagen: '/marca2.png', alt: 'Marca 2' },
                  { id: 3, imagen: '/marca1.png', alt: 'Marca 1' },
                  { id: 4, imagen: '/marca2.png', alt: 'Marca 2' }
                ].map((marca, index) => (
                  <div
                    key={index}
                    style={{
                      flex: '0 0 50%',
                      height: '80px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '20px'
                    }}
                  >
                    <img
                      src={marca.imagen}
                      alt={marca.alt}
                      style={{
                        maxHeight: '100%',
                        maxWidth: '100%',
                        objectFit: 'contain',
                        filter: 'grayscale(100%)',
                        transition: 'filter 0.3s ease'
                      }}
                      onError={(e) => {
                        // Fallback si la imagen no existe
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div style="
                            font-size: 1.5rem;
                            font-weight: 600;
                            color: var(--color-primary);
                          ">Marca ${(index % 2) + 1}</div>`;
                        }
                      }}
                      onMouseOver={(e) => {
                        (e.target as HTMLImageElement).style.filter = 'grayscale(0%)';
                      }}
                      onMouseOut={(e) => {
                        (e.target as HTMLImageElement).style.filter = 'grayscale(100%)';
                      }}
                    />
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
