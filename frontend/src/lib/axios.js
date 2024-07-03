import axios from "axios";

const axiosInstance = axios.create({
	baseURL: import.meta.mode === "development" ? "http://localhost:5000/api" : "/api",
	withCredentials: true, // send cookies to the server
});

export default axiosInstance;

// Code optimization: 2025-10-18T08:57:11.510Z
// Code optimization: 2025-10-19T11:20:18.290Z
// Code optimization: 2025-10-17T11:17:45.611Z
// Code optimization: 2025-10-17T18:28:29.560Z