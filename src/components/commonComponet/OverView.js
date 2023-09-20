import React from "react";
import HolderManager from "./HolderManager";

function OverView() {
  return (
    <div>
      <HolderManager />
      <div className=" rounded-lg shadow-2xl p-4">
        <p>
          Surveillance based mass dog vaccination is the best tool that we can
          adopt to control rabies in India. For achieving good surveillance of
          rabies we need to develop good tools which are user friendly. In
          Himachal Pradesh we made an app in collaboration with Mission rabies
          and is working well on pilot basis in district Shimla of H.P.
        </p>
        <div>
          <p className="my-4 font-medium text-lg">Specialisation :</p>
          <div className="text-base text-gray-500 font-normal">
            <li>Dentist</li>
            <li>Pregnancy care</li>
            <li>Surgical procedures</li>
            <li>Specialty care</li>
            <li>Conclusion</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverView;
