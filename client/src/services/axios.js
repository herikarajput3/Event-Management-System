import axios from "axios";
import toast from "react-hot-toast";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api',
    withCredentials: true,
});

// Request
axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
},
    (error) => {
        return Promise.reject(error);
    }
);

// Response
axiosInstance.interceptors.response.use(
    (res) => res,
    (error) => {
        const status = error.response?.status;
        const message = error.response?.data?.message || "Something went wrong";
        toast.error(message);
        if (status === 401) {
            error.isAuthError = true;
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;