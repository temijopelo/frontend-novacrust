"use client";

import {
  PAY_CURRENCY_UNIT,
  PAYMENT_OPTIONS,
  RECEIVE_COUNTRY,
} from "@/constant/data";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { BiSearch } from "react-icons/bi";
import { Button } from "../ui/button";

const StepOne = ({ onNext }: { onNext: (data: any) => void }) => {
  const [formdata, setFormdata] = useState({
    pay: "",
    payCurrency: "",
    receive: "",
    receiveCurrency: "",
    payFrom: "",
    payTo: "",
  });
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({
    pay: "",
    payCurrency: "",
    receive: "",
    receiveCurrency: "",
    payFrom: "",
    payTo: "",
  });

  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Form Data:", formdata);

    // Validate form
    if (
      !formdata.pay ||
      !formdata.payCurrency ||
      !formdata.receive ||
      !formdata.receiveCurrency ||
      !formdata.payFrom ||
      !formdata.payTo
    ) {
      const errors: { [key: string]: string } = {};
      if (!formdata.pay) errors.pay = "Please enter the amount you pay.";
      if (!formdata.payCurrency)
        errors.payCurrency = "Please select a currency to pay.";
      if (!formdata.receive)
        errors.receive = "Please enter the amount you will receive.";
      if (!formdata.receiveCurrency)
        errors.receiveCurrency = "Please select a currency to receive.";
      if (!formdata.payFrom) errors.payFrom = "Please select a payment method.";
      if (!formdata.payTo) errors.payTo = "Please select a receiving method.";

      setFormErrors(errors);
      return;
    }
    setFormErrors({});

    onNext(formdata);
  };

  return (
    <div className="h-full p-0 mt-8">
      <form className="flex h-full  flex-col gap-3">
        {/* You pay section */}
        <div>
          <div className="flex flex-col border-[#E0E0E0] border p-6 rounded-[30px]">
            <label
              className="text-[#828282] font-medium text-[20px]"
              htmlFor="pay"
            >
              You pay
            </label>
            <span className="flex items-center">
              <input
                type="number"
                name="pay"
                id="pay"
                value={formdata.pay}
                onChange={(e) =>
                  setFormdata({ ...formdata, pay: e.target.value })
                }
                className="border-[#E0E0E0] text-[24px] font-semibold flex-1 outline-none bg-transparent p-1.5 rounded-full"
              />
              <Select
                value={formdata.payCurrency}
                onValueChange={(value) =>
                  setFormdata({ ...formdata, payCurrency: value })
                }
              >
                <SelectTrigger className="border-[#E0E0E0] outline-none bg-[#F7F7F7] rounded-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent className="p-2">
                  <span className="p-2 border rounded-full mb-3 flex gap-2 items-center">
                    <BiSearch />
                    <input
                      className="outline-none"
                      type="search"
                      placeholder="Search"
                    />
                  </span>
                  {PAY_CURRENCY_UNIT.map((currency) => (
                    <SelectItem
                      className="p-3"
                      key={currency.name}
                      value={currency.name}
                    >
                      <span className="flex items-center gap-2">
                        <img
                          width={24}
                          height={24}
                          src={currency.img}
                          alt={currency.name}
                          className="rounded-full"
                        />
                        {currency.name}
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </span>
          </div>
          {formErrors.pay && (
            <p className="text-red-500 text-sm ">{formErrors.pay}</p>
          )}
        </div>

        {/* You receive section */}
        <div>
          <div className="flex flex-col border-[#E0E0E0] border p-6 rounded-[30px]">
            <label
              className="text-[#828282] font-medium text-[20px]"
              htmlFor="receive"
            >
              You receive
            </label>
            <span className="flex items-center">
              <input
                type="number"
                name="receive"
                id="receive"
                value={formdata.receive}
                onChange={(e) =>
                  setFormdata({ ...formdata, receive: e.target.value })
                }
                className="border-[#E0E0E0] text-[24px] font-semibold flex-1 outline-none bg-transparent p-1.5 rounded-full"
              />
              <Select
                value={formdata.receiveCurrency}
                onValueChange={(value) =>
                  setFormdata({ ...formdata, receiveCurrency: value })
                }
              >
                <SelectTrigger className="border-[#E0E0E0] outline-none bg-[#F7F7F7] rounded-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent className="p-2">
                  <span className="p-2 border rounded-full mb-3 flex gap-2 items-center">
                    <BiSearch />
                    <input
                      className="outline-none"
                      type="search"
                      placeholder="Search"
                    />
                  </span>
                  {RECEIVE_COUNTRY.map((currency) => (
                    <SelectItem
                      className="p-3"
                      key={currency.name}
                      value={currency.name}
                    >
                      <span className="flex items-center gap-2">
                        <img
                          width={24}
                          height={24}
                          src={currency.img}
                          alt={currency.name}
                          className="rounded-full"
                        />
                        {currency.name}
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </span>
          </div>
          {formErrors.receiveCurrency && (
            <p className="text-red-500 text-sm">{formErrors.receiveCurrency}</p>
          )}
        </div>
        {/* Pay from section */}
        <div>
          <div className="flex flex-col gap-2">
            <label className="font-light text-[20px]" htmlFor="payFrom">
              Pay from
            </label>
            <Select
              name="payfrom"
              value={formdata.payFrom}
              onValueChange={(value) =>
                setFormdata({ ...formdata, payFrom: value })
              }
            >
              <SelectTrigger className="border-[#E0E0E0] w-full px-5 py-8 outline-none bg-transparent rounded-full">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent className="p-2">
                {PAYMENT_OPTIONS.map((option) => (
                  <SelectItem
                    className="p-3"
                    key={option.name}
                    value={option.name}
                  >
                    <span className="flex items-center gap-2">
                      <img
                        width={24}
                        height={24}
                        src={option.img}
                        alt={option.name}
                        className="rounded-full"
                      />
                      {option.name}
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {formErrors.payFrom && (
            <p className="text-red-500 text-sm">{formErrors.payFrom}</p>
          )}
        </div>

        {/* Pay to section */}
        <div>
          <div className="flex flex-col gap-2">
            <label className="font-light text-[20px]" htmlFor="payTo">
              Pay to
            </label>
            <Select
              name="payTo"
              value={formdata.payTo}
              onValueChange={(value) =>
                setFormdata({ ...formdata, payTo: value })
              }
            >
              <SelectTrigger className="border-[#E0E0E0] w-full px-5 py-8 outline-none bg-transparent rounded-full">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent className="p-2">
                {PAYMENT_OPTIONS.map((option) => (
                  <SelectItem
                    className="p-3"
                    key={option.name}
                    value={option.name}
                  >
                    <span className="flex items-center gap-2">
                      <img
                        width={24}
                        height={24}
                        src={option.img}
                        alt={option.name}
                        className="rounded-full"
                      />
                      {option.name}
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {formErrors.payTo && (
            <p className="text-red-500 text-sm">{formErrors.payTo}</p>
          )}
        </div>

        <Button
          onClick={(e) => handleNext(e)}
          className="bg-[#013941] hover:bg-[#013941]/90 font-[instrument] font-semibold text-white rounded-full mt-6 py-9 w-full"
        >
          Convert now
        </Button>
      </form>
    </div>
  );
};

export default StepOne;
