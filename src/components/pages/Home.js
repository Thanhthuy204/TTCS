import './Home.css';
import React from 'react';
import RightCarousel from './RightCarousel';
import CategoryTicker from './Ticker';  
import Reveal from '../navbar/Reveal';
const Home = () => {
  return (
    <>
    <div className="container-home">
    <div className="container content-home">
                <h1>Website uy tín - Nâng tầm trải nghiệm khách hàng</h1>
          <p> Shop tự hào giới thiệu nền tảng mới,
              hỗ trợ thanh toán linh hoạt 24/7 và quản lý đơn hàng nhanh chóng
              , mang đến cho khách hàng trải nghiệm mua sắm tiện lợi và
              hiện đại hơn bao giờ hết. Chúng tôi luôn đặt sự hài lòng
              và niềm tin của khách hàng làm trọng tâm,
              không ngừng nỗ lực cải tiến để mang lại những sản phẩm và dịch vụ tốt nhất..
              </p>
            </div>
            <div className="hero-right-peek"> 
          <RightCarousel />
        </div>
      </div>
    <div className="ticker-home">
      <CategoryTicker/>
    </div>

      <div className="container-softkey-info">
        <h1 className="softkey-title">SOFTKEY</h1>
        <p className="softkey-description">
          SoftKey là địa chỉ đáng tin cậy, chuyên cung cấp phần mềm bản quyền và dịch vụ nâng cấp tài khoản chính chủ.
          Chúng tôi cam kết mang đến chất lượng vượt trội, giá cả hợp lý và sẵn sàng hỗ trợ tận tâm 24/7.
        </p>
      </div>

    </>

  );
}

export default Home;

