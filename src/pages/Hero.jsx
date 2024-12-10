import { Link } from "react-router-dom";

function Hero() {
    return (
        <div className="bg-bg-image bg-cover bg-no-repeat bg-center min-h-screen opacity-50">
            <div className="flex items-center justify-center h-auto">
                <div className="w-full max-w-6xl px-4">
                    <h1 className="py-16 text-5xl font-bold text-center text-dark mb-8">
                        AURAFem
                    </h1>

                    <div className="flex flex-col md:flex-row gap-4">
                        <Link
                            to="/patient"
                            className="flex-1 h-[300px] flex justify-center items-center bg-secondary text-3xl font-semibold text-center py-8 rounded-md shadow-md cursor-pointer"
                        >
                            Patient
                        </Link>
                        <div className="flex-1 h-[300px] flex justify-center items-center bg-secondary text-3xl font-semibold text-center py-8 rounded-md shadow-md cursor-pointer">
                            Doctor
                        </div>
                        <div className="flex-1 h-[300px] flex justify-center items-center bg-secondary text-3xl font-semibold text-center py-8 rounded-md shadow-md cursor-pointer">
                            Insurance Agent
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
