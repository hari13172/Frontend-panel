import React, { useEffect, useState } from "react";
import { FaApple, FaBars } from "react-icons/fa";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
  menuClasses,
} from "react-pro-sidebar";
import { NavLink, useLocation } from "react-router-dom";
// import "./ProSidebar.css"; // Make sure to import your CSS file

function ProSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeRoute, setActiveRoute] = useState("");
  const location = useLocation();

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location.pathname]);

  const getActiveClass = (path: string) =>
    path === activeRoute ? "active-link" : "normal-link";

  const activeCurrentTab = (path: string) =>
    path === activeRoute ? "active-tab" : "normal-tab";

  const isSubMenuActive = (paths: string | string[]) =>
    paths.includes(activeRoute);

  return (
    <Sidebar
      rootStyles={{
        height: "100vh",
      }}
      collapsed={collapsed}
      collapsedWidth="70px"
      backgroundColor="inherit"
      className="sidebar"
    >
      <Menu
        rootStyles={{
          ["." + menuClasses.button]: {
            color: "#f1f5f9",
          },
        }}
      >
        <div className="flex items-center p-4 ">
          <FaApple className=" text-black mr-4 text-3xl" />
          <span className="text-black text-sm">BrandLogo</span>
        </div>

        <SubMenu
          label="WireGuard"
          icon={<FaApple className="text-xl" name="bar-chart" />}
          className={
            isSubMenuActive(["/wireguard", "/vpn", "/contact"])
              ? "active-main-tab"
              : "non-active"
          }
        >
          <NavLink to="/wireguard" className={getActiveClass("/wireguard")}>
            <MenuItem
              icon={<FaApple className="" />}
              className={activeCurrentTab("/wireguard")}
            >
              wireguard
            </MenuItem>
          </NavLink>
          <NavLink to="/vpn" className={getActiveClass("/vpn")}>
            <MenuItem
              icon={<FaApple className="" />}
              className={activeCurrentTab("/vpn")}
            >
              vpn
            </MenuItem>
          </NavLink>
          <NavLink to="/contact" className={getActiveClass("/contact")}>
            <MenuItem
              icon={<FaApple className="" />}
              className={activeCurrentTab("/contact")}
            >
              contact
            </MenuItem>
          </NavLink>
        </SubMenu>

        <SubMenu
          label="Vpn"
          icon={<FaApple className="text-xl" name="bar-chart" />}
          className={
            isSubMenuActive(["/home", "/about", "/testimonial"])
              ? "active-main-tab"
              : "non-active"
          }
        >
          <NavLink to="/home" className={getActiveClass("/home")}>
            <MenuItem
              icon={<FaApple className="" />}
              className={activeCurrentTab("/home")}
            >
              home
            </MenuItem>
          </NavLink>
          <NavLink to="/about" className={getActiveClass("/about")}>
            <MenuItem
              icon={<FaApple className="" />}
              className={activeCurrentTab("/about")}
            >
              about
            </MenuItem>
          </NavLink>
          <NavLink to="/testimonial" className={getActiveClass("/testimonial")}>
            <MenuItem
              icon={<FaApple className="" />}
              className={activeCurrentTab("/testimonial")}
            >
              testimonial
            </MenuItem>
          </NavLink>
        </SubMenu>

        <SubMenu
          label="Terminal"
          icon={<FaApple className="text-xl" name="bar-chart" />}
          className={
            isSubMenuActive(["/terminal1", "/terminal2", "/terminal3"])
              ? "active-main-tab"
              : "non-active"
          }
        >
          <NavLink to="/terminal1" className={getActiveClass("/terminal1")}>
            <MenuItem icon={<FaApple className="" />}>Pie charts</MenuItem>
          </NavLink>
          <NavLink to="/terminal2" className={getActiveClass("/terminal2")}>
            <MenuItem icon={<FaApple className="" />}>Line charts</MenuItem>
          </NavLink>
          <NavLink to="/terminal3" className={getActiveClass("/terminal3")}>
            <MenuItem icon={<FaApple className="" />}>Bar charts</MenuItem>
          </NavLink>
        </SubMenu>

        <MenuItem icon={<FaApple className="text-xl" name="calendar" />}>
          Calendar
        </MenuItem>
        <MenuItem icon={<FaApple className="text-xl" name="shopping-cart" />}>
          E-commerce
        </MenuItem>
        <MenuItem icon={<FaApple className="text-xl" name="service" />}>
          Examples
        </MenuItem>
      </Menu>

      <button className="sb-button" onClick={() => setCollapsed(!collapsed)}>
        <FaBars />
      </button>
    </Sidebar>
  );
}

export default ProSidebar;
