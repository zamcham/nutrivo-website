import Button from '../Button'

export default function JoinList() {
  return (
    <section className="flex h-[70vh] p-16 max-w-1440 mx-auto space-x-28 items-center relative">
        <div>
            <h2 className='leading-none'>Join our waiting list</h2>
            <p className='mt-1'>Get early access to our app and be the first to experience the future of personalized nutrition</p>
            <form className='space-x-2 mt-5'>
                <input type="email" placeholder="Enter your email address" className="p-3 rounded-md bg-slate-200" />
                <button type="submit" className="p-3 rounded-md bg-green-500 text-white">Join Now</button>
            </form>
        </div>
    </section>
  )
}
