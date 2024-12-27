import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="z-10">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex justify-center space-x-6 md:order-2">
            <Link href="https://github.com/beetlejusse" className="text-gray-400 hover:text-gray-300">
              Made with Love by Vishal Belwal
            </Link>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              &copy; {new Date().getFullYear()} DRISHYA. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

