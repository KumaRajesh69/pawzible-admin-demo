import AccountManagement from "@/components/AccountManagement";
import BreadCrum from "@/components/Layout/common/BreadCrum";
import Heading from "@/components/Layout/common/Heading";
import Otp from "@/components/OtpPage/Otp";
import PackagePage from "@/components/Package";
import React, { useState } from "react";

const data = [
  {
    name: "Dog Walking",
    subcategory1: "Nail clipping",
    subcategory2: "Head Massage",
    price: "₹20000",
    discount: "₹2000",
    add: "/images/ButtonEdit.svg",
    dlt: "images/Buttontrash.svg",
  },
  {
    name: "Dog Walking",
    subcategory1: "Nail clipping",
    subcategory2: "Head Massage",
    price: "₹20000",
    discount: "₹2000",
    add: "/images/ButtonEdit.svg",
    dlt: "images/Buttontrash.svg",
  },
  {
    name: "Dog Walking",
    subcategory1: "Nail clipping",
    subcategory2: "Head Massage",
    price: "₹20000",
    discount: "₹2000",
    add: "/images/ButtonEdit.svg",
    dlt: "images/Buttontrash.svg",
  },
  {
    name: "Dog Walking",
    subcategory1: "Nail clipping",
    subcategory2: "Head Massage",
    price: "₹20000",
    discount: "₹2000",
    add: "/images/ButtonEdit.svg",
    dlt: "images/Buttontrash.svg",
  },
  {
    name: "Dog Walking",
    subcategory1: "Nail clipping",
    subcategory2: "Head Massage",
    price: "₹20000",
    discount: "₹2000",
    add: "/images/ButtonEdit.svg",
    dlt: "images/Buttontrash.svg",
  },
  {
    name: "Dog Walking",
    subcategory1: "Nail clipping",
    subcategory2: "Head Massage",
    price: "₹20000",
    discount: "₹2000",
    add: "/images/ButtonEdit.svg",
    dlt: "images/Buttontrash.svg",
  },
  {
    name: "Dog Walking",
    subcategory1: "Nail clipping",
    subcategory2: "Head Massage",
    price: "₹20000",
    discount: "₹2000",
    add: "/images/ButtonEdit.svg",
    dlt: "images/Buttontrash.svg",
  },
];
function index() {
  const [tab, setTab] = useState(1);

  const handelOnClick = () => {
    setTab();
  };
  return (
    <div>
      <div>
        <BreadCrum
          data={[
            { name: "Dashboard", href: "/dashboard" },
            { name: "Packages", href: "#" },
          ]}
        />
        <Heading title={"Packages"} />

        <div className="">
          <PackagePage table={data} />
        </div>
      </div>
    </div>
  );
}

export default index;
