import { useState } from 'react';
import './Signup.css'

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Đăng ký với:\nUsername: ${username}\nEmail: ${email}\nMật khẩu: ${password}`);
    };

    return (
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
                <button type="submit" className="btn-signup">Đăng ký</button>
            </form>
        </div>
    );
}

export default Signup;