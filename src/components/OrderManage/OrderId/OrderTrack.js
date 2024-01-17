import { ChevronRightIcon } from "@heroicons/react/outline";
import { XCircleIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const data = [
  {
    name: "Pedigree",
    subname: "Chicken & Vegetables",
    supplement: "Dietary Fibre",
    kilo: "1 Kg",
    price: "₹1,599.00 ",
    qty: "Oty: 1",
  },
  {
    name: "Royal Cannin",
    subname: "Health Nutrition",
    supplement: "Digestive Security",
    kilo: "1 kg",
    price: "₹1,599.00",
    qty: "Oty: 1",
  },
  {
    name: "ZealBoost",
    subname: "Vitamins",
    supplement: "Supplement",
    kilo: "200 ml",
    price: "₹1,599.00",
    qty: "Oty: 1",
  },
];

function OrderTrack({ setIsOpen }) {
  const [step, setStep] = useState(1);

  return (
    <div className="my-2 rounded-xl p-4 md:p-8  overflow-hidden  shadow-lg max-w-xl w-full mx-auto bg-white">
      <div className=" space-y-6">
        <div className="flex justify-between">
          <div className="flex items-center">
            <p className="text-orangePrimery text-xs font-normal">Home</p>
            <ChevronRightIcon className="w-4 text-gray-500" />
            <p className="text-orangePrimery text-xs font-normal">Orders</p>
            <ChevronRightIcon className="w-4 text-gray-500" />
            <p className="text-black text-xs font-normal">ID 3352655445</p>
          </div>{" "}
          <button onClick={() => setIsOpen(false)}>
            <XCircleIcon className="text-red-600 h-5" />
          </button>
        </div>

        <div className="flex justify-between">
          <div>
            <p className="text-md font-semibold">Order ID: 3354654654526</p>
          </div>
          <button className="p-1 rounded-md border border-gray-200 flex space-x-1">
            <img src="images/invoice2.svg" />
            <p className="font-semibold text-xs text-[#667085]">Invoice</p>
          </button>
        </div>
        <div className="flex items-center text-xs font-normal">
          <p>Order date:</p>
          <p className="text-orangePrimery font-semibold">Jul 23, 2023</p>
        </div>
        <div class="border-t border-gray-300 my-4"></div>

        <div>
          <img src="images/orderlocation.svg" />
        </div>

        <div class="border-t border-gray-300 my-4"></div>

        {/* <div class="border-t border-gray-300 my-4"></div> */}

        <div className="grid md:grid-cols-2">
          {/* <div>
            <p className="font-medium text-lg ">Need Help</p>
            <div className="flex items-center space-x-1">
              <img className="h-5 " src="/images/info-circle.svg" />
              <p className="font-medium text-base text-gray-600">
                Order Issues
              </p>
              <img className="h-7" src="/images/arrow-up.svg" />
            </div>
            <div className="flex items-center space-x-1">
              <img className="h-5" src="/images/truck-time.svg" />
              <p className="font-medium text-base text-gray-600">
                Delivery Info
              </p>
              <img className="h-7" src="/images/arrow-up.svg" />
            </div>
            <div className="flex items-center space-x-1">
              <img className="h-5 " src="/images/box-remove.svg" />
              <p className="font-medium text-base text-gray-600">Returns</p>
              <img className="h-7" src="/images/arrow-up.svg" />
            </div>
          </div> */}
          <div className=" space-y-2">
            <div>
              <p className="text-sm font-medium text-black">Service Provider</p>
              <div className="flex space-x-2 py-2">
                <img
                  src="/images/Ellipse2.svg"
                  alt="person"
                  class="rounded-full  w-5 h-5 "
                />
                <div>
                  <div className="flex">
                    <p className="font-bold text-xs text-gray-600">
                      Abhisek Roy
                    </p>
                    <div class="border h-4 border-gray-400 mx-1" />
                    <p className="flex font-normal text-xs text-gray-600 items-end">
                      Arriving in 15Mins
                    </p>
                  </div>
                  <p className="font-medium text-xs text-gray-600">
                    Contact - 8260724967
                  </p>
                </div>
              </div>
            </div>
            <div className=" ">
              <div className="md:w-3/4">
                <p className=" w-max text-sm font-medium text-black">
                  Pet Location
                </p>
                <p className=" font-medium text-xs text-gray-700 w-[80%] ">
                  847 Jewess Bridge Apt. Kundan Road Mumabi, India, 8260724967
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-black">Payment</p>
              <div className="flex space-x-2 ">
                <p className="font-medium text-xs text-gray-700 "> Visa **56</p>
                <button className="flex items-center border border-gray-200  rounded">
                  <img
                    src="/images/visa-logo.svg"
                    className="flex items-end h-"
                  />
                </button>
              </div>
            </div>
          </div>
          <div>
            <p className="font-medium text-lg ">Order Summary</p>
            <div className="space-y-3">
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between">
                  <p className="text-sm font-medium text-gray-700">Discount</p>
                  <p className="text-base font-medium text-orangePrimery">
                    ₹1,599.00
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-xs font-medium text-gray-600">Discount</p>
                  <p className="text-xs font-normal text-gray-600">
                    (20%) ₹1,599.00
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-xs font-medium text-gray-600">Delivery</p>
                  <p className="text-xs font-normal text-gray-600">₹0.00</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-xs font-medium text-gray-600">Tax</p>
                  <p className="text-xs font-normal text-gray-600">₹1,59.00</p>
                </div>
              </div>
              <div class="border border-dotted border-gray-300"></div>
              <div className="flex justify-between">
                <p className="text-xs font-medium text-gray-600">Total</p>
                <p className="text-sm font-normal text-orangePrimery">
                  ₹5,318.00
                </p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default OrderTrack;
