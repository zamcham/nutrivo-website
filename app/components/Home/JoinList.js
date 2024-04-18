import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"
import memoji1 from "../../assets/memojis/memoji-1.png"
import memoji2 from "../../assets/memojis/memoji-2.png"
import memoji3 from "../../assets/memojis/memoji-3.png"


export default function JoinList() {
  return (
    <section className="flex h-[90vh] max-w-1440 mx-auto p-20 items-center space-x-28 relative">
        <div className='w-1/2'>
            <h2 className='leading-none'>Join our waiting list</h2>
            <p className='mt-1'>Get early access to our app and be the first to experience the future of personalized nutrition</p>
            <form className='space-x-2 mt-5'>
                <input type="email" placeholder="Enter your email address" className="p-3 rounded-md bg-slate-200" />
                <button type="submit" className="p-3 rounded-md bg-green-500 text-white">Join Now</button>
            </form>
        </div>
        <figure className="w-1/2 h-full relative">
          <span className="bg-gray-200 w-[300px] h-[300px] rounded-full absolute-centered-c z-[0]" />
          <span className="bg-gray-100 w-[200px] h-[200px] rounded-full absolute-centered-c z-[1]" />
          <div className="line-deco absolute-centered-c z-[2]" style={{
            left: 'calc(50% + 60px)',
            top: 'calc(50% - 75px)',
          }}/>
          <div className="line-deco-reverse absolute-centered-c z-[2] inverted-anim" 
          style={{
            left: 'calc(50% - 60px)',
            top: 'calc(50% + 75px)',
          }}/>

          <span className="i-container-big absolute-centered-c bg-gradient-to-r from-gray-600 to-gray-950 z-20" >
            <FontAwesomeIcon icon={faEnvelope} className="text-6xl green-svg" />
          </span>
          <Image 
            src={memoji1} 
            width={80}
            height={80}
            alt="memoji" 
            className="bg-gray-700 absolute rounded-full z-20 transform"
            style={{
              left: 'calc(50% + 65px)',
              top: 'calc(50% - 200px)'
            }}
          />
          <Image 
            src={memoji2} 
            width={80}
            height={80}
            alt="memoji" 
            className="bg-gray-700 absolute rounded-full z-20 transform"
            style={{
              left: 'calc(50% - 150px)',
              top: 'calc(50% + 150px)'
            }}
          />
          <Image 
            src={memoji3} 
            width={80}
            height={80}
            alt="memoji" 
            className="bg-gray-700 absolute rounded-full z-20 transform"
            style={{
              left: 'calc(50% - 250px)',
              top: 'calc(50% - 100px)'
            }}
          />
          <div className="line-deco absolute-centered-c z-0" style={{
            left: 'calc(50% + 60px)',
            top: 'calc(50% - 75px)',
          }}/>
          <div className="line-deco-reverse absolute-centered-c z-0 inverted-anim" 
          style={{
            left: 'calc(50% - 60px)',
            top: 'calc(50% + 75px)',
          }}/>
        </figure>
    </section>
  )
}
