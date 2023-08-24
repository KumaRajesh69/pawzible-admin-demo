import BreadCrum from "@/components/Layout/common/BreadCrum";
import Heading from "@/components/Layout/common/Heading";
import React from "react";

const videos = () => {
  return (
    <div>
      <BreadCrum
        data={[
          { name: "Dashboard", href: "/dashboard" },
          { name: "Videos", href: "#" },
        ]}
      />
      <Heading title={"videos"} />
    </div>
  );
};

export default videos;
