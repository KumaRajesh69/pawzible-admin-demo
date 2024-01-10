import React from "react";

const data = [
  {
    id: "#2530",
    name: "Ethel Howard",
    gender: "Female",
    date: "23 may 2023",
    time: "7.00pm - 7.15pm",
    view: "/images/pdf2.svg",
    type1: "/images/vc.svg",
    type2: "Video call",
    details: "Still in Progress",
  },
  {
    id: "#2530",
    name: "Ethel Howard",
    gender: "Female",
    date: "23 may 2023",
    time: "7.00pm - 7.15pm",
    view: "/images/pdf2.svg",
    type1: "/images/vc.svg",
    type2: "Video call",
    details: "Still in Progress",
  },
  {
    id: "#2530",
    name: "Ethel Howard",
    gender: "Female",
    date: "23 may 2023",
    time: "7.00pm - 7.15pm",
    view: "/images/pdf2.svg",
    type1: "/images/vc.svg",
    type2: "Video call",
    details: "Still in Progress",
  },
  {
    id: "#2530",
    name: "Ethel Howard",
    gender: "Female",
    date: "23 may 2023",
    time: "7.00pm - 7.15pm",
    view: "/images/pdf2.svg",
    type1: "/images/vc.svg",
    type2: "Video call",
    details: "Still in Progress",
  },
  {
    id: "#2530",
    name: "Ethel Howard",
    gender: "Female",
    date: "23 may 2023",
    time: "7.00pm - 7.15pm",
    view: "/images/pdf2.svg",
    type1: "/images/vc.svg",
    type2: "Video call",
    details: "Still in Progress",
  },
];
function Appointment() {
  return (
    <div>
      <div className="h-full mb-20 mt-10 rounded-xl overflow-x-scroll md:overflow-x-hidden shadow-lg ">
        <table className="w-full">
          <thead className="bg-blue-200 h-10 rounded-t-xl ">
            <tr className="text-left ">
              <th>#</th>
              <th>Patient Name</th>
              <th> Gender</th>
              <th className="text-center">Time</th>
              <th className="text-center">Details</th>
            </tr>
          </thead>
          {data.map((item) => (
            <tbody className="w-full">
              <tr>
                <td>{item.id}</td>
                <td td className="td__Name">
                  {item.name}
                </td>
                <td className="">{item.gender}</td>
                <td className="table__body__text">
                  <div className="text-center">
                    <p>{item.date}</p>
                    <p>{item.time}</p>
                  </div>
                </td>
                {/* <td className="table__body__text">
                  <div className="flex justify-center items-center">
                    <button>
                      <img src={item.view} />
                    </button>
                  </div>
                </td>
                <td className="table__body__text">
                  <button>
                    <div className="flex items-center">
                      <img src={item.type1} />
                      <p>{item.type2}</p>
                    </div>
                  </button>
                </td> */}
                <td className="text-center">
                  <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-normal hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    {item.details}
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Appointment;
