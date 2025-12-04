import Image from "next/image";
import spot from "../../../public/images/spot.svg";
import { Button } from "@/components/ui/button";
import { FaCircleCheck } from "react-icons/fa6";

const whyJoinUs = [
  {
    title: "Competitive Equity Package",
    description: "Share in the success of the platform you're building",
  },
  {
    title: "Remote-First Culture",
    description: "Work from anywhere with flexible hours",
  },
  {
    title: "Learning & Development",
    description: "$5K annual budget for courses and conferences",
  },
  {
    title: "Health & Wellness",
    description: "Comprehensive health coverage plus wellness stipend",
  },
  {
    title: "Cutting-Edge Tech",
    description: "Work with the latest blockchain and AI technologies",
  },
];

const AboutJourney = () => {
  return (
    <div className="bg-[#EFEFEF] ">
      <div className="w-[90%] mx-auto p-3">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto py-6 gap-3">
          <h3 className="text-[32px]">Join Our Journey</h3>
          <p className="font-montserrat text-[#666666]">
            Be part of the team building the future of work in Web3
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-5 pt-5 pb-10">
          <div className="md:w-[631px] md:h-[514px] bg-white rounded-2xl">
            <div className="p-8 flex flex-col gap-8">
              <div className="flex items-center gap-2">
                <Image src={spot} alt="spot" width={52} height={52} />
                <h3 className="text-[20px] font-semibold font-nunito">
                  Open Positions
                </h3>
              </div>
              <div>
                <ul className="flex flex-col gap-7">
                  <li className="flex flex-col md:flex-row justify-between items-center">
                    <span className="flex flex-col gap-3 font-montserrat">
                      <h5>Senior Blockchain Developer</h5>
                      <p className="self-start text-[#666666]">
                        Remote • Full-time
                      </p>
                    </span>
                    <span>
                      <Button className="bg-[#E4B95C] hover:bg-[#E4B95C]/50 rounded-4xl text-sm px-10 py-3">
                        Apply
                      </Button>
                    </span>
                  </li>
                  <li className="flex flex-col md:flex-row justify-between items-center">
                    <span className="flex flex-col gap-3 font-montserrat">
                      <h5>Senior Blockchain Developer</h5>
                      <p className="self-start text-[#666666]">
                        Remote • Full-time
                      </p>
                    </span>
                    <span>
                      <Button className="bg-[#E4B95C] hover:bg-[#E4B95C]/50 rounded-4xl text-sm px-10 py-3">
                        Apply
                      </Button>
                    </span>
                  </li>
                  <li className="flex flex-col md:flex-row justify-between items-center">
                    <span className="flex flex-col gap-3 font-montserrat">
                      <h5>Senior Blockchain Developer</h5>
                      <p className="self-start text-[#666666]">
                        Remote • Full-time
                      </p>
                    </span>
                    <span>
                      <Button className="bg-[#E4B95C] hover:bg-[#E4B95C]/50 rounded-4xl text-sm px-10 py-3">
                        Apply
                      </Button>
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <Button className="bg-[#EFEFEF] w-full text-black hover:bg-[#EFEFEF]/50 rounded-4xl text-sm px-10 py-6">
                  View all Open Roles
                </Button>
              </div>
            </div>
          </div>
          <div className="md:w-[631px] md:h-[514px] bg-white rounded-2xl">
            <div className="p-8 flex flex-col gap-8">
              <div className="flex items-center gap-2">
                <Image src={spot} alt="spot" width={52} height={52} />
                <h3 className="text-[20px] font-semibold font-nunito">
                  Why Join Us?
                </h3>
              </div>
              <div>
                <ul className="flex flex-col gap-7">
                  {whyJoinUs.map((item, index) => (
                    <li>
                      <span className="flex gap-5 items-center">
                        <Image
                          src={"/icons/check.svg"}
                          alt="checkmark"
                          width={20}
                          height={20}
                        />
                        <span>
                          <h5>{item.title}</h5>
                          <p className="md:w-xl text-[#666666] font-montserrat">
                            {item.description}
                          </p>
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutJourney;
