import CommonDialog from "@/components/Dialogs/CommonDialog";
import BreadCrum from "@/components/Layout/common/BreadCrum";
import Heading from "@/components/Layout/common/Heading";
import OrderManage from "@/components/OrderManage";
import OrderId from "@/components/OrderManage/OrderId";
import OrderTrack from "@/components/OrderManage/OrderId/OrderTrack";
import DeliveryAgentTable from "@/components/OrderManage/OrderManageTable/DeliveryAgentTable";
import DoctorTable from "@/components/OrderManage/OrderManageTable/DoctorTable";
import ServiceProviderTable from "@/components/OrderManage/OrderManageTable/ServiceProviderTable";
// import OrderTrack from "@/components/OrderManage/OrderTrack";
import OrderUser from "@/components/OrderManage/User/user";
import User from "@/components/Tables/Users";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import React, { Fragment, useState } from "react";

const orderManagementData = [
  {
    name: "Ethel Howard",
    id: "P1328SFFS001",
    product: "Scubidu",
    work: "Grooming",
    address: "Mumbai, India",
    patient: "Nensel Howard",
    service: "Pedigree",
    date: "Aug 12, 2023",
    time: "3:42pm",
    price: "1000 /-",
    track: "/images/eye.svg",
    role: "Delivery Agent",
    createdAt: "today",
    status: "Completed",
  },
  {
    name: "Ethel Howard",
    id: "P1328SFFS001",
    product: "Scubidu",
    work: "Grooming",
    address: "Mumbai, India",
    patient: "Nensel Howard",
    service: "Pedigree",
    date: "Aug 12, 2023",
    time: "3:42pm",
    price: "1000 /-",
    track: "/images/eye.svg",
    role: "Veterinary Doctors",
    createdAt: "today",
    status: "Completed",
  },
  {
    name: "Husen Pawar",
    id: "P1328SFFS001",
    product: "Scubidu",
    work: "Grooming",
    address: "Mumbai, India",
    patient: "Nensel Howard",
    service: "Pedigree",
    date: "Aug 12, 2023",
    time: "3:42pm",
    price: "1000 /-",
    track: "/images/eye.svg",
    role: "Veterinary Doctors",
    createdAt: "today",
    status: "Completed",
  },
  {
    name: "Devin Shelton",
    id: "P1328SFFS001",
    product: "Scubidu",
    work: "Grooming",
    address: "Mumbai, India",
    patient: "Nensel Howard",
    service: "Pedigree",
    date: "Aug 12, 2023",
    time: "3:45pm",
    price: "1000 /-",
    track: "/images/eye.svg",
    role: "delivery",
    createdAt: "today",
    status: "Pending",
  },
  {
    name: "Devin Shelton",
    id: "P1328SFFS001",
    product: "Scubidu",
    work: "Grooming",
    address: "Mumbai, India",
    patient: "Nensel Howard",
    service: "Pedigree",
    date: "Aug 12, 2023",
    time: "3:50pm",
    price: "1000 /-",
    track: "/images/eye.svg",
    role: "user",
    createdAt: "upcoming",
    status: "Cancelled",
  },
  {
    name: "Devin Shelton",
    id: "P1328SFFS001",
    product: "Scubidu",
    work: "Grooming",
    address: "Mumbai, India",
    patient: "Nensel Howard",
    service: "Pedigree",
    date: "Aug 12, 2023",
    time: "3:42pm",
    price: "1000 /-",
    track: "/images/eye.svg",
    role: "doctor",
    createdAt: "upcoming",
    status: "Ongoing",
  },

  {
    name: "Devin Shelton",
    id: "P1328SFFS001",
    product: "Scubidu",
    work: "Grooming",
    address: "Mumbai, India",
    patient: "Nensel Howard",
    service: "Pedigree",
    date: "Aug 12, 2023",
    time: "3:42pm",
    price: "1000 /-",
    track: "/images/eye.svg",
    role: "user",
    createdAt: "upcoming",
    status: "Completed",
  },
  {
    name: "Ethel Howard",
    id: "P1328SFFS001",
    product: "Scubidu",
    work: "Grooming",
    address: "Mumbai, India",
    patient: "Nensel Howard",
    service: "Pedigree",
    date: "Aug 12, 2023",
    time: "3:42pm",
    price: "1000 /-",
    track: "/images/eye.svg",
    role: "user",
    createdAt: "today",
    status: "Completed",
  },
  {
    name: "Ethel Howard",
    id: "P1328SFFS001",
    product: "Scubidu",
    work: "Grooming",
    address: "Mumbai, India",
    patient: "Nensel Howard",
    service: "Pedigree",
    date: "Aug 12, 2023",
    time: "3:42pm",
    price: "1000 /-",
    track: "/images/eye.svg",
    role: "Service Providers",
    createdAt: "today",
    status: "Completed",
  },
  {
    name: "Devin Shelton",
    id: "P1328SFFS001",
    product: "Scubidu",
    work: "Grooming",
    address: "Mumbai, India",
    patient: "Nensel Howard",
    service: "Pedigree",
    date: "Aug 12, 2023",
    time: "3:45pm",
    price: "1000 /-",
    track: "/images/eye.svg",
    role: "user",
    createdAt: "past",
    status: "Pending",
  },
  {
    name: "Devin Shelton",
    id: "P1328SFFS001",
    product: "Scubidu",
    work: "Grooming",
    address: "Mumbai, India",
    patient: "Nensel Howard",
    service: "Pedigree",
    date: "Aug 12, 2023",
    time: "3:50pm",
    price: "1000 /-",
    track: "/images/eye.svg",
    role: "service",
    createdAt: "today",
    status: "Cancelled",
  },
  {
    name: "Devin Shelton",
    id: "P1328SFFS001",
    product: "Scubidu",
    work: "Grooming",
    address: "Mumbai, India",
    patient: "Nensel Howard",
    service: "Pedigree",
    date: "Aug 12, 2023",
    time: "3:42pm",
    price: "1000 /-",
    track: "/images/eye.svg",
    role: "user",
    createdAt: "past",
    status: "Ongoing",
  },

  {
    name: "Devin Shelton",
    id: "P1328SFFS001",
    product: "Scubidu",
    work: "Grooming",
    address: "Mumbai, India",
    patient: "Nensel Howard",
    service: "Pedigree",
    date: "Aug 12, 2023",
    time: "3:42pm",
    price: "1000 /-",
    track: "/images/eye.svg",
    role: "user",
    createdAt: "past",
    status: "Completed",
  },
];

