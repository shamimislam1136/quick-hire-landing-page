const FeaturedJobs = () => {
    const jobs = [
        { id: 1, title: "Email Marketing", company: "Revolut", location: "Madrid, Spain", type: "Full Time", tags: ["Marketing", "Design"], logo: "/r.jpg" },
        { id: 2, title: "Brand Designer", company: "Dropbox", location: "San Fransisco, US", type: "Full Time", tags: ["Design", "Business"], logo: "/brand.png" },
        { id: 3, title: "Email Marketing", company: "Pitch", location: "Berlin, Germany", type: "Full Time", tags: ["Marketing"], logo: "/pitch.png" },
        { id: 4, title: "Visual Designer", company: "Blinklist", location: "Granada, Spain", type: "Full Time", tags: ["Design"], logo: "/visual-designer.png" },
        { id: 5, title: "Product Designer", company: "ClassPass", location: "Manchester, UK", type: "Full Time", tags: ["Marketing", "Design"], logo: "/product-designer.jpg" },
        { id: 6, title: "Lead Designer", company: "Canva", location: "Ontario, Canada", type: "Full Time", tags: ["Design", "Business"], logo: "/canva.png" },
        { id: 7, title: "Brand Strategist", company: "GoDaddy", location: "Marseille, France", type: "Full Time", tags: ["Marketing"], logo: "/godady.png" },
        { id: 8, title: "Data Analyst", company: "Twitter", location: "San Diego, US", type: "Full Time", tags: ["Technology"], logo: "/twitter.jpg" },
    ];

    return (
        <section className="container mx-auto px-6 py-16">
            <div className="flex justify-between items-center mb-10">
                <h2 className="text-3xl lg:text-5xl font-bold text-[#25324B]">
                    Featured <span className="text-[#26A4FF]">jobs</span>
                </h2>
                <a href="#" className="hidden md:flex items-center text-[#4640DE] font-bold hover:underline">
                    Show all jobs 
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </a>
            </div>

            <div className="flex lg:grid lg:grid-cols-4 gap-6 overflow-x-auto lg:overflow-visible pb-8 lg:pb-0 scrollbar-hide snap-x snap-mandatory">
                {jobs.map((job) => (
                    <div 
                        key={job.id} 
                        className="min-w-[280px] sm:min-w-[320px] lg:min-w-0 p-6 border border-gray-100 bg-white hover:shadow-xl transition-all cursor-pointer group snap-center"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <img 
                                src={job.logo} 
                                alt={job.company} 
                                className="w-12 h-12 object-contain" 
                            />
                            <span className="px-3 py-1 border border-[#4640DE] text-[#4640DE] text-sm font-medium">
                                {job.type}
                            </span>
                        </div>

                        <h3 className="text-xl font-bold text-[#25324B] mb-1 group-hover:text-[#4640DE] transition-colors">
                            {job.title}
                        </h3>
                        <p className="text-[#7C8493] text-sm mb-4">
                            {job.company} • {job.location}
                        </p>
                        
                        <p className="text-[#7C8493] text-[14px] mb-6 line-clamp-2">
                            {job.company} is looking for {job.title} to help team ma ...
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {job.tags.map((tag, idx) => (
                                <span 
                                    key={idx} 
                                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                        tag === 'Marketing' ? 'bg-orange-50 text-orange-400' :
                                        tag === 'Design' ? 'bg-green-50 text-green-400' :
                                        'bg-blue-50 text-blue-400'
                                    }`}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 md:hidden">
                <a href="#" className="flex items-center text-[#4640DE] font-bold hover:underline">
                    Show all jobs 
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </a>
            </div>
        </section>
    );
};

export default FeaturedJobs;