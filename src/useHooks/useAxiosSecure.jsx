import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_SERVER_APi
})

const useAxiosSecure = () => {
    const { logOut } = useAuth()
    const navigate = useNavigate()

   axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        // console.log("request interrogated by interceptors", token)
        config.headers.authorization = `Bearer ${token}`
        return config
    }, function (error) {
        return Promise.reject(error)
    })
    // status 401 , 403
    axiosSecure.interceptors.response.use(function (response) {
        return response
    }, async (error) => {
        const status = error.response.status
        console.log('error in interceptor',error.response);
        // logout user
        if (status === 401 || status === 400 || status === 403) {
            await logOut();
            navigate('/login')
        }
        // console.log("error status in interceptors", status);
        return Promise.reject(error)
    })
    return axiosSecure
};

export default useAxiosSecure;