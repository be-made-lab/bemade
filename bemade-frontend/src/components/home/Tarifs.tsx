'use client'
import Link from 'next/link'

const tarifs = [
    {
        title: 'Site vitrine',
        price: 'à partir de 800€',
        features: [
            'Design personnalisé',
            '1 à 5 pages',
            'Responsive & SEO',
            'Formation incluse',
        ],
        href: '/contact',
    },
    {
        title: 'E-commerce',
        price: 'à partir de 1200€',
        features: [
            'Catalogue produit',
            'Paiement sécurisé',
            'Responsive & SEO',
            'Support personnalisé',
        ],
        href: '/contact',
    },
    {
        title: 'Application web',
        price: 'Sur devis',
        features: [
            'Fonctionnalités sur mesure',
            'Outils métier',
            'Interface intuitive',
            'Développement évolutif',
        ],
        href: '/contact',
    },
    {
        title: 'Vidéo promotionnelle',
        price: 'à partir de 300€',
        features: [
            'Montage & intégration',
            'Export pour réseaux',
            'Animation simple',
            'Musique libre de droit',
        ],
        href: '/contact',
    },
]

export default function Tarifs() {
    return (
        <section className="bg-[#221F1F] text-white px-6 py-20 md:py-32">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#FA9935] mb-12">
                    Tarifs & Formules
                </h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {tarifs.map((pack, index) => (
                        <div
                            key={index}
                            className="bg-[#2A2828] p-6 rounded-xl shadow-lg flex flex-col justify-between border border-[#FA9935]/10 hover:border-[#FA9935]/40 transition"
                        >
                            <div>
                                <h3 className="text-xl font-semibold mb-2">{pack.title}</h3>
                                <p className="text-[#FA9935] font-bold mb-4">{pack.price}</p>
                                <ul className="text-[#A6BBCC] mb-6 space-y-2 text-sm text-left">
                                    {pack.features.map((f, i) => (
                                        <li key={i}>• {f}</li>
                                    ))}
                                </ul>
                            </div>
                            <Link
                                href={pack.href}
                                className="bg-[#FA9935] text-[#221F1F] py-2 px-4 rounded hover:bg-[#e0882e] transition text-sm font-medium"
                            >
                                Demander un devis
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}