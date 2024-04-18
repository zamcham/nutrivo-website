import Image from "next/image"
import line from "../../assets/decoration/line.svg"


export default function JoinList() {
  return (
    <section className="flex h-[70vh] max-w-1440 mx-auto p-20 items-center space-x-28 relative">
        <div className='w-1/2'>
            <h2 className='leading-none'>Join our waiting list</h2>
            <p className='mt-1'>Get early access to our app and be the first to experience the future of personalized nutrition</p>
            <form className='space-x-2 mt-5'>
                <input type="email" placeholder="Enter your email address" className="p-3 rounded-md bg-slate-200" />
                <button type="submit" className="p-3 rounded-md bg-green-500 text-white">Join Now</button>
            </form>
        </div>
        <figure className="w-1/2">
          <div className="line-deco"/>
        </figure>
    </section>
  )
}
