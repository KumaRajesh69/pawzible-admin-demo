import BreadCrum from "@/components/Layout/common/BreadCrum";
import { ChevronDownIcon } from "@heroicons/react/outline";
import React from "react";

function chatsupport() {
  return (
    <div className="bg-[#FAFAFA]">
      <BreadCrum
        data={[
          { name: "Dashboard", href: "/dashboard" },
          { name: "Support", href: "#" },
        ]}
      />
      <div>
        <div className="grid md:grid-cols-2 gap-2 p-2">
          <div>
            <div className="flex justify-between">
              <div>
                <p className="font-medium text-3xl">Chats</p>
                <div className="flex space-x-2 items-center">
                  <p className="font-normal text-lg text-[#707C97]">
                    Recent Chats
                  </p>
                  <ChevronDownIcon className="h-3 text-[#707C97]" />
                </div>
              </div>
              <button className="flex h-14 space-x-3 justify-center items-center bg-orangePrimery px-4 py-3 text-white text-xl font-normal rounded-md">
                <p>+</p>
                <p>Create new Chat</p>
              </button>
            </div>
            <div className="bg-white rounded-md flex  ">
              <div className="flex ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>

                {/* <div class="absolute top-1/2 transform -translate-y-1/2 right-4 text-gray-500">
                  <svg
                    class="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-5.2-5.2M15 10.5A7.5 7.5 0 1 0 7.5 18 7.5 7.5 0 0 0 15 10.5z"
                    ></path>
                  </svg>
                </div> */}
                <input
                  type="text"
                  class="w-full py-2 px-4 border border-gray-300 rounded-md"
                  placeholder="Search"
                />
              </div>

              <div class="border-l border-gray-300 h-8" />

              <div className="flex space-x-2 items-center">
                <p className="font-normal text-lg text-[#707C97]">Messages</p>
                <ChevronDownIcon className="h-3 text-[#707C97]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default chatsupport;
