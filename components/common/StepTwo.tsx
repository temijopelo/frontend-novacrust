import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { GoArrowLeft } from "react-icons/go";
import { Button } from "../ui/button";
import { PiCopy } from "react-icons/pi";
import { IoCheckmarkSharp } from "react-icons/io5";
import { BsInfoCircle } from "react-icons/bs";

const StepTwo = ({
  onBack,
  onNext,
}: {
  onBack: () => void;
  onNext: () => void;
}) => {
  const { copied: addressCopied, copyToClipboard: copyAddress } =
    useCopyToClipboard();
  const { copied: amountCopied, copyToClipboard: copyAmount } =
    useCopyToClipboard();
  // Each button has its own state ✅
  const walletAddress = "4LiV4YjbxsL6739MKghUd";
  const amountToSend = "100 ETH";

  return (
    <div className="md:max-w-xl h-full mx-auto flex flex-col gap-6 p-5">
      <div className="flex">
        <button className="cursor-pointer" onClick={onBack}>
          <GoArrowLeft size={24} />
        </button>
        <p className="text-[#013941] flex-1 text-center">
          Send ETH to the address below
        </p>
      </div>

      <div className="flex-1 h-full flex gap-5 flex-col justify-between">
        <div className="flex mt-2 justify-center">
          <div className="inline-flex px-3 py-1 items-center justify-center bg-[#CCF6E5] text-[#013941] rounded-full">
            {walletAddress}
            <Button
              className="bg-transparent hover:bg-transparent cursor-pointer focus:bg-transparent active:bg-transparent p-0"
              onClick={() => copyAddress(walletAddress)}
            >
              {addressCopied ? (
                <IoCheckmarkSharp color="#013941" size={24} />
              ) : (
                <PiCopy color="#013941" size={24} />
              )}
            </Button>
          </div>
        </div>

        <div className="mt-10">
          <div className="mt-4 flex flex-col gap-6 bg-[#F7F7F7] text-[#4F4F4F] p-6 rounded-[20px]">
            <div className="flex items-center justify-between">
              <span className="text-[#013941]">Amount to send</span>
              <div className="inline-flex items-center gap-2  rounded-full">
                <span>{amountToSend}</span>
                <Button
                  className="bg-transparent hover:bg-transparent cursor-pointer focus:bg-transparent active:bg-transparent p-0"
                  onClick={() => copyAmount(amountToSend)}
                >
                  {amountCopied ? (
                    <IoCheckmarkSharp color="#013941" size={18} />
                  ) : (
                    <PiCopy color="#013941" size={18} />
                  )}
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#013941]">Network</span>
              <div className="inline-flex items-center gap-2 px-3 py-1  rounded-full">
                <span>ETH</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#013941]">Wallet</span>
              <div className="inline-flex items-center gap-2 px-3 py-1  rounded-full">
                <span>Other</span>
              </div>
            </div>
          </div>
          <div className="flex mt-3 items-center gap-4 text-[#4F4F4F] ">
            <span>
              <BsInfoCircle />
            </span>
            <span className="">
              {`Only send {USDT} to this address. Ensure the sender is on the {CELO} network otherwise you might lose your deposit`}
            </span>
          </div>
        </div>

        <Button
          onClick={onNext}
          className="bg-[#013941] mt-20 self-end hover:bg-[#013941]/90 font-[instrument] font-semibold text-white rounded-full  py-9 w-full"
        >
          Convert now
        </Button>
      </div>
    </div>
  );
};

export default StepTwo;
