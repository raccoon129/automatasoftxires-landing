import NavbarComponent from '../../components/NavbarComponent';
import HeroSection from '../../components/HeroSection';
import RenovacionSection from '../../components/RenovacionSection';
import ProyectosSection from '../../components/ProyectosSection';
import ContactoSection from '../../components/ContactoSection';
import FooterComponent from '../../components/FooterComponent';
import BackgroundSymbols from '../../components/BackgroundSymbols';

export default function Home() {
  return (
    <div style={{ position: 'relative' }}>
      <BackgroundSymbols />
      <NavbarComponent />
      <HeroSection />
      <RenovacionSection />
      <ProyectosSection />

      <ContactoSection />
      <FooterComponent />
    </div>
  );
}
