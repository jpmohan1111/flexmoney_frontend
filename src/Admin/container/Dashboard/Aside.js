import React from "react";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import {
  FaTachometerAlt,
  FaGem,
  FaList,
  FaGithub,
  FaRegLaughWink,
  FaHeart,
  AiOutlineContacts,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
//import sidebarBg from './assets/bg1.jpg';

const Aside = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
  return (
    <ProSidebar
      // image={image ? sidebarBg : false}
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: "24px",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 14,
            letterSpacing: "1px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          FlexMoney Admin Dashboard
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <SubMenu title="Contact Us" icon={<FaGem />}>
            <MenuItem>
              <NavLink
                to="/admin/dashboard/contactForm"
                activeStyle={{
                  color: "white",
                }}
              >
                Contact Us Form
              </NavLink>
            </MenuItem>
            {/* <MenuItem>submenu 2</MenuItem>
            <MenuItem>submenu 3</MenuItem> */}
          </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: "center" }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "20px 24px",
          }}
        ></div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;
