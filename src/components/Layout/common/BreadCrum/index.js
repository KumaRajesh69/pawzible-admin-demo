import { ChevronRightIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React from "react";

const BreadCrum = ({ data }) => {
  return (
    <div>
      <div className="flex space-x-3 items-center">
        {data.map((item, index) => (
          <div key={index} className="flex space-x-2 items-center">
            <Link href={item.href} legacyBehavior>
              <a className="text-gray-500">{item.name} </a>
            </Link>
            {index !== data.length - 1 ? (
              <ChevronRightIcon className="w-4 text-gray-500" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BreadCrum;
