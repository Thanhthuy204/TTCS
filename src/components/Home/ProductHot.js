// components/HotProducts2025.jsx

import './ProductHot.scss';

const HotProducts2025 = [
  {
    discount: "83%",
    logo: "https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f399-fe0f.png",
    title: "Nâng Cấp Tài Khoản Spotify Premium Giá Rẻ",
    price: "99.000 đ - 570.000 đ",
    bgGradient: "from-green-500 to-emerald-600",
  },
  {
    discount: "84%",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Netflix_icon.svg/512px-Netflix_icon.svg.png",
    title: "Tài Khoản Netflix Premium Giá Rẻ",
    price: "70.000 đ - 210.000 đ",
    bgGradient: "from-red-600 to-rose-700",
  },
  {
    discount: "85%",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/128px-YouTube_full-color_icon_%282017%29.svg.png",
    title: "Nâng Cấp Tài Khoản Youtube Premium Giá Rẻ",
    price: "99.000 đ - 450.000 đ",
    bgGradient: "from-red-500 to-red-700",
  },
  {
    discount: "23%",
    logo: "https://play-lh.googleusercontent.com/dsCkmw8_QoY4wO5MqRj90nX4fqtYo1q9htfS0b8v8vHpgk2wG-mKe0nedd2k5oQ7uA",
    title: "Nâng Cấp Tài Khoản Quizlet Plus",
    price: "Từ 199.000 đ",
    bgGradient: "from-purple-500 to-indigo-600",
  },
];

const ProductHot = () => {
  return (
    <section className="hot-products-section">
      <div className="container">
        <div className="content-wrapper">
          {/* Phần trái: Tiêu đề + mô tả */}
          <div className="main-content">
            <p className="trend-label">
              Xu Hướng 2025
            </p>
            <h1 className="main-title">
              Sản Phẩm Nổi Bật
              <br />
              Nhất Năm 2025
            </h1>
            <p className="description">
              Woku Shop cung cấp phần mềm bản quyền chính hãng đa dạng, bao gồm:
              AI, Microsoft Office, thiết kế đồ họa, VPN/Antivirus, đáp ứng mọi nhu cầu
              học tập, công việc và bảo mật với giá cực kỳ cạnh tranh.
            </p>
            <a href="https://zalo.me/0123456789" target="_blank" rel="noopener noreferrer" className="cta-button">
              Liên hệ tư vấn tại đây
            </a>
          </div>

          {/* Phần phải: Danh sách sản phẩm bán chạy */}
          <div className="trending-list">
            <h2 className="trending-title">Bán chạy</h2>
            {HotProducts2025.map((product, index) => (
              <div key={index} className="product-card">
                <div className={`discount-badge bg-gradient-to-br ${product.bgGradient}`}>
                  <span className="discount-text">{product.discount}</span>
                  <span className="off-text">off</span>
                </div>
             
                <div className="product-info">
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-price">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHot;