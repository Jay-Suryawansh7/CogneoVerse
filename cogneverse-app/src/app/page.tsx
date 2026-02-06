import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { DepartmentsSection } from "@/components/sections/DepartmentsSection";
import { TeamsSection } from "@/components/sections/TeamsSection";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { ResourcesSection } from "@/components/sections/ResourcesSection";
import { AcademySection } from "@/components/sections/AcademySection";
import { HackathonsSection, EventsSection } from "@/components/sections/HackathonsEventsSection";
import { BlogSection, TechStackSection } from "@/components/sections/BlogTechSection";
import { CareersSection, PartnershipsSection } from "@/components/sections/CareersPartnershipsSection";
import { TestimonialsSection, GlobalCTASection } from "@/components/sections/TestimonialsCTASection";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Products Section */}
      <ProductsSection />

      {/* Departments Section */}
      <DepartmentsSection />

      {/* Teams Section */}
      <TeamsSection />

      {/* Community Section */}
      <CommunitySection />

      {/* Resources Section */}
      <ResourcesSection />

      {/* Academy Section */}
      <AcademySection />

      {/* Hackathons Section */}
      <HackathonsSection />

      {/* Events Section */}
      <EventsSection />

      {/* Blog Section */}
      <BlogSection />

      {/* Tech Stack Section */}
      <TechStackSection />

      {/* Careers Section */}
      <CareersSection />

      {/* Partnerships Section */}
      <PartnershipsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Global CTA Section */}
      <GlobalCTASection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
