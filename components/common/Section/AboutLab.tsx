import React from "react";
import img from "../../../public/images/Rectangle4.svg";
import Image from "next/image";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const AboutLab = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 p-5  md:p-16">
        <div className="md:max-w-3xl flex flex-col gap-6">
          <h4 className="text-[24px]">What Makes Cre8core Labs Different</h4>
          <p className="font-montserrat text-[#030406B8]">
            While others focus on just one aspect of the Web3 ecosystem, we've
            built a comprehensive platform that addresses every stage of the
            creator journey—from discovery to delivery to long-term career
            growth.
          </p>
          <ul className="flex flex-col gap-3">
            <li>
              <span className="flex gap-5 items-center">
                <IoCheckmarkCircleSharp size={20} color="#1C47A2" />
                <span>
                  <h5>Curated Opportunities</h5>
                  <p className="md:w-xl text-[#666666] font-montserrat">
                    Every project on our platform is vetted to ensure quality,
                    legitimacy, and fair compensation standards.
                  </p>
                </span>
              </span>
            </li>
            <li>
              <span className="flex gap-5 items-center">
                <IoCheckmarkCircleSharp size={20} color="#1C47A2" />
                <span>
                  <h5>Smart Matching</h5>
                  <p className="md:w-xl text-[#666666] font-montserrat">
                    Our AI-powered system connects creators with opportunities
                    that match their skills, interests, and career goals.
                  </p>
                </span>
              </span>
            </li>
            <li>
              <span className="flex gap-5 items-center">
                <IoCheckmarkCircleSharp size={20} color="#1C47A2" />
                <span>
                  <h5>Secure Payments</h5>
                  <p className="md:w-xl text-[#666666] font-montserrat">
                    Built on blockchain technology, all payments are
                    transparent, secure, and processed without traditional
                    banking delays.
                  </p>
                </span>
              </span>
            </li>
          </ul>
        </div>
        <div>
          <Image src={img} alt="About Lab" width={636} height={533} />
        </div>
      </div>
    </div>
  );
};

export default AboutLab;
