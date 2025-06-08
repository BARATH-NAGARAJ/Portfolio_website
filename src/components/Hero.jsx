import React from 'react'
import { HERO } from '../constants'
import BARATH from '../assets/BARATH.jpg'
import { motion } from 'framer-motion'

const Hero = () => {
    const handleDownloadResume = async () => {
        try {
            const response = await fetch('/resume.pdf');
            
            if (!response.ok) {
                window.open('/resume.pdf', '_blank');
                return;
            }
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'Barath_Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
            
            console.log('Resume download initiated successfully!');
        } catch (error) {
            console.error('Error downloading resume:', error);
            window.open('/resume.pdf', '_blank');
        }
    };

    const handleDownloadResumeAlt = () => {
        window.open('/resume.pdf', '_blank');
    };

    return (
        <section className="flex min-h-screen flex-wrap items-center">
            {/* Text Section */}
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full md:w-1/2"
                style={{ willChange: 'transform, opacity' }}
            >
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]"
                >
                    {HERO.name}
                </motion.h2>
                
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="p-2 text-3xl tracking-tighter lg:text-4xl"
                >
                    {HERO.greet}
                </motion.p>
                
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-8 p-2 text-xl"
                >
                    {HERO.description}
                </motion.p>

                {/* Compact Icon Buttons in One Line */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="p-2 flex items-center gap-4"
                >
                    {/* Download Resume Icon Button */}
                    <motion.button
                        onClick={handleDownloadResume}
                        whileHover={{ 
                            scale: 1.1,
                            boxShadow: "0 8px 20px rgba(59, 130, 246, 0.4)"
                        }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 group"
                        title="Download Resume"
                    >
                        <svg 
                            className="w-6 h-6 group-hover:animate-bounce" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                            />
                        </svg>
                    </motion.button>
                    
                    {/* View Resume Icon Button */}
                    <motion.button
                        onClick={handleDownloadResumeAlt}
                        whileHover={{ 
                            scale: 1.1,
                            boxShadow: "0 8px 20px rgba(34, 197, 94, 0.4)"
                        }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-full shadow-lg hover:from-green-600 hover:to-teal-700 transition-all duration-300 group"
                        title="View Resume"
                    >
                        <svg 
                            className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
                            />
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" 
                            />
                        </svg>
                    </motion.button>

                    {/* Optional: Small text labels next to icons */}
                    <div className="hidden sm:flex flex-col text-sm text-gray-400 ml-2">
                    </div>
                </motion.div>
            </motion.div>

            {/* Image Section */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full md:w-1/2 lg:p-8"
                style={{ willChange: 'transform, opacity' }}
            >
                <div className="flex justify-center">
                    <motion.img 
                        whileHover={{ 
                            scale: 1.02,
                            transition: { duration: 0.2 }
                        }}
                        src={BARATH} 
                        width={550}  
                        height={550} 
                        alt="Barath" 
                        className="rounded-3xl shadow-lg"
                        loading="eager"
                        style={{ willChange: 'transform' }}
                    />
                </div> 
            </motion.div>
        </section>
    )
}

export default Hero