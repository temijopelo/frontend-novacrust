"use client";

import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { GoArrowLeft } from "react-icons/go";
import { Button } from "../ui/button";
import { PiCopy } from "react-icons/pi";
import { IoCheckmarkSharp } from "react-icons/io5";
import { BsInfoCircle } from "react-icons/bs";
import Image from "next/image";
import logo from "../../public/images/logo.svg";
import done from "../../public/icons/done.svg";

const StepThree = ({ onNext }: { onNext: () => void }) => {
  const { copied: TransactionIDCopied, copyToClipboard: copyTransactionID } =
    useCopyToClipboard();

  const TransactionID = "NC123456789";

  return (
    <div className="md:max-w-xl h-full mx-auto flex flex-col gap-6 p-5">
      <div className="flex justify-center">
        <Image src={logo} alt="Description" width={150} height={50} />
      </div>

      <div className="flex-1 h-full flex gap-5 flex-col text-center justify-between">
        <div className="flex flex-col mt-12 justify-center items-center gap-2">
          <Image src={done} alt="Description" width={60} height={60} />
          <h6 className="font-semibold text-[18px] md:text-[24px]">
            Your transaction is processing.
          </h6>
          <p className="font-light text-[14px] md:text-[20px]">
            The recipient will receive it shortly.
          </p>
        </div>

        <div className="mt-10 flex flex-col md:flex-row justify-between items-center r bg-[#F7F7F7] text-[#4F4F4F] p-6 rounded-[20px]">
          <span>Transaction ID</span>
          <span>
            {TransactionID}
            <Button
              className="bg-transparent hover:bg-transparent cursor-pointer focus:bg-transparent active:bg-transparent p-0"
              onClick={() => copyTransactionID(TransactionID)}
            >
              {TransactionIDCopied ? (
                <IoCheckmarkSharp color="#013941" size={24} />
              ) : (
                <PiCopy color="#013941" size={24} />
              )}
            </Button>
          </span>
        </div>

        <Button
          onClick={onNext}
          className="bg-transparent  hover:bg-transparent font-[instrument] font-semibold text-[#013941] py-9 w-full"
        >
          Go back to home
        </Button>
      </div>
    </div>
  );
};

export default StepThree;
