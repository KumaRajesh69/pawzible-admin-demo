import Inventory from "@/components/Inventory";
import NewProduct from "@/components/InvoiceManagement/NewProduct";
import Pedigree from "@/components/InvoiceManagement/Pedigree";
import BreadCrum from "@/components/Layout/common/BreadCrum";
import Heading from "@/components/Layout/common/Heading";
import React from "react";

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

function InventoryManagement() {
  return (
    <div>
      <BreadCrum
        data={[
          { name: "Dashboard", href: "/dashboard" },
          { name: " Inventory Management", href: "#" },
        ]}
      />

      <Heading title={"Inventory Management"} />
      <Inventory table={inventoryData} />
      <NewProduct />
      <Pedigree />
    </div>
  );
}

export default InventoryManagement;
