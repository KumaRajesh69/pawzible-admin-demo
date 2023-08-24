import React from "react";
import SupportCard from "../SupportCard";

function SupportGridCard({ supportTickets }) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {supportTickets.map((item) => (
          <SupportCard item={item} />
        ))}
      </div>
    </div>
  );
}

export default SupportGridCard;
