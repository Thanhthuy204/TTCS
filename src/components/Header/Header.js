
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { VscAccount } from "react-icons/vsc";
import { FaShoppingCart } from "react-icons/fa";



const Header = () =>  {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("user"));
  const handleAccountClick = () => {
    if(user){
      navigate('/my-profile')
    } else
    navigate('/login')
  }
 
  return (

    <div>
      
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Nav className="me-auto softkey-header">
            <NavLink to="/" className='nav-link'>SoftKey</NavLink>
          </Nav>
        <Nav className="me-auto">
            <NavLink to="/" className='nav-link'>Trang chủ</NavLink>
          </Nav>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/products" className='nav-link'>Sản phẩm</NavLink>
          </Nav>
         
        </Navbar.Collapse>
        <Nav>
          <div className="cart-nav">
            <button className="btn-cart" onClick={() => navigate('/cart')}>
              <FaShoppingCart />
              <span className="cart-badge">0</span>
            </button>

            <NavLink to="/cart" className="cart-text">Giỏ hàng</NavLink>
          </div>
        </Nav>

         <Nav>
            <div className='btn-group'>
            <button className='btn-login' onClick={() => handleAccountClick()}><VscAccount />
            </button>
            <span className='account-text' onClick={() => handleAccountClick()}>Tài khoản</span>
            </div>
           
          </Nav>
      </Container>
    </Navbar>
    </div>
  );
}

export default Header;