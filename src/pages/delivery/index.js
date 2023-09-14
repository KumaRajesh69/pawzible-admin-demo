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
import Support from "../support";
import PersonalInfo from "@/components/commonComponet/PersonalInfo";
import OrderHistory from "@/components/commonComponet/OrderHistory";
import SupportCard from "@/components/SupportCard";
import SupportGridCard from "@/components/SupportGridCard";

const tabs = [
  {
    name: "Personal Information",
    value: 1,
  },
  {
    name: "Experience",
    value: 2,
  },
  {
    name: "Wallets",
    value: 3,
  },
  {
    name: "Reviews & Ratings",
    value: 4,
  },
  {
    name: "Order Details",
    value: 5,
  },
  {
    name: "Support",
    value: 6,
  },
];

const _data = {
  image: "/images/Account.svg",
  name: "Tom Cook",
  email: "@tom_cook",
  date: "21st July 2023",
  para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
  buton: "Resolve",
};

const _data2 = [
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
        <div className="flex w-full rounded-xl md:w-lg my-5 text-sm text-gray-500 font-medium">
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
          <PersonalInfo />
        ) : tab === 2 ? (
          <Experience />
        ) : tab === 3 ? (
          <Wallet />
        ) : tab === 4 ? (
          <Review />
        ) : tab === 5 ? (
          <OrderHistory />
        ) : tab === 6 ? (
          <>
            {/* <SupportCard item={_data} /> */}
            {/* {_data2.map((item) => (
              <SupportCard item={item} />
            ))} */}
            <SupportGridCard supportTickets={_data2} />
          </>
        ) : (
          tab === 7(<Blog />)
        )}
      </div>
    </>
  );
}

export default index;
