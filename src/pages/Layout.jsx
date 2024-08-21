import React from "react";
import Sidebar from "../components/Sidebar";
import isMobile from "../features/useCheckMobileScreen";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../features/CloseOpenSlice";

const Layout = ({ children }) => {
  const isMobileScreen = isMobile();
  const { buka } = useSelector((state) => state.closeOpen); //destructuring
  const dispatch = useDispatch();
  let buko = !isMobileScreen;
  if (isMobileScreen) dispatch(update({ buka: buko }));

  return (
    <React.Fragment>
        <div className="flex">
          <div className="fixed top-0">
            <Sidebar />
          </div>
          <div className="w-full">
            {children}
          </div>
        </div>
    </React.Fragment>
  );
};

export default Layout;
