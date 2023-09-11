import React, { useState } from "react";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function OrderTrack() {
  const [step, setStep] = useState(1);

  return (
    <div className="mt-10 rounded-xl p-8  overflow-hidden  shadow-lg max-w-2xl w-full mx-auto">
      <div className=" space-y-6">
        <div className="flex items-center">
          <p className="text-orangePrimery text-xs font-normal">Home</p>
          <span class="material-symbols-outlined text-gray-400">
            chevron_right
          </span>
          <p className="text-orangePrimery text-xs font-normal">Orders</p>
          <span class="material-symbols-outlined text-gray-400">
            chevron_right
          </span>
          <p className="text-black text-xs font-normal">ID 3352655445</p>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-md font-semibold">Order ID: 3354654654526</p>
          </div>
          <div className="flex space-x-5">
            <p className="text-sm">Invoice</p>
            <p className="text-sm">Track order</p>
          </div>
        </div>
        <div>
          <div className="mx-auto w-max flex">
            <div className="flex items-center">
              <div
                onClick={() => setStep(1)}
                className={classNames(
                  step === 1 || step === 2 || step === 3 || step === 4
                    ? "bg-red-600 text-white"
                    : "bg-black text-gray-500",
                  "w-5 h-5 text-sm rounded-full flex justify-center items-center"
                )}
              >
                1
              </div>
              <div
                className={classNames(
                  step === 2 || step === 3
                    ? "bg-blue-800 text-white"
                    : "bg-gray-200 text-gray-500",
                  "h-1 w-40 bg-bluePrimary"
                )}
              />
            </div>
            <div className="flex items-center">
              <div
                onClick={() => setStep(2)}
                className={classNames(
                  step === 2 || step === 3
                    ? "bg-yellow-200 text-white"
                    : "bg-green-800 text-gray-500",
                  "w-5 h-5 text-sm rounded-full flex justify-center items-center"
                )}
              >
                2
              </div>
              <div
                className={classNames(
                  step === 3 || step === 4
                    ? "bg-pink-700 text-white"
                    : "bg-gray-200 text-gray-500",
                  "h-1 w-40 bg-bluePrimary"
                )}
              />
            </div>
            <div className="flex items-center">
              <div
                onClick={() => setStep(3)}
                className={classNames(
                  step === 3
                    ? "bg-orange-700 text-white"
                    : "bg-green-500 text-gray-500",
                  "w-5 h-5 text-sm rounded-full flex justify-center items-center"
                )}
              >
                3
              </div>
              <div
                className={classNames(
                  step === 3
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-500",
                  "h-1 w-40 bg-bluePrimary"
                )}
              />
            </div>
            <div className="flex items-center">
              <div
                onClick={() => setStep(4)}
                className={classNames(
                  step === 4
                    ? "bg-orange-700 text-white"
                    : "bg-green-500 text-gray-500",
                  "w-5 h-5 text-sm rounded-full flex justify-center items-center"
                )}
              >
                4
              </div>
            </div>
          </div>
        </div>
        <div className="flex  space-x-5">
          <div className="w-16 h-16 rounded-md bg-gray-300"></div>
          <div className="flex flex-col justify-between flex-1">
            <p className="font-normal text-xl">Pedigree</p>
            <div className="flex">
              <p className="text-sm font-normal text-gray-500 ">
                Chicken & Vegetables
              </p>
              <div class="border-l border-gray-400 mx-4"></div>
              <p className="text-xs font-normal text-gray-500 ">
                Digestive Security
              </p>
              <div class="border-l border-gray-400 mx-4"></div>
              <p className="text-xs font-normal text-gray-500 ">1 Kg</p>
            </div>
          </div>
          <div className=" flex flex-col justify-end items-end">
            <p className="text-orangePrimery text-xl font-semibold">
              $1,599.00
            </p>
            <p className="font-normal text-base text-gray-700">Oty:1</p>
          </div>
        </div>
        <div className="flex  space-x-5">
          <div className="w-16 h-16 rounded-md bg-gray-300"></div>
          <div className="flex flex-col justify-between flex-1">
            <p className="font-normal text-xl">Pedigree</p>
            <div className="flex">
              <p className="text-sm font-normal text-gray-500 ">
                Chicken & Vegetables
              </p>
              <div class="border-l border-gray-400 mx-4"></div>
              <p className="text-xs font-normal text-gray-500 ">
                Digestive Security
              </p>
              <div class="border-l border-gray-400 mx-4"></div>
              <p className="text-xs font-normal text-gray-500 ">1 Kg</p>
            </div>
          </div>
          <div className=" flex flex-col justify-end items-end">
            <p className="text-orangePrimery text-xl font-semibold">
              $1,599.00
            </p>
            <p className="font-normal text-base text-gray-700">Oty:1</p>
          </div>
        </div>
        <div className="flex  space-x-5">
          <div className="w-16 h-16 rounded-md bg-gray-300"></div>
          <div className="flex flex-col justify-between flex-1">
            <p className="font-normal text-xl">Pedigree</p>
            <div className="flex">
              <p className="text-sm font-normal text-gray-500 ">
                Chicken & Vegetables
              </p>
              <div class="border-l border-gray-400 mx-4"></div>
              <p className="text-xs font-normal text-gray-500 ">
                Digestive Security
              </p>
              <div class="border-l border-gray-400 mx-4"></div>
              <p className="text-xs font-normal text-gray-500 ">1 Kg</p>
            </div>
          </div>
          <div className=" flex flex-col justify-end items-end">
            <p className="text-orangePrimery text-xl font-semibold">
              $1,599.00
            </p>
            <p className="font-normal text-base text-gray-700">Oty:1</p>
          </div>
        </div>
        <div class="border-t border-gray-300 my-4"></div>
        <div className="grid grid-cols-2 gap-x-4">
          <div>
            <p className="text-xl font-medium text-black">Delivery Agent</p>
            <div className="flex space-x-2 items-center py-2">
              <img
                src="/images/Ellipse2.svg"
                alt="person"
                class="rounded-full  w-11 h-11 "
              />
              <div>
                <div className="flex">
                  <p className="font-bold text-sm text-gray-600">Abhisek Roy</p>
                  <div class="border-2 h-5 border-gray-400 mx-2" />
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
          <div className="w-full flex justify-end ">
            <div className="w-3/4">
              <p className=" w-max text-xl font-medium text-black">
                Delivery Address
              </p>
              <p className=" font-medium text-base text-gray-700 ">
                847 Jewess Bridge Apt. Kundan Road Mumabi, India, 8260724967
              </p>
            </div>
          </div>
          <div>
            <p className="text-xl font-medium text-black">Payment</p>
            <div className="flex space-x-2 ">
              <p className="font-medium text-base text-gray-700 "> Visa **56</p>
              <button className="flex items-center border border-gray-500  rounded">
                <img
                  src="/images/visa-logo.svg"
                  className="flex items-end h-3"
                />
              </button>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-300 my-4"></div>
        <div className="grid grid-cols-2">
          <div>
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
          </div>
          <div>
            <p className="font-medium text-lg ">Order Summary</p>
            <div className="space-y-3">
              <div className="flex flex-col ">
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
