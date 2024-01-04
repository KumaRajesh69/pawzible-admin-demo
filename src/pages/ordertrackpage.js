import BreadCrum from "@/components/Layout/common/BreadCrum";
import Heading from "@/components/Layout/common/Heading";
import OrderTrack from "@/components/OrderManage/OrderId/OrderTrack";
import React from "react";

function ordertrackpage() {
  return (
    <div>
      <BreadCrum
        data={[
          { name: "Dashboard", href: "/dashboard" },
          { name: " Order Management", href: "/ordertrackpage" },
          { name: "Order details", href: "#" },
        ]}
      />
      <Heading title={"Order Management"} />
      <OrderTrack />
    </div>
  );
}

export default ordertrackpage;
