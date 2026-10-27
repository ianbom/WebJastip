import HeroSection from "@/components/home/HeroSection";
import CollectionsGrid from "@/components/home/CollectionsGrid";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import StorySection from "@/components/home/StorySection";
import ServicesGrid from "@/components/home/ServicesGrid";
import BenefitsSection from "@/components/home/BenefitsSection";
import PartnershipSection from "@/components/home/PartnershipSection";
import BandCtaSection from "@/components/home/BandCtaSection";

export default function HomePage() {
  return (
    <>
      {/* SECTION 2: HERO */}
      <HeroSection />

      {/* SECTION 3: THE COLLECTIONS */}
      <CollectionsGrid />

      {/* SECTION 4: FEATURED PRODUCTS */}
      <FeaturedProducts />

      {/* SECTION 5: EDITORIAL STORYTELLING */}
      <StorySection />

      {/* SECTION 6: SECOND FEATURED COLLECTION (SERVICES) */}
      <ServicesGrid />

      {/* SECTION 7: SERVICE BENEFITS */}
      <BenefitsSection />

      {/* SECTION 8: PARTNERSHIP SECTION */}
      <PartnershipSection />

      {/* SECTION 9: FINAL EDITORIAL CTA */}
      <BandCtaSection />
    </>
  );
}
