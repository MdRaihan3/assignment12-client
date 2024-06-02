import { useForm } from "react-hook-form"
import useAuth from "../../../useHooks/useAuth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    const { signIn, googleSignIn } = useAuth()
    const { register, handleSubmit } = useForm()

    const handleLogin = async (data) => {
        signIn(data?.email, data?.password)
            .then(result => {
                console.log(result);
                Swal.fire({
                    icon: 'success',
                    text: 'Successfully Logged in'
                })
            })
    }

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result);
            Swal.fire({
                icon: 'success',
                text: 'Successfully Logged in'
            })
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(handleLogin)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email"
                                    {...register("email", { required: true })}
                                    className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password"
                                    {...register("password", { required: true })}
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className=' text-center py-3'>Do not have an account?
                            <Link to={'/register'}>
                                <span to='/register' className=' text-blue-500'> Register</span>
                            </Link>
                        </p>
                        <div className="divider">Also log in with</div>
                        <button onClick={handleGoogleSignIn} className=" btn btn-primary btn-sm btn-outline text-center mb-3">
                        <FaGoogle></FaGoogle> Google 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;