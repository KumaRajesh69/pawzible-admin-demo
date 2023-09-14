import React from "react";
import { XCircleIcon } from "@heroicons/react/outline";

function DeliveryProfile() {
  return (
    <div>
      <div className="mx-2 my-9 shadow-2xl bg-green-200  rounded-xl overflow-hidden p-2 ">
        <div className="flex justify-end">
          <button className="">
            <XCircleIcon className="w-6 h-6 font-light text-red-500" />
            {/* <span class="material-symbols-outlined bg-red-600 text-white rounded-full p-1">
              close
            </span> */}
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
          </div>
        </div>
        <p className="my-3">Documents Uploaded</p>
        <hr />

        <div>
          <p>Order History</p>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 shadow-2xl rounded bg-red-500 ">
              <div className="flex flex-col justify-center shadow-2xl rounded bg-blue-400 p-2 m-1 space-y-2">
                <p>Total</p>
                <div className="flex justify-between ">
                  <p>7,000</p>
                  <div>June,2023</div>
                </div>
              </div>
              <div className="flex flex-col justify-center shadow-2xl rounded bg-blue-400 p-2 m-1 space-y-2">
                <p>Total</p>
                <div className="flex justify-between ">
                  <p>7,000</p>
                  <div>June,2023</div>
                </div>
              </div>{" "}
              <div className="flex flex-col justify-center shadow-2xl rounded bg-blue-400 p-2 m-1 space-y-2">
                <p>Total</p>
                <div className="flex justify-between ">
                  <p>7,000</p>
                  <div>June,2023</div>
                </div>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryProfile;
