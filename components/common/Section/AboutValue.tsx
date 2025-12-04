import React from "react";
import { CgArrowsVAlt } from "react-icons/cg";
import { CiGlobe } from "react-icons/ci";
import { HiOutlineUser } from "react-icons/hi";
import { IoBulbSharp } from "react-icons/io5";
import { LuHardDrive, LuScale } from "react-icons/lu";
import { RiShieldCheckLine } from "react-icons/ri";

const mission = [
  {
    icon: <RiShieldCheckLine size={20} />,
    title: "Transparency First",
    text: "Every transaction, every algorithm, every decision process is open and auditable. We believe in building trust through radical transparency in all our operations.",
  },
  {
    icon: <LuScale size={20} />,
    title: "Fair Compensation",
    text: "We ensure creators are compensated fairly for their contributions, with clear payment terms, escrow protection, and competitive rates across all opportunities.",
  },
  {
    icon: <CgArrowsVAlt size={20} />,
    title: "Inclusive Growth",
    text: "We actively work to create opportunities for underrepresented groups in Web3, breaking down barriers and democratizing access to the creator economy.",
  },
  {
    icon: <LuHardDrive size={20} />,
    title: "Innovation Drive",
    text: "We constantly push the boundaries of what's possible, experimenting with new technologies and methodologies to better serve our community of builders.",
  },
];

const AboutValue = () => {
  const featureCard = (value: React.ReactNode, title: string, text: string) => {
    return (
      <div className="flex flex-col items-start justify-center gap-2 bg-[#F7F8FB] p-7 rounded-lg w-full">
        <div className="text-4xl p-2 rounded-full bg-[#D5DCEB61] flex items-center justify-center">
          {value}
        </div>
        <h4 className=" font-semibold">{title}</h4>
        <p className="text-sm text-[#666666] font-montserrat">{text}</p>
      </div>
    );
  };

  return (
    <div className="bg-[#FFFFFF] ">
      <div className="md:w-[90%] mx-auto p-3">
        <div className="flex flex-col items-center max-w-3xl mx-auto pt-6 gap-3">
          <h3 className="text-[32px]">Our Values in Action</h3>
          <p className="font-montserrat text-center text-[#666666]">
            These principles guide every decision we make and every product we
            build
          </p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
          {mission.map((item, index) => (
            <div key={index}>
              {featureCard(item.icon, item.title, item.text)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutValue;
