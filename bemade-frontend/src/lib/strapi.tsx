const STRAPI_API_URL = process.env.STRAPI_API_URL || 'http://localhost:1337'
const STRAPI_TOKEN = process.env.STRAPI_TOKEN || ''

export async function fetchStrapi<T = any>(
    endpoint: string,
    {
        method = 'GET',
        data,
        params,
    }: {
        method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
        data?: any
        params?: Record<string, any>
    } = {}
): Promise<T> {
    const url = new URL(`${STRAPI_API_URL}/api${endpoint}`)

    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            url.searchParams.append(key, String(value))
        })
    }

    const res = await fetch(url.toString(), {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...(STRAPI_TOKEN && {
                Authorization: `Bearer ${STRAPI_TOKEN}`,
            }),
        },
        body: data ? JSON.stringify({ data }) : undefined,
    })

    if (!res.ok) {
        const message = await res.text()
        throw new Error(`Strapi ${method} ${url.pathname} failed: ${res.status} ${message}`)
    }

    const json = await res.json()
    return json.data?.attributes || json.data || json
}