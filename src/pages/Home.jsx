import {ArrowUpRight, BadgeCheck} from 'lucide-react'
import { Button } from "@/components/ui/button"

const Home = () => {
  return (
    <>
      <section className='py-[100px] hero-main'>
        <div className="container">
            <div className="grid grid-cols-2 gap-10 items-center">
                <div className='flex flex-col gap-4'>
                    <h1 className='text-white'>Lorem ipsum dolor sit amet.</h1>
                    <p className='!text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste minus quibusdam ipsa illo quisquam quo magni minima libero doloremque dolores.</p>
                    <Button variant='secondary' className="text-white">Get Started</Button>
                </div>
                <div>
                    <img src="/assets/imgs/hero-img.png" className='w-full h-full max-w-[500px] ms-auto' alt="" />
                </div>
            </div>
        </div>
      </section>

      <section className='my-[100px] bg-white py-[100px]'>
        <div className="container">
            <div className="grid grid-cols-2 gap-10 items-center">
                <div>
                    <img src="/assets/imgs/hero-img.png" className='w-full h-full max-w-[500px] mr-auto' alt="" />
                </div>
                <div>
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste minus quibusdam ipsa illo quisquam quo magni minima libero doloremque dolores.</p>
                    <Button variant='default'>Get Started</Button>
                </div>
            </div>
        </div>
      </section>

      <section className='my-[100px]'>
        <div className="container">
            <div className="grid grid-cols-3 gap-4 items-center">
                <div className="card border border-gray-200 p-6 flex flex-col gap-4 bg-white rounded-xl">
                    <BadgeCheck size={60} className='mb-[40px]'/>
                    <h4>hello world</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, voluptatibus.</p>
                    <a href="" className='flex gap-2 items-center'>Check Now <ArrowUpRight/></a>
                </div>
                
            </div>
        </div>
      </section>
    </>
  )
}

export default Home
