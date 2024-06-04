import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuth from "../../../useHooks/useAuth";
import useAxiosPublic from "../../../useHooks/useAxiosPublic";

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    // const navigate = useNavigate()

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    image: result.user?.photoURL,
                    role: 'worker',
                    coin: 20
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        // navigate('/')
                        if (res.data?.insertedId) {
                            Swal.fire('Successfully Registered')
                        }
                        Swal.fire('Successfully Logged in')
                    })
            })
    }

    return (
        <div className=" mb-4 text-center">
            <div className="divider">or login with</div>
            <div>
                <button onClick={handleGoogleSignIn} className=" btn btn-primary btn-outline"><FaGoogle></FaGoogle> Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;