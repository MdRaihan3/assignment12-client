import { Link } from "react-router-dom";
import useAuth from "../../../../useHooks/useAuth";
import useRole from "../../../../useHooks/useRole";

const Navbar = () => {
    const { user, logOut } = useAuth()
    const [ , ,userDB] = useRole()
    console.log(userDB);
    const navLinks =
        <>
            {
                user ?
                    <>
                        <li><button>Available Coin {userDB && userDB?.coin}</button></li>
                        <li><button>User Profile</button></li>
                        <li><Link to={'/dashboard'}>Dashboard</Link></li>
                        <button onClick={() => logOut()}
                            className="btn btn-outline btn-primary">Logout</button>
                    </> :
                    <>
                        <li><Link to={'/login'}>Login</Link></li>
                        <li><Link to={'/register'}>Register</Link></li>
                        <li><a href="https://youtube.com">Watch Demo</a></li>
                    </>
            }
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
                    <Link to={'/'} className="btn btn-ghost text-xl">
                       <img className=" h-12 w-12" src="logo.png" alt="" /> RWorkers</Link>
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

export default Navbar;