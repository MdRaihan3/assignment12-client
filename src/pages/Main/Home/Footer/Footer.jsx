import { FaFacebook, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=" p-10 bg-neutral text-neutral-content">
            <footer className="footer">
                <aside>
                   <img className=" h-16 w-16" src="logo.png" alt="" />
                    <p className=" text-lg">RWorker<br />since 2014</p>
                </aside>
                <nav>
                    <h6 className="footer-title text-lg">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.facebook.com">
                            <FaFacebook className=" h-6 w-6"></FaFacebook></a>
                        <a href="https://github.com/MdRaihan3">
                            <FaGithub className=" h-6 w-6"></FaGithub></a>
                    </div>
                </nav>
            </footer>
            <p className=" text-center pt-4">Copyright © 2024 - All right reserved by RWorker</p>
        </div>
    );
};

export default Footer;