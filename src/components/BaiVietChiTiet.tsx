import { useQuery } from "@tanstack/react-query"
import { useParams } from 'react-router-dom'

interface BaiViet {
    id: number
    title: string 
    body: string
}

function BaiVietChiTiet() {
    const { id } = useParams()

    const { data, isLoading, error } = useQuery<BaiViet>({
        queryKey: ['bai-viet', id], //id vào key -> mỗi bài cache riêng
        queryFn: () => fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(r => r.json())
    })

    if (isLoading) return <p className="p-6">Đang tải...</p>
    if (error) return <p className="p-6 text-red-500">Có lỗi xảy ra!</p>

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">{data?.title}</h2>
            <p className="text-gray-600">{data?.body}</p>
        </div>
    )
}

export default BaiVietChiTiet