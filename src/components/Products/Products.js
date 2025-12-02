import "./Products.scss";
// import { useEffect, useState } from "react";
// import axios from "axios";
import { FaGamepad } from "react-icons/fa";

const Products = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:8000/api/products/");
  //       setProducts(res.data);
  //     } catch (error) {
  //       console.log("ERROR FETCH PRODUCTS:", error);
  //     }
  //   };
  //
  //   fetchProducts();
  // }, []);

  // DEMO DATA
  const products = [
    {
      id: 1,
      name: "Windows 11 Home N Bản Quyền (Vĩnh Viễn)",
      price: 224000,
      oldPrice: 249000,
      discount: "-10%",
      description: "Key bản quyền chính hãng, kích hoạt online.",
      image: "https://picsum.photos/400/260?random=1",
    },
    {
      id: 2,
      name: "Windows 11 IoT Enterprise LTSC",
      price: 351000,
      oldPrice: 390000,
      discount: "-10%",
      description: "Phiên bản IoT ổn định, hỗ trợ dài hạn.",
      image: "https://picsum.photos/400/260?random=2",
    },
    {
      id: 3,
      name: "Windows 11 Education Bản Quyền (Vĩnh Viễn)",
      price: 224000,
      oldPrice: 249000,
      discount: "-0%",
      description: "Dành cho đối tượng học sinh, sinh viên.",
      image: "https://picsum.photos/400/260?random=3",
    },
    {
      id: 4,
      name: "Windows 10 Pro N Bản Quyền (Vĩnh Viễn)",
      price: 314000,
      oldPrice: 349000,
      discount: "-10%",
      description: "Bản Pro hỗ trợ đầy đủ tính năng cho công việc.",
      image: "https://picsum.photos/400/260?random=4",
    },
  ];

  const categories = [
    "Làm Việc",
    "Giải trí",
    "Học Tập",
    "Microsoft",
    "Windows",
    "VPN",
    "Diệt Virus",
    "Tiện ích",
  ];

  return (
    <div className="products-page">
      <div className="products-container">
        {/* SIDEBAR */}
        <aside className="products-sidebar">
          <div className="sidebar-card">
            <h3 className="sidebar-title">
              <span>Danh mục sản phẩm</span>
              
            </h3>

            <ul className="sidebar-list">
              {categories.map((cat) => (
                <li className="sidebar-item" key={cat}>
                  <span className="sidebar-dot" />
                  <span className="sidebar-text">{cat}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="products-main">
          {/* Header: title + sort */}
          <div className="products-header">
            <h2 className="products-title">Sản phẩm</h2>

            <div className="products-sort">
              <span className="sort-label">Sắp xếp</span>
              <select className="sort-select" defaultValue="default">
                <option value="default">Mặc định</option>
                <option value="price-asc">Giá tăng dần</option>
                <option value="price-desc">Giá giảm dần</option>
                <option value="name-asc">Tên A-Z</option>
              </select>
            </div>
          </div>

          {/* GRID PRODUCTS */}
          <div className="product-grid" >
            {products.map((item) => (
              <div className="product-card" key={item.id}>
                <div className="product-badge">{item.discount}</div>

                <div className="product-image-wrapper">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="product-image"
                  />
                </div>

                <div className="product-content">
                  <h3 className="product-name">{item.name}</h3>

                  <div className="product-price-row">
                    <span className="product-price">
                      {item.price?.toLocaleString("vi-VN")} đ
                    </span>
                    {item.oldPrice && (
                      <span className="product-old-price">
                        {item.oldPrice?.toLocaleString("vi-VN")} đ
                      </span>
                    )}
                  </div>

                  <p className="product-description">{item.description}</p>

                  <div className="product-footer">
                    <span className="product-status">✔ Còn hàng</span>
                    <button className="product-btn">Thêm vào giỏ</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Products;
