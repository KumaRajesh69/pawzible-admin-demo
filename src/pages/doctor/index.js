import BreadCrum from "@/components/Layout/common/BreadCrum";
import Heading from "@/components/Layout/common/Heading";
import Appointment from "@/components/Tables/Doctors/Appointment";
import Blog from "@/components/Tables/Doctors/Blog";
import DetailsBlog from "@/pages/detailsblog";
import Experience from "@/components/commonComponet/Experience";
import Location from "@/components/commonComponet/Location";
import OverView from "@/components/commonComponet/OverView";
import Review from "@/components/commonComponet/Review";
import Wallet from "@/components/commonComponet/Wallet";
import React, { useState } from "react";

const tabs = [
  {
    name: "Overview",
    value: 1,
  },

  {
    name: "Wallets",
    value: 2,
  },
  {
    name: "Reviews & Ratings",
    value: 3,
  },
  {
    name: "Locations",
    value: 4,
  },
  {
    name: "Appointments",
    value: 5,
  },
  {
    name: "Blogs",
    value: 6,
  },
];

function index() {
  const [tab, setTab] = useState(1);

  const handelOnClick = (number) => {
    setTab(number);
  };

  return (
    <>
      <div>
        <BreadCrum
          data={[
            { name: "Dashboard", href: "/dashboard" },
            { name: " Stakeholder Management", href: "#" },
          ]}
        />
        <Heading title={"Stakeholder Management"} />
        <div className="flex w-full overflow-x-scroll md:overflow-x-hidden rounded-xl md:w-lg my-5 text-sm text-gray-500 font-medium">
          {tabs.map((item) => (
            <div
              onClick={() => handelOnClick(item.value)}
              className={` ${
                tab === item.value
                  ? " flex-1 p-2 text-black border-b-5  border-b-black"
                  : " flex-1 p-2  text-gray-400  cursor-pointer "
              } `}
            >
              <p>{item.name}</p>
              <div
                className={` ${
                  tab === item.value
                    ? " h-1 mt-1 bg-black rounded-full w-[30%]"
                    : "  "
                } `}
              />
            </div>
          ))}
        </div>
        {tab === 1 ? (
          <OverView />
        ) : tab === 2 ? (
          <Wallet />
        ) : tab === 3 ? (
          <Review />
        ) : tab === 4 ? (
          <Location />
        ) : tab === 5 ? (
          <Appointment />
        ) : tab === 6 ? (
          <Blog />
        ) : (
          <DetailsBlog />
        )}
      </div>
    </>
  );
}

export default index;
