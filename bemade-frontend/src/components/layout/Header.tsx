'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled ? 'bg-[#221F1F]/90 backdrop-blur shadow-md' : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto px-4 py-4 flex items-center justify-between text-white">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <img src="/assets/logo-bemade.png" alt="Be Made" className="h-8" />
                </Link>

                {/* Burger */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 z-50 relative"
                    aria-label="Menu"
                >
          <span
              className={`w-6 h-0.5 bg-white mb-1 transform transition duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
          />
                    <span
                        className={`w-6 h-0.5 bg-white transform transition duration-300 ${
                            isOpen ? 'opacity-0' : 'opacity-100'
                        }`}
                    />
                    <span
                        className={`w-6 h-0.5 bg-white mt-1 transform transition duration-300 ${
                            isOpen ? '-rotate-45 -translate-y-2' : ''
                        }`}
                    />
                </button>

                {/* Desktop nav */}
                <nav className="hidden md:flex gap-6 text-sm font-medium">
                    {['Accueil', 'Services', 'Portfolio', 'Blog', 'Contact'].map((item) => (
                        <Link
                            key={item}
                            href={item === 'Accueil' ? '/' : `/${item.toLowerCase()}`}
                            className="hover:text-[#FA9935] transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Mobile nav fullscreen */}
            <div
                className={`fixed inset-0 z-40 bg-[#221F1F]/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${
                    isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
                } md:hidden`}
            >
                <div className="flex flex-col justify-center items-center h-full gap-8 text-lg font-semibold text-white">
                    {['Accueil', 'Services', 'Portfolio', 'Blog', 'Contact'].map((item) => (
                        <Link
                            key={item}
                            href={item === 'Accueil' ? '/' : `/${item.toLowerCase()}`}
                            className="hover:text-[#FA9935] transition-all duration-200"
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    )
}