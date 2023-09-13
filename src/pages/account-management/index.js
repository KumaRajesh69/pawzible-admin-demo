import AccountManagement from "@/components/AccountManagement";
import Templates from "@/components/AccountManagement/Templates";
import BreadCrum from "@/components/Layout/common/BreadCrum";
import Heading from "@/components/Layout/common/Heading";
import React, { useState } from "react";

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
const invoiceData = [
  {
    id: "1",
    name: "Ethel Howard",
    payment: "P1328SFFS001",
    phone: "8260724967",
    product: "Pedigree",
    price: "1000/-",
    category: "Product",
    invoice: "/images/file.svg",
    sendinvoice: "/images/msg.svg",
  },
  {
    id: "2",
    name: "Ethel Howard",
    payment: "P1328SFFS001",
    phone: "8260724967",
    product: "Pedigree",
    price: "1000/-",
    category: "Product",
    invoice: "/images/file.svg",
    sendinvoice: "/images/msg.svg",
  },
  {
    id: "3",
    name: "Ethel Howard",
    payment: "P1328SFFS001",
    phone: "8260724967",
    product: "Pedigree",
    price: "1000/-",
    category: "Product",
    invoice: "/images/file.svg",
    sendinvoice: "/images/msg.svg",
  },
  {
    id: "4",
    name: "Ethel Howard",
    payment: "P1328SFFS001",
    phone: "8260724967",
    product: "Pedigree",
    price: "1000/-",
    category: "Product",
    invoice: "/images/file.svg",
    sendinvoice: "/images/msg.svg",
  },
  {
    id: "5",
    name: "Ethel Howard",
    payment: "P1328SFFS001",
    phone: "8260724967",
    product: "Pedigree",
    price: "1000/-",
    category: "Product",
    invoice: "/images/file.svg",
    sendinvoice: "/images/msg.svg",
  },
];
function AccountManage() {
  const [tab, setTab] = useState(1);

  const handelOnClick = () => {
    setTab();
  };

  return (
    <div>
      <BreadCrum
        data={[
          { name: "Dashboard", href: "/dashboard" },
          { name: "Account Management", href: "#" },
        ]}
      />
      {tab === 1 ? (
        <Heading title={"Account Management"} />
      ) : (
        <Heading title={"Your Templates"} />
      )}

      <div className="">
        <div className="flex flex-row w-full justify-end">
          {tab === 1 && (
            <button
              className="bg-orangePrimery rounded-md text-white font-medium p-2 "
              onClick={() => handelOnClick(1)}
            >
              Your Templates
            </button>
          )}
        </div>
        {tab === 1 ? <AccountManagement table={invoiceData} /> : <Templates />}
      </div>
    </div>
  );
}

export default AccountManage;
