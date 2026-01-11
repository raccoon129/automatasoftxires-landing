'use client';

import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

const FooterComponent = () => {
  return (
    <footer
      style={{
        background: 'var(--color-primary)',
        color: 'white',
        padding: '40px 0 20px'
      }}
    >
      <Container>
        <Row>
          <Col md={6} className="mb-3">
            <h5 style={{ marginBottom: '15px', fontWeight: '600' }}>
              AutomataSoft Xires
            </h5>
            <p style={{
              fontSize: '0.95rem',
              lineHeight: '1.6',
              opacity: '0.9'
            }}>
              Soluciones personalizadas para equipos pequeños,
              comercios locales y emprendedores individuales.
            </p>
          </Col>

          <Col md={3} className="mb-3">
            <h6 style={{ marginBottom: '15px', fontWeight: '600' }}>
              Enlaces
            </h6>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '8px' }}>
                <Link
                  href="/"
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    opacity: '0.9',
                    fontSize: '0.9rem',
                    transition: 'var(--transition)'
                  }}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = '1'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = '0.9'}
                >
                  Inicio
                </Link>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a
                  href="#servicios"
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    opacity: '0.9',
                    fontSize: '0.9rem',
                    transition: 'var(--transition)'
                  }}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = '1'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = '0.9'}
                >
                  Servicios
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a
                  href="#proyectos"
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    opacity: '0.9',
                    fontSize: '0.9rem',
                    transition: 'var(--transition)'
                  }}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = '1'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = '0.9'}
                >
                  Proyectos
                </a>
              </li>
              <li>
                <Link
                  href="/contacto"
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    opacity: '0.9',
                    fontSize: '0.9rem',
                    transition: 'var(--transition)'
                  }}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = '1'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = '0.9'}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </Col>

          <Col md={3} className="mb-3">
            <h6 style={{ marginBottom: '15px', fontWeight: '600' }}>
              Síguenos
            </h6>
            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
              <a
                href="mailto:santana@axotl.org"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  opacity: '0.9',
                  transition: 'var(--transition)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '50%'
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.opacity = '1';
                  (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.2)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.opacity = '0.9';
                  (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.1)';
                }}
                title="Enviar Email"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/stana089/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  opacity: '0.9',
                  transition: 'var(--transition)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '50%'
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.opacity = '1';
                  (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.2)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.opacity = '0.9';
                  (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.1)';
                }}
                title="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              <a
                href="https://medium.com/@automatasoft-xires"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  opacity: '0.9',
                  transition: 'var(--transition)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '50%'
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.opacity = '1';
                  (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.2)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.opacity = '0.9';
                  (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.1)';
                }}
                title="Medium"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                </svg>
              </a>
            </div>

            <p style={{
              fontSize: '0.8rem',
              marginTop: '15px',
              marginBottom: '0',
              opacity: '0.8'
            }}>
              santana@axotl.org
            </p>
          </Col>
        </Row>

        <hr style={{
          margin: '30px 0 20px',
          borderColor: 'rgba(255, 255, 255, 0.2)'
        }} />

        <Row>
          <Col className="text-center">
            <p style={{
              margin: 0,
              fontSize: '0.9rem',
              opacity: '0.8'
            }}>
              © {new Date().getFullYear()} AutomataSoft Xires.
              Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
