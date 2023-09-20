import { XCircleIcon } from "@heroicons/react/outline";
import React from "react";

function TermCondition({ isOpen, setIsOpen }) {
  return (
    <>
      <div className="py-4 border-b px-8 ">
        <div className="flex flex-row justify-between ">
          <p className="text-xl font-bold text-orangePrimery">
            Terms & Conditions
          </p>
          <button onClick={() => setIsOpen(false)} className="">
            <XCircleIcon className="w-6 h-6 font-light text-red-500" />
          </button>
        </div>
        <div className="flex space-x-4 pt-8">
          <div>
            <img src="/images/innocent-cat.svg" />
          </div>
          <div className="">
            <p className="text-2xl font-semibold "> 25% OFF</p>
            <p className="text-base font-normal  ">
              Get 25% at your next Product{" "}
            </p>
            <p className="text-xs font-medium text-gray-400">
              Valid until 03 July 2023
            </p>
          </div>
        </div>
      </div>
      <div class="border-t-2 border-dashed border-gray-400 "></div>
      <div className="px-8 py-8 space-y-3 ">
        <div className="flex space-x-2 items-center">
          <div className="rounded-full h-1 w-1 bg-black"> </div>
          <p className="text-sm font-medium">
            Reedeamble at all Products in the INDIA.
          </p>
        </div>
        <div className="flex space-x-2 items-center">
          <div className="rounded-full h-1 w-1 items-start flex bg-black"></div>
          <p className="text-sm font-medium ">
            Not valid with any other discounts and promotions.
          </p>
        </div>
        <div className="flex space-x-2 items-center">
          <div className="rounded-full h-1 w-1 bg-black"> </div>
          <p className="text-sm font-medium"> No cash value. </p>
        </div>
      </div>
      <div class="border-t-2 border-dashed border-gray-400 "></div>
      <div className=" flex justify-between items-center w-full p-4 md:p-8 md:pt-20">
        <button className="bg-transparent hover:bg-red-500 text-gray-500 font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded w-40">
          Reject
        </button>
        <button className="bg-orangePrimery hover:bg-orange-500 text-white font-bold py-2 px-4 border  rounded w-40">
          Approve
        </button>
      </div>
      {/* <div className="rounded-xl overflow-hidden max-w-md w-full mx-auto "></div> */}
    </>
  );
}

export default TermCondition;
