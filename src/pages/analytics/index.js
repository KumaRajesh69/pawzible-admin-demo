import InvoiceManagement from "@/components/AccountManagement";
import BreadCrum from "@/components/Layout/common/BreadCrum";
import Heading from "@/components/Layout/common/Heading";
import React from "react";

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

function Analytic() {
  return (
    <div>
      <BreadCrum
        data={[
          { name: "Dashboard", href: "/dashboard" },
          { name: " Analytic", href: "#" },
        ]}
      />

      <Heading title={"Analytic"} />
      <InvoiceManagement table={invoiceData} />
    </div>
  );
}

export default Analytic;
