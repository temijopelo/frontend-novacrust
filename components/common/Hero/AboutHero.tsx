import React from "react";
import img from "../../../public/images/about.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const AboutHero = () => {
  return (
    <div className="bg-[#0C1F47] text-white px-4 md:px-20 py-10 flex flex-col md:flex-row items-center  justify-between gap-10">
      <div className="max-w-xl flex flex-col space-y-4">
        <h2 className="text-[47px] md:leading-[1.2]">
          The Creative Engine Powering Web3 Innovation
        </h2>
        <p className="font-montserrat text-[#D6D6D6] text-sm">
          At Cre8core Labs, we're building the infrastructure that connects
          visionary builders with transformative opportunities across the
          onchain ecosystem.
        </p>
        <div className="flex flex-col md:flex-row text-sm font-light gap-3">
          <Button className="bg-[#E4B95C] px-12 py-5 rounded-3xl">
            Join our mission
          </Button>
          <Button className="bg-transparent">15,000+ creators</Button>
        </div>
      </div>
      <div>
        <Image src={img} alt="About" width={582} height={456} />
      </div>
    </div>
  );
};

export default AboutHero;
