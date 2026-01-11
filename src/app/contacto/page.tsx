'use client';

import { motion } from 'framer-motion';
import { Container, Row, Col, Card } from 'react-bootstrap';
import NavbarComponent from '../../../components/NavbarComponent';
import FooterComponent from '../../../components/FooterComponent';
import BackgroundSymbols from '../../../components/BackgroundSymbols';

const ContactoPage = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'white' }}>
      <BackgroundSymbols />
      <NavbarComponent />

      <main style={{ paddingTop: '100px', paddingBottom: '50px', position: 'relative', zIndex: 10 }}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              {/* Encabezado */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-5"
              >
                <h1 style={{
                  fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                  fontWeight: '800',
                  color: 'var(--color-primary)',
                  marginBottom: '20px',
                  textShadow: '0 2px 10px rgba(97, 43, 125, 0.1)'
                }}>
                  ¡Hablemos de tu proyecto!
                </h1>
                <p style={{
                  fontSize: '1.3rem',
                  color: 'var(--color-text-light)',
                  lineHeight: '1.6',
                  maxWidth: '600px',
                  margin: '0 auto'
                }}>
                  Estamos listos para escuchar tus ideas y convertirlas en soluciones digitales innovadoras.
                </p>
              </motion.div>

              {/* Contenido principal */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center mb-5"
              >
                <h2 style={{
                  fontSize: '2.2rem',
                  color: 'var(--color-primary)',
                  marginBottom: '25px',
                  fontWeight: '600'
                }}>
                  ¿Tienes una idea en mente?
                </h2>

                <div className="mb-4">
                  <p style={{
                    fontSize: '1.2rem',
                    color: 'var(--color-text)',
                    lineHeight: '1.7',
                    marginBottom: '20px'
                  }}>
                    En AutomataSoft Xires nos especializamos en crear soluciones
                    personalizadas para equipos pequeños, comercios locales y emprendedores individuales.
                  </p>
                  <p style={{
                    fontSize: '1.2rem',
                    color: 'var(--color-text)',
                    lineHeight: '1.7',
                    marginBottom: '40px'
                  }}>
                    Desde aplicaciones web hasta sistemas de gestión, edición de video profesional
                    y automatización de procesos. Trabajamos contigo para hacer realidad tu visión digital.
                  </p>
                </div>

                {/* Características */}
                <Row className="justify-content-center mb-5">
                  <Col md={4} className="mb-3">
                    <div className="d-flex align-items-center justify-content-center gap-2 p-3 rounded-pill"
                      style={{ background: 'var(--color-gray-light)' }}>
                      <span style={{ fontSize: '1.2rem' }}></span>
                      <span style={{ fontWeight: '500', color: 'var(--color-text)' }}>
                        Consultoría gratuita inicial
                      </span>
                    </div>
                  </Col>
                  <Col md={4} className="mb-3">
                    <div className="d-flex align-items-center justify-content-center gap-2 p-3 rounded-pill"
                      style={{ background: 'var(--color-gray-light)' }}>
                      <span style={{ fontSize: '1.2rem' }}></span>
                      <span style={{ fontWeight: '500', color: 'var(--color-text)' }}>
                        Respuesta en menos de 48 horas
                      </span>
                    </div>
                  </Col>
                  <Col md={4} className="mb-3">
                    <div className="d-flex align-items-center justify-content-center gap-2 p-3 rounded-pill"
                      style={{ background: 'var(--color-gray-light)' }}>
                      <span style={{ fontSize: '1.2rem' }}></span>
                      <span style={{ fontWeight: '500', color: 'var(--color-text)' }}>
                        Proyectos desde 4 semanas
                      </span>
                    </div>
                  </Col>
                </Row>

                {/* Botón de contacto principal */}
                <div className="mb-5">
                  <a
                    href="mailto:santana@axotl.org"
                    className="d-inline-flex align-items-center gap-3 text-decoration-none mb-3"
                    style={{
                      background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                      color: 'white',
                      padding: '20px 40px',
                      borderRadius: '50px',
                      fontSize: '1.3rem',
                      fontWeight: '600',
                      transition: 'var(--transition)',
                      boxShadow: 'var(--shadow-medium)'
                    }}
                    onMouseEnter={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.transform = 'translateY(-3px)';
                      target.style.boxShadow = '0 8px 30px rgba(97, 43, 125, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.transform = 'translateY(0)';
                      target.style.boxShadow = 'var(--shadow-medium)';
                    }}
                    title="Enviar correo a santana@axotl.org"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    Escríbenos Ahora
                  </a>
                  <p style={{
                    fontSize: '1.1rem',
                    color: 'var(--color-text-light)',
                    fontWeight: '500',
                    margin: 0
                  }}>
                    santana@axotl.org
                  </p>
                </div>
              </motion.div>

              {/* Información adicional */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-5"
              >
                <Card
                  className="border-0 mx-auto"
                  style={{
                    background: 'var(--color-gray-light)',
                    borderRadius: '20px',
                    maxWidth: '600px'
                  }}
                >
                  <Card.Body className="p-4">
                    <h3 style={{
                      fontSize: '1.6rem',
                      color: 'var(--color-primary)',
                      marginBottom: '20px',
                      fontWeight: '600',
                      textAlign: 'center'
                    }}>
                      ¿Qué incluye nuestro servicio?
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {[
                        'Análisis completo de tus necesidades',
                        'Propuesta técnica detallada',
                        'Desarrollo con tecnologías modernas',
                        'Soporte y mantenimiento incluido*',
                        'Capacitación para tu equipo*'
                      ].map((item, index) => (
                        <li key={index} style={{
                          padding: '10px 0',
                          fontSize: '1.1rem',
                          color: 'var(--color-text)',
                          position: 'relative',
                          paddingLeft: '30px'
                        }}>
                          <span style={{
                            position: 'absolute',
                            left: '0',
                            color: 'var(--color-primary)',
                            fontWeight: 'bold',
                            fontSize: '1.2rem'
                          }}>
                            ✓
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </motion.div>

              <Card>
                <Card.Body className="text-center p-4">
                  <p>Sujeto a condiciones y cargos adicionales</p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>
                    * Soporte y mantenimiento incluido por 2 meses posterior a entrega del proyecto.
                    Capacitación para tu equipo disponible bajo solicitud y acuerdos adicionales. Sujeto a cambios.
                  </p>
                </Card.Body>
              </Card>


            </Col>
          </Row>
        </Container>
      </main>

      <FooterComponent />
    </div>
  );
};

export default ContactoPage;
