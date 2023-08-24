import BreadCrum from "@/components/Layout/common/BreadCrum";
import Heading from "@/components/Layout/common/Heading";
import SupportGridCard from "@/components/SupportGridCard";
import React from "react";

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
    image: "/images/call.svg",
    name: "Jerry Cook",
    email: "@jerry_cook",
    date: "20th June 2023",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    buton: "Resolve",
  },
  {
    image: "/images/Location.svg",
    name: "Droopy",
    email: "@droopy",
    date: "25th July 2023",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    buton: "Resolve",
  },
  {
    image: "/images/visa-logo.svg",
    name: "Nibbles",
    email: "@nibble",
    date: "21st July 2023",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    buton: "Resolve",
  },
];

const Support = () => {
  return (
    <div>
      <BreadCrum
        data={[
          { name: "Dashboard", href: "/dashboard" },
          { name: "Support", href: "#" },
        ]}
      />
      <Heading title={"Support"} />
      <SupportGridCard supportTickets={data} />
    </div>
  );
};

export default Support;
