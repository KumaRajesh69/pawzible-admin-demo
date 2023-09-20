import CommonDialog from "@/components/Dialogs/CommonDialog";
import BreadCrum from "@/components/Layout/common/BreadCrum";
import Heading from "@/components/Layout/common/Heading";
import OrderManage from "@/components/OrderManage";
import OrderId from "@/components/OrderManage/OrderId";
import OrderTrack from "@/components/OrderManage/OrderId/OrderTrack";
// import OrderTrack from "@/components/OrderManage/OrderTrack";
import OrderUser from "@/components/OrderManage/User/user";
import User from "@/components/Tables/Users";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import React, { Fragment, useState } from "react";

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
const orderManagementData4 = [
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

const userTabledata = [
  {
    name: "user",
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
  const [tab2, setTab2] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

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
      <div className="md:flex w-full justify-between items-center">
        <div className="flex overflow-x-scroll md:overflow-x-hidden w-full rounded-xl md:w-3/5 my-5 text-sm text-gray-500 font-medium">
          <button
            className={` ${
              tab === 1
                ? " flex-1 p-3 rounded-l-lg  shadow-lg border-b-4 border-b-orangePrimery"
                : " flex-1 p-3 rounded-l-lg  shadow-lg "
            } `}
            onClick={() => handelOnClick(1)}
          >
            User
          </button>
          <button
            onClick={() => handelOnClick(2)}
            className={` ${
              tab === 2
                ? " flex-1 p-3   shadow-lg border-b-4 border-b-orangePrimery"
                : " flex-1 p-3  shadow-lg "
            } `}
          >
            Delivery Agent
          </button>
          <button
            onClick={() => handelOnClick(3)}
            className={` ${
              tab === 3
                ? " flex-1 p-3 rounded-r-lg  shadow-lg border-b-4 border-b-orangePrimery"
                : " flex-1 p-3 rounded-r-lg  shadow-lg "
            } `}
          >
            Veterinary Doctors
          </button>{" "}
          <button
            onClick={() => handelOnClick(4)}
            className={` ${
              tab === 4
                ? " flex-1 p-3 rounded-r-lg  shadow-lg border-b-4 border-b-orangePrimery"
                : " flex-1 p-3 rounded-r-lg  shadow-lg "
            } `}
          >
            Service Providers
          </button>
        </div>
        <div className="">
          <Menu as="div" className=" relative">
            <div>
              <Menu.Button className="max-w-xs bg-white flex items-center outline-none text-sm  focus:outline-none ">
                <span className="sr-only">Open user menu</span>
                <div className="flex space-x-2 justify-end text-orange-500 px-4 py-2 rounded  border border-gray-200 ">
                  <div>User</div>
                  <ChevronDownIcon className="h-4 w-4 text-orangePrimery self-center " />
                </div>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-xl py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none p-4 space-y-5">
                <Menu.Item>
                  {({ active }) => (
                    <button className="block" onClick={() => setTab2(1)}>
                      {" "}
                      Today
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button className="block" onClick={() => setTab2(2)}>
                      Upcoming
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button className="block" onClick={() => setTab2(3)}>
                      Past
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
          {/* {tab === 2 && (
          <button
            onClick={() => setIsOpen(true)}
            className="flex space-x-2 justify-end text-orange-500 px-4 py-2 rounded  border border-gray-200"
          >
            <div>Doctor Profile</div>
            <ChevronDownIcon className="h-4 w-4 text-orangePrimery self-center " />
          </button>
          )}
          {tab === 3 && (
            <button
              onClick={() => setIsOpen(true)}
              className="flex space-x-2 justify-end text-orange-500 px-4 py-2 rounded  border border-gray-200"
            >
              <div>track order</div>
              <ChevronDownIcon className="h-4 w-4 text-orangePrimery self-center " />
            </button>
          )} */}
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
      ) : tab === 3 ? (
        <div>
          <OrderManage table={orderManagementData3} />
        </div>
      ) : (
        <div>
          <OrderManage table={orderManagementData4} />
        </div>
      )}

      <CommonDialog isOpen={isOpen} setIsOpen={setIsOpen}>
        {/* {tab === 1 && <OrderUser />} */}
        {tab === 2 && <OrderId />}
        {tab === 3 && <OrderTrack />}
      </CommonDialog>
      {/* <OrderTrack /> */}
    </div>
  );
}

export default OrderManagement;
