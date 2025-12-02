import { useState } from 'react';
import './Login.scss';
import { ToastContainer, Bounce, toast } from 'react-toastify';
import { postLogin } from '../../services/ApiService';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      toast.error("Vui lòng nhập đầy đủ email và mật khẩu!");
      return;
    }

    try {
      const res = await postLogin(email, password);
      console.log("LOGIN RES:", res);

      if (res && res.status === 200) {
        const data = res.data;

        // 👉 cố gắng lấy token theo vài key phổ biến, bạn chỉnh lại nếu API khác
        const accessToken =
          data.access ||
          data.token ||
          data.key ||
          data.auth_token ||
          null;

        // 👉 lấy thông tin user
        const user =
          data.user ||        // nếu backend trả { user: {...}, access: '...' }
          {
            id: data.id,
            email: data.email,
            username: data.username,
          };

        if (accessToken) {
          localStorage.setItem("accessToken", accessToken);
        }
        localStorage.setItem("user", JSON.stringify(user));

        toast.success("Đăng nhập thành công!");
        navigate("/");
      } else {
        toast.error("Đăng nhập thất bại!");
      }
    } catch (error) {
      console.log("LOGIN ERROR:", error);
      toast.error("Sai email hoặc mật khẩu!");
    }
  };

  return (
    <div>
      <div className="form-login">
        <h1>Đăng nhập</h1>
        <form>
          <div className="email-login">
            <input
              id="login-email"
              type="email"
              className="form-control"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              placeholder="Nhập email..."
            />
          </div>
          <div className="password-login">
            <input
              id="login-password"
              type="password"
              className="form-control"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              placeholder="Nhập mật khẩu..."
            />
          </div>

          <button
            type="submit"
            className="btn-login"
            onClick={handleLogin}
          >
            Đăng nhập
          </button>

          <div>
            <p>
              Bạn chưa có tài khoản?
              <a href="/signup" className="link-signup"> Đăng ký ngay.</a>
            </p>
          </div>
        </form>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default Login;
