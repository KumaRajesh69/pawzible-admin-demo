import CommonDialog from "@/components/Dialogs/CommonDialog";
import { XCircleIcon } from "@heroicons/react/solid";
import EMR from "./EMR";
import { useState } from "react";

function DoctorCard({ setIsOpen }) {
  const [Open, setOpen] = useState(false);

  return (
    <div className="h-[600px]">
      <div className="flex justify-end p-2">
        <button onClick={() => setIsOpen(false)}>
          <XCircleIcon className="text-[#FF3C3C] h-8" />
        </button>
      </div>
      <div className="px-5 flex md:flex-row flex-col md:space-x-5 md:space-y-0 space-y-5">
        <div className="md:w-[40%]">
          <img src="images/devil.svg" />
        </div>
        <div className="md:w-[60%] space-y-5">
          <div className="flex justify-between items-end">
            <p className="font-bold md:text-3xl text-xl">Devin Shelton</p>
            <p className="font-normal md:text-lg text-base text-[#6A6A6A]">
              Mumbai, India
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <p className="font-normal md:text-lg text-base text-[#6A6A6A]">
                Specialization
              </p>
              <p className="font-normal md:text-lg text-base">Dentist</p>
            </div>
            <div>
              <p className="font-normal md:text-lg text-base text-[#6A6A6A]">
                Current Status
              </p>
              <p className="font-normal md:text-lg text-base">Completed</p>
            </div>
            <div>
              <p className="font-normal md:text-lg text-base text-[#6A6A6A]">
                Payment Mode
              </p>
              <p className="font-normal md:text-lg text-base">
                Cash On Delivery
              </p>
            </div>
            <div>
              <p className="font-normal md:text-lg text-base text-[#6A6A6A]">
                Price
              </p>
              <p className="font-normal md:text-lg text-base">1000/-</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5">
        <p className="font-semibold text-2xl">Pets</p>
        <div className="space-y-5">
          <div className="rounded-3xl shadow-lg p-5 md:px-8 ">
            <div className="flex md:flex-row flex-col md:justify-between space-y-4 md:space-y-0">
              <div className="flex space-x-5">
                <img src="images/dog.svg" />
                <div className="space-y-2">
                  <p className="font-bold md:text-2xl text-lg">Jacky</p>
                  <p className="font-normal md:text-base text-xs text-[#6A6A6A]">
                    Scottish Fold | 6Month
                  </p>
                </div>
              </div>
              <div className="flex md:items-end justify-end">
                <button
                  onClick={() => setOpen(true)}
                  className="text-[#F99B3E] md:text-sm text-xs font-medium"
                >
                  View EMR
                </button>
              </div>
            </div>
          </div>{" "}
          <div className="rounded-3xl shadow-lg p-5 md:px-8">
            <div className="flex md:flex-row flex-col md:justify-between space-y-4 md:space-y-0">
              <div className="flex space-x-5">
                <img src="images/dog.svg" />
                <div className="space-y-2">
                  <p className="font-bold md:text-2xl text-lg">Jacky</p>
                  <p className="font-normal md:text-base text-xs text-[#6A6A6A]">
                    Scottish Fold | 6Month
                  </p>
                </div>
              </div>
              <div className="flex items-end justify-end">
                <button
                  onClick={() => setIsOpen(true)}
                  className="text-[#F99B3E] md:text-sm text-xs font-medium"
                >
                  View EMR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CommonDialog isOpen={Open} setIsOpen={setOpen}>
        <EMR isOpen={Open} setIsOpen={setOpen} />
      </CommonDialog>
    </div>
  );
}

export default DoctorCard;
