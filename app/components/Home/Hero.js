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
    <main className="bg-slate-200 w-full flex items-center justify-center">
      <section className='sm-s:overflow-hidden flex sm-s:flex-col sm-s:flex-col-reverse h-screen md-s:h-[70vh] sm-s:h-full max-w-1440 sm-s:w-full p-20 md-s:p-10 sm-s:p-5
      space-x-28 md-s:space-x-10 sm-s:space-x-0 relative '>
        <header className="w-2/4 sm-s:w-full flex flex-col justify-between pt-20 md-s:pt-20 sm-s:pt-0 pb-20 md-s:pb-16 sm-s:pb-5 sm-s:space-y-8 relative">
          <div className='space-y-8 sm-s:space-y-4'>
            <h1 className="font-bold leading-none">Automate your calorie tracking with AI</h1>
            <p className='tracking-wide'>Streamline your nutrition journey with personalized meal plans tailored to your goals and preferences. Say goodbye to manual tracking and decision fatigue - let our AI revolutionize your eating habits today!
            </p>
          </div>
          <div className='flex items-center sm-s:justify-center'>
            <div className="i-container bg-gradient-to-r from-green-400 to-lime-500 rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faPlay} />
            </div>
            <p className="text-lg md-s:text-xl font-medium px-3">See a neak peak</p>
          </div>
        <div>
          <div className='bg-gray-300 rounded-3xl h-[200px]'>
            <p className='bg-white w-1/2 m-auto rounded-lg py-3 px-1 text-center font-normal'>Coming soon to:</p>
            <div className="flex flex-row md-s:flex-col items-center justify-center pt-10 md-s:pt-2 space-x-4 md-s:space-x-0 ">
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
        </header>


        <div className="w-2/4 sm-s:w-full flex flex-col justify-between pt-20 md-s:pt-20 pb-20 md-s:pb-16 sm-s:pb-5 relative">
          <div className="w-full mb-20 sm-s:mb-10 flex flex-row items-center justify-end md-s:justify-between sm-s:hidden">
            <figure className='flex flex-row'>
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
            </figure>
            <div className='flex flex-col justify-center px-5 md-s:px-0 text-center'>
              <p className='font-semibold text-xl md-s:text-2xl sm-s:text-lg'>Join The</p>
              <p className='text-xl md-s:text-2xl sm-s:text-lg'>Waiting List</p>
            </div>
          </div>
          <Image
            src={mockUp}
            alt="Phone image"
            width={450}
            height={450}
            className="rotate-[-28deg] sm-s:rotate-[0] mx-auto z-10 sm-s:w-[200px] sm-s:h-[200px] sm-s:mt-[-25px]"
          />
          <div className="absolute bottom-20 md-s:bottom-16 mx-auto my-auto w-full h-1/3 sm-s:h-1/2 bg-gradient-to-r from-green-400 to-lime-500 rounded-3xl z-0" />
        </div>
    </section>
  </main>
  )
}

export default Hero