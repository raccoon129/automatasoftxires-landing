'use client';

import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NavbarComponent = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`custom-navbar ${scrolled ? 'navbar-scrolled' : ''}`}
      style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(97, 43, 125, 0.1)',
        transition: 'var(--transition)',
        boxShadow: scrolled ? 'var(--shadow-light)' : 'none'
      }}
    >
      <Container>
        <Navbar.Brand as={Link} href="/">
          <Image
            src="/logo2.png"
            alt="AutomataSoft Xires"
            width={120}
            height={40}
            style={{ 
              transition: 'var(--transition)',
              cursor: 'pointer'
            }}
            className="logo-image"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              href="/" 
              className={pathname === '/' ? 'active' : ''}
              style={{ 
                color: 'var(--color-text)',
                fontWeight: '500',
                transition: 'var(--transition)',
                position: 'relative'
              }}
            >
              Inicio
            </Nav.Link>
            
            <Nav.Link 
              href="#servicios"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#servicios');
              }}
              style={{ 
                color: 'var(--color-text)',
                fontWeight: '500',
                transition: 'var(--transition)'
              }}
            >
              Servicios
            </Nav.Link>
            
            <Nav.Link 
              href="#proyectos"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#proyectos');
              }}
              style={{ 
                color: 'var(--color-text)',
                fontWeight: '500',
                transition: 'var(--transition)'
              }}
            >
              Proyectos
            </Nav.Link>
            

            
            <Nav.Link 
              as={Link} 
              href="/contacto"
              className={pathname === '/contacto' ? 'active' : ''}
              style={{ 
                color: 'var(--color-text)',
                fontWeight: '500',
                transition: 'var(--transition)'
              }}
            >
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <style jsx>{`
        .custom-navbar :global(.navbar-nav .nav-link:hover),
        .custom-navbar :global(.navbar-nav .nav-link.active) {
          color: var(--color-primary) !important;
        }

        .custom-navbar :global(.navbar-nav .nav-link::after) {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 50%;
          width: 0;
          height: 2px;
          background: var(--color-primary);
          transition: var(--transition);
          transform: translateX(-50%);
        }

        .custom-navbar :global(.navbar-nav .nav-link:hover::after),
        .custom-navbar :global(.navbar-nav .nav-link.active::after) {
          width: 80%;
        }

        .logo-image:hover {
          transform: scale(1.05);
        }

        .custom-navbar :global(.navbar-toggler) {
          border: none;
          box-shadow: none;
        }

        .custom-navbar :global(.navbar-toggler:focus) {
          box-shadow: none;
        }
      `}</style>
    </Navbar>
  );
};

export default NavbarComponent;
