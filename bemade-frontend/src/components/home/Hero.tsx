'use client'
import Link from 'next/link'

export default function Hero() {
    return (
        <section className="relative bg-[#221F1F] text-white py-20 px-6 md:py-32 md:px-12 overflow-hidden">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
                    Création de sites web <span className="text-[#FA9935]">modernes</span>, <span className="text-[#FA9935]">humains</span> et <span className="text-[#FA9935]">accessibles</span>
                </h1>
                <p className="text-base md:text-lg text-[#A6BBCC] max-w-2xl mx-auto mb-8">
                    Développeur web freelance à Nancy, je crée des sites internet responsives, optimisés pour le SEO, et pensés pour les petites structures.
                </p>

                <Link
                    href="/contact"
                    className="inline-block bg-[#FA9935] hover:bg-[#e18322] text-[#221F1F] font-semibold py-3 px-6 rounded-xl shadow-lg transition"
                >
                    Demandez votre devis gratuit
                </Link>
            </div>

            {/* Décor en arrière-plan */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#FA9935]/10 rounded-full blur-3xl animate-pulse -z-10"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#A6BBCC]/10 rounded-full blur-2xl animate-pulse delay-1000 -z-10"></div>
        </section>
    )
}