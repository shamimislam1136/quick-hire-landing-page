const Company = () => {
    return (
        <section id="company" className="container mx-auto px-6 py-12 lg:py-16">
            <p className="font-[400] text-[18px] text-[#202430] opacity-50 mb-8 text-left">
                Companies we helped grow
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 items-center justify-items-center lg:justify-items-start grayscale opacity-60">
                <img src="/vodafone-2017-logo.png" alt="Vodafone" className="h-8 lg:h-10 object-contain hover:grayscale-0 transition-all cursor-pointer" />
                <img src="/intel-3.png" alt="Intel" className="h-8 lg:h-10 object-contain hover:grayscale-0 transition-all cursor-pointer" />
                <img src="/tesla-9 1.png" alt="Tesla" className="h-6 lg:h-8 object-contain hover:grayscale-0 transition-all cursor-pointer" />
                <img src="/amd-logo-1.png" alt="AMD" className="h-8 lg:h-10 object-contain hover:grayscale-0 transition-all cursor-pointer" />
                <img src="/talkit 1.png" alt="Talkit" className="h-8 lg:h-10 object-contain hover:grayscale-0 transition-all cursor-pointer" />
            </div>
        </section>
    );
};

export default Company;