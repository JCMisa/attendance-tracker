import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <section className="text-gray-400 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Want a Seamless Attendance Process?
                        <br />
                        <span className='logo-text font-bold'>Undergo</span> with <span className='logo-text font-bold'>Attendo</span>
                    </h1>
                    <p className="leading-relaxed mb-8">
                        Keep track student attendance with ease. Attendo's intuitive platform simplifies data collection and reporting, saving you time and effort. Gain valuable insights into attendance patterns to enhance student engagement and improve overall school performance. Experience seamless attendance management with Attendo.
                    </p>
                    <div className="flex justify-center">
                        <Link href={'/dashboard'}>
                            <button className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-300 rounded text-lg min-w-30">
                                Get Started
                            </button>
                        </Link>
                        <button className="ml-4 inline-flex text-gray-400 bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg min-w-30">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero