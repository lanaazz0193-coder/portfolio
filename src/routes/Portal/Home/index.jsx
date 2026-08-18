import PortalLayout from '../../../layouts/PortalLayout';
import HeroSection from '../../../components/sections/HeroSection';
import AboutSection from '../../../components/sections/AboutSection';
import ProjectSection from '../../../components/sections/ProjectSection';
import ContactSection from '../../../components/sections/ContactSection';

const Home = () => {
  return (
    <PortalLayout>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </PortalLayout>
  );
};

export default Home;