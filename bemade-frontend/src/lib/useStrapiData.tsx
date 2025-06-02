import useSWR from 'swr'
import { fetchStrapi } from './strapi'

export function useStrapiData<T = any>(endpoint: string, params?: Record<string, any>) {
    const { data, error, isLoading, mutate } = useSWR(
        [endpoint, params],
        () => fetchStrapi<T>(endpoint, { params })
    )

    return {
        data,
        error,
        isLoading,
        mutate,
    }
}