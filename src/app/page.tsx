import HeroSimpleCenteredWithBackgroundImage from "@/components/HeroCenteredBackgroundImage";
import { Manrope, Crimson_Text } from "next/font/google";
import EcommerceWithAlternatingSections from "@/components/EcommerceWithAlternatingSections";
import StatsSimpleGrid from "@/components/StatsSimpleGrid";
import TeamSectionWithLargeImages from "@/components/TeamSectionWithLargeImages";
import TestimonialsWithStarRating from "@/components/TestimonialsWithStarRating";
import FAQWithCenteredAccordion from "@/components/FAQCenteredAccordian";
import ContactSectionsSplitWithPattern from "@/components/ContactWithSplitPattern";
import Footer4ColumnWithCompanyMission from "@/components/FooterCompanyMission";
import OurCases from "@/components/OurCases";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-body" });
const crimsonText = Crimson_Text({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-heading" });

export default function Home() {
  return (
    <main className={`${manrope.variable} ${crimsonText.variable}`}>
      <HeroSimpleCenteredWithBackgroundImage />
      <EcommerceWithAlternatingSections />
      <StatsSimpleGrid />
      <TeamSectionWithLargeImages />
      <TestimonialsWithStarRating />
      <FAQWithCenteredAccordion />
      <OurCases />
      <ContactSectionsSplitWithPattern />
      <Footer4ColumnWithCompanyMission />
    </main>
  );
}
