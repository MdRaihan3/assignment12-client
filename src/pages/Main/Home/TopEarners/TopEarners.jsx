import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../useHooks/useAxiosPublic";

const TopEarners = () => {
    const axiosPublic = useAxiosPublic()

    const { data: topEarners = [] } = useQuery({
        queryKey: ['top-Earn'],
        queryFn: async () => {
            const res = await axiosPublic.get('/top-earners')
            return res.data
        }
    })

    return (
        <div className=" my-8 rounded-lg">
            <h1 className=" text-2xl text-center mb-3">Top Earners</h1>
            <div className=" md:grid grid-cols-3 gap-6">
                {topEarners.length > 0 &&
                    topEarners.map(t =>
                        <div className=" border p-4 rounded-md space-y-2" key={t?._id}>
                            <div className="flex gap-3">
                                <img src={t?.image} className=" w-8 h-8 rounded-full" alt="" />
                                <h3 className=" text-lg">{t?.name}</h3>
                            </div>
                            <p>Email: {t?.email}</p>
                            <p>Available Coin: {t?.coin}</p>
                        </div>)
                }
            </div>

        </div>
    );
};

export default TopEarners;