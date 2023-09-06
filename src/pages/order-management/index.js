import BreadCrum from "@/components/Layout/common/BreadCrum";
import Heading from "@/components/Layout/common/Heading";
import OrderManage from "@/components/OrderManage";
import OrderUser from "@/components/OrderManage/User/user";
import User from "@/components/Tables/Users";
import React, { useState } from "react";

const orderManagementData = [
  {
    name: "Ethel Howard",
    payment: "P1328SFFS001",
    category: "Product",
    subcategory: "Pedigree",
    date: "Aug 12, 2023",
    time: "3:42pm",
    price: "1000 /-",
    track: "/images/eye.svg",
    status: "Completed",
  },
  {
    name: "Devin Shelton",
    payment: "P1328SFFS001",
    category: "Services",
    subcategory: "Dog Walking",
    date: "Aug 12, 2023",
    time: "3:45pm",
    price: "1000 /-",
    track: "/images/eye.svg",
    status: "Pending",
  },
  {
    name: "Devin Shelton",
    payment: "P1328SFFS001",
    category: "Product",
    subcategory: "Pedigree",
    date: "Aug 12, 2023",
    time: "3:50pm",
    price: "1000 /-",
    track: "/images/eye.svg",
    status: "Cancelled",
  },
  {
    name: "Devin Shelton",
    payment: "P1328SFFS001",
    category: "Services",
    subcategory: "Grooming",
    date: "Aug 12, 2023",
    time: "3:42pm",
    price: "1000 /-",
    track: "/images/eye.svg",
    status: "Ongoing",
  },

  {
    name: "Devin Shelton",
    payment: "P1328SFFS001",
    category: "Product",
    subcategory: "Pedigree",
    date: "Aug 12, 2023",
    time: "3:42pm",
    price: "1000 /-",
    track: "/images/eye.svg",
    status: "Completed",
  },
];
const orderManagementData2 = [
  {
    name: "Devin Shelton",
    payment: "P1328SFFS001",
    category: "Services",
    subcategory: "Grooming",
    date: "Aug 12, 2023",
    time: "3:42pm",
    price: "1000 /-",
    track: "/images/eye.svg",
    status: "Ongoing",
  },

  {
    name: "Devin Shelton",
    payment: "P1328SFFS001",
    category: "Product",
    subcategory: "Pedigree",
    date: "Aug 12, 2023",
    time: "3:42pm",
    price: "1000 /-",
    track: "/images/eye.svg",
    status: "Completed",
  },
];
const orderManagementData3 = [
  {
    name: "Devin Shelton",
    payment: "P1328SFFS001",
    category: "Product",
    subcategory: "Pedigree",
    date: "Aug 12, 2023",
    time: "3:42pm",
    price: "1000 /-",
    track: "/images/eye.svg",
    status: "Completed",
  },
];

function OrderManagement() {
  const [tab, setTab] = useState(1);

  const handelOnClick = (number) => {
    setTab(number);
  };

  return (
    <div>
      <BreadCrum
        data={[
          { name: "Dashboard", href: "/dashboard" },
          { name: "Order Management", href: "#" },
        ]}
      />

      <Heading title={"Order Management"} />
      <div className="flex w-full justify-between items-center ">
        <div className="flex w-full rounded-xl md:w-3/5 my-5 text-sm text-gray-500 font-medium">
          <button
            className={` ${
              tab === 1
                ? " flex-1 p-3 rounded-l-lg  shadow-lg border-b-4 border-b-orangePrimery"
                : " flex-1 p-3 rounded-l-lg  shadow-lg "
            } `}
            onClick={() => handelOnClick(1)}
          >
            Today
          </button>
          <button
            onClick={() => handelOnClick(2)}
            className={` ${
              tab === 2
                ? " flex-1 p-3   shadow-lg border-b-4 border-b-orangePrimery"
                : " flex-1 p-3  shadow-lg "
            } `}
          >
            Upcoming
          </button>
          <button
            onClick={() => handelOnClick(3)}
            className={` ${
              tab === 3
                ? " flex-1 p-3 rounded-r-lg  shadow-lg border-b-4 border-b-orangePrimery"
                : " flex-1 p-3 rounded-r-lg  shadow-lg "
            } `}
          >
            Past
          </button>
        </div>
        <div className="">
          <button className="flex flex-row justify-end">user</button>
          {/* <OrderUser /> */}
        </div>
      </div>

      {tab === 1 ? (
        <div>
          <OrderManage table={orderManagementData} />
        </div>
      ) : tab === 2 ? (
        <div>
          <OrderManage table={orderManagementData2} />
        </div>
      ) : (
        <div>
          <OrderManage table={orderManagementData3} />
        </div>
      )}
    </div>
  );
}

export default OrderManagement;
