import Image from 'next/image'
import React from 'react'

export const WhyUs = () => {
  return (
    <section className="text-gray-700 body-font mt-10">
    <div className="flex justify-center text-3xl font-bold text-gray-800 text-center">
        Why Us?
    </div>
    <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap text-center justify-center">
            <div className="p-4 md:w-1/4 sm:w-1/2">
                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                    <div className="flex justify-center">
                        <Image src="/img1.png" className="w-32 mb-3"  width={100} height={100}alt='mksdfs'/>
                    </div>
                    <h2 className="title-font font-regular text-2xl text-gray-900">Latest Technology</h2>
                </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2">
                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                    <div className="flex justify-center">
                    <Image src="/img2.png" className="w-32 mb-3"  width={100} height={100}alt='mksdfs'/>

                    </div>
                    <h2 className="title-font font-regular text-2xl text-gray-900">Reasonable Rates</h2>
                </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2">
                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                    <div className="flex justify-center">
                    <Image src="/img3.png" className="w-32 mb-3"  width={100} height={100}alt='mksdfs'/>
                    </div>
                    <h2 className="title-font font-regular text-2xl text-gray-900">Time Efficiency</h2>
                </div>
            </div>

            <div className="p-4 md:w-1/4 sm:w-1/2">
                <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                    <div className="flex justify-center">
                    <Image src="/img4.png" className="w-32 mb-3"  width={100} height={100}alt='mksdfs'/>
                    </div>
                    <h2 className="title-font font-regular text-2xl text-gray-900">Expertise in Industry</h2>
                </div>
            </div>

        </div>
    </div>
</section>
  )
}
