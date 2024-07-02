import React from "react";
import { Outlet } from "react-router-dom";
import AppRoutes from "./Routes";

function MainPanel() {
  return (
    <div className="main-render-panel  w-full rounded-lg">
      <AppRoutes />
      {/* <Outlet /> */}
    </div>
  );
}

export default MainPanel;
