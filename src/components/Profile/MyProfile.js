// src/pages/MyProfile/MyProfile.js
import React, { useEffect, useState } from "react";
import "./MyProfile.scss";
import {
  FiUser,
  FiLock,
  FiShoppingBag,
  FiLogOut,
  FiCamera,
  FiCreditCard
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer, Bounce } from "react-toastify";
import { getMyProfile } from "../../services/ApiService";
import { changeProfile } from "../../services/ApiService"; // nhớ tạo hàm này

const MyProfile = () => {
  const navigate = useNavigate();

  // STATE FORM
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [socialLink, setSocialLink] = useState("");
  // AVATAR
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [avatarFile, setAvatarFile] = useState(null);

  // ---------------------------
  // 📌 LẤY THÔNG TIN USER TỪ API
  // ---------------------------
      const fetchProfile = async () => {
      try {
        let res = await getMyProfile();
        console.log("PROFILE DATA:", res.data);

        if (res.status === 200) {
          const u = res.data;

          setFullName(u.profile.full_name || "");
          setPhone(u.profile.phone_number || "");
          setAddress(u.profile.location || "");
          setEmail(u.email || "");
          setBio(u.profile.bio || "");
          setSocialLink(u.profile.social_link || "");
          // setAvatarPreview(u.avatar || null);
        }
      } catch (err) {
        console.log("PROFILE ERROR:", err);

        if (err.response?.status === 401) {
          toast.error("Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.");
          navigate("/login");
        } else {
          toast.error("Không thể tải thông tin tài khoản.");
        }
      }
    };
  useEffect(() => {


    fetchProfile();
  }, [navigate]);

  // ---------------------------
  // 📌 XỬ LÝ CHỌN ẢNH
  // ---------------------------
  // const handleAvatarChange = (e) => {
  //   const file = e.target.files[0];
  //   if (!file) return;

  //   if (file.size > 1024 * 1024) {
  //     toast.error("Dung lượng ảnh tối đa 1MB");
  //     return;
  //   }

  //   setAvatarFile(file);
  //   setAvatarPreview(URL.createObjectURL(file));
  // };

  // ---------------------------
  // 📌 SUBMIT CẬP NHẬT
  // ---------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

   let res = await changeProfile(
      fullName,
      bio, 
      address,
      phone,
      socialLink,
    );
    console.log("UPDATE PROFILE RES:", res);

if (res.status === 200) {
  const u = res.data;
  const p = u.profile || {}; // đề phòng profile = null
  fetchProfile();
  toast.success("Cập nhật thông tin thành công!");
  
} else {
  toast.error("Cập nhật thông tin thất bại!");
  }
}
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    navigate("/");
  };
  

  return (
    <div className="profile-page">
      <div className="profile-layout">
        {/* ================= SIDEBAR ================= */}
        <div className="profile-sidebar">
          <div className="sidebar-header">Cài đặt tài khoản</div>

          <ul className="sidebar-menu">
            <li className="active" onClick={() => navigate("/my-profile")}>
              <FiUser className="icon" />
              <span>Thông tin tài khoản</span>
            </li>
            <li  onClick={() => navigate("/update-seller-profile")}>
              <FiUser className="icon" />
              <span>Tài khoản bán hàng</span>
            </li>
            <li onClick={() => navigate("/change-password")}>
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

        {/* ================= CONTENT ================= */}
        <div className="profile-content profile-info">
          <h2 className="info-title">Thông tin tài khoản</h2>

          <form className="info-form" onSubmit={handleSubmit}>
            <div className="info-main">
              {/* LEFT */}
              <div className="info-left">
                {/* HỌ TÊN */}
                <div className="info-group">
                  <label>Họ và tên </label>
                  <div className="info-input-wrapper">
                    <input
                      type="text"
                      placeholder="Nhập họ và tên "
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                </div>

                {/* SỐ ĐIỆN THOẠI */}
                <div className="info-group">
                  <label>Số điện thoại</label>
                  <div className="info-input-wrapper">
                    <input
                      type="text"
                      placeholder="Nhập số điện thoại"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className="info-group">
                  <label>Địa chỉ</label>
                  <div className="info-input-wrapper">
                    <input
                      type="text"
                      placeholder="Nhập địa chỉ"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>

                {/* EMAIL */}
                <div className="info-group">
                  <label>Email</label>
                  <div className="info-input-wrapper disabled">
                    <input type="email" value={email} readOnly />
                  </div>
                </div>
                {/* BIO */}
                <div className="info-group">
                  <label>Bio</label>
                  <div className="info-input-wrapper">
                    <input
                      type="text"
                      placeholder="Nhập bio"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                    />
                  </div>
                </div>
                {/* socials link */}
                <div className="info-group">
                  <label>Social link</label>
                  <div className="info-input-wrapper">
                    <input
                      type="text"
                      placeholder="Nhập social link"
                      value={socialLink}
                      onChange={(e) => setSocialLink(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* RIGHT - AVATAR */}
              <div className="info-right">
                <div className="avatar-wrapper">
                  <label className="avatar-circle">
                    {avatarPreview ? (
                      <img src={avatarPreview} alt="avatar" />
                    ) : (
                      <div className="avatar-placeholder">
                        <FiUser className="avatar-user-icon" />
                        <div className="avatar-camera">
                          <FiCamera />
                        </div>
                      </div>
                    )}

                    <input
                      type="file"
                      accept="image/png, image/jpeg"
                      // onChange={handleAvatarChange}
                      style={{ display: "none" }}
                    />
                  </label>

                  <div className="avatar-note">
                    <p>
                      Dung lượng tối đa <span>1MB</span>
                    </p>
                    <p>
                      Định dạng <span>JPEG, PNG</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button type="submit" className="btn-gradient">
              Cập nhật thông tin
            </button>
          </form>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default MyProfile;
