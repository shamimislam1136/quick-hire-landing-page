const LatestJobs = () => {
    const jobs = [
        { id: 1, title: "Social Media Assistant", company: "Nomad", location: "Paris, France", logo: "/Nomad.png", tags: ["Full-Time", "Marketing", "Design"] },
        { id: 2, title: "Social Media Assistant", company: "Netlify", location: "Paris, France", logo: "/social-media-manager.png", tags: ["Full-Time", "Marketing", "Design"] },
        { id: 3, title: "Brand Designer", company: "Dropbox", location: "San Fransisco, USA", logo: "/brand.png", tags: ["Full-Time", "Marketing", "Design"] },
        { id: 4, title: "Brand Designer", company: "Maze", location: "San Fransisco, USA", logo: "/brand-designer.jpg", tags: ["Full-Time", "Marketing", "Design"] },
        { id: 5, title: "Interactive Developer", company: "Terraform", location: "Hamburg, Germany", logo: "/interactive.png", tags: ["Full-Time", "Marketing", "Design"] },
        { id: 6, title: "Interactive Developer", company: "Udacity", location: "Hamburg, Germany", logo: "/interactive-developer.png", tags: ["Full-Time", "Marketing", "Design"] },
        { id: 7, title: "HR Manager", company: "Packer", location: "Lucern, Switzerland", logo: "/hr.png", tags: ["Full-Time", "Marketing", "Design"] },
        { id: 8, title: "HR Manager", company: "Webflow", location: "Lucern, Switzerland", logo: "/hr-manager.png", tags: ["Full-Time", "Marketing", "Design"] },
    ];

    return (
        <section className="container mx-auto px-6 py-16 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <line x1="100" y1="0" x2="0" y2="100" stroke="#4640DE" strokeWidth="0.1" />
                    <line x1="80" y1="0" x2="100" y2="20" stroke="#4640DE" strokeWidth="0.1" />
                </svg>
            </div>

            <div className="flex justify-between items-center mb-12 relative z-10">
                <h2 className="text-3xl lg:text-5xl font-bold text-[#25324B]">
                    Latest <span className="text-[#26A4FF]">jobs open</span>
                </h2>
                <a href="#" className="hidden md:flex items-center text-[#4640DE] font-bold hover:underline">
                    Show all jobs 
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
                {jobs.map((job) => (
                    <div 
                        key={job.id} 
                        className="flex flex-col sm:flex-row items-start sm:items-center p-6 bg-white border border-gray-100 hover:shadow-lg transition-all cursor-pointer group"
                    >
                        <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center mb-4 sm:mb-0 sm:mr-6">
                            <img 
                                src={job.logo} 
                                alt={job.company} 
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>

                        <div className="flex-grow">
                            <h3 className="text-xl font-bold text-[#25324B] group-hover:text-[#4640DE] transition-colors">
                                {job.title}
                            </h3>
                            <p className="text-[#7C8493] text-sm mb-3">
                                {job.company} • {job.location}
                            </p>

                            <div className="flex flex-wrap gap-2 items-center">
                                <span className="px-3 py-1 bg-[#EBFFF9] text-[#56CDAD] text-xs font-bold rounded-full border border-[#56CDAD]/20">
                                    {job.tags[0]}
                                </span>
                                <div className="h-4 w-[1px] bg-gray-200 mx-1 hidden sm:block"></div>
                                <span className="px-3 py-1 bg-white text-[#FFB836] text-xs font-bold rounded-full border border-[#FFB836]">
                                    {job.tags[1]}
                                </span>
                                <span className="px-3 py-1 bg-white text-[#4640DE] text-xs font-bold rounded-full border border-[#4640DE]">
                                    {job.tags[2]}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="mt-8 md:hidden flex justify-center">
                <a href="#" className="flex items-center text-[#4640DE] font-bold">
                    Show all jobs <span className="ml-2">→</span>
                </a>
            </div>
        </section>
    );
};

export default LatestJobs;