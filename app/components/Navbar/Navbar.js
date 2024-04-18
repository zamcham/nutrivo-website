import Link from 'next/link'
import navlinks from './constants/navlinks'
import Button from '../Button'

function Navbar() {
  return (
    <nav className="fixed flex justify-between items-center max-h-16  
        z-30 py-3 px-5 rounded-full text-white bg-gradient-to-r from-gray-600 to-gray-950 
        m-auto w-full max-w-[1440px];">
        <Link href="/">
            Nutrivo
        </Link>

        <ul className='hidden h-full gap-12 lg:flex'>
            {navlinks.map((link) => (
                <Link href={link.href} key={link.key} 
                className='text-black-50 flexCenter pb-1.5 transition-all hover:font-bold'>
                   {link.label}
                </Link>
            ))}
        </ul>

        <Button
            type='button'
            title='Join List'
            variant='green' 
        />
    </nav>
  )
}

export default Navbar