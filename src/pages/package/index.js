import BreadCrum from "@/components/Layout/common/BreadCrum";
import Heading from "@/components/Layout/common/Heading";
import React, { useState } from "react";

function index() {
  const [tab, setTab] = useState(1);

  const handelOnClick = () => {
    setTab();
  };
  return (
    <div>
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
          {/* {tab === 1 ? (
            <AccountManagement table={invoiceData} />
          ) : (
            <Templates />
          )} */}
        </div>
      </div>
    </div>
  );
}

export default index;
