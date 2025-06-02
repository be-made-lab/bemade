export default function Footer() {
    return (
        <footer className="bg-[#221F1F] text-white pt-12 pb-6">
            <div className="container mx-auto px-6 grid gap-10 text-sm md:grid-cols-5">

                {/* Bloc logo + description */}
                <div className="md:col-span-2 text-center md:text-left flex flex-col items-center md:items-start">
                    <img
                        src="/assets/logo-bemade.png"
                        alt="Logo Be Made"
                        className="h-10 mb-4"
                    />
                    <p className="mb-4 text-[#A6BBCC] max-w-xs">
                        Sites web sur mesure, accessibles & humains — conçus pour les indépendants et TPE.
                    </p>
                    <div className="flex gap-4 text-2xl text-[#FA9935]">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                            <i className="fab fa-linkedin" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                            <i className="fab fa-instagram" />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                            <i className="fab fa-github" />
                        </a>
                    </div>
                </div>

                {/* Bloc Services */}
                <div className="text-center md:text-left">
                    <h3 className="font-semibold text-[#FA9935] mb-2">Services</h3>
                    <ul className="space-y-1 text-[#A6BBCC]">
                        {['Sites vitrines', 'E-commerce', 'Applications web', 'Vidéos web', 'Formation'].map((item, i) => (
                            <li key={i}>
                                <a href="/services" className="hover:text-white transition">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Bloc Entreprise */}
                <div className="text-center md:text-left">
                    <h3 className="font-semibold text-[#FA9935] mb-2">Entreprise</h3>
                    <ul className="space-y-1 text-[#A6BBCC]">
                        {[
                            { name: 'À propos', href: '/about' },
                            { name: 'Contact', href: '/contact' },
                            { name: 'Portfolio', href: '/portfolio' },
                            { name: 'Blog', href: '/blog' },
                        ].map((item) => (
                            <li key={item.name}>
                                <a href={item.href} className="hover:text-white transition">{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Bloc Ressources */}
                <div className="text-center md:text-left">
                    <h3 className="font-semibold text-[#FA9935] mb-2">Ressources</h3>
                    <ul className="space-y-1 text-[#A6BBCC]">
                        {['Mentions légales', 'Conditions générales', 'Support technique'].map((item, i) => (
                            <li key={i}>
                                <a href="#" className="hover:text-white transition">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Bas de page */}
            <div className="mt-10 border-t border-[#A6BBCC]/30 pt-6 text-center text-xs text-[#A6BBCC] px-6">
                © 2025 Be Made — Tous droits réservés. | Basé à Nancy – Télétravail France entière
            </div>
        </footer>
    )
}