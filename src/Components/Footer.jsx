import { Facebook, Instagram, Dribbble, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#202430] text-white pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
                    
                    <div className="lg:w-1/3 space-y-6">
                        <div className="flex items-center gap-2">
                            <img 
                                src="/Logo 2.png" 
                                alt="QuickHire Logo" 
                                className="h-8 w-auto object-contain"
                            />
                        </div>
                        <p className="text-[#D6DDEB] leading-relaxed max-w-sm">
                            Great platform for the job seeker that passionate about startups. Find your dream job easier.
                        </p>
                    </div>

                    <div className="flex flex-row gap-16 md:gap-24 lg:gap-32">
                        <div>
                            <h4 className="text-xl font-bold mb-6">About</h4>
                            <ul className="space-y-4 text-[#D6DDEB]">
                                <li><a href="#" className="hover:text-white transition-colors">Companies</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Advice</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold mb-6">Resources</h4>
                            <ul className="space-y-4 text-[#D6DDEB]">
                                <li><a href="#" className="hover:text-white transition-colors">Help Docs</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Guide</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Updates</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:w-1/3">
                        <h4 className="text-xl font-bold mb-6">Get job notifications</h4>
                        <p className="text-[#D6DDEB] mb-6">
                            The latest job news, articles, sent to your inbox weekly.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-0">
                            <input 
                                type="email" 
                                placeholder="Email Address" 
                                className="bg-white text-gray-900 px-4 py-3 outline-none w-full flex-grow mb-2 sm:mb-0"
                            />
                            <button className="bg-[#4640DE] px-6 py-3 font-bold hover:bg-[#3b36c1] transition-colors whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[#D6DDEB] opacity-50">
                        2021 @ QuickHire. All rights reserved.
                    </p>
                    
                    <div className="flex gap-4">
                        {[
                            { Icon: Facebook, link: '#' },
                            { Icon: Instagram, link: '#' },
                            { Icon: Dribbble, link: '#' },
                            { Icon: Linkedin, link: '#' },
                            { Icon: Twitter, link: '#' }
                        ].map((social, index) => (
                            <a 
                                key={index} 
                                href={social.link}
                                className="w-10 h-10 bg-[#323641] rounded-full flex items-center justify-center hover:bg-[#4640DE] transition-all group"
                            >
                                <social.Icon className="w-5 h-5 text-white/80 group-hover:text-white" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;