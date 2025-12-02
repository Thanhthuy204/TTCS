
import RightCarousel from '../Home/RightCarousel';
import Ticker from '../Home/Ticker';
import CustomerReviews from './Review';
import ProductHot from './ProductHot';

const HomePage = () => {
    return (
        <>
       <div className="homepage-container">
        <div className="col-lg-6 col-md-12 col-12 homepage-left" >
            <h1>Website uy tín - Nâng tầm trải nghiệm khách hàng</h1>
          <p> Shop tự hào giới thiệu nền tảng mới,
              hỗ trợ thanh toán linh hoạt 24/7 và quản lý đơn hàng nhanh chóng
              , mang đến cho khách hàng trải nghiệm mua sắm tiện lợi và
              hiện đại hơn bao giờ hết. Chúng tôi luôn đặt sự hài lòng
              và niềm tin của khách hàng làm trọng tâm,
              không ngừng nỗ lực cải tiến để mang lại những sản phẩm và dịch vụ tốt nhất..
              </p>
        </div>
        <div className="col-lg-6 col-md-12 col-12  homepage-right">
            <RightCarousel />
        </div>
        </div>
        <div className='homepage-ticker'>
            <Ticker />
        </div>
        <div className='homepage-container2'>
            <h1>SoftKey - Giải pháp phần mềm uy tín</h1>
            <div class="search-box">
            <input type="text" placeholder="Tìm kiếm sản phẩm..." />
            <button>Tìm</button>
            </div>
            
        </div>

        <div className='homepage-container3'>
            <ProductHot />
        </div>
        <div>
            <CustomerReviews />
        </div>
        
        </>
    );
}

export default HomePage;