import AboutHero from "@/components/common/Hero/AboutHero";
import AboutJourney from "@/components/common/Section/AboutJourney";
import AboutLab from "@/components/common/Section/AboutLab";
import AboutMission from "@/components/common/Section/AboutMission";
import AboutNumber from "@/components/common/Section/AboutNumber";
import AboutValue from "@/components/common/Section/AboutValue";
import FutureOfWeb3 from "@/components/common/Section/FutureOfWeb3";
import React from "react";

export default function AboutPage() {
  return (
    <div className="| ">
      <AboutHero />
      <AboutMission />
      <AboutLab />
      <AboutNumber />
      <AboutValue />
      <AboutJourney />
      <FutureOfWeb3 />
    </div>
  );
}
