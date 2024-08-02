import React from 'react'

const Gallery = () => {
    return (
        <div>
            <section className="text-gray-400 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="flex w-full mb-20 flex-wrap">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-white lg:w-1/3 lg:mb-0 mb-4">
                            Attendo in Action
                        </h1>
                        <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
                            Immerse yourself in the world of Attendo. Discover how our platform simplifies attendance tracking for schools and businesses. Explore our gallery to see real-life examples of how we've helped others. Get inspired by the positive impact Attendo can have on your organization.
                        </p>
                    </div>
                    <div className="flex flex-wrap md:-m-2 -m-1">
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full h-full object-center block shadow-2xl border rounded-lg" src="/attendo1.png" />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block shadow-2xl border rounded-lg" src="attendo2.png" />
                            </div>
                            <div className="md:p-2 p-1 w-full">
                                <img alt="gallery" className="w-full h-full object-cover object-center block shadow-2xl border rounded-lg" src="attendo3.png" />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-full">
                                <img alt="gallery" className="w-full h-full object-cover object-center block shadow-2xl border rounded-lg" src="attendo4.png" />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block shadow-2xl border rounded-lg" src="attendo5.png" />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block shadow-2xl border rounded-lg" src="attendo6.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Gallery