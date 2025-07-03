'use client';

import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
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
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '800',
                color: 'white',
                marginBottom: '20px',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
              }}
            >
              AutomataSoft Xires
            </motion.h1>
            
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
              Soluciones tecnológicas personalizadas para equipos pequeños, 
              comercios locales y emprendedores individuales.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="d-flex gap-3 justify-content-center flex-wrap"
            >
              <a href="#servicios" className="btn-primary-custom">
                Ver Servicios
              </a>
              <a href="/contacto" className="btn-outline-custom">
                Contactar
              </a>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
