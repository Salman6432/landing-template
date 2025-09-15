import React from 'react'

const About = () => {
  return (
    <>
        {/* Hero */}
        <section className='pt-[100px] hero-main'>
            <div className="custom-container">
                <div className="grid md:grid-cols-3 gap-10 items-center w-full">
                    <div className='flex flex-col gap-4 w-full'>
                        <h1 className='text-white'>About Us</h1>
                        <p className='!text-white'>Home / About</p>
                      </div>
                      <div className='md:block hidden'></div>
                    <div className='flex justify-end w-full'>
                        <img src="/assets/imgs/hero-img.png" className='w-full h-full max-w-[300px] ms-auto' alt="" />
                    </div>
                </div>
            </div>
        </section> 
    </>
  )
}

export default About
