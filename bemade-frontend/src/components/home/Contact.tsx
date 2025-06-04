'use client'
import { useState } from 'react'

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(form)
        // Ici tu peux ajouter un appel API ou logique avec Strapi
    }

    return (
        <section className="bg-[#1F1F1F] text-white px-6 py-20 md:py-32">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">

                {/* Infos de contact */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#FA9935] mb-4">Contact</h2>
                    <p className="text-[#A6BBCC] mb-6">
                        Un projet ? Une question ? Discutons ensemble de vos besoins digitaux.
                    </p>
                    <ul className="text-[#A6BBCC] space-y-2 text-sm">
                        <li><strong>📍 Localisation :</strong> Nancy (télétravail France entière)</li>
                        <li><strong>📧 Email :</strong> contact@bemade.fr</li>
                        <li><strong>📱 Téléphone :</strong> 06 14 44 92 95</li>
                    </ul>
                </div>

                {/* Formulaire */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Votre nom"
                        required
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md bg-[#2A2A2A] text-white border border-[#444] focus:outline-none focus:ring-2 focus:ring-[#FA9935]"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Votre email"
                        required
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md bg-[#2A2A2A] text-white border border-[#444] focus:outline-none focus:ring-2 focus:ring-[#FA9935]"
                    />
                    <textarea
                        name="message"
                        rows={5}
                        placeholder="Votre message"
                        required
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md bg-[#2A2A2A] text-white border border-[#444] focus:outline-none focus:ring-2 focus:ring-[#FA9935]"
                    />
                    <button
                        type="submit"
                        className="bg-[#FA9935] text-black px-6 py-3 rounded-md hover:bg-[#e88a2e] transition font-semibold"
                    >
                        Envoyer le message
                    </button>
                </form>
            </div>
        </section>
    )
}