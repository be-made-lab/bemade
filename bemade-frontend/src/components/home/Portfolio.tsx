'use client'
import Image from 'next/image'

const projects = [
    {
        title: 'Boutique Prêt-à-porter',
        description: 'Un site e-commerce épuré et sécurisé pour une marque locale.',
        image: '/assets/UbitFashionStoreWooCommerceTheme.jpg', // ✅ corrigé ici
        link: '#',
    },
    {
        title: 'Portfolio Artiste',
        description: 'Un portfolio responsive avec galerie dynamique.',
        image: '/projects/artist.png',
        link: '#',
    },
    {
        title: 'PME Réservation',
        description: 'Système de réservation en ligne avec tableau de bord.',
        image: '/projects/pme.png',
        link: '#',
    },
]
export default function Portfolio() {
    return (
        <section className="bg-[#1F1F1F] text-white py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center text-[#FA9935]">Portfolio</h2>
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-[#2A2A2A] rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-all">
                            <div className="relative w-full h-52">
                                <Image
                                    src={project.image || '/assets/images/fallback.jpg'}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-[#A6BBCC] text-sm mb-4">{project.description}</p>
                                <a
                                    href={project.link}
                                    className="inline-block text-sm px-4 py-2 border border-[#FA9935] text-[#FA9935] rounded hover:bg-[#FA9935] hover:text-black transition-colors"
                                >
                                    Voir le projet
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}