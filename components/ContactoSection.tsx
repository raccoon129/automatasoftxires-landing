'use client';

import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

const ContactoSection = () => {
  return (
    <section 
      style={{ 
        padding: '100px 0',
        background: 'var(--color-background)'
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
              ¿Dudas o comentarios?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                fontSize: '1.2rem',
                color: 'var(--color-text)',
                lineHeight: '1.7',
                marginBottom: '40px'
              }}
            >
              ¡Adelante! Escuchamos absolutamente todo.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/contacto" className="btn-primary-custom">
                Ir a Contacto
              </Link>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactoSection;
