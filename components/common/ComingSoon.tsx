import { Button } from "../ui/button";

const ComingSoon = ({ text }: { text: string }) => {
  return (
    <div className=" flex flex-col gap-5">
      <div className="flex flex-col gap-4 items-center">
        <h3 className="font-[funnel] text-[32px]">Coming Soon!</h3>
        <p className="text-[#4F4F4F] text-[20px] text-center font-light">
          {text}
        </p>
      </div>
      <form className="flex flex-col justify-between h-[200px]" action="">
        <div className="flex flex-col gap-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="px-4 py-3 border rounded-full"
          />
        </div>

        <Button className="bg-[#013941] hover:bg-[#013941]/90 font-[instrument] font-semibold text-white rounded-full mt-6 py-9 w-full">
          Update me
        </Button>
      </form>
    </div>
  );
};

export default ComingSoon;
