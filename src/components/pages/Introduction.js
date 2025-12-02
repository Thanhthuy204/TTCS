import React from 'react';
import './Introduction.css';
import LabelTicker from './Ticker';

export default function Introduction() {
  return (
    <>

      <div className="container-slider">
      <div className="breadcrumb-centered">
        <a href="/">Trang chủ</a> <span> &gt; Giới thiệu</span>
      </div>

      <section className="hero-intro">
        <div className="hero-content">
          <h1>SamShop – Phần Mềm Bản Quyền Giá Tốt</h1>
          <p>
            SamShop là địa chỉ uy tín chuyên cung cấp phần mềm bản quyền chính hãng với giá tốt.
            Chúng tôi cam kết mang đến sản phẩm chất lượng cao, đa dạng từ các lĩnh vực như AI,
            thiết kế, văn phòng, bảo mật, và giải trí, cùng dịch vụ hỗ trợ khách hàng tận tâm 24/7.
          </p>
        </div>
      </section>
      </div>
      <div>
      <LabelTicker />
      </div>
    </>
  );
}
