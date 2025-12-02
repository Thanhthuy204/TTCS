
import axios from 'axios';

const postSignup = (username,email, password) => {
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);
    data.append("username", username);
    // data.append("role", role);
    return axios.post("http://localhost:8000/api/users/register/", data);
}
const postLogin = (email, password ) => {
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);
    return axios.post("http://localhost:8000/api/users/login/", data);
}
const changePassword = ( oldPassword, newPassword, confirmPassword) => {
    const token = localStorage.getItem("accessToken");
    const data = new FormData();
    data.append("old_password", oldPassword);
    data.append("new_password", newPassword);
     data.append("confirm_password", confirmPassword);
    return axios.post("http://localhost:8000/api/users/change-password/", data,
    { headers: {
        Authorization: `Bearer ${token}`,  // 👈 GỬI TOKEN TẠI ĐÂY
        // Nếu backend dùng TokenAuth thì đổi thành:
        // Authorization: `Token ${token}`,
      },})
}
const getMyProfile = () => {
    const token = localStorage.getItem("accessToken");
    return axios.get("http://localhost:8000/api/users/me/",
    { headers: {
        Authorization: `Bearer ${token}`,  // 👈 GỬI TOKEN TẠI ĐÂY
        // Nếu backend dùng TokenAuth thì đổi thành:
        // Authorization: `Token ${token}`,
      },})
}
const changeProfile = ( fullName, bio, address, phone, socialLink) => {
    const token = localStorage.getItem("accessToken");
     const data = {
    full_name: fullName,
    bio: bio,
    location: address,
    phone_number: phone,
    social_link: socialLink,
  };
    return axios.patch("http://localhost:8000/api/users/me/update-profile/", data,
    { headers: {
        Authorization: `Bearer ${token}`, 
        "Content-Type": "application/json", // 👈 GỬI TOKEN TẠI ĐÂY
        // Nếu backend dùng TokenAuth thì đổi thành:
        // Authorization: `Token ${token}`,
      },})
}
// lấy sản phẩm
const getProducts = () => {
    return axios.get("http://localhost:8000/api/products/");
}
const getListUsers = () => {
    return axios.get("http://localhost:8000/api/users/");
}
export { postSignup, postLogin, changePassword,getMyProfile, changeProfile, getListUsers, getProducts };

