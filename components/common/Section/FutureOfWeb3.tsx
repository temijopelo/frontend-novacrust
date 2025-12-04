import { Button } from "@/components/ui/button";
import { IoCheckmark } from "react-icons/io5";

const FutureOfWeb3 = () => {
  return (
    <div className="bg-[#0D214C] text-white">
      <div className="max-w-[600px] text-center py-20 px-4 space-y-5 mx-auto">
        <h3 className="text-4xl">Ready to Shape the Future of Web3 Work?</h3>
        <p className="font-montserrat text-[#EFEFEF]">
          Whether you're a creator looking for opportunities or a project
          seeking talent, join our community and be part of the onchain
          revolution.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 ">
          <Button className="bg-[#E4B95C] hover:bg-[#E4B95C]/50 w-[300px] rounded-3xl  py-6">
            Get Started Today
          </Button>
          <Button className="border-[#E4B95C] hover:border-[#E4B95C]/50 hover:bg-transparent border bg-transparent w-[300px] rounded-3xl  py-6">
            {" "}
            Contact Us
          </Button>
        </div>
        <div>
          <ul className="flex flex-col md:flex-row justify-center items-center gap-5">
            <li className="flex gap-2 items-center">
              <IoCheckmark />
              <span>Free to join</span>
            </li>
            <li className="flex gap-2 items-center">
              <IoCheckmark />
              <span> No platform fees</span>
            </li>
            <li className="flex gap-2 items-center">
              <IoCheckmark />
              <span> Instant access</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FutureOfWeb3;
