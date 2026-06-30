import { useState, useEffect } from 'react'

function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        // fetch url
        async function fetchData() {
            try { //nếu ok -> setData
                const res = await fetch(url) //gọi API
                const json = await res.json() //chuyển sang object
                setData(json) //lưu vào state
            } catch (err) { //nếu lỗi -> setError
                setError("Có lỗi xảy ra") //lưu lỗi
            } finally { // finally -> setLoading(false)
                setLoading(false)  // dù thành công hay lỗi → tắt loading
            }
        }

        fetchData()
    }, [url])

    return { data, loading, error }
}

export default useFetch 