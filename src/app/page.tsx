import { AboutSummary } from "@/components/sections/AboutSummary";
import { AchievementStats } from "@/components/sections/AchievementStats";
import { ClientMarquee } from "@/components/sections/ClientMarquee";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { CommitmentQuote } from "@/components/sections/CommitmentQuote";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { FeaturedServices } from "@/components/sections/FeaturedServices";
import { Hero } from "@/components/sections/Hero";
import { WhyUs } from "@/components/sections/WhyUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSummary />
      <FeaturedServices />
      <AchievementStats />
      <FeaturedProjects />
      <WhyUs />
      <ClientMarquee />
      <CommitmentQuote />
      <ClosingCTA />
    </>
  );
}
