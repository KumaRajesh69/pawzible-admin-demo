import React from "react";
import { XCircleIcon } from "@heroicons/react/outline";
function OrderId() {
  return (
    <div className="mt-10  rounded-xl overflow-hidden   shadow-lg max-w-2xl w-full mx-auto">
      <div className="pt-4 pr-4">
        <div className="flex flex-row justify-end ">
          <button className="">
            {/* <span class="XCircleIcon bg-red-600 text-white rounded-full p-1"></span> */}
            <XCircleIcon className="h-10 w-10 text-red-500 rounded-full p-1" />
          </button>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div className="px-8 pt-0 w-20 min-w-max">
          <img
            src="images/Maskgroup.svg"
            className="rounded-lg w-20 h-20 md:w-36 md:h-36"
          />
        </div>
        <div className="flex flex-1 flex-col justify-center md:space-y-9">
          <div className="flex space-x-2">
            <p className="md:text-3xl font-bold">Devin Shelton</p>
            <p className="flex items-end text-gray-600 font-normal md:text-lg">
              Mumbai, India
            </p>
          </div>
          <div className="md:flex md:space-x-10">
            <div>
              <p className="text-gray-600 font-normal md:text-lg">
                Email Address
              </p>
              <p className="text-black  font-normal md:text-lg">
                subham@gmail.com
              </p>
            </div>
            <div>
              <p className="text-gray-600 font-normal md:text-lg">
                Email Address
              </p>
              <p className="text-black font-normal md:text-lg">
                subham@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 p-8 gap-2 md:gap-8">
        <div className="">
          <p className="text-gray-600 font-normal md:text-lg">Gender</p>
          <p className="text-black  font-normal md:text-lg">Male</p>
        </div>
        <div className="">
          <p className="text-gray-600 font-normal md:text-lg">Phone Number</p>
          <p className="text-black  font-normal md:text-lg">+91 826072467</p>
        </div>
        <div className="">
          <p className="text-gray-600 font-normal md:text-lg">Current Status</p>
          <p className="text-black  font-normal md:text-lg">Approved</p>
        </div>
        <div className="">
          <p className="text-gray-600 font-normal md:text-lg">City</p>
          <p className="text-black  font-normal md:text-lg">Mumbai, India</p>
        </div>
        <div className="">
          <p className="text-gray-600 font-normal md:text-lg">Dated On</p>
          <p className="text-black  font-normal md:text-lg">12th july, 2023</p>
        </div>
        <div className="">
          <p className="text-gray-600 font-normal md:text-lg">Price</p>
          <p className="text-black  font-normal md:text-lg">1000/-</p>
        </div>
        <div className="">
          <p className="text-gray-600 font-normal md:text-lg">Disease</p>
          <p className="text-black  font-normal md:text-lg">Dental</p>
        </div>
        <div className="">
          <p className="text-gray-600 font-normal md:text-lg">Hospital</p>
          <p className="text-black  font-normal md:text-lg">Mumbai, India</p>
        </div>
      </div>
      <div className="flex justify-end space-x-8 p-8 ">
        <button class="flex items-center justify-center w-48 h-12  text-base border border-orangePrimery bg-white font-medium rounded-lg focus:text-white focus:bg-red-500">
          Reject
        </button>
        <button class="flex items-center justify-center w-48 h-12  text-white text-base border border-[#D9D9D9]  bg-orangePrimery font-medium rounded-lg  focus:text-white focus:bg-green-600">
          Approve
        </button>
      </div>
    </div>
  );
}

export default OrderId;
