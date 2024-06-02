
const TestimonialSection = () => {
    return (
        <div className=" my-10">
            <h1 className=" text-center text-2xl my-3">Testimonial</h1>
            <div className="grid grid-cols-3 gap-6">
                <div className=" border rounded-lg p-4 flex flex-col">
                    <p className=" flex-grow mb-3">Really good. Pretty much everything is setup nicely. Support team is very responsive to problems.</p>
                    <div className="flex">
                        <img className="w-12 h-12 rounded-full" src="https://i.ibb.co/1RbhDKK/ad.webp" alt="" />
                        <h1 className=" ml-4 flex items-center">Jr. Jonathan</h1>
                    </div>
                </div>
                <div className=" border rounded-lg p-4 flex flex-col">
                    <p className=" flex-grow">An awesome website. Easy to Interface. Very reliable.</p>
                    <div className=" flex">
                        <img className="w-12 h-12 rounded-full" src="https://i.ibb.co/hHM563f/af.jpg" alt="" />
                        <h1 className=" ml-4 flex items-center">Michael Jackson</h1>
                    </div>
                </div>
                <div className=" border rounded-lg p-4 flex flex-col">
                    <p className=" flex-grow">Excellent performances. Best thing is it is reliable. No charge for register! </p>
                    <div className=" flex">
                        <img className="w-12 h-12 rounded-full" src="https://i.ibb.co/qnR9twC/ae.webp" alt="" />
                        <h1 className=" ml-4 flex items-center">Jackey Chan</h1>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default TestimonialSection;