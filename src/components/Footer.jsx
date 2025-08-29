import { Facebook } from 'lucide-react'
import {Button} from '@/components/ui/button'

const Footer = () => {
  return (
    <footer className='bg-[#F4F5F8] py-[50px]'>
      <div className="custom-container">
        <div className='bg-gradiant p-10 rounded-xl mb-10 relative overflow-hidden'>
          <div className='w-[400px] h-[400px] rounded-full bg-[#ffffff20] absolute bottom-[-100px] right-[-100px] animate-pulse'></div>
          <div className='w-[500px] h-[500px] rounded-full bg-[#ffffff20] absolute bottom-[-100px] right-[-100px] animate-pulse'></div>
          <div className="grid grid-cols-2 gap-10 items-center relative">
            <div>
              <h2 className='!text-white mb-10'>Lorem ipsum dolor sit amet.</h2>
              <div className="flex gap-2">
                <input type="text" className='w-full bg-white rounded-lg p-2 !text-sm text-black placeholder:text-gray-600' placeholder='Enter Your Email' />
                <Button variant='secondary' className="text-white w-fit px-5 py-2 text-md light-bg :hover-light-bg relative z-0 overflow-hidden">Subscribe</Button>
              </div>
            </div>
            <div>
              <img src="/assets/imgs/hero-img.png" className='max-w-[250px] ml-auto' alt="" />
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-10  ">
          <div className='flex flex-col gap-3 col-span-2 lg:mr-10'>
            <div className="text-2xl font-bold text-black">MyLogo</div>
            <p className='!text-sm !text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nostrum harum molestias eligendi accusantium, quos assumenda a eum!</p>
            <div className="flex gap-2 items-center">
              <div className="bg-gradiant w-10 h-10 rounded-full text-white flex justify-center items-center">
                <Facebook/>
              </div>
              <div className="bg-gradiant w-10 h-10 rounded-full text-white flex justify-center items-center">
                <Facebook/>
              </div>
              <div className="bg-gradiant w-10 h-10 rounded-full text-white flex justify-center items-center">
                <Facebook/>
              </div>
              <div className="bg-gradiant w-10 h-10 rounded-full text-white flex justify-center items-center">
                <Facebook/>
              </div>
            </div>
          </div>
          <div>
            <h4 className='!text-xl font-semibold text-primary mb-4'>Quick Links</h4>
            <ul className='flex flex-col gap-3 text-gray-400'>
              <li className='!text-gray-500 hover:!text-primary font-semibold'><a href="">About Us</a></li>
              <li className='!text-gray-500 hover:!text-primary font-semibold'><a href="">About Us</a></li>
              <li className='!text-gray-500 hover:!text-primary font-semibold'><a href="">About Us</a></li>
              <li className='!text-gray-500 hover:!text-primary font-semibold'><a href="">About Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className='!text-xl font-semibold text-primary mb-4'>Quick Links</h4>
            <ul className='flex flex-col gap-3 text-gray-400'>
              <li className='!text-gray-500 hover:!text-primary font-semibold'><a href="">About Us</a></li>
              <li className='!text-gray-500 hover:!text-primary font-semibold'><a href="">About Us</a></li>
              <li className='!text-gray-500 hover:!text-primary font-semibold'><a href="">About Us</a></li>
              <li className='!text-gray-500 hover:!text-primary font-semibold'><a href="">About Us</a></li>
            </ul>
          </div>
        </div>
        <hr className='text-gray-400 w-full my-10'/>
        <div className='flex justify-center items-center'>
            <p className='!text-gray-600'>Copyright ©2025 Tech. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
