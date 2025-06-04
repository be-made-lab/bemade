'use client'
import Image from 'next/image'
import Link from 'next/link'

const posts = [
    {
        title: 'Pourquoi un site vitrine est essentiel en 2025',
        excerpt: 'Découvrez comment un site vitrine peut transformer votre présence locale et améliorer votre visibilité en ligne.',
        image: '/blog/site-vitrine.png',
        slug: 'site-vitrine-essentiel',
    },
    {
        title: 'SEO local pour les artisans',
        excerpt: 'Quelques techniques simples mais puissantes pour que votre site apparaisse dans les résultats locaux.',
        image: '/blog/seo-artisan.png',
        slug: 'seo-local-artisan',
    },
    {
        title: 'Bien démarrer avec WordPress en freelance',
        excerpt: 'Un guide rapide pour les indépendants qui veulent lancer un site WordPress propre et efficace.',
        image: '/blog/wordpress-freelance.png',
        slug: 'wordpress-freelance-guide',
    },
]

export default function Blog() {
    return (
        <section className="bg-[#1F1F1F] text-white px-4 sm:px-6 md:px-8 py-16 sm:py-20 lg:py-28">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#FA9935] mb-12">
                    Derniers articles
                </h2>

                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post, index) => (
                        <div
                            key={index}
                            className="bg-[#2A2A2A] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition flex flex-col"
                        >
                            <div className="relative w-full h-48">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                                <p className="text-[#A6BBCC] text-sm mb-6">{post.excerpt}</p>
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="mt-auto self-start text-sm px-4 py-2 border border-[#FA9935] text-[#FA9935] rounded-full hover:bg-[#FA9935] hover:text-black transition"
                                >
                                    Lire la suite →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}