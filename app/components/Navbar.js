import Link from 'next/link'

function Navbar() {
  return (
    <nav className="border-2 border-red-500 flexBetween max-container padding-container relative z-30 py-5">
        <Link href="/">
            Nutrivo
        </Link>
    </nav>
  )
}

export default Navbar