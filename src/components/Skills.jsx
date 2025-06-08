// import React from 'react'
// import { SKILLS } from '../constants'
// import { motion } from 'framer-motion'

// const containerVariants = {
//     hidden: { 
//         opacity: 0, 
//         y: 20 
//     },
//     visible: { 
//         opacity: 1,
//         y: 0,
//         transition: {
//             duration: 0.6,
//             staggerChildren: 0.1,
//             delayChildren: 0.3,
//         }
//     },
// }

// const itemVariants = {
//     hidden: {
//         opacity: 0, 
//         x: -20 
//     },
//     visible: { 
//         opacity: 1, 
//         x: 0, 
//         transition: { 
//             duration: 0.5,
//             ease: "easeOut"
//         }
//     }
// }

// const Skills = () => {
//     return (
//         <div className="container mx-auto" id="skills">
//             <motion.h2 
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 viewport={{ once: true }}
//                 className="mb-12 mt-20 text-center text-4xl font-semibold"
//             >
//                 Skills
//             </motion.h2>
            
//             <motion.div 
//                 initial="hidden"
//                 whileInView="visible"
//                 variants={containerVariants}
//                 viewport={{ once: true, amount: 0.3 }}
//                 className="mx-2 flex flex-col rounded-3xl px-4 py-2 lg:px-20 border border-stone-50/30"
//             >
//                 {SKILLS.map((skill, index) => (
//                     <motion.div
//                         variants={itemVariants}
//                         key={index}
//                         className={`py-6 flex items-center justify-between ${
//                             index !== SKILLS.length - 1 ? "border-b border-stone-50/30" : ""
//                         }`}
//                     >
//                         <div className="flex items-center">
//                             <motion.div
//                                 whileHover={{ scale: 1.1, rotate: 5 }}
//                                 transition={{ duration: 0.2 }}
//                             >
//                                 {skill.icon}
//                             </motion.div>
//                             <h3 className="px-6 text-lg lg:text-2xl">{skill.name}</h3>
//                         </div>
//                         <div className="text-md font-semibold lg:text-xl">
//                             <motion.span
//                                 whileHover={{ scale: 1.05 }}
//                                 transition={{ duration: 0.2 }}
//                             >
//                                 {skill.experience}
//                             </motion.span>
//                         </div>
//                     </motion.div>
//                 ))}
//             </motion.div>
//         </div>
//     )
// }

// export default Skills

import React from 'react'
import { SKILLS } from '../constants'
import { motion } from 'framer-motion'

const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, y: 0,
        transition: { duration: 0.8, staggerChildren: 0.08, delayChildren: 0.2 }
    }
}

const skillVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { 
        opacity: 1, y: 0, scale: 1,
        transition: { duration: 0.6, ease: "easeOut" }
    }
}

const Skills = () => {
    return (
        <div className="min-h-screen flex items-center justify-center py-16" id="skills">
            <div className="container mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl lg:text-4xl font-normal mb-8 bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent">
                        Skills
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Modern technologies and frameworks I use to craft seamless and engaging digital experiences.
                    </p>
                </motion.div>

                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    variants={containerVariants}
                    viewport={{ once: true, amount: 0.2 }}
                    className="relative"
                >
                    <div className="flex flex-wrap justify-center gap-6 lg:gap-8 max-w-5xl mx-auto">
                        {SKILLS.map((skill, index) => (
                            <motion.div
                                key={index}
                                variants={skillVariants}
                                className="group relative"
                            >
                                {skill.website ? (
                                    <motion.a
                                        href={skill.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ 
                                            y: -12, 
                                            scale: 1.08,
                                            rotateY: 10,
                                            boxShadow: "0 25px 50px rgba(255, 255, 255, 0.15)"
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        className="block relative overflow-hidden"
                                        title={`Learn more about ${skill.name}`}
                                    >
                                        <div className="w-36 h-36 lg:w-40 lg:h-40 bg-gradient-to-br from-gray-800/90 via-gray-900/90 to-black/90 backdrop-blur-md border border-gray-600/30 rounded-2xl flex flex-col items-center justify-center p-4 hover:border-white/50 transition-all duration-300 shadow-xl group-hover:shadow-white/20">
                                            {/* Animated background */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-gray-100/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                                            
                                            <motion.div
                                                whileHover={{ rotateZ: 15, scale: 1.1 }}
                                                transition={{ duration: 0.3 }}
                                                className="relative z-10 mb-2"
                                            >
                                                {skill.icon}
                                            </motion.div>
                                            <h3 className="text-xs lg:text-sm font-semibold text-gray-200 group-hover:text-white text-center leading-tight relative z-10 transition-colors duration-200">
                                                {skill.name}
                                            </h3>
                                        </div>
                                    </motion.a>
                                ) : (
                                    <motion.div
                                        whileHover={{ 
                                            y: -8, 
                                            scale: 1.05,
                                            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="group relative overflow-hidden"
                                    >
                                        <div className="w-36 h-36 lg:w-40 lg:h-40 bg-gradient-to-br from-gray-800/90 via-gray-900/90 to-black/90 backdrop-blur-md border border-gray-600/30 rounded-2xl flex flex-col items-center justify-center p-4 hover:border-gray-500/50 transition-all duration-300 shadow-xl">
                                            <motion.div
                                                whileHover={{ rotateZ: 15, scale: 1.1 }}
                                                transition={{ duration: 0.3 }}
                                                className="mb-2"
                                            >
                                                {skill.icon}
                                            </motion.div>
                                            <h3 className="text-xs lg:text-sm font-semibold text-gray-200 group-hover:text-white text-center leading-tight transition-colors duration-200">
                                                {skill.name}
                                            </h3>
                                        </div>
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Skills