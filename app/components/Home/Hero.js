import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import mockUp from '../../assets/b-mockup.png';
import memoji1 from '../../assets/memojis/memoji-1.png';
import memoji2 from '../../assets/memojis/memoji-2.png';
import memoji3 from '../../assets/memojis/memoji-3.png';
import androidBadge from '../../assets/badges/android.png';
import iosBadge from '../../assets/badges/ios.png';

function Hero() {
  return (
    <main className="bg-slate-200">
      <section className='flex h-screen p-24 max-w-1440 mx-auto pt-40 space-x-28 relative'>
        <div className="left-container w-2/4 h-full flex flex-col justify-between relative">
        <h1 className="font-bold">Automate your calorie tracking with AI</h1>
        <p className='tracking-wide'>Streamline your nutrition journey with personalized meal plans tailored to your goals and preferences. Say goodbye to manual tracking and decision fatigue - let our AI revolutionize your eating habits today!
        </p>
        <div className='flex flex-row items-center'>
          <div className="bg-green-500 rounded-full p-5 w-6 h-6 flex items-center justify-center">
            <FontAwesomeIcon icon={faPlay} className="text-white text-sm" />
          </div>
          <p className="text-lg font-medium px-3">See a neak peak</p>
        </div>
        <div>
          <div className='bg-gray-300 rounded-3xl h-[200px]'>
            <p className='bg-white w-1/2 m-auto rounded-lg py-3 px-1 text-center'>Soon Available On</p>
            <div className="flex flex-row items-center justify-center pt-10 space-x-4">
              <Image 
                src={androidBadge} 
                width={200}
                height={150}
                alt="Android badge" 
              />
              <Image 
                src={iosBadge} 
                width={200}
                height={150}
                alt="iOS badge" 
              />
            </div>
          </div>
        </div>
      </div>
      <div className="left-container w-2/4 h-full flex flex-col justify-between relative">
        <div className="w-full mb-20 flex flex-row items-center justify-end">
          <div className='flex flex-row '>
            <Image 
              src={memoji1} 
              width={80}
              height={80}
              alt="memoji" 
              className="bg-gray-700 rounded-full border-4 border-[DFE3E4] z-20" 
            />
            <Image 
              src={memoji2} 
              width={80}
              height={80}
              alt="memoji" 
              className="bg-gray-700 rounded-full border-4 border-[DFE3E4] -ml-5 z-10" 
            />
            <Image 
              src={memoji3} 
              width={80}
              height={80}
              alt="memoji" 
              className="bg-gray-700 rounded-full border-4 border-[DFE3E4] -ml-5 z-0" 
            />
          </div>
          <div className='flex flex-col justify-center px-5 text-center'>
            <p className='font-semibold text-xl'>Join The</p>
            <p className='text-xl'>Waiting List</p>
          </div>
        </div>
        <Image
          src={mockUp}
          alt="Phone image"
          width={450}
          height={450}
          className="rotate-[-28deg] mx-auto z-10"
        />
        <div className="absolute bottom-0 mx-auto my-auto w-full h-1/2 bg-gradient-to-r from-green-400 to-lime-500 rounded-3xl z-0" />
      </div>
    </section>
  </main>
  )
}

export default Hero