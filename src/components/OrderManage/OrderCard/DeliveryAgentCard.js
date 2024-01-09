import { XCircleIcon } from "@heroicons/react/solid";
import React from "react";

function DeliveryAgentCard({ setIsOpen }) {
  return (
    <div className="h">
      <div className="flex justify-end p-2">
        <button onClick={() => setIsOpen(false)}>
          <XCircleIcon className="text-[#FF3C3C] h-8" />
        </button>
      </div>
      <div className="px-5 flex md:flex-row flex-col md:space-x-5 md:space-y-0 space-y-5">
        <div className="md:w-[40%]">
          <img src="images/devil.svg" />
        </div>
        <div className="md:w-[60%] space-y-5 md:pt-8">
          <div className="flex justify-between items-end">
            <p className="font-bold md:text-3xl text-xl">Devin Shelton</p>
            <p className="font-normal md:text-lg text-base text-[#6A6A6A]">
              Mumbai, India
            </p>
          </div>
          <div>
            <p className="font-normal md:text-lg text-base text-[#6A6A6A]">
              Email Address
            </p>
            <p className="font-normal md:text-lg text-base">
              shubham@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-5 p-5">
        <div>
          <p className="font-normal md:text-lg text-base text-[#6A6A6A]">
            Gender
          </p>
          <p className="font-normal md:text-lg text-base">Male</p>
        </div>
        <div>
          <p className="font-normal md:text-lg text-base text-[#6A6A6A]">
            Phone Number
          </p>
          <p className="font-normal md:text-lg text-base">+91 826072467</p>
        </div>
        <div>
          <p className="font-normal md:text-lg text-base text-[#6A6A6A]">
            Current Status
          </p>
          <p className="font-normal md:text-lg text-base">Approved</p>
        </div>
        <div>
          <p className="font-normal md:text-lg text-base text-[#6A6A6A]">
            City
          </p>
          <p className="font-normal md:text-lg text-base">Mumbai, India</p>
        </div>
        <div>
          <p className="font-normal md:text-lg text-base text-[#6A6A6A]">
            Dated On
          </p>
          <p className="font-normal md:text-lg text-base">12th july, 2023</p>
        </div>{" "}
        <div>
          <p className="font-normal md:text-lg text-base text-[#6A6A6A]">
            Price
          </p>
          <p className="font-normal md:text-lg text-base">1000/-</p>
        </div>{" "}
        <div>
          <p className="font-normal md:text-lg text-base text-[#6A6A6A]">
            Product
          </p>
          <p className="font-normal md:text-lg text-base">Pedigree</p>
        </div>{" "}
        <div>
          <p className="font-normal md:text-lg text-base text-[#6A6A6A]">
            Address
          </p>
          <p className="font-normal md:text-lg text-base">Address</p>
        </div>
      </div>
    </div>
  );
}

export default DeliveryAgentCard;
