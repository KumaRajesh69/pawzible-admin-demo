import CommonDialog from "@/components/Dialogs/CommonDialog";
import { XCircleIcon } from "@heroicons/react/solid";
import React from "react";

function EMR({ setOpen }) {
  return (
    <div className="">
      <div className="flex justify-end p-2">
        <button>
          {" "}
          {/* onClick={() => setOpen(false)} */}
          <XCircleIcon className="text-[#FF3C3C] h-8" />
        </button>
      </div>
      {/* <div className="px-5 flex md:flex-row flex-col md:space-x-5 md:space-y-0 space-y-5">
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
                  onClick={() => setIsOpen(true)}
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
      </div> */}
      <div className="md:px-10 px-5 space-y-5">
        <div className="flex md:flex-row flex-col md:space-x-5 space-y-5 md:space-y-0 ">
          <p className="font-normal text-sm text-[#F99B3E]">
            Age on appointment date: 12months
          </p>
          <p className="font-normal text-sm text-[#F99B3E]">
            Weight on appointment date: 5Kg
          </p>
        </div>
        <div>
          <p className="font-semibold text-base">Vet Details</p>
          <div className="flex space-x-10 items-center rounded-2xl shadow-xl p-4 w-max">
            <div>
              <p className="font-medium text-xl">Alekseenko Vasily </p>
              <p className="font-normal text-base">Veterinary Dentist</p>
              <p className="font-normal text-xs text-[#9BA0A6]">
                10 years of experience
              </p>
            </div>
            <img src="images/devil.svg" className="h-20" />
          </div>
        </div>
        <div className="space-y-2">
          <p className="font-medium text-base">Reason For Visit</p>
          <p className="font-normal text-base text-[#9BA0A6]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <p className="font-normal text-base text-[#9BA0A6]">
            When an unknown printer took a galley of type and scrambled it to
            make a type specimen book.
          </p>
        </div>{" "}
        <div className="space-y-2">
          <p className="font-medium text-base">Doctor Diagnosis</p>
          <p className="font-normal text-base text-[#9BA0A6]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <p className="font-normal text-base text-[#9BA0A6]">
            When an unknown printer took a galley of type and scrambled it to
            make a type specimen book.
          </p>
        </div>
        <div className="space-y-2">
          <p className=" font-medium text-base ">Prescription</p>
          <button className="flex space-x-2 items-center">
            <img src="images/pdfimage.svg" />
            <p className="font-semibold text-[9px] text-[#12B76A]">
              Prescription.pdf
            </p>
          </button>
        </div>
        <div className="space-y-2">
          <div className="flex space-x-2">
            <p className="font-medium text-base">Follow up Date:</p>
            <p className="font-normal text-sm text-[#F99B3E]">14th sep 2023</p>
          </div>
          <p className="font-normal text-sm text-[#727272]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
        <div>
          <p className="font-medium text-base ">Image Uploaded</p>
          <div className="grid md:grid-cols-5 gap-2 py-3">
            {[0, 1].map((item) => (
              <img src="images/petdog.svg" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EMR;
