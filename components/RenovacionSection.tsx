'use client';

import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';

const RenovacionSection = () => {
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
      </Container>
    </section>
  );
};

export default RenovacionSection;
