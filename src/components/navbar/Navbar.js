import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { BsHouseDoorFill, BsTelephoneFill, BsEnvelopeFill } from 'react-icons/bs';
import './Navbar.css';

const NavbarHome = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isProducts = location.pathname === '/products';

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand
            as={Link}
            to="/"
            className={`nav-text-gradient ${location.pathname === '/' ? 'nav-text-gradient-active' : ''}`}
          >
            <BsHouseDoorFill className="me-2" />
            Trang chủ
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/introduction" end>
              Giới thiệu
            </Nav.Link>
            <Nav.Link as={NavLink} to="/products" end>
              Sản phẩm
            </Nav.Link>
          </Nav>
          <div className="d-none d-lg-flex align-items-center ms-auto contact-info">
            <span><BsTelephoneFill className="me-1" />Hotline: 0123 456 789</span>
            <span><BsEnvelopeFill className="me-1" />dothithanhthuy@gmail.com</span>
          </div>
          
        </Container>
      </Navbar>
     
          
      <nav className="navbar navbar-light bg-white shadow-sm py-3 white-navbar">
  <div className="container d-flex align-items-center">

    {/* Logo */}
    <a className="navbar-brand fw-bold" href="/">SamShop </a>

    

    {/* Tìm kiếm sản phẩm */}
    <form className="d-flex flex-grow-1  search-form">
      <input
        className="form-control search-input"
        type="search"
        placeholder="Tìm kiếm sản phẩm"
      />
      <button className="btn btn-gradient search-btn" type="submit">
        <i className="bi bi-search"></i>
      </button>
    </form>

    {/* Giỏ hàng + Đăng nhập */}
    {location.pathname !== '/signin' && (
      <button className="btn btn-outline-dark me-3" onClick={() => navigate('/signin')}>
        <i className="bi bi-cart3"></i> Đăng nhập
      </button>
    )}

          {/* <button className="btn btn-outline-dark" onClick={() => navigate('/signin')}>
      <i className="bi bi-person"></i> Sign in
    </button> */}

  </div>
</nav>

      </>
      
  );
}

export default NavbarHome;