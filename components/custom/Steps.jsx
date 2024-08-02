import { ChartColumnBig, GraduationCap, Hand } from 'lucide-react'
import React from 'react'

const Steps = () => {
    return (
        <div>
            <section className="text-gray-400 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="flex flex-wrap w-full">
                        <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">Secure Authentication</h2>
                                    <p className="leading-relaxed">
                                        Users are required to log in using Clerk Auth, a robust authentication system, ensuring secure access to the attendance management platform.
                                    </p>
                                </div>
                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                    <GraduationCap className="w-5 h-5" />
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                                        Student and Year Level Setup
                                    </h2>
                                    <p className="leading-relaxed">
                                        Create and manage student profiles and assign them to specific year levels within the system. This step establishes the foundation for attendance tracking.
                                    </p>
                                </div>
                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                    <Hand className="w-5 h-5" />
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                                        Comprehensive Attendance Management
                                    </h2>
                                    <p className="leading-relaxed">
                                        Efficiently record and manage student attendance on a monthly basis. Utilize advanced filtering options to select specific months and year levels for detailed analysis.
                                    </p>
                                </div>
                            </div>
                            <div className="flex relative pb-12">
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                                    <ChartColumnBig className="w-5 h-5" />
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">Data-Driven Insights</h2>
                                    <p className="leading-relaxed">
                                        Gain valuable insights into attendance patterns through comprehensive dashboard statistics. Visualize attendance data using interactive graphs and informative cards to make data-driven decisions.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <img className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12 shadow-2xl" src="/attendo6.png" alt="step" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Steps