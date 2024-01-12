import BreadCrum from "@/components/Layout/common/BreadCrum";
import Heading from "@/components/Layout/common/Heading";
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
      <div className="py-2">
        <div className="grid md:grid-cols-2 gap-2 md:p-2">
          <div className="space-y-4">
            <div className="flex justify-between">
              <div>
                <p className="font-medium md:text-3xl text-xl">Chats</p>
                <div className="flex md:space-x-2 items-center">
                  <p className="font-normal md:text-lg text-sm text-[#707C97]">
                    Recent Chats
                  </p>
                  <ChevronDownIcon className="h-3 text-[#707C97]" />
                </div>
              </div>
              <button className="flex md:h-14 space-x-3 justify-center items-center bg-orangePrimery md:px-4 md:py-3 p-2 text-white md:text-xl text-sm font-normal rounded-md">
                <p>+</p>
                <p>Create new Chat</p>
              </button>
            </div>
            <div className="bg-white rounded-md flex shadow-md  ">
              <div class="relative w-[70%]">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  class="block flex-1 w-full p-4 ps-10 text-sm text-gray-900  
                     border-gray-300 rounded-lg bg-transparent focus:border-none
                      "
                  placeholder="Search"
                  required
                />
              </div>
              <div className="flex space-x-2 items-center  border-l-2 w-[30%]  justify-center">
                <p className="font-normal md:text-lg text-xs text-[#707C97]">
                  Messages
                </p>
                <ChevronDownIcon className="h-3 text-[#707C97]" />
              </div>
            </div>
            <div className="bg-white rounded-md flex shadow-md md:p-5 p-3">
              <div className=" space-y-2">
                <div className="flex justify-between w-full items-center">
                  <div className="flex md:space-x-5 space-x-2">
                    <img
                      src="/images/proimg.svg"
                      className="rounded-full h-10 md:h-auto"
                    />
                    <div>
                      <p className="md:text-lg text-base font-semibold">
                        Luy Robin
                      </p>
                      <div className="flex space-x-2">
                        <img src="/images/bluedot.svg" />
                        <p className="text-[#2A8BF2] md:text-sm text-xs">
                          writes
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-[#707C97] md:text-base text-xs">
                    1 minute ago
                  </p>
                </div>
                <div className="flex space-x-4">
                  <p className="text-[#707C97] md:text-base text-xs">
                    Most of its text is made up from sections 1.10.32–3 of
                    Cicero's De finibus bonorum et malorum (On the Boundaries of
                    Goods and Evils; finibus may also be translated as
                    purposes).
                  </p>
                  <div className="text-white flex justify-center items-center bg-[#FF3366] rounded-full h-5 w-5 p-2">
                    2
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="bg-white rounded-md flex shadow-md md:p-5 p-3">
              <div className=" space-y-2 w-full">
                <div className="flex justify-between w-full items-center ">
                  <div className="flex md:space-x-5 space-x-2">
                    <img
                      src="/images/proimg.svg"
                      className="rounded-full h-10 md:h-auto"
                    />
                    <div>
                      <p className="md:text-lg text-base font-semibold">
                        Luy Robin
                      </p>
                      <div className="flex space-x-2">
                        <img src="/images/Recicon.svg" />
                        <p className="text-[#2A8BF2] md:text-sm text-xs">
                          records voice message
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-[#707C97] md:text-base text-xs">
                    1 minute ago
                  </p>
                </div>
                <div className="flex justify-between py-2">
                  <div className="flex space-x-2">
                    <img src="/images/mic.svg" />
                    <p className="text-[#707C97] md:text-base text-xs">
                      Voice message (01:15){" "}
                    </p>
                  </div>
                  <div className="text-white flex justify-center items-center bg-[#FF3366] rounded-full h-5 w-5 p-2">
                    1
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex space-x-2  bg-[#2A8BF240] justify-center  p-2 rounded-3xl">
                    <img src="/images/filetext.svg" />
                    <p className="text-[#2A8BF2] text-sm ">Files (x2)</p>
                  </div>
                  <div className="flex space-x-2  bg-[#FF336640] justify-center  p-2 rounded-3xl">
                    <img src="/images/redpic.svg" />
                    <p className="text-[#FF3366] text-sm ">Photo</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-orangePrimery rounded-md flex shadow-md md:p-5 p-3">
              <div>
                <div className="flex justify-between w-full items-center ">
                  <div className="flex md:space-x-5 space-x-2">
                    <img
                      src="/images/proimg.svg"
                      className="rounded-full h-10 md:h-auto"
                    />
                    <div>
                      <p className="md:text-lg text-base font-semibold text-white">
                        Nika Jerrardo
                      </p>
                      <div className="flex space-x-2">
                        {/* <img src="/images/Recicon.svg" /> */}
                        <p className="text-white md:text-sm text-xs">
                          last online 5 hours ago
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-white md:text-base text-xs">3 days ago</p>
                </div>
                <p className="md:text-base text-xs font-normal text-white py-2">
                  Cicero famously orated against his political opponent Lucius
                  Sergius Catilina.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className=" w-full bg-white shadow-lg rounded-md overflow-hidden">
              <div className="bg-[#FAFBFF] flex w-full justify-between  p-4  border border-b-2 border-b-[#707C971A]">
                <div className="flex space-x-2">
                  <img src="/images/proimg.svg" className="rounded-full" />
                  <div>
                    <p className="text-lg font-semibold">Nika Jerrardo</p>
                    <p className="text-base font-normal text-[#2A8BF2]">
                      last online 5 hours ago
                    </p>
                  </div>
                </div>
                <div className="flex w-max space-x-2">
                  <button className="flex h-10 w-10 justify-center items-center p-2 rounded-full shadow-xl">
                    <img src="/images/attach2.svg" />
                  </button>{" "}
                  <button className=" h-10 w-10 flex justify-center items-center p-2 rounded-full shadow-xl">
                    <img src="/images/more.svg" />
                  </button>
                </div>
              </div>

              <div className="p-5 ">
                {/* u-------------- */}
                <div className="flex space-x-2">
                  <img src="/images/proimg.svg" className="rounded-full h-8" />
                  <div className="space-y-4">
                    <div className="bg-orangePrimery p-2  rounded-tl-none rounded-xl">
                      <p className="font-normal text-base text-white ">
                        Hello! Finally found the time to write to you) I need
                        your help in creating interactive animations for my
                        mobile application.
                      </p>
                    </div>
                    <div>
                      <div className="flex space-x-3 ">
                        <div className="bg-orangePrimery p-2  rounded-tl-none rounded-xl w-max">
                          <p className="font-normal text-base text-white ">
                            Can I send you files?
                          </p>
                        </div>
                        <img src="/images/more2.svg" />
                      </div>
                      <div className=" ">
                        <p className="md:pl-20 text-[#707C97B2]">4 days ago</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* me-------------------- */}
                <div className="flex  justify-end">
                  <div>
                    <div className="flex items-center space-x-2">
                      <img src="/images/smallmore.svg" />
                      <div className="p-2 border border-[#707C97B2] rounded-br-none rounded-xl">
                        <p className="text-[#707C97] font-normal text-base">
                          Hey! Okay, send out.
                        </p>
                      </div>
                      <img src="/images/alldone.svg" />
                    </div>
                    <div className="text-[#707C97B2] flex justify-center">
                      4 days ago
                    </div>
                  </div>
                </div>
                {/* --------------------------------- */}
                <div className="flex space-x-2">
                  <img src="/images/proimg.svg" className="rounded-full h-8" />
                  <div>
                    <div className="flex items-center space-x-2">
                      <div className="bg-orangePrimery p-2  rounded-tl-none rounded-xl">
                        <div className="flex space-x-2">
                          <img src="/images/minifile.svg" />
                          <p className="font-normal text-base text-white ">
                            Style.zip
                          </p>
                        </div>
                      </div>
                      <img src="/images/more2.svg" />
                    </div>
                    <div className=" ">
                      <p className="md:pl-10 text-[#707C97B2]">4 days ago</p>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="flex  item-center p-2 ">
                    <div className="w-full mt-2 h-[1px] bg-[#707C9726]" />
                    <div className="px-2 text-[#707C97B2]">3daysago</div>
                    <div className="w-full mt-2 h-[1px] bg-[#707C9726]" />
                  </div>
                </div>
                {/* <div className="flex justify-end">
                  <div>
                    <div className="flex items-center space-x-2">
                      <img src="/images/smallmore.svg" />
                      <div className="p-2 border border-[#707C97B2] rounded-br-none rounded-xl w-3/5">
                        <p className="text-[#707C97] font-normal text-base ">
                          Hello! I tweaked everything you asked. I am sending
                          the finished file.
                        </p>
                      </div>
                      <img src="/images/alldone.svg" />
                    </div>
                    <div className="text-[#707C97B2] flex justify-center">
                      4 days ago
                    </div>
                  </div>
                </div> */}
                <div>
                  <hr />
                  <div className="flex items-center">
                    <input
                      type="text"
                      class="flex-grow  p-2 focus:outline-none"
                      placeholder="Type a message..."
                    />
                    <div className="flex items-center space-x-2">
                      <button>
                        <img src="/images/smile.svg" />
                      </button>
                      <button className="bg-orangePrimery h-8 w-8 rounded-full justify-center items-center md:p-2">
                        {" "}
                        <img src="/images/sendicon.svg" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default chatsupport;
