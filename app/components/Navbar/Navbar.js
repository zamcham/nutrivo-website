import Link from 'next/link'
import navlinks from './constants/navlinks'
import Button from '../Button'

function Navbar() {
  return (
    <nav className="border-2 border-red-500 flex justify-between max-container padding-container relative z-30 py-5 px-5">
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
        title='Sign Up'
        variant='green-500' 
        />
    </nav>
  )
}

export default Navbar