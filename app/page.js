import Image from 'next/image';
import mockUp from './assets/b-mockup.png';
import memoji1 from './assets/memojis/memoji-1.png';
import memoji2 from './assets/memojis/memoji-2.png';
import memoji3 from './assets/memojis/memoji-3.png';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-between p-24 max-w-1440 m-auto">
      <div className="w-full max-w-50 flex-1">
        <h1 className="text-4xl font-bold py-4">Easy calorie tracking app</h1>
        <p>No more manual tracking, Nutrivo AI powered tracking gets to learn your habits</p>
      </div>
      <div className="w-full max-w-50 flex-1 py-4 flex flex-col justify-center relative">
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
          <div className='flex flex-col justify-center px-5'>
            <p className='font-medium text-2xl'>Testers</p>
            <p className='text-xl'>needed</p>
          </div>
        </div>
        <Image
          src={mockUp}
          alt="Phone image"
          width={450}
          height={450}
          className="rotate-[-28deg] mx-auto z-10"
        />
        <div className="absolute bottom-10 right-0 mx-auto my-auto w-4/5 h-1/2 bg-gradient-to-r from-green-400 to-lime-500 rounded-3xl z-0" />
      </div>
    </main>
  );
}
