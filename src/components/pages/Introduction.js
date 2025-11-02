// import './Introduction.css'
// const Introduction = () => {
//   return (
//     <>
//       <div className='container-header'><a href='../App.js/Home'>Trang chủ  </a>       <span> &gt;  Giới thiệu</span></div>
      

 
//     <div className="container-introduction">
//       <div className="container-content-introduction">
//       <h1>SamShop – Nền Tảng Mua & Thuê Phần Mềm Bản Quyền Uy Tín</h1>
//       <p>SamShop cung cấp đa dạng phần mềm bản quyền dành cho học tập, làm việc và giải trí, với hai lựa chọn linh hoạt: mua vĩnh viễn hoặc thuê theo nhu cầu.
// Chúng tôi hợp tác với nhiều thương hiệu công nghệ hàng đầu, đảm bảo phần mềm chính hãng, giá tốt, kích hoạt nhanh và đầy đủ tính năng.
// Đội ngũ hỗ trợ của SamShop luôn đồng hành 24/7, giúp khách hàng yên tâm trong suốt quá trình sử dụng dịch vụ.</p>
//       </div>
     
//     </div>
//     </>
    
//   );
// }

// export default Introduction;

// Introduction.js
import './Introduction.css';

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
    </>
  );
}
