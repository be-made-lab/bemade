'use client'
import Image from 'next/image'
import {
    FaHtml5, FaCss3Alt, FaJs, FaPhp,
    FaWordpress, FaVideo
} from 'react-icons/fa'
import {
    SiAdobecreativecloud, SiFigma, SiNotion
} from 'react-icons/si'

export default function About() {
    return (
        <section className="bg-[#221F1F] text-white px-6 py-20 md:py-32">
            <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">

                {/* Texte */}
                <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#FA9935]">
                        À propos
                    </h2>
                    <p className="text-[#A6BBCC] mb-4 leading-relaxed">
                        Je suis <strong>Samba Sene</strong>, développeur web freelance basé à Nancy, avec une double compétence en développement web et production vidéo.
                    </p>
                    <p className="text-[#A6BBCC] mb-4 leading-relaxed">
                        Diplômé du titre professionnel DWWM, je conçois des sites accessibles, performants, et sur mesure, pour les artisans, TPE et indépendants.
                    </p>
                    <p className="text-[#A6BBCC] mb-8 leading-relaxed">
                        Mon approche humaine et pédagogique vous permet de gagner en autonomie numérique, sans jargon ni stress.
                    </p>

                    {/* Compétences */}
                    <h3 className="text-xl font-semibold text-white mb-4">Compétences</h3>
                    <div className="grid grid-cols-4 sm:grid-cols-6 gap-4 text-[#FA9935] text-2xl">
                        <FaHtml5 title="HTML5" />
                        <FaCss3Alt title="CSS3" />
                        <FaJs title="JavaScript" />
                        <FaPhp title="PHP" />
                        <FaWordpress title="WordPress" />
                        <FaVideo title="Vidéo" />
                        <SiAdobecreativecloud title="Adobe CC" />
                        <SiFigma title="Figma" />
                        <SiNotion title="Notion" />
                    </div>
                </div>

                {/* Image */}
                <div className="flex-1 flex justify-center items-center">
                    <div className="w-full max-w-sm md:max-w-md rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 ease-in-out hover:scale-[1.03] hover:shadow-xl">
                        <Image
                            src="/assets/profile.png"
                            alt="Samba Sene"
                            width={500}
                            height={600}
                            className="rounded-2xl object-cover w-full h-auto"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}