import axios from 'axios'
import { useForm } from 'react-hook-form';
import useAuth from '../../../../useHooks/useAuth';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

const imageHostingApi = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_API_KEY}`
const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useAuth()

    const handleRegister = async (data) => {
        console.log(data);
        const imageFile = { image: data.image[0] }
        const res = await axios.post(imageHostingApi, imageFile, {
            headers: { "content-type": 'multipart/form-data' }
        })
        console.log(res.data.data.display_url);
        createUser(data?.email, data?.password)
            .then(result => {
                console.log(result);
                updateUserProfile(data?.name, res.data.data.display_url)
                    .then(() => {
                        Swal.fire('Successfully Registered')
                    }).catch((err) =>{  
                        Swal.fire({
                        icon: 'error',
                        text: 'Check your email and password again'})
                        console.log(err)})
            })
            .catch(err => {
                console.log(err.Error);
                Swal.fire({
                    icon: 'error',
                    text: 'Check your email and password again'
                })
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(handleRegister)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name"
                                    {...register("name", { required: true })}
                                    className="input input-bordered" />
                                {errors.password === 'required' && <p className=' text-red-600'>Name is required </p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="file" {...register("image", { required: true })} />
                                {errors.password?.type === 'required' && <p className=' text-red-600'>Image is required </p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Select role</span>
                                </label>
                                <select {...register("selectRole")}>
                                    <option value={'worker'}>Worker</option>
                                    <option value={'taskCreator'}>Task Creator</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email"
                                    {...register("email", { required: true })}
                                    className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className=' text-red-600'>Email is required </p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password"
                                    {...register("password",
                                        {
                                            required: true, minLength: 6
                                            // ,pattern: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8}$/i
                                        })
                                    }
                                    className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className=' text-red-600'>Password is required </p>}
                                {errors.password?.type === 'minLength' && <p className=' text-red-600'>Password must be minimum 6 characters </p>}
                                {/* {errors.password?.type === 'pattern' && <p className=' text-red-600'>Password must have at least a capital letter,a small letter and a digit  </p>} */}
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <p className=' text-center py-3'>Already have an account?
                            <Link to='/login'>
                                <span className='text-blue-500'> Login</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Register;