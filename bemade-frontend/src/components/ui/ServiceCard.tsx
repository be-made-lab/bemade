import { ReactNode } from 'react'

interface ServiceCardProps {
    icon: ReactNode
    title: string
    description: string
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
    return (
        <div className="p-6 border border-[#ddd] dark:border-[#333] rounded-xl shadow-sm hover:shadow-md transition bg-white dark:bg-[#222] transform hover:scale-[1.02] duration-300 ease-out opacity-0 animate-fade-in-up">
            <div className="text-3xl text-[#FA9935] mb-4">{icon}</div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm text-[#444] dark:text-[#ccc]">{description}</p>
        </div>
    )
}