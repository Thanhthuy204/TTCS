// src/components/Admin/SideBar.js
import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import {
  FiMenu,
  FiHome,
  FiGrid,
  FiBell,
  FiBarChart2,
  FiHeart,
  FiCreditCard,
  FiMessageCircle,
  FiLogOut,
  FiSettings,
} from "react-icons/fi";
import "./Admin.scss";
const SideBar = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapsedChange = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className={`sidebar-wrapper ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-card">
        {/* Header */}
        <div className="sidebar-header-row">
          <button
            className="sidebar-menu-btn"
            type="button"
            onClick={onCollapsedChange}
          >
            <FiMenu />
          </button>
          {!collapsed && <span className="sidebar-brand">ADMIN</span>}

        </div>

        {/* Menu */}
        <nav className="sidebar-menu">
          <NavLink
            to="/admins"
            end
            className={({ isActive }) =>
              "sidebar-link" + (isActive ? " active" : "")
            }
          >
            <span className="sidebar-icon">
              <FiHome />
            </span>
            <span className="sidebar-text">Dashboard</span>
          </NavLink>

          <NavLink
            to="/admins/manage-seller"
            className={({ isActive }) =>
              "sidebar-link" + (isActive ? " active" : "")
            }
          >
            <span className="sidebar-icon">
              <FiGrid />
            </span>
            <span className="sidebar-text">Manage Seller</span>
          </NavLink>

            <NavLink
            to="/admins/manage-buyer"
            className={({ isActive }) =>
              "sidebar-link" + (isActive ? " active" : "")
            }
          >
            <span className="sidebar-icon">
              <FiGrid />
            </span>
            <span className="sidebar-text">Manage Buyer</span>
          </NavLink>

          <NavLink
            to="/admins/notifications"
            className={({ isActive }) =>
              "sidebar-link" + (isActive ? " active" : "")
            }
          >
            <span className="sidebar-icon">
              <FiBell />
            </span>
            <span className="sidebar-text">Notifications</span>
          </NavLink>

          <NavLink
            to="/admins/analytics"
            className={({ isActive }) =>
              "sidebar-link" + (isActive ? " active" : "")
            }
          >
            <span className="sidebar-icon">
              <FiBarChart2 />
            </span>
            <span className="sidebar-text">Analytics</span>
          </NavLink>

          <NavLink
            to="/admins/likes"
            className={({ isActive }) =>
              "sidebar-link" + (isActive ? " active" : "")
            }
          >
            <span className="sidebar-icon">
              <FiHeart />
            </span>
            <span className="sidebar-text"></span>
          </NavLink>
{/* 
          <NavLink
            to="/admins/wallets"
            className={({ isActive }) =>
              "sidebar-link" + (isActive ? " active" : "")
            }
          >
            <span className="sidebar-icon">
              <FiCreditCard />
            </span>
            <span className="sidebar-text">Wallets</span>
          </NavLink> */}

          <NavLink
            to="/admins/messages"
            className={({ isActive }) =>
              "sidebar-link" + (isActive ? " active" : "")
            }
          >
            <span className="sidebar-icon">
              <FiMessageCircle />
            </span>
            <span className="sidebar-text">Messages</span>
          </NavLink>
        </nav>

        {/* Footer */}
        <div className="sidebar-footer-section">
          <NavLink
            to="/admins/logout"
            className={({ isActive }) =>
              "sidebar-link" + (isActive ? " active" : "")
            }
          >
            <span className="sidebar-icon">
              <FiLogOut />
            </span>
            <span className="sidebar-text">Logout</span>
          </NavLink>

          <NavLink
            to="/admins/settings"
            className={({ isActive }) =>
              "sidebar-link" + (isActive ? " active" : "")
            }
          >
            <span className="sidebar-icon">
              <FiSettings />
            </span>
            <span className="sidebar-text">Settings</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
