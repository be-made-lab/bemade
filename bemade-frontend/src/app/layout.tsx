import '@/app/globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Be Made – Développement web accessible',
    description: 'Création de sites web modernes, humains et optimisés à Nancy.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr">
        <head>
            <link rel="stylesheet" href="/assets/font-awesome/css/font-awesome.min.css" />
        </head>
        <body className="bg-[#221F1F] text-white font-sans flex flex-col min-h-screen text-gray-900">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
            {children}
        </main>
        <Footer />
        </body>
        </html>
    )
}