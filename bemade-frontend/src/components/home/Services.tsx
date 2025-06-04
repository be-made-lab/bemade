'use client'
import { FaLaptopCode, FaShoppingCart, FaCogs, FaVideo, FaChalkboardTeacher } from 'react-icons/fa'
import Link from 'next/link'

const services = [
    {
        title: 'Site vitrine',
        icon: <FaLaptopCode className="text-3xl text-[#FA9935]" />,
        description: 'Présentez votre activité avec un site clair, moderne et responsive.',
        hrefTarif: '/tarifs#vitrine',
        hrefDevis: '/contact',
    },
    {
        title: 'E-commerce',
        icon: <FaShoppingCart className="text-3xl text-[#FA9935]" />,
        description: 'Vendez vos produits en ligne avec une boutique simple et efficace.',
        hrefTarif: '/tarifs#ecommerce',
        hrefDevis: '/contact',
    },
    {
        title: 'Application web',
        icon: <FaCogs className="text-3xl text-[#FA9935]" />,
        description: 'Des solutions sur mesure pour vos besoins métier.',
        hrefTarif: '/tarifs#app',
        hrefDevis: '/contact',
    },
    {
        title: 'Vidéo promo',
        icon: <FaVideo className="text-3xl text-[#FA9935]" />,
        description: 'Valorisez votre image avec des vidéos courtes, efficaces et intégrables.',
        hrefTarif: '/tarifs#video',
        hrefDevis: '/contact',
    },
    {
        title: 'Formation personnalisée',
        icon: <FaChalkboardTeacher className="text-3xl text-[#FA9935]" />,
        description: 'Prenez en main votre site avec une formation simple et adaptée.',
        hrefTarif: '/tarifs#formation',
        hrefDevis: '/contact',
    },
]

export default function Services() {
    return (
        <section className="bg-[#221F1F] text-white py-20 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#FA9935] mb-12">
                    Mes services
                </h2>
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-[#2A2828] p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <div className="mb-4">{service.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-[#A6BBCC] mb-6">{service.description}</p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Link
                                    href={service.hrefTarif}
                                    className="bg-[#FA9935] text-[#221F1F] text-center py-2 px-4 rounded hover:bg-[#e0882e] transition"
                                >
                                    Voir les tarifs
                                </Link>
                                <Link
                                    href={service.hrefDevis}
                                    className="border border-[#FA9935] text-[#FA9935] text-center py-2 px-4 rounded hover:bg-[#FA9935] hover:text-[#221F1F] transition"
                                >
                                    Demander un devis
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}