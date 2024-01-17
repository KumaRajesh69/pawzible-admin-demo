import React, { useState } from "react";

const cardData = [
  {
    image: "/images/active2.svg",
    name: "Total Revenue",
    amount: "Rs 37,193.00",
  },
  {
    image: "/images/active2.svg",
    name: "Total User ",
    amount: "Rs 37,193.00",
  },
  {
    image: "/images/active2.svg",
    name: "Total Profit ",
    amount: "Rs 37,193.00",
  },
  {
    image: "/images/active2.svg",
    name: "Total Booking ",
    amount: "Rs 37,193.00",
  },
];

function Analytics() {
  const [tab, setTab] = useState(1);

  const handelOnClick = (number) => {
    setTab(number);
  };

  return (
    <div>
      {/* <div className="grid grid-cols-2 gap-5">
        <div>
          <div class="max-w-md mx-auto">
            <div class="bg-white p-4 rounded-md shadow-md">
              <div class="tooltip">
                <div class="w-[60%] bg-blue-500 h-10 rounded-md tooltip-trigger"></div>
                <span class="tooltiptext">Value: 60%</span>
              </div>
              <div class="tooltip mt-4">
                <div class="w-[80%] bg-green-500 h-10 rounded-md tooltip-trigger"></div>
                <span class="tooltiptext">Value: 80%</span>
              </div>
              <div class="tooltip mt-4">
                <div class="w-[40%] bg-yellow-500 h-10 rounded-md tooltip-trigger"></div>
                <span class="tooltiptext">Value: 40%</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="grid md:grid-cols-4 gap-2">
        {cardData.map((item) => (
          <div className="bg-[#ECECEC] rounded-md  p-5 w-max shadow-lg">
            <div className=" p-2 rounded-md py-5">
              <img src={item.image} />
            </div>
            <div className="space-y-2">
              <p className="font-normal text-sm text-[#64748B]">{item.name}</p>
              <p className="font-semibold text-3xl text-orangePrimery">
                {item.amount}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex w-full rounded-xl overflow-x-scroll md:overflow-x-hidden md:w-3/5 mt-5 text-sm text-gray-500 font-medium">
        <button
          onClick={() => handelOnClick(1)}
          className={` ${
            tab === 1
              ? " flex-1 p-3 rounded-l-lg text-black shadow-lg border-b-4 border-b-orangePrimery"
              : " flex-1 p-3 rounded-l-lg  shadow-lg "
          } `}
        >
          Grooming
        </button>
        <button
          onClick={() => handelOnClick(2)}
          className={` ${
            tab === 2
              ? " flex-1 p-3  text-black  shadow-lg border-b-4 border-b-orangePrimery"
              : " flex-1 p-3 rounded-l-lg  shadow-lg "
          } `}
        >
          Dog Walking
        </button>
        <button
          onClick={() => handelOnClick(3)}
          className={` ${
            tab === 3
              ? " flex-1 p-3  text-black  shadow-lg border-b-4 border-b-orangePrimery"
              : " flex-1 p-3 rounded-l-lg  shadow-lg "
          } `}
        >
          Aquarium
        </button>
        <button
          onClick={() => handelOnClick(4)}
          className={` ${
            tab === 4
              ? " flex-1 p-3 rounded-r-lg text-black  shadow-lg border-b-4 border-b-orangePrimery"
              : " flex-1 p-3 rounded-r-lg  shadow-lg "
          } `}
        >
          Consultant
        </button>
      </div>

      {tab === 1 && (
        <div className="py-5">
          <div className="grid md:grid-cols-4 gap-2">
            {[0, 1, 2].map((item) => (
              <div className=" rounded-md  p-5 shadow-lg w-60">
                <div className="flex space-x-2">
                  <div className=" p-2 rounded-md bg-blue-50 h-max">
                    <img src="/images/box2.svg" />
                  </div>
                  <div>
                    <p className="font-medium text-base">New </p>
                    <p className="font-medium text-base">Orders</p>
                    <p className="font-normal text-sm text-[#637381]">
                      This week
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <p>1,368</p>
                  <div className="flex space-x-2">
                    <p>0.43%</p>
                    <img src="/images/uparrow.svg" />
                  </div>
                </div>
                <div className="w-3/4 bg-blue-950 h-1"></div>
                {/* 
            <div className="space-y-2">
              <p className="font-normal text-sm text-[#64748B]">{item.name}</p>
              <p className="font-semibold text-3xl text-orangePrimery">
                {item.amount}
              </p>
            </div> */}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Analytics;
