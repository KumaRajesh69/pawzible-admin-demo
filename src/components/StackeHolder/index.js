import React from "react";
import { XCircleIcon } from "@heroicons/react/outline";

function StackHolder() {
  return (
    <div>
      <div className="mx-2 my-9 shadow-2xl bg-green-200  rounded-xl overflow-hidden p-2 ">
        <div className="flex justify-end">
          <button className="">
            <XCircleIcon className="w-6 h-6 font-light text-red-500" />
          </button>
        </div>
        <div className="flex items-center w-full space-x-3">
          <div class="p-4 flex ">
            <img
              src="/images/Ellipse.svg"
              alt="person"
              class="rounded-full shadow-md"
            />
          </div>
          <div>
            <div className="flex items-end space-x-6 flex-1">
              <div className="">
                <p className="text-xl font-medium text-orangePrimery">
                  Ethel Howard
                </p>
              </div>
              <div className="flex space-x-1">
                <img className="" src="/images/location.svg" />
                <p className="text-gray-700 text-base font-normal">
                  Mumbai,India
                </p>
              </div>
              <div className="flex space-x-2 font-semibold text-base">
                <img src="/images/call.svg" />
                <p>Call</p>
              </div>
              <div className="flex space-x-2 font-semibold text-base">
                <img src="/images/sms.svg" />
                <p>Chat</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5">
          <div>
            <p className="text-gray-600">Email Address</p>
            <p>shubham@gmail.com</p>
          </div>{" "}
          <div>
            <p className="text-gray-600">Email Address</p>
            <p>shubham@gmail.com</p>
          </div>{" "}
          <div>
            <p className="text-gray-600">Email Address</p>
            <p>shubham@gmail.com</p>
          </div>{" "}
          <div>
            <p className="text-gray-600">Email Address</p>
            <p>shubham@gmail.com</p>
          </div>{" "}
          <div>
            <p className="text-gray-600">Email Address</p>
            <p>shubham@gmail.com</p>
          </div>{" "}
          <div>
            <p className="text-gray-600">Email Address</p>
            <p>shubham@gmail.com</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-5 ">
          {[0, 1, 2].map((item) => (
            <div className=" bg-gray-200 rounded p-4 shadow-lg">
              <div className=" flex space-x-2 ">
                <div className="bg-orangePrimery rounded p-1 ">
                  <img src="/images/innocent-cat.svg" />
                </div>
                <div>
                  <p className="text-sm font-medium">Jacky</p>
                  <p className="text-xs font-normal text-gray-500">
                    Scottish Fold | 6Month
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="px-3 py-1 rounded bg-orangePrimery text-white text-xs font-normal">
                  View EMR
                </button>
              </div>
            </div>
          ))}
        </div>
        <div>
          <p>All Order</p>
          <hr />
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-8 my-5 ">
              {[0, 1, 2].map((item) => (
                <div className=" bg-gray-100 rounded p-4 shadow-lg">
                  <div className=" flex space-x-2 ">
                    <div className="bg-gray-500 rounded h-max self-end p-1 ">
                      <img src="/images/Vector-img.svg" />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-end">
                        <p className="text-xs font-light text-gray-500">
                          Order Id:
                        </p>
                        <p className="text-xs font-light ">#545876212</p>
                      </div>
                      <p className="text-sm font-medium">Pedigree</p>
                      <p className="text-xs font-normal text-gray-500">
                        Chicken & Vegetables | Dietary Fibre | 1kg
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="">
                      <p className="text-xs font-light text-gray-500">
                        Payment Mode
                      </p>
                      <div className="flex">
                        <p className="text-xs font-light text-gray-500">
                          Visa **56
                        </p>
                        <button>
                          <img src="" />
                        </button>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-light text-gray-500">
                        Placed On
                      </p>
                      <p className="text-xs font-medium ">10 Jan 2023</p>
                    </div>
                    <div>
                      <p className="text-xs font-light text-gray-500">
                        Address
                      </p>
                      <p className="text-xs font-medium ">Mumbai, India</p>
                    </div>
                    <div>
                      <p className="text-xs font-light text-gray-500">Status</p>
                      <p className="text-xs font-medium"> Delivered </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StackHolder;
