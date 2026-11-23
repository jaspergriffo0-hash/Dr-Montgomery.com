import { useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { AchievementsSection } from './components/AchievementsSection';
import { AppointmentModal } from './components/AppointmentModal';
import { ContactSection } from './components/ContactSection';
import { EducationSection } from './components/EducationSection';
import { ExperienceSection } from './components/ExperienceSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { ServicesSection } from './components/ServicesSection';
import { SpecializationsSection } from './components/SpecializationsSection';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(
    undefined
  );

  const handleOpenBooking = (service?: string) => {
    setPreselectedService(service);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#102A43]">
      <Navbar onOpenBooking={handleOpenBooking} />

      <main>
        <HeroSection onOpenBooking={handleOpenBooking} />
        <AboutSection onOpenBooking={handleOpenBooking} />
        <EducationSection />
        <ExperienceSection />
        <SpecializationsSection onOpenBooking={handleOpenBooking} />
        <ServicesSection onOpenBooking={handleOpenBooking} />
        <AchievementsSection />
        <ContactSection onOpenBooking={handleOpenBooking} />
      </main>

      <Footer onOpenBooking={handleOpenBooking} />

      <AppointmentModal
        isOpen={bookingOpen}
        initialService={preselectedService}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
}
