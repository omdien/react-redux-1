import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineUser, AiOutlineHeart, AiOutlineLogout } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { SiMaterialformkdocs } from "react-icons/si";
import { TbCategory } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { update } from "../features/CloseOpenSlice";

const Sidebar = () => {
  const { buka } = useSelector((state) => state.closeOpen); //destructuring
  const menus = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "Barang", link: "/products", icon: SiMaterialformkdocs },
  ];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(buka);

  const bukaTutup = (bstat) => {
    setOpen(bstat);
    dispatch(update({ buka: !open }));
  };

  return (
    <div
      className={`bg-orange-400 min-h-screen ${
        open ? "w-72" : "w-16"
      } duration-500 text-gray-100 px-4`}
    >
      <div className="flex py-3">
        {/* <h1
          style={{ transitionDelay: `${3}00ms` }}
          className={`whitespace-pre duration-500 ${
            !open && "opacity-0 translate-x-28 overflow-hidden"
          } font-bold ps-2 `}
        >
          REACT+REDUX
        </h1> */}
        <HiMenuAlt3
          size={26}
          className="cursor-pointer"
          onClick={() => bukaTutup(!open)}
        />
      </div>
      <div className="relative flex flex-col gap-4 mt-4">
        {menus.map((menu, index) => (
          <Link
            to={menu.link}
            key={index}
            className={`${
              menu.margin && "mt-5"
            } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
          >
            <div>{React.createElement(menu.icon, { size: 20 })}</div>
            <h2
              style={{ transitionDelay: `${index + 3}00ms` }}
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              } `}
            >
              {menu.name}
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
            >
              {menu.name}
            </h2>
          </Link>
        ))}
        {/* <Link
                    to={"/"}
                    className={`group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}>
                    <div>
                        <AiOutlineLogout size={20} />
                    </div>
                    <h2
                        style={{ transitionDelay: `${3 + 3}00ms`, }}
                        className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'} `}>
                        <button className="button">
                            Logout
                        </button>
                    </h2>
                    <h2 className={`${open && "hidden"} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>
                        Logout
                    </h2>
                </Link> */}
      </div>
    </div>
  );
};

export default Sidebar;