function OrderManagement() {
  const [tab, setTab] = useState(1);
  const [tab2, setTab2] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const [type, setType] = useState(1);

  const handelOnClick = (number) => {
    setTab(number);
  };
  const menuOnClick = (number) => {
    setType(number);
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
            Today
          </button>
          <button
            onClick={() => handelOnClick(2)}
            className={` ${
              tab === 2
                ? " flex-1 p-3   shadow-lg border-b-4 border-b-orangePrimery"
                : " flex-1 p-3  shadow-lg"
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
          <Menu as="div" className=" relative">
            <div>
              <Menu.Button className="max-w-xs bg-white flex items-center outline-none text-sm  focus:outline-none ">
                <span className="sr-only">Open user menu</span>
                <div className="flex space-x-2 justify-end text-orange-500 px-4 py-2 rounded  border border-gray-200 ">
                  <div>
                    {type === 1
                      ? "User"
                      : type === 2
                      ? "Delivery agent"
                      : type === 3
                      ? "Veterinary Doctors"
                      : "Service Provider"}
                  </div>
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
                    <button
                      className={` ${
                        type === 1
                          ? "  text-orangePrimery block"
                          : " text-black block"
                      } `}
                      onClick={() => menuOnClick(1)}
                    >
                      User
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={` ${
                        type === 2 ? " text-orangePrimery" : " text-black  "
                      } `}
                      onClick={() => menuOnClick(2)}
                    >
                      Delivery Agent
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={` ${
                        type === 3 ? "  text-orangePrimery" : " text-black "
                      } `}
                      onClick={() => menuOnClick(3)}
                    >
                      Veterinary Doctors
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={` ${
                        type === 4 ? " text-orangePrimery" : " text-black  "
                      } `}
                      onClick={() => menuOnClick(4)}
                    >
                      Service Providers
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

      {tab === 1 && type === 1 ? (
        <div>
          <OrderManage
            table={orderManagementData.filter(
              (item) => item?.createdAt === "today" && item?.role === "user"
            )}
          />
        </div>
      ) : tab === 1 && type === 2 ? (
        <div>
          <DeliveryAgentTable
            table={orderManagementData.filter(
              (item) =>
                item?.createdAt === "today" && item?.role === "Delivery Agent"
            )}
          />
        </div>
      ) : tab === 1 && type === 3 ? (
        <div>
          <DoctorTable
            table={orderManagementData.filter(
              (item) =>
                item?.createdAt === "today" &&
                item?.role === "Veterinary Doctors"
            )}
          />
        </div>
      ) : tab === 1 && type === 4 ? (
        <div>
          <ServiceProviderTable
            table={orderManagementData.filter(
              (item) =>
                item?.createdAt === "today" &&
                item?.role === "Service Providers"
            )}
          />
        </div>
      ) : tab === 2 && type === 1 ? (
        <div>
          <OrderManage
            table={orderManagementData.filter(
              (item) => item?.createdAt === "Upcoming" && item?.role === "user"
            )}
          />
        </div>
      ) : tab === 2 && type === 2 ? (
        <div>
          <DeliveryAgentTable
            table={orderManagementData.filter(
              (item) =>
                item?.createdAt === "Upcoming" &&
                item?.role === "Delivery Agent"
            )}
          />
        </div>
      ) : tab === 2 && type === 3 ? (
        <div>
          <DoctorTable
            table={orderManagementData.filter(
              (item) =>
                item?.createdAt === "Upcoming" &&
                item?.role === "Veterinary Doctors"
            )}
          />
        </div>
      ) : tab === 2 && type === 4 ? (
        <div>
          <ServiceProviderTable
            table={orderManagementData.filter(
              (item) =>
                item?.createdAt === "Upcoming" &&
                item?.role === "Service Providers"
            )}
          />
        </div>
      ) : tab === 3 && type === 1 ? (
        <div>
          <OrderManage
            table={orderManagementData.filter(
              (item) => item?.createdAt === "today" && item?.role === "user"
            )}
          />
        </div>
      ) : tab === 3 && type === 2 ? (
        <div>
          <DeliveryAgentTable
            table={orderManagementData.filter(
              (item) =>
                item?.createdAt === "today" && item?.role === "Delivery Agent"
            )}
          />
        </div>
      ) : tab === 3 && type === 3 ? (
        <div>
          <DoctorTable
            table={orderManagementData.filter(
              (item) =>
                item?.createdAt === "today" &&
                item?.role === "Veterinary Doctors"
            )}
          />
        </div>
      ) : (
        <div>
          <ServiceProviderTable
            table={orderManagementData.filter(
              (item) =>
                item?.createdAt === "today" &&
                item?.role === "Service Providers"
            )}
          />
        </div>
      )}

      {/* orderManagementData.filter((item,index) => item?.createdAt=== "today") */}
      {/* <CommonDialog isOpen={isOpen} setIsOpen={setIsOpen}> */}
      {/* {tab === 1 && <OrderUser />} */}
      {/* {tab === 2 && <OrderId />}
        {tab === 3 && <OrderTrack />} */}
      {/* </CommonDialog> */}
      {/* <OrderTrack /> */}
    </div>
  );
}

export default OrderManagement;
