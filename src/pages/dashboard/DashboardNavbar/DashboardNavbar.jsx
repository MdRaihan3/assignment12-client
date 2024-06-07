import { Link } from 'react-router-dom';
import { IoIosNotifications } from "react-icons/io";
import useAuth from '../../../useHooks/useAuth';
import useRole from '../../../useHooks/useRole';
const DashboardNavbar = () => {
    const { user } = useAuth();
    const [role, , userDB] = useRole()
    console.log(role)
    console.log(userDB);

    const navLinks = <>
        <li className='  text-center text-lg'>
            <p>Available Coin {userDB?.coin}</p>
            <p>{role}</p>
        </li>
        <li className=' flex flex-col items-center'>
            <img className='h-10 w-10 rounded-full p-0 m-0' src={user?.photoURL} alt="" />
            <p className=' text-lg'>{user?.displayName}</p>
        </li>
        <li>
            <Link to={'/dashboard'}> <IoIosNotifications className=' text-2xl'></IoIosNotifications></Link>
        </li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost text-xl">RWorkers</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardNavbar;