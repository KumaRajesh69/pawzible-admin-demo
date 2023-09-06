import BreadCrum from "@/components/Layout/common/BreadCrum";
import Heading from "@/components/Layout/common/Heading";
import Appointment from "@/components/Tables/Doctors/Appointment";
import DetailsBlog from "@/components/Tables/Doctors/DetailsBlog";
import Overview from "@/components/Tables/Users/Overview";
import UserOrders from "@/components/Tables/Users/UserOrders";
import Pet from "@/components/Tables/Users/pet";
import React, { useState } from "react";
import Support from "../support";

const tabs = [
  {
    name: "Overview",
    value: 1,
  },
  {
    name: "Orders",
    value: 2,
  },
  {
    name: "PET Details",
    value: 3,
  },
  {
    name: "Support",
    value: 4,
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
        <div className="flex w-full rounded-xl md:w-3/5 my-5 text-sm text-gray-500 font-medium">
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
          <Overview />
        ) : tab === 2 ? (
          <UserOrders />
        ) : tab === 3 ? (
          <Pet />
        ) : (
          <Support />
        )}
      </div>
    </>
  );
}

export default index;
