import Hero from "@/components/sections/Hero";
import SocialProofBar from "@/components/sections/SocialProofBar";
import FeaturedShows from "@/components/sections/FeaturedShows";
import WhatWeDo from "@/components/sections/WhatWeDo";
import Originals from "@/components/sections/Originals";
import JoinNetwork from "@/components/sections/JoinNetwork";
import Sponsors from "@/components/sections/Sponsors";
import Thesis from "@/components/sections/Thesis";
import LatestEpisodes from "@/components/sections/LatestEpisodes";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProofBar />
      <FeaturedShows />
      <WhatWeDo />
      <Originals />
      <JoinNetwork />
      <Sponsors />
      <Thesis />
      <LatestEpisodes />
      <Newsletter />
    </>
  );
}
