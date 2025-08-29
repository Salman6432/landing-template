import {ArrowUpRight, BadgeCheck, CheckCheckIcon, CheckCircle, Quote, Star} from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Home = () => {
  return (
    <>
      {/* Hero */}
      <section className='py-[100px] hero-main'>
        <div className="custom-container">
            <div className="grid grid-cols-2 gap-10 items-center">
                <div className='flex flex-col gap-4'>
                    <h1 className='text-white'>Lorem ipsum dolor sit amet.</h1>
                    <p className='!text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste minus quibusdam ipsa illo quisquam quo magni minima libero doloremque dolores.</p>
                    <Button variant='secondary' className="text-white w-fit px-10 py-6 text-md light-bg :hover-light-bg relative z-0 overflow-hidden">Get Started</Button>
                </div>
                <div>
                    <img src="/assets/imgs/hero-img.png" className='w-full h-full max-w-[500px] ms-auto' alt="" />
                </div>
            </div>
        </div>
      </section>

      {/* About Us */}
      <section className='py-[100px] bg-white'>
        <div className="custom-container">
            <div className="grid grid-cols-2 gap-10 items-center">
                <div>
                    <img src="/assets/imgs/hero-img.png" className='w-full h-full max-w-[500px] mr-auto' alt="" />
                </div>
                <div>
                    <div className="section-title-bage"><span>About Us</span></div>
                    <h2 className='mb-4'>About Us</h2>
                    <p className='mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste minus quibusdam ipsa illo quisquam quo magni minima libero doloremque dolores.</p>
                    <Button variant='default' className="p-6 text-md relative z-0 overflow-hidden">Get Started</Button>
                </div>
            </div>
        </div>
      </section>

      {/* Cards */}
      <section className='my-[100px]'>
        <div className="custom-container">
          <div className='flex flex-col justify-center items-center text-center mb-10'>
            <div className="section-title-bage"><span>Services</span></div>
            <h2>Lorem ipsum dolor sit amet consectetur</h2>
          </div>
            <div className="grid grid-cols-3 gap-4 items-center">
                <div className="gradiant-hover-card">
                  <div className="card p-6 flex flex-col gap-4">
                      <div className="icon text-primary">
                        <BadgeCheck size={60} className='mb-[40px]'/>
                      </div>
                      <h4 className='text-primary'>hello world</h4>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, voluptatibus.</p>
                      <a href="" className='flex gap-2 items-center text-primary'>Check Now <ArrowUpRight/></a>
                  </div>
                </div>
                <div className="gradiant-hover-card">
                  <div className="card p-6 flex flex-col gap-4">
                      <div className="icon text-primary">
                        <BadgeCheck size={60} className='mb-[40px]'/>
                      </div>
                      <h4 className='text-primary'>hello world</h4>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, voluptatibus.</p>
                      <a href="" className='flex gap-2 items-center text-primary'>Check Now <ArrowUpRight/></a>
                  </div>
                </div>
                <div className="gradiant-hover-card">
                  <div className="card p-6 flex flex-col gap-4">
                      <div className="icon text-primary">
                        <BadgeCheck size={60} className='mb-[40px]'/>
                      </div>
                      <h4 className='text-primary'>hello world</h4>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, voluptatibus.</p>
                      <a href="" className='flex gap-2 items-center text-primary'>Check Now <ArrowUpRight/></a>
                  </div>
                </div>
            </div>
        </div>
      </section>

      <section className='py-[100px] bg-gradiant'>
        <div className="custom-container">
          <div className='grid grid-cols-2 gap-10 items-center'>
            <div>
              <div className='flex flex-col justify-start gap-4'>
                <div className="section-title-bage white-bage !mx-0"><span>Testimonials</span></div>
                <h2 className='!text-white'>Lorem ipsum dolor sit</h2>
                <p className='!text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto voluptates exercitationem soluta. Corrupti quidem nisi unde, repellendus quibusdam nam laborum!</p>
              </div>
            </div>
            <div>
              <Carousel>
                <CarouselContent>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/2">
                    <div className="card p-6 bg-white rounded-xl flex flex-col gap-5">
                      <div className="flex text-primary gap-1">
                        <Star size={20} />
                        <Star size={20} />
                        <Star size={20} />
                        <Star size={20} />
                        <Star size={20} />
                      </div>
                      <p className='!text-sm'>“Their feedback fuel our passion for continuous improvement and The innovation. We take immense pride in the relationships we’ve built and the trust we’ve earned through.”</p>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-3 items-center">
                          <img src="/assets/imgs/testimonial-user-img.png" className='w-10 h-10 rounded-full' alt="" />
                          <div>
                            <p className='!text-[14px] leading-normal text-black font-semibold'>Lorem, ipsum.</p>
                            <p className='text-gray-500 !text-[14px]'>Developer</p>
                          </div>
                        </div>
                        <div>
                          <Quote size={30} className='text-primary'/>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/2">
                    <div className="card p-6 bg-white rounded-xl flex flex-col gap-5">
                      <div className="flex text-primary gap-1">
                        <Star size={20} />
                        <Star size={20} />
                        <Star size={20} />
                        <Star size={20} />
                        <Star size={20} />
                      </div>
                      <p className='!text-sm'>“Their feedback fuel our passion for continuous improvement and The innovation. We take immense pride in the relationships we’ve built and the trust we’ve earned through.”</p>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-3 items-center">
                          <img src="/assets/imgs/testimonial-user-img.png" className='w-10 h-10 rounded-full' alt="" />
                          <div>
                            <p className='!text-[14px] leading-normal text-black font-semibold'>Lorem, ipsum.</p>
                            <p className='text-gray-500 !text-[14px]'>Developer</p>
                          </div>
                        </div>
                        <div>
                          <Quote size={30} className='text-primary'/>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/2">
                    <div className="card p-6 bg-white rounded-xl flex flex-col gap-5">
                      <div className="flex text-primary gap-1">
                        <Star size={20} />
                        <Star size={20} />
                        <Star size={20} />
                        <Star size={20} />
                        <Star size={20} />
                      </div>
                      <p className='!text-sm'>“Their feedback fuel our passion for continuous improvement and The innovation. We take immense pride in the relationships we’ve built and the trust we’ve earned through.”</p>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-3 items-center">
                          <img src="/assets/imgs/testimonial-user-img.png" className='w-10 h-10 rounded-full' alt="" />
                          <div>
                            <p className='!text-[14px] leading-normal text-black font-semibold'>Lorem, ipsum.</p>
                            <p className='text-gray-500 !text-[14px]'>Developer</p>
                          </div>
                        </div>
                        <div>
                          <Quote size={30} className='text-primary'/>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* pricing */}
      <section className='py-[100px] bg-white'>
        <div className="custom-container">
          <div className='flex flex-col justify-center items-center text-center mb-16'>
            <div className="section-title-bage"><span>Pricing</span></div>
            <h2>Lorem ipsum dolor sit</h2>
            <p className='!text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quibusdam!</p>
          </div>
            <div className="grid grid-cols-3 gap-4 items-center mt-[70px]">
                <div className="border border-gray-300 rounded-xl shadow-sm">
                  <div className="card p-6 flex flex-col gap-4">
                    <div className='bg-gradiant mt-[-70px] rounded-xl p-4 max-w-[80%] mx-auto flex flex-col gap-2 items-center justify-center w-full'>
                      <p className='!text-white'>Basic Plan</p>
                      <div className="flex items-end">
                        <h1 className='!text-white'>20$</h1><span>/mon</span>
                      </div>
                    </div>
                    
                    <p className='!text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim possimus vero voluptatum impedit nostrum veritatis.</p>
                    <hr className='text-gray-800' />
                    <ul className='flex flex-col gap-3'>
                      <li className='flex gap-2 items-center text-black !text-sm'>
                        <CheckCircle className='text-primary' size={20} />
                        Lorem ipsum dolor sit amet.
                      </li>
                      <li className='flex gap-2 items-center text-black !text-sm'>
                        <CheckCircle className='text-primary' size={20} />
                        Lorem ipsum dolor sit amet.
                      </li>
                      <li className='flex gap-2 items-center text-black !text-sm'>
                        <CheckCircle className='text-primary' size={20} />
                        Lorem ipsum dolor sit amet.
                      </li>
                      <li className='flex gap-2 items-center text-black !text-sm'>
                        <CheckCircle className='text-primary' size={20} />
                        Lorem ipsum dolor sit amet.
                      </li>
                      <li className='flex gap-2 items-center text-black !text-sm'>
                        <CheckCircle className='text-primary' size={20} />
                        Lorem ipsum dolor sit amet.
                      </li>
                      <li className='flex gap-2 items-center text-black !text-sm'>
                        <CheckCircle className='text-primary' size={20} />
                        Lorem ipsum dolor sit amet.
                      </li>
                    </ul>
                    <Button variant='default' className="p-6 text-md relative z-0 overflow-hidden">Buy Now</Button> 
                  </div>
                </div>
                <div className="border border-gray-300 rounded-xl shadow-sm">
                  <div className="card p-6 flex flex-col gap-4">
                    <div className='bg-gradiant mt-[-70px] rounded-xl p-4 max-w-[80%] mx-auto flex flex-col gap-2 items-center justify-center w-full'>
                      <p className='!text-white'>Basic Plan</p>
                      <div className="flex items-end">
                        <h1 className='!text-white'>20$</h1><span>/mon</span>
                      </div>
                    </div>
                    
                    <p className='!text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim possimus vero voluptatum impedit nostrum veritatis.</p>
                    <hr className='text-gray-800' />
                    <ul className='flex flex-col gap-3'>
                      <li className='flex gap-2 items-center text-black !text-sm'>
                        <CheckCircle className='text-primary' size={20} />
                        Lorem ipsum dolor sit amet.
                      </li>
                      <li className='flex gap-2 items-center text-black !text-sm'>
                        <CheckCircle className='text-primary' size={20} />
                        Lorem ipsum dolor sit amet.
                      </li>
                      <li className='flex gap-2 items-center text-black !text-sm'>
                        <CheckCircle className='text-primary' size={20} />
                        Lorem ipsum dolor sit amet.
                      </li>
                      <li className='flex gap-2 items-center text-black !text-sm'>
                        <CheckCircle className='text-primary' size={20} />
                        Lorem ipsum dolor sit amet.
                      </li>
                      <li className='flex gap-2 items-center text-black !text-sm'>
                        <CheckCircle className='text-primary' size={20} />
                        Lorem ipsum dolor sit amet.
                      </li>
                      <li className='flex gap-2 items-center text-black !text-sm'>
                        <CheckCircle className='text-primary' size={20} />
                        Lorem ipsum dolor sit amet.
                      </li>
                    </ul>
                    <Button variant='default' className="p-6 text-md relative z-0 overflow-hidden">Buy Now</Button> 
                  </div>
                </div>
                <div className="border border-gray-300 rounded-xl shadow-sm">
                  <div className="card p-6 flex flex-col gap-4">
                    <div className='bg-gradiant mt-[-70px] rounded-xl p-4 max-w-[80%] mx-auto flex flex-col gap-2 items-center justify-center w-full'>
                      <p className='!text-white'>Basic Plan</p>
                      <div className="flex items-end">
                        <h1 className='!text-white'>20$</h1><span>/mon</span>
                      </div>
                    </div>
                    
                    <p className='!text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim possimus vero voluptatum impedit nostrum veritatis.</p>
                    <hr className='text-gray-800' />
                    <ul className='flex flex-col gap-3'>
                      <li className='flex gap-2 items-center text-black !text-sm'>
                        <CheckCircle className='text-primary' size={20} />
                        Lorem ipsum dolor sit amet.
                      </li>
                      <li className='flex gap-2 items-center text-black !text-sm'>
                        <CheckCircle className='text-primary' size={20} />
                        Lorem ipsum dolor sit amet.
                      </li>
                      <li className='flex gap-2 items-center text-black !text-sm'>
                        <CheckCircle className='text-primary' size={20} />
                        Lorem ipsum dolor sit amet.
                      </li>
                      <li className='flex gap-2 items-center text-black !text-sm'>
                        <CheckCircle className='text-primary' size={20} />
                        Lorem ipsum dolor sit amet.
                      </li>
                      <li className='flex gap-2 items-center text-black !text-sm'>
                        <CheckCircle className='text-primary' size={20} />
                        Lorem ipsum dolor sit amet.
                      </li>
                      <li className='flex gap-2 items-center text-black !text-sm'>
                        <CheckCircle className='text-primary' size={20} />
                        Lorem ipsum dolor sit amet.
                      </li>
                    </ul>
                    <Button variant='default' className="p-6 text-md relative z-0 overflow-hidden">Buy Now</Button> 
                  </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Home
