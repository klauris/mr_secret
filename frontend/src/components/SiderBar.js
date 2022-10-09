import React from "react";
import { AiFillPlusCircle, AiFillHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function SiderBar() {
  return (
    <>
      <div className="flex flex-col items-center  h-[calc(100vh-70px)] w-[110px] bg-maximum-yellow text-white shadow-xl">
        <ul>
          <li className="py-4">
            <NavLink to="/">
              <div
                className="bg-violet-500 hover:bg-blue-400 hover:shadow-md  rounded-full
      h-[80px] w-[80px] flex items-center justify-center text-[50px]  "
              >
                <AiFillHome />
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/createSecret">
              <div
                className="bg-violet-500 hover:bg-blue-400  hover:shadow-md   rounded-full
      h-[80px] w-[80px] flex items-center justify-center text-[60px]"
              >
                <AiFillPlusCircle />
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SiderBar;
