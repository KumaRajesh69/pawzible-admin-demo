import CommonDialog from "@/components/Dialogs/CommonDialog";
import RegisterUserDialog from "@/components/Dialogs/RegisterUserDialog";
import BreadCrum from "@/components/Layout/common/BreadCrum";
import Heading from "@/components/Layout/common/Heading";
import StackHolder from "@/components/StackeHolder";
import DeliveryProfile from "@/components/StackeHolder/DeliveryProfile";
import UserProfile from "@/components/StackeHolder/DeliveryProfile";
import DeliveryAgents from "@/components/Tables/DeliveryAgents";
import Doctors from "@/components/Tables/Doctors";
import ServiceProvider from "@/components/Tables/ServiceProvider";
import User from "@/components/Tables/Users";
import RegisterCard from "@/components/Tables/Users/RegisterCard";
import React, { useState } from "react";

const userData = [
  {
    id: "1",
    name: "Ethel Howard",
    phone: "8260724967",
    mail: "subham@gmail.com",
    gender: "Male",
    address: "BBSR",
    category: "Pet walk",
    status: "Approved",
    details: "View Details",
  },
  {
    id: "2",
    name: "Devin Shelton",
    phone: "8260724967",
    mail: "subham@gmail.com",
    gender: "Male",
    address: "BBSR",
    category: "Grooming",
    status: "unApproved",
    details: "View Details",
  },
  {
    id: "3",
    name: "Devin Shelton",
    phone: "8260724967",
    mail: "subham@gmail.com",
    gender: "Male",
    address: "BBSR",
    category: "Product",
    status: "unApproved",
    details: "View Details",
  },
  {
    id: "4",
    name: "Devin Shelton",
    phone: "8260724967",
    mail: "subham@gmail.com",
    gender: "Male",
    address: "BBSR",
    category: "Pet walk",
    status: "Approved",
    details: "View Details",
  },
  {
    id: "5",
    name: "Devin Shelton",
    phone: "8260724967",
    mail: "subham@gmail.com",
    gender: "Male",
    address: "BBSR",
    category: "Pet walk",
    status: "Approved",
    details: "View Details",
  },
];

const doctorsData = [
  {
    profile: "/images/Ellipse.svg",
    name: "Ethel Howard",
    phone: "8260724967",
    mail: "subham@gmail.com",
    gender: "Male",
    address: "BBSR",
    specialisation: "Dentistry",
    status: "Approved",
    details: "View Details",
  },
  {
    profile: "/images/Ellipse.svg",
    name: "Ethel Howard",
    phone: "8260724967",
    mail: "subham@gmail.com",
    gender: "Male",
    address: "BBSR",
    specialisation: " Dermatology",
    status: "Approved",
    details: "View Details",
  },
  {
    profile: "/images/Ellipse.svg",
    name: "Ethel Howard",
    phone: "8260724967",
    mail: "subham@gmail.com",
    gender: "Male",
    address: "BBSR",
    specialisation: "Microbiology",
    status: "Approved",
    details: "View Details",
  },
  {
    profile: "/images/Ellipse.svg",
    name: "Ethel Howard",
    phone: "8260724967",
    mail: "subham@gmail.com",
    gender: "Male",
    address: "BBSR",
    specialisation: "Nutrition",
    status: "Approved",
    details: "View Details",
  },
  {
    profile: "/images/Ellipse.svg",
    name: "Ethel Howard",
    phone: "8260724967",
    mail: "subham@gmail.com",
    gender: "Male",
    address: "BBSR",
    specialisation: "Pet walk",
    status: "Approved",
    details: "View Details",
  },
];

const deliveryData = [
  {
    profile: "/images/Ellipse.svg",
    name: "Ethel Howard",
    phone: "8260724967",
    mail: "subham@gmail.com",
    gender: "Male",
    address: "BBSR",
    specialisation: "Dentistry",
    status: "Approved",
    details: "View Details",
  },
  {
    profile: "/images/Ellipse.svg",
    name: "Ethel Howard",
    phone: "8260724967",
    mail: "subham@gmail.com",
    gender: "Male",
    address: "BBSR",
    specialisation: " Dermatology",
    status: "Approved",
    details: "View Details",
  },
  {
    profile: "/images/Ellipse.svg",
    name: "Ethel Howard",
    phone: "8260724967",
    mail: "subham@gmail.com",
    gender: "Male",
    address: "BBSR",
    specialisation: "Microbiology",
    status: "Approved",
    details: "View Details",
  },
  {
    profile: "/images/Ellipse.svg",
    name: "Ethel Howard",
    phone: "8260724967",
    mail: "subham@gmail.com",
    gender: "Male",
    address: "BBSR",
    specialisation: "Nutrition",
    status: "Approved",
    details: "View Details",
  },
  {
    profile: "/images/Ellipse.svg",
    name: "Ethel Howard",
    phone: "8260724967",
    mail: "subham@gmail.com",
    gender: "Male",
    address: "BBSR",
    specialisation: "Pet walk",
    status: "Approved",
    details: "View Details",
  },
];

const servicesData = [
  {
    profile: "/images/Ellipse.svg",
    name: "Ethel Howard",
    phone: "8260724967",
    mail: "subham@gmail.com",
    gender: "Male",
    address: "BBSR",
    services: "Dentistry",
    status: "Approved",
    details: "View Details",
  },
  {
    profile: "/images/Ellipse.svg",
    name: "Ethel Howard",
    phone: "8260724967",
    mail: "subham@gmail.com",
    gender: "Male",
    address: "BBSR",
    services: " Dermatology",
    status: "Approved",
    details: "View Details",
  },
  {
    profile: "/images/Ellipse.svg",
    name: "Ethel Howard",
    phone: "8260724967",
    mail: "subham@gmail.com",
    gender: "Male",
    address: "BBSR",
    services: "Microbiology",
    status: "Approved",
    details: "View Details",
  },
  {
    profile: "/images/Ellipse.svg",
    name: "Ethel Howard",
    phone: "8260724967",
    mail: "subham@gmail.com",
    gender: "Male",
    address: "BBSR",
    services: "Nutrition",
    status: "Approved",
    details: "View Details",
  },
  {
    profile: "/images/Ellipse.svg",
    name: "Ethel Howard",
    phone: "8260724967",
    mail: "subham@gmail.com",
    gender: "Male",
    address: "BBSR",
    services: "Pet walk",
    status: "Approved",
    details: "View Details",
  },
];

function StakeholderManagement() {
  const [tab, setTab] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

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
        <div className="flex justify-between">
          <div className="flex w-full rounded-xl md:w-3/5 my-5 text-sm text-gray-500 font-medium">
            <button
              onClick={() => handelOnClick(1)}
              className={` ${
                tab === 1
                  ? " flex-1 p-3 rounded-l-lg text-black shadow-lg border-b-4 border-b-orangePrimery"
                  : " flex-1 p-3 rounded-l-lg  shadow-lg "
              } `}
            >
              Users
            </button>
            <button
              onClick={() => handelOnClick(2)}
              className={` ${
                tab === 2
                  ? " flex-1 p-3  text-black  shadow-lg border-b-4 border-b-orangePrimery"
                  : " flex-1 p-3 rounded-l-lg  shadow-lg "
              } `}
            >
              Doctors
            </button>
            <button
              onClick={() => handelOnClick(3)}
              className={` ${
                tab === 3
                  ? " flex-1 p-3  text-black  shadow-lg border-b-4 border-b-orangePrimery"
                  : " flex-1 p-3 rounded-l-lg  shadow-lg "
              } `}
            >
              Delivery Agents
            </button>
            <button
              onClick={() => handelOnClick(4)}
              className={` ${
                tab === 4
                  ? " flex-1 p-3 rounded-r-lg text-black  shadow-lg border-b-4 border-b-orangePrimery"
                  : " flex-1 p-3 rounded-r-lg  shadow-lg "
              } `}
            >
              Service Providers
            </button>
          </div>
          {tab === 1 && (
            <button
              className="bg-orangePrimery rounded-md my-5 text-white font-medium p-2 "
              onClick={() => setIsOpen(true)}
            >
              Register New User
            </button>
          )}
        </div>
        {tab === 1 ? (
          <User table={userData} />
        ) : tab === 2 ? (
          <Doctors table={doctorsData} />
        ) : tab === 3 ? (
          <DeliveryAgents table={deliveryData} />
        ) : (
          <ServiceProvider table={servicesData} />
        )}
      </div>

      <CommonDialog isOpen={isOpen} setIsOpen={setIsOpen}>
        <RegisterCard />
      </CommonDialog>
    </>
  );
}

export default StakeholderManagement;
