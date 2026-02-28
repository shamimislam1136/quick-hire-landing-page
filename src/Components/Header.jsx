import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div id="header" className="bg-[#F8F8FD] min-h-screen relative flex flex-col overflow-x-hidden">
            
            <div className="absolute bottom-0 lg:top-0 right-0 w-full lg:w-[60%] h-[50%] lg:h-full pointer-events-none z-0">
                <img 
                    src="/Pattern.png" 
                    alt="Background Pattern" 
                    className="w-full h-full object-cover object-right-bottom lg:object-right"
                />
            </div>

            <nav className="container mx-auto px-6 py-6 flex items-center justify-between relative z-50">
                <div className="flex items-center space-x-12">
                    <div className="flex items-center space-x-2">
                        <img 
                            src="/Logo.png" 
                            alt="QuickHire Logo" 
                            className="object-contain" 
                        />
                    </div>

                    <div className="hidden md:flex space-x-8 text-gray-500 font-semibold">
                        <a href="#" className="hover:text-[#4640DE] transition">Find Jobs</a>
                        <a href="#" className="hover:text-[#4640DE] transition">Browse Companies</a>
                    </div>
                </div>

                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#111827] p-2">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                        </svg>
                    </button>
                </div>

                <div className="hidden md:flex items-center space-x-6">
                    <a href="#" className="text-[#4640DE] font-bold">Login</a>
                    <div className="h-10 w-[2px] bg-gray-300"></div>
                    <a href="#" className="bg-[#4640DE] text-white px-8 py-3 font-bold hover:bg-opacity-90 transition">Sign Up</a>
                </div>
            </nav>

            <main className="flex-grow relative z-10 flex items-center">
                <div className="container mx-auto px-6 flex flex-col lg:flex-row h-full items-center">
                    
                    <div className="w-full lg:w-[55%] py-12 lg:py-24 z-20">
                        <h1 className="text-[44px] lg:text-[76px] font-extrabold text-[#25324B] leading-[1.1]">
                            Discover <br /> more than <br />
                            <span className="text-[#26A4FF] relative inline-block">
                                5000+ Jobs
                                <img 
                                    src="/Group.png" 
                                    className="absolute left-0 -bottom-11 w-full h-auto pointer-events-none" 
                                    alt="underline" 
                                />
                            </span>
                        </h1>
                        
                        <p className="mt-13 lg:mt-12 text-[#515B6F] text-lg lg:text-xl max-w-lg leading-relaxed">
                            Great platform for the job seeker that searching for new career heights and passionate about startups.
                        </p>

                        <div className="mt-10 bg-white p-2 lg:p-3 shadow-2xl flex flex-col md:flex-row items-stretch md:items-center w-full lg:w-[130%] relative z-40">
                            <div className="flex items-center flex-1 px-4 py-3">
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                <input type="text" placeholder="Job title or keyword" className="ml-3 outline-none w-full text-base lg:text-lg border-[#D6DDEB] border-b-1 pb-1" />
                            </div>
                            <div className="flex items-center flex-1 px-4 py-3">
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg>
                                <select className="ml-3 outline-none w-full text-[#25324B] bg-transparent text-base lg:text-lg font-medium border-[#D6DDEB] border-b-1 pb-1">
                                    <option>Florence, Italy</option>
                                </select>
                            </div>
                            <button className="bg-[#4640DE] text-white px-8 py-4 mt-2 md:mt-0 font-bold text-lg">
                                Search my job
                            </button>
                        </div>

                        <p className="mt-6 text-[#515B6F]">
                            <span className="font-semibold text-gray-400">Popular :</span> UI Designer, UX Researcher, Android, Admin
                        </p>
                    </div>

                    <div className="hidden lg:flex lg:w-[45%] absolute right-0 bottom-0 h-full items-end justify-end pointer-events-none">
                        <img 
                            src="/Pic.png" 
                            alt="Professional Man" 
                            className="h-[90vh] w-auto object-contain object-right-bottom z-10"
                        />
                    </div>

                </div>
            </main>
        </div>
    );
};

export default Header;