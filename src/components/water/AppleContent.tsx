import { TechnicalWaterSection } from "./SectionsSeo";
import { VolumesSection, ServicesSection, HowSection } from "./SectionsTop";
import { WhySection, PricingSection, AreaSection } from "./SectionsBottom";
import { FaqSection, ContactSection, FloatingWA } from "./SectionsFaq";

export default function AppleContent() {
  return (
    <>
      <VolumesSection />
      <TechnicalWaterSection />
      <ServicesSection />
      <HowSection />
      <WhySection />
      <PricingSection />
      <AreaSection />
      <FaqSection />
      <ContactSection />
      <FloatingWA />
    </>
  );
}