import OrderManagementTable2 from "@/components/OrderManagementTable2";
import BreadCrum from "@/components/Layout/common/BreadCrum";
import Heading from "@/components/Layout/common/Heading";
import OrderManage from "@/components/OrderManage";
import React from "react";
import User from "@/components/Tables/Users";
import Doctors from "@/components/Tables/Doctors";
import DeliveryAgents from "@/components/Tables/DeliveryAgents";
import ServiceProvider from "@/components/Tables/ServiceProvider";
import InventoryManagement from "./inventory-management";
import InvoiceManagement from "@/components/InvoiceManagement";
import Cms from "@/components/Cms";
import Inventory from "@/components/Inventory";
import ViewDetailsCard from "@/components/SupportCard/ViewDetailsCard";

const orderManagementData2 = [
  {
    name: "Ethel Howard",
    payment: "P1328SFFS001",
    specialization: "Dentist",
    disease: "Dental",
    hospital: "Mumbai, India",
    date: "Aug 12, 2023",
    time: "3:42pm",
    price: "1000 /-",
    status: "Approved",
    details: "View Details",
  },
  {
    name: "Devin Shelton",
    payment: "P1328SFFS001",
    specialization: "Dentist",
    disease: "Dental",
    hospital: "Mumbai, India",
    date: "Aug 12, 2023",
    time: "3:42pm",
    price: "1000 /-",
    status: "Approved",
    details: "View Details",
  },
  {
    name: "Ethel Howard",
    payment: "P1328SFFS001",
    specialization: "Dentist",
    disease: "Dental",
    hospital: "Mumbai, India",
    date: "Aug 12, 2023",
    time: "3:42pm",
    price: "1000 /-",
    status: "Approved",
    details: "View Details",
  },
  {
    name: "Devin Shelton",
    payment: "P1328SFFS001",
    specialization: "Dentist",
    disease: "Dental",
    hospital: "Mumbai, India",
    date: "Aug 12, 2023",
    time: "3:42pm",
    price: "1000 /-",
    status: "Approved",
    details: "View Details",
  },
  {
    name: "Devin Shelton",
    payment: "P1328SFFS001",
    specialization: "Dentist",
    disease: "Dental",
    hospital: "Mumbai, India",
    date: "Aug 12, 2023",
    time: "3:42pm",
    price: "1000 /-",
    status: "Approved",
    details: "View Details",
  },
];

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
    status: "Approved",
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
    status: "Approved",
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

const inventoryData = [
  {
    id: "2385",
    products: "Pedigree",
    category: "Food",
    subcategory: "Dry Food(1kg)",
    price: "₹430",
    quantity: "43 Packets",
    date: "11/12/22",
    availability: "In- stock",
    details: "View Details",
  },
  {
    id: "2385",
    products: "Pedigree",
    category: "Food",
    subcategory: "Dry Food(1kg)",
    price: "₹430",
    quantity: "43 Packets",
    date: "11/12/22",
    availability: "In- stock",
    details: "View Details",
  },
  {
    id: "2385",
    products: "Pedigree",
    category: "Food",
    subcategory: "Dry Food(1kg)",
    price: "₹430",
    quantity: "43 Packets",
    date: "11/12/22",
    availability: "In- stock",
    details: "View Details",
  },
  {
    id: "2385",
    products: "Pedigree",
    category: "Food",
    subcategory: "Dry Food(1kg)",
    price: "₹430",
    quantity: "43 Packets",
    date: "11/12/22",
    availability: "In- stock",
    details: "View Details",
  },
  {
    id: "2385",
    products: "Pedigree",
    category: "Food",
    subcategory: "Dry Food(1kg)",
    price: "₹430",
    quantity: "43 Packets",
    date: "11/12/22",
    availability: "In- stock",
    details: "View Details",
  },
  {
    id: "2385",
    products: "Pedigree",
    category: "Food",
    subcategory: "Dry Food(1kg)",
    price: "₹430",
    quantity: "43 Packets",
    date: "11/12/22",
    availability: "In- stock",
    details: "View Details",
  },
  {
    id: "2385",
    products: "Pedigree",
    category: "Food",
    subcategory: "Dry Food(1kg)",
    price: "₹430",
    quantity: "43 Packets",
    date: "11/12/22",
    availability: "In- stock",
    details: "View Details",
  },
  {
    id: "2385",
    products: "Pedigree",
    category: "Food",
    subcategory: "Dry Food(1kg)",
    price: "₹430",
    quantity: "43 Packets",
    date: "11/12/22",
    availability: "In- stock",
    details: "View Details",
  },
  {
    id: "2385",
    products: "Pedigree",
    category: "Food",
    subcategory: "Dry Food(1kg)",
    price: "₹430",
    quantity: "43 Packets",
    date: "11/12/22",
    availability: "In- stock",
    details: "View Details",
  },
];

function test() {
  return (
    <div>
      <BreadCrum
        data={[
          { name: "Dashboard", href: "/dashboard" },
          { name: "test", href: "#" },
        ]}
      />
      <Heading title={"Test"} />
      {/* --------------------------------------------ORDER MANAGEMENT TABLE--------------------------------------- */}
      <div className="text-3xl my-2 text-gray-500 font-bold">
        Order Management Table
      </div>
      <OrderManage table={orderManagementData} />
      {/* --------------------------------------------ORDER MANAGEMENT TABLE--------------------------------------- */}
      <div className="text-3xl my-2 text-gray-500 font-bold">
        Order Management Table
      </div>
      <OrderManagementTable2 table={orderManagementData2} />
      {/* --------------------------------------------Stakeholder Management TABLE--------------------------------------- */}
      <div className="text-3xl my-2 text-gray-500 font-bold">
        Stakeholder Management Table (USER)
      </div>
      <User table={userData} />
      {/* --------------------------------------------Stakeholder Management TABLE--------------------------------------- */}
      <div className="text-3xl my-2 text-gray-500 font-bold">
        Stakeholder Management Table (Doctors)
      </div>
      <Doctors table={doctorsData} />
      {/* --------------------------------------------Stakeholder Management TABLE--------------------------------------- */}
      <div className="text-3xl my-2 text-gray-500 font-bold">
        Stakeholder Management Table (Delivery Agents)
      </div>
      <DeliveryAgents table={deliveryData} />
      {/* --------------------------------------------Stakeholder Management TABLE--------------------------------------- */}
      <div className="text-3xl my-2 text-gray-500 font-bold">
        Stakeholder Management Table (Service Providers)
      </div>
      <ServiceProvider table={servicesData} />
      {/* --------------------------------------------Invoice Management TABLE--------------------------------------- */}
      <div className="text-3xl my-2 text-gray-500 font-bold">
        Invoice Management Table
      </div>
      <InvoiceManagement table={invoiceData} />
      {/* --------------------------------------------CMS Management TABLE--------------------------------------- */}
      <div className="text-3xl my-2 text-gray-500 font-bold">
        CMS Management Table
      </div>
      <Cms table={cmsData} />
      {/* --------------------------------------------Inventory Management TABLE--------------------------------------- */}
      <div className="text-3xl my-2 text-gray-500 font-bold">
        Inventory Management Table
      </div>
      <Inventory table={inventoryData} />
      <div>
        <ViewDetailsCard />
      </div>
    </div>
  );
}

export default test;
