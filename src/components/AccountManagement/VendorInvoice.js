import { XCircleIcon } from "@heroicons/react/outline";
import React from "react";

function VendorInvoice({ isOpen, setIsOpen }) {
  return (
    <div>
      <div className="flex justify-between p-5">
        <p>Vendor invoice</p>
        <button onClick={() => setIsOpen(false)}>
          <XCircleIcon className="h-5 w-5 text-red-500" />
        </button>
      </div>
      <hr />
      <div className="flex justify-center items-center p-5">
        <img src="/images/invoice.svg" />
      </div>
    </div>
  );
}

export default VendorInvoice;
