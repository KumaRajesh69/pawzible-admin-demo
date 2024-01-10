import BreadCrum from "@/components/Layout/common/BreadCrum";
import Heading from "@/components/Layout/common/Heading";
import Appointment from "@/components/Tables/Doctors/Appointment";
import DetailsBlog from "@/pages/detailsblog";
import Overview from "@/components/Tables/Users/Overview";
import UserOrders from "@/components/Tables/Users/UserOrders";
import Pet from "@/components/Tables/Users/pet";
import React, { useState } from "react";
import Support from "../support";
import SupportGridCard from "@/components/SupportGridCard";
import Review from "@/components/commonComponet/Review";

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
  {
    name: "Reviews & Ratings",
    value: 5,
  },
];
const data = [
  {
    image: "/images/Account.svg",
    name: "Tom Cook",
    email: "@tom_cook",
    date: "21st July 2023",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    buton: "Resolve",
  },
  {
    image: "/images/Account.svg",
    name: "Tom Cook",
    email: "@tom_cook",
    date: "21st July 2023",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    buton: "Resolve",
  },
  {
    image: "/images/Account.svg",
    name: "Tom Cook",
    email: "@tom_cook",
    date: "21st July 2023",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    buton: "Resolve",
  },
  {
    image: "/images/Account.svg",
    name: "Tom Cook",
    email: "@tom_cook",
    date: "21st July 2023",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    buton: "Resolve",
  },
  {
    image: "/images/Account.svg",
    name: "Tom Cook",
    email: "@tom_cook",
    date: "21st July 2023",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    buton: "Resolve",
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
        <div className="flex w-full rounded-xl overflow-x-scroll md:overflow-x-hidden md:w-4/5 my-5 text-sm text-gray-500 font-medium">
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
        ) : tab === 4 ? (
          <SupportGridCard supportTickets={data} />
        ) : (
          <Review />
        )}
      </div>
    </>
  );
}

export default index;
