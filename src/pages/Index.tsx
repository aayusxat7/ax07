import { Helmet } from 'react-helmet-async';
import { Background3D } from '@/components/3d/Background3D';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Aayush Bhandari | Web Developer & Penetration Tester</title>
        <meta name="description" content="Portfolio of Aayush Bhandari - Web Developer and Penetration Tester specializing in building secure, beautiful web applications." />
        <meta name="keywords" content="Aayush Bhandari, Web Developer, Penetration Tester, Portfolio, React, Security" />
        <meta property="og:title" content="Aayush Bhandari | Web Developer & Penetration Tester" />
        <meta property="og:description" content="Portfolio of Aayush Bhandari - Web Developer and Penetration Tester specializing in building secure, beautiful web applications." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://aayusx.lovable.app" />
      </Helmet>
      
      <div className="relative min-h-screen">
        <Background3D />
        <Navbar />
        
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
