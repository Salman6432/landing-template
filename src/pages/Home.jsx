import {ArrowUpRight, BadgeCheck} from 'lucide-react'
import { Button } from "@/components/ui/button"

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

      {/* pricing */}
      <section className='py-[100px] bg-white'>
        <div className="custom-container">
          <div className='flex flex-col justify-center items-center text-center mb-10'>
            <div className="section-title-bage"><span>Pricing</span></div>
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
    </>
  )
}

export default Home
