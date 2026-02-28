import { Megaphone, BarChart2, PencilRuler, CreditCard, Monitor, Code, Briefcase, Users } from "lucide-react";

const Category = () => {
    const categories = [
        { name: "Design", jobs: "235 jobs available", icon: PencilRuler, active: false },
        { name: "Sales", jobs: "756 jobs available", icon: BarChart2, active: false },
        { name: "Marketing", jobs: "140 jobs available", icon: Megaphone, active: true },
        { name: "Finance", jobs: "325 jobs available", icon: CreditCard, active: false },
        { name: "Technology", jobs: "436 jobs available", icon: Monitor, active: false },
        { name: "Engineering", jobs: "542 jobs available", icon: Code, active: false },
        { name: "Business", jobs: "211 jobs available", icon: Briefcase, active: false },
        { name: "Human Resource", jobs: "346 jobs available", icon: Users, active: false },
    ];

    return (
        <section className="container mx-auto px-6 py-16">
            <div className="flex justify-between items-end mb-10">
                <h2 className="text-3xl lg:text-5xl font-bold text-[#25324B]">
                    Explore by <span className="text-[#26A4FF]">category</span>
                </h2>
                <a href="#" className="hidden md:flex items-center text-[#4640DE] font-bold hover:underline">
                    Show all jobs 
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categories.map((cat, index) => {
                    const IconComponent = cat.icon;
                    
                    return (
                        <div 
                            key={index}
                            className={`p-6 sm:p-8 border transition-all cursor-pointer group flex flex-row sm:flex-col items-start sm:items-start gap-4 sm:gap-0 ${
                                cat.active 
                                ? 'bg-white sm:bg-[#4640DE] border-gray-100 sm:border-[#4640DE] text-[#25324B] sm:text-white shadow-none sm:shadow-xl' 
                                : 'bg-white border-gray-100 hover:border-[#4640DE] hover:shadow-lg text-[#25324B]'
                            }`}
                        >
                            <div className={`sm:mb-6 flex-shrink-0 ${
                                cat.active ? 'text-[#4640DE] sm:text-white' : 'text-[#4640DE]'
                            }`}>
                                <IconComponent size={32} strokeWidth={2} />
                            </div>

                            <div className="flex-grow">
                                <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 leading-tight">
                                    {cat.name}
                                </h3>

                                <div className="flex items-center justify-between">
                                    <p className={`text-sm sm:text-lg ${
                                        cat.active ? 'text-[#7C8493] sm:text-blue-100' : 'text-[#7C8493]'
                                    }`}>
                                        {cat.jobs}
                                    </p>
                                    
                                    <svg 
                                        className={`block w-6 h-6 transform group-hover:translate-x-1 transition-transform ${
                                            cat.active ? 'sm:text-white' : 'text-[#25324B]'
                                        }`} 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="mt-8 md:hidden text-left">
                <a href="#" className="text-[#4640DE] font-bold flex items-center justify-start">
                    Show all jobs <span className="ml-2">→</span>
                </a>
            </div>
        </section>
    );
};

export default Category;