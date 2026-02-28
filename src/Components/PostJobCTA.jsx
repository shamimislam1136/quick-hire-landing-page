const PostJobCTA = () => {
    return (
        <section className="container mx-auto px-6 py-16">
            <div 
                className="relative min-h-[470px] lg:h-[480px] flex items-start lg:items-center overflow-hidden"
                style={{
                    backgroundImage: "url('/Rectangle 2742.png')",
                    backgroundSize: '100% 100%', 
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            >
                <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-start lg:items-center justify-between w-full h-full relative z-10 pt-12 lg:pt-0">
                    
                    <div className="w-full lg:w-1/2 text-white z-20 flex flex-col items-center lg:items-start">
                        <h2 className="text-[32px] lg:text-5xl text-center lg:text-left font-extrabold leading-tight mb-4 lg:mb-6">
                            Start posting <br className="hidden lg:block" /> jobs today
                        </h2>
                        <p className="text-blue-100 text-lg text-center lg:text-left lg:text-xl mb-8 opacity-90 max-w-[280px] lg:max-w-full">
                            Start posting jobs for only $10.
                        </p>
                        <button className="bg-white text-[#4640DE] px-10 py-4 font-bold text-lg hover:bg-gray-100 transition-all shadow-lg w-full sm:w-auto">
                            Sign Up For Free
                        </button>
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-end self-end">
                        <img 
                            src="/3.1 Dashboard Company.png" 
                            alt="Dashboard Preview" 
                            className="w-[90%] md:w-[70%] lg:w-full lg:max-w-[580px] shadow-2xl rounded-t-md border-x border-t border-white/10 object-bottom translate-y-2 lg:translate-y-8"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PostJobCTA;