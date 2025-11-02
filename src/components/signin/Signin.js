import { useState } from 'react';
import './Signin.css'

const Formsignin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        alert(`Đăng nhập với email: ${email}, mật khẩu: ${password}`);
    };

    return (
        <div className="form-signin">
            <h1>Đăng nhập</h1>
            <form >
                <div className="email-signin">
                    
                    <input
                        id="signin-email"
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        placeholder="Nhập email..."
                    />
                </div>
                <div className="password-signin">
                    <input
                        id="signin-password"
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        placeholder="Nhập mật khẩu..."
                    />
                </div>
                <button type="submit" className="btn-signin">Đăng nhập</button>
                <div>
                <p>
                 Bạn chưa có tài khoản? 
                <a href="/signup" class="link-signup">Đăng kí ngay.</a>
                </p>

                </div>
            </form>
        </div>
    );
}

export default Formsignin;