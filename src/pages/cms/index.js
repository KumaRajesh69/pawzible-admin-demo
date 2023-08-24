import Cms from "@/components/Cms";
import BreadCrum from "@/components/Layout/common/BreadCrum";
import Heading from "@/components/Layout/common/Heading";
import React from "react";

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
  return (
    <div>
      <BreadCrum
        data={[
          { name: "Dashboard", href: "/dashboard" },
          { name: " CMS", href: "#" },
        ]}
      />

      <Heading title={"CMS"} />
      <Cms table={cmsData} />
    </div>
  );
}

export default cms;
