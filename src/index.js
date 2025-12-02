import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter , Route, Routes} from 'react-router-dom'; 
import HomePage from './components/Home/HomePage';
import Admin from './components/Admin/Admin';
import Seller from './components/Seller/Seller';
import DashBoard from './components/Admin/Content/DashBoard';
import ManageSeller from './components/Admin/Content/ManageSeller';
import ManageBuyer from './components/Admin/Content/ManageBuyer';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Products from './components/Products/Products';
import Buyer from './components/Seller/Seller';
import ManageProducts from './components/Seller/Content/ManageProducts';
import MyProfile from './components/Profile/MyProfile';
import ChangePassword from './components/Profile/ChangePassword';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <BrowserRouter> 
      <Routes>
        <Route path="/" element={<App />} >
        <Route index element = {<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/my-profile' element={<MyProfile/>}/>
        <Route path='/change-password' element={<ChangePassword/>}/>
         </Route>
         <Route path="admins" element={<Admin/>} >
         <Route index element = {<DashBoard/>}/>
         <Route path="manage-seller" element={<ManageSeller/>} />
         <Route path="manage-buyer" element={<ManageBuyer/>} />
         <Route path="manage-buyer" element={<ManageBuyer/>} />
         </Route>
         <Route path='seller' element={<Seller/>}>
         <Route index element = {<DashBoard/>}/>
         <Route path="manage-products" element={<ManageProducts/>} />

         </Route>
         
       
      </Routes>
      </BrowserRouter>
  </Provider>
);


reportWebVitals();
