import NewProduct from "@/components/Inventory/NewProduct";
import Pedigree from "@/components/Inventory/Pedigree";
import BreadCrum from "@/components/Layout/common/BreadCrum";
import Heading from "@/components/Layout/common/Heading";
import React from "react";

function addproduct() {
  return (
    <div>
      <BreadCrum
        data={[
          { name: "Dashboard", href: "/dashboard" },
          { name: " Inventory Management", href: "/addproduct" },
          { name: " Add Product", href: "#" },
        ]}
      />
      <Heading title={"Create new Product"} />
      {/* <Inventory table={inventoryData} /> */}
      <div>
        <NewProduct />
      </div>
    </div>
  );
}

export default addproduct;
