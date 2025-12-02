import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { BsHouseDoorFill, BsTelephoneFill, BsEnvelopeFill } from 'react-icons/bs';
import './Navbar.css';
import { CiSearch } from "react-icons/ci";


const NavbarHome = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isProducts = location.pathname === '/products';
  
  return (
    <>
      <Navbar bg="dark" data-bs-theme="white">
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
     
          
     <nav className="navbar navbar-light bg- shadow-sm py-3 white-navbar">
  <div className="container d-flex">

    {/* Logo */}
    <h1 className="navbar-brand fw-bold brand-softkey" href="/">SoftKey</h1>


    <div className="form-search form-sreach">   
  <form className="search-form">
    <input
      className="search-input"
      type="search"
      placeholder="Tìm kiếm sản phẩm"
    />
    <button className="search-btn" type="submit" aria-label="Tìm kiếm">
      <i className="bi bi-search"></i><CiSearch />
    </button>
  </form>
</div>



    

    {/* Đăng ký + Đăng nhập */}
    <div className='btn-sigup-signin'>
      <button
      className="btn btn-outline-dark me-3"
      onClick={() => navigate('/signup')}
    >
      <i className="bi bi-person"></i> Đăng ký
    </button>

    {location.pathname !== '/signin' && (
      <button
        className="btn btn-outline-dark"
        onClick={() => navigate('/signin')}
      >
        <i className="bi bi-cart3"></i> Đăng nhập
      </button>
    )}
    </div>
    
    

  </div>
</nav>


      </>
      
  );
}

export default NavbarHome;