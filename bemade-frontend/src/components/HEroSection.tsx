import { useStrapiData } from '@/lib/useStrapiData'

export default function HeroSection() {
    const { data, isLoading, error } = useStrapiData('/homepage', {
        populate: '*',
    })

    if (isLoading) return <p>Chargement…</p>
    if (error) return <p>Erreur lors du chargement.</p>

    return (
        <section>
            <h1>{data.hero_title}</h1>
            <p>{data.hero_description}</p>
            <a href="#contact" className="btn">{data.cta_label}</a>
        </section>
    )
}