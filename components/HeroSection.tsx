'use client';

import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import HeroBackground from './HeroBackground';

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="d-flex align-items-center"
      style={{ 
        minHeight: '100vh',
        background: '#612b7d',
        position: 'relative',
        paddingTop: '80px',
        overflow: 'hidden'
      }}
    >
      <HeroBackground />
      <Container style={{ position: 'relative', zIndex: 10 }}>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                marginBottom: '20px',
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <Image 
                src="/logo1.png" 
                alt="AutomataSoft Xires Logo" 
                width={800}
                height={700}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  filter: 'drop-shadow(0 2px 10px rgba(0, 0, 0, 0.3))'
                }}
              />
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                fontSize: '1.3rem',
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: '1.6',
                marginBottom: '40px'
              }}
            >
              Soluciones personalizadas para equipos pequeños, 
              comercios locales y emprendedores individuales.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="d-flex gap-3 justify-content-center flex-wrap"
            >
              <motion.a 
                href="#servicios" 
                className="btn-primary-custom"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: '#7a3b9d',
                  transition: { duration: 0.2 }
                }}
              >
                Ver Servicios
              </motion.a>
              <motion.a 
                href="/contacto" 
                className="btn-outline-custom"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgb(255, 255, 255)',
                  transition: { duration: 0.1 }
                }}
              >
                Contactar
              </motion.a>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
