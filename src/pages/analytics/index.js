import BreadCrum from "@/components/Layout/common/BreadCrum";
import Heading from "@/components/Layout/common/Heading";
import React from "react";

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
    </div>
  );
}

export default Analytic;
