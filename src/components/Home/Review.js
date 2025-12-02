// components/CustomerReviews.jsx
// import Image from 'next/image';
import './Review.scss';

const reviews = [
  {
    name: "Chị Đặng Phương Anh",
    service: "Nâng cấp tài khoản Quizlet Plus",
    text: "Tôi rất hài lòng với tài khoản Quizlet Plus từ Woku Shop! Nâng cấp giúp tôi học hiệu quả hơn với tính năng học ngoại tuyến và truy cập nhiều flashcard. Cảm ơn Woku Shop!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Anh Nguyễn Văn Bảo",
    service: "Nâng cấp tài khoản Youtube Premium",
    text: "Nâng cấp YouTube Premium tại Woku Shop thật tuyệt! Không còn quảng cáo phiền phức, dịch vụ nhanh chóng và chuyên nghiệp. Mình hoàn toàn hài lòng!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Chị Trần Thị Thu",
    service: "Nâng cấp tài khoản JetBrains Full App",
    text: "Nâng cấp tài khoản JetBrains tại Woku Shop thật tuyệt vời! Dịch vụ nhanh chóng, chuyên nghiệp, và tôi dễ dàng truy cập các công cụ lập trình. Rất hài lòng!",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  
  },
  {
    name: "Anh Nguyễn Văn Thanh",
    service: "Nâng cấp tài khoản Spotify Premium",
    text: "Nâng cấp tài khoản Spotify Premium tại Woku Shop thật nhanh chóng! Âm thanh tuyệt vời, không quảng cáo. Rất hài lòng!",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Chị Nguyễn Bích Loan",
    service: "Nâng cấp LinkedIn Premium Business",
    text: "Nâng cấp LinkedIn Premium tại Woku Shop giúp tôi mở rộng cơ hội nghề nghiệp và dùng tính năng phân tích hồ sơ. Rất tuyệt vời!",
    avatar: "https://randomuser.me/api/portraits/women/23.jpg",
  },
  {
    name: "Anh Võ Trung Tuấn",
    service: "Nâng cấp Duolingo Super",
    text: "Nâng cấp Duolingo Super tại Woku Shop giúp tôi học hiệu quả hơn với tính năng không quảng cáo và phân tích tiến độ. Dịch vụ rất tuyệt!",
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
  },
];

const CustomerReviews = () => {
  return (
    <section className="customer-reviews">
      {/* Nút Zalo cố định */}
      <a
        href="https://zalo.me/0123456789" // Thay số Zalo của bạn
        target="_blank"
        rel="noopener noreferrer"
        className="zalo-btn"
      >
        {/* <Image
          src="https://cdn.jsdelivr.net/gh/vietblogdao/img/zalo-icon.png"
          alt="Liên hệ Zalo"
          width={40}
          height={40}
        /> */}
      </a>

      <div className="container">
        <h1 className="title">Đánh Giá Của Khách Hàng</h1>
        <p className="intro">
          Woku Shop luôn nỗ lực mang đến cho khách hàng những sản phẩm và dịch vụ tốt nhất.Để minh chứng cho điều này, hãy cùng xem những đánh giá và bình luận thực tế từ khách hàng đã trải nghiệm mua sắm tại Woku Shop.
        </p>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`review-card ${review.featured ? 'featured' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="review-header">
                {/* <Image
                  src={review.avatar}
                  alt={review.name}
                  width={70}
                  height={70}
                  className="avatar"
                /> */}
                <div className="user-info">
                  <h3 className="user-name">{review.name}</h3>
                  <p className="service">{review.service}</p>
                </div>
              </div>
              <p className="review-text">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;