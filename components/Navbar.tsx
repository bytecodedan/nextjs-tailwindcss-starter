import React from "react";
import Link from "next/link";

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
      <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href="/">
            <a className="font-medium text-gray-500 hover:text-gray-900">
              <span className="sr-only">Workflow</span>
              <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
            </a>
          </Link>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              id="main-menu"
              aria-haspopup="true"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:flex md:space-x-10">
        {links.map(({ href, label }) => (
          <Link href={href}>
            <a href={href} className="font-medium text-gray-500 hover:text-gray-900">
              {label}
            </a>
          </Link>
        ))}
      </div>
      {/* <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
        <span className="inline-flex rounded-md shadow">
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
          >
            Log in
          </a>
        </span>
      </div> */}
    </nav>
  )
}