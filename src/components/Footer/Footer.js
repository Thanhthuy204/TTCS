import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import './Footer.scss';
const  Footer = () =>{
  return (
    <footer className="site-footer">
      <div className="footer-inner container">
        {/* Logo + About + Social */}
        <div className="col about">
          <div className="logo">Soft<span>Key</span></div>

          <p className="about-text">
            <strong>SoftKey</strong> – Địa chỉ uy tín cung cấp phần mềm bản quyền chính hãng,
            đảm bảo chất lượng, an toàn và tin cậy cho mọi giao dịch của bạn.
          </p>

          <ul className="contact-list">
            <li><span className="icon"></span> 0368413971</li>
            <li><FaLocationDot /> ABCDEFGHIJKLMNOPQRSTUVWXYZ</li>
            <li><FaPhoneAlt /> 0368413971</li>
            <li><IoMdMail /> cskh@softkey.com</li>
            <li><span className="icon">⏰</span> 9:00 – 21:00</li>
          </ul>

          <div className="socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTiktok /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        {/* Thông tin chung */}
        <div className="col links">
          <h4>Thông tin chung</h4>
          <a href="/introduction">Giới thiệu</a>
          <a href="/contact">Liên hệ</a>
          <a href="/guide">Hướng dẫn</a>
          <a href="/policy">Chính sách</a>
          <a href="/news">Tin tức</a>
          <a href="/faqs">FAQs</a>
        </div>

        {/* Sản phẩm */}
        <div className="col links">
          <h4>Sản phẩm</h4>
          <a href="#">Tài khoản ChatGPT Plus</a>
          <a href="#">Tài khoản Canva Pro</a>
          <a href="#">Netflix giá rẻ</a>
          <a href="#">CapCut Pro</a>
          <a href="#">Google One</a>
          <a href="#">Figma Pro</a>
          <a href="#">JetBrains All Products</a>
          <a href="#">Navicat Premium</a>
        </div>

        {/* Hỗ trợ 24/7 */}
        <div className="col support">
          <div className="support-card">
            <h3>Hỗ trợ 24/7</h3>

            <a className="call" href="tel:0326923071">
              <span className="badge">📞</span>
              <div>
                <div className="sub">Gọi Softkey</div>
                <div className="phone">0368413971</div>
              </div>
            </a>

            <a className="zalo" href="https://zalo.me/" target="_blank" rel="noreferrer">
              <img alt="" src='../../assets/zalo.png' />
              <span>Báo cáo sự cố</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Sam Shop. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;