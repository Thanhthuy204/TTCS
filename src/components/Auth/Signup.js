import { useState } from 'react';
import './Signup.scss'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { postSignup } from '../../services/ApiService';
import { ToastContainer, Bounce, toast } from 'react-toastify';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('buyer');
    const navigate = useNavigate();

    const resetForm =() => {
    setUsername('');
    setEmail('');
    setPassword('');
    setRole('');
    }

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
 const validatePassword = (password) => {
  if (!password) return "Mật khẩu không được để trống.";

  if (password.length < 8)
    return "Mật khẩu phải có ít nhất 8 ký tự.";

  if (!/[a-z]/.test(password))
    return "Mật khẩu phải chứa ít nhất 1 chữ thường.";

  if (!/[A-Z]/.test(password))
    return "Mật khẩu phải chứa ít nhất 1 chữ hoa.";

  if (!/[0-9]/.test(password))
    return "Mật khẩu phải chứa ít nhất 1 số.";

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password))
    return "Mật khẩu phải chứa ít nhất 1 ký tự đặc biệt.";

  if (/\s/.test(password))
    return "Mật khẩu không được chứa khoảng trắng.";

  return ""; // hợp lệ
};



//    const handleSignup = async (e) => {
//     if(!validateEmail(email)){
//         toast.error("Email không hợp lệ!");
//         return;
//     }


//     e.preventDefault();
//     let res = await postSignup(username, email, password);
//     console.log(res);

//     if(res && res.status === 201){
//         toast.success("Đăng ký thành công!");
//         resetForm();
//     }
//     if (res && res.status === 201) 
//       {
//         toast.error("Email đã tồn tại!");
//       }else {
//         toast.error("Dăng ký thất bại!");
//     }       
// };
const handleSignup = async (e) => {
  e.preventDefault();

  if (!username.trim()) {
    toast.error("Vui lòng nhập username.");
    return;
  }

  if (!validateEmail(email)) {
    toast.error("Email không hợp lệ!");
    return;
  }

  const pwError = validatePassword(password);
  if (pwError) {
    toast.error(pwError);
    return;
  }

  try {
    const res = await postSignup(username, email, password);
    console.log("SIGNUP RES:", res);

    if (res && res.status === 201) {
      toast.success("Đăng ký thành công!");
      resetForm();
      navigate("/login");
    } else {
      toast.error("Đăng ký thất bại!");
    }
  } catch (error) {
    console.log("SIGNUP ERROR:", error);
    const apiErr = error.response?.data;

    if (apiErr) {
      // gom message lỗi từ backend
      const msgs = [];

      if (apiErr.username && Array.isArray(apiErr.username)) {
        // ví dụ backend: ["user with this username already exists."]
        msgs.push("Username đã tồn tại!");
      }

      if (apiErr.email && Array.isArray(apiErr.email)) {
        msgs.push("Email đã tồn tại!");
      }

      // nếu muốn dùng đúng tiếng Anh của backend thì:
      // msgs.push(apiErr.username[0]) / msgs.push(apiErr.email[0])

      if (msgs.length > 0) {
        toast.error(msgs.join(" | "));
      } else {
        toast.error("Đăng ký thất bại!");
      }
    } else {
      toast.error("Đăng ký thất bại!");
    }
  }
};

    return (
        <div>
        <div className="form-signup" >
            <h1>Đăng ký</h1>
            <form >
                <div className='username-signup'>
                    <input
                        id="signup-username"
                        type="text"
                        className="form-control"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                        placeholder="Nhập username..."
                    />
                </div>
                <div className="email-signup">
                    <input
                        id="signup-email"
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        placeholder="Nhập email..."
                    />
                </div>
                <div className="password-signup">
                    <input
                        id="signup-password"
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        placeholder="Nhập mật khẩu..."
                    />
                </div>
                <button type="submit" className="btn-signup"
                onClick={handleSignup}
                >Đăng ký</button>
            </form>
        </div>
         <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
                /> 
        </div>
    );
}

export default Signup;