// src/pages/ChangePassword/ChangePassword.js
import React, { useState } from "react";
import "./ChangePassword.scss";
import {
  FiUser,
  FiLock,
  FiShoppingBag,
  FiLogOut,
  FiEye,
  FiEyeOff,
  FiCreditCard
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer, Bounce } from "react-toastify";
import { changePassword } from "../../services/ApiService"; // nhớ tạo hàm này

const ChangePassword = () => {
  const navigate = useNavigate();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    // localStorage.removeItem("accessToken");
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!currentPassword || !newPassword || !confirmPassword) {
      toast.error("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Mật khẩu mới và Nhập lại mật khẩu mới không khớp.");
      return;
    }

    try {
      const res = await changePassword(currentPassword, newPassword, confirmPassword);
      console.log("CHANGE PASSWORD RES:", res);

      if (res && res.status === 200) {
        toast.success("Đổi mật khẩu thành công!");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
        navigate("/my-profile");
      } else {
        toast.error("Đổi mật khẩu thất bại!");
      }
    } catch (error) {
      console.log("CHANGE PASSWORD ERROR:", error);
      const apiError = error.response?.data;
      let message = "Đổi mật khẩu thất bại!";

      if (apiError) {
        if (typeof apiError.detail === "string") {
          message = apiError.detail;
        } else {
          const msgs = [];
          for (const key in apiError) {
            if (Array.isArray(apiError[key])) {
              msgs.push(`${key}: ${apiError[key].join(", ")}`);
            } else {
              msgs.push(`${key}: ${apiError[key]}`);
            }
          }
          if (msgs.length > 0) message = msgs.join(" | ");
        }
      }

      toast.error(message);
    }
  };

  return (
    <div className="profile-page">
    
      <div className="profile-layout">
        {/* Sidebar trái */}
        <div className="profile-sidebar">
          <div className="sidebar-header">Cài đặt tài khoản</div>

          <ul className="sidebar-menu">
            <li onClick={() => navigate("/my-profile")}>
              <FiUser className="icon" />
              <span>Thông tin tài khoản</span>
            </li>
            <li  onClick={() => navigate("/update-seller-profile")}>
               <FiUser className="icon" />
                <span>Tài khoản bán hàng</span>
            </li>
            <li className="active">
              <FiLock className="icon" />
              <span>Đổi mật khẩu</span>
            </li>
            <li onClick={() => navigate("/wallet")}>
              <FiCreditCard  className="icon" />
              <span>Số dư tài khoản</span>
            </li>
            <li onClick={() => navigate("/orders")}>
              <FiShoppingBag className="icon" />
              <span>Quản lý đơn hàng</span>
            </li>
            <li onClick={handleLogout} className="logout-item">
              <FiLogOut className="icon" />
              <span>Đăng xuất</span>
            </li>
          </ul>
        </div>

        {/* Nội dung bên phải: Đổi mật khẩu */}
        <div className="profile-content">
          <h2 className="cp-title">Đổi mật khẩu</h2>
          <div className="cp-divider" />

          <form className="cp-form" onSubmit={handleSubmit}>
            {/* Mật khẩu hiện tại */}
            <div className="cp-group">
              <label>
                Mật khẩu hiện tại<span className="required">*</span>
              </label>
              <div className="cp-input-wrapper">
                <input
                  type={showCurrent ? "text" : "password"}
                  placeholder="Nhập mật khẩu"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="toggle-visibility"
                  onClick={() => setShowCurrent((prev) => !prev)}
                >
                  {showCurrent ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            {/* Mật khẩu mới */}
            <div className="cp-group">
              <label>
                Mật khẩu mới <span className="required">*</span>
              </label>
              <div className="cp-input-wrapper">
                <input
                  type={showNew ? "text" : "password"}
                  placeholder="Nhập mật khẩu"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="toggle-visibility"
                  onClick={() => setShowNew((prev) => !prev)}
                >
                  {showNew ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            {/* Nhập lại mật khẩu mới */}
            <div className="cp-group">
              <label>
                Nhập lại mật khẩu mới <span className="required">*</span>
              </label>
              <div className="cp-input-wrapper">
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Nhập mật khẩu"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="toggle-visibility"
                  onClick={() => setShowConfirm((prev) => !prev)}
                >
                  {showConfirm ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            <button type="submit" className="btn-gradient">
              Cập nhật thông tin
            </button>
          </form>
        </div>
      </div>

      {/* <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        pauseOnHover
        theme="light"
        transition={Bounce}
      /> */}
    </div>
  );
};

export default ChangePassword;
