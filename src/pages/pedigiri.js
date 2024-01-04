import Pedigree from "@/components/Inventory/Pedigree";
import BreadCrum from "@/components/Layout/common/BreadCrum";
import Heading from "@/components/Layout/common/Heading";
import React from "react";

function pedigiri() {
  return (
    <div>
      <BreadCrum
        data={[
          { name: "Dashboard", href: "/dashboard" },
          { name: " Inventory Management", href: "/Pedigree" },
          { name: "Pedigree", href: "#" },
        ]}
      />
      <Heading title={"Product Details"} />
      <div>
        <Pedigree />
      </div>
    </div>
  );
}

export default pedigiri;
