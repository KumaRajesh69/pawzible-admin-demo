import Cms from "@/components/Cms";
import BreadCrum from "@/components/Layout/common/BreadCrum";
import Heading from "@/components/Layout/common/Heading";
import Location from "@/components/commonComponet/Location";
import React, { useState } from "react";

const cmsData = [
  {
    name: "Coupon 1  ",
    title: "Diwali Cupon",
    amount: "20%",
    category: "Health Care",
    date: "12th sept 2022",
    term: "View Details",
    status: "Approved",
  },
  {
    name: "Coupon 1  ",
    title: "Diwali Cupon",
    amount: "20%",
    category: "Health Care",
    date: "12th sept 2022",
    term: "View Details",
    status: "Approved",
  },
  {
    name: "Coupon 1  ",
    title: "Diwali Cupon",
    amount: "20%",
    category: "Health Care",
    date: "12th sept 2022",
    term: "View Details",
    status: "Approved",
  },
  {
    name: "Coupon 1  ",
    title: "Diwali Cupon",
    amount: "20%",
    category: "Health Care",
    date: "12th sept 2022",
    term: "View Details",
    status: "Approved",
  },
  {
    name: "Coupon 1  ",
    title: "Diwali Cupon",
    amount: "20%",
    category: "Health Care",
    date: "12th sept 2022",
    term: "View Details",
    status: "Approved",
  },
];

function cms() {
  const [tab, setTab] = useState(1);

  const handelOnClick = (number) => {
    setTab(number);
  };

  return (
    <div>
      <BreadCrum
        data={[
          { name: "Dashboard", href: "/dashboard" },
          { name: " CMS", href: "#" },
        ]}
      />

      <Heading title={"CMS"} />
      {/* <Cms table={cmsData} /> */}
      <div className="flex justify-between">
        <div className="flex w-full rounded-xl md:w-3/5 my-5 text-sm text-gray-500 font-medium">
          <button
            onClick={() => handelOnClick(1)}
            className={` ${
              tab === 1
                ? " flex-1 p-3 rounded-l-lg text-black shadow-lg border-b-4 border-b-orangePrimery"
                : " flex-1 p-3 rounded-l-lg  shadow-lg "
            } `}
          >
            Initiate Offers
          </button>
          <button
            onClick={() => handelOnClick(2)}
            className={` ${
              tab === 2
                ? " flex-1 p-3  text-black  shadow-lg border-b-4 border-b-orangePrimery"
                : " flex-1 p-3 rounded-l-lg  shadow-lg "
            } `}
          >
            Mail and Notifications
          </button>
          <button
            onClick={() => handelOnClick(3)}
            className={` ${
              tab === 3
                ? " flex-1 p-3  text-black  shadow-lg border-b-4 border-b-orangePrimery"
                : " flex-1 p-3 rounded-l-lg  shadow-lg "
            } `}
          >
            Reviews/Testimonials
          </button>
          {/* <button
            onClick={() => handelOnClick(4)}
            className={` ${
              tab === 4
                ? " flex-1 p-3 rounded-r-lg text-black  shadow-lg border-b-4 border-b-orangePrimery"
                : " flex-1 p-3 rounded-r-lg  shadow-lg "
            } `}
          >
            Service Providers
          </button> */}
        </div>
        <button className="bg-orangePrimery rounded-md my-5  text-white font-medium p-2">
          Add New
        </button>
      </div>
      {tab === 1 ? (
        <Cms table={cmsData} />
      ) : tab === 2 ? (
        <Cms table={cmsData} />
      ) : (
        <Location />
      )}
    </div>
  );
}

export default cms;
