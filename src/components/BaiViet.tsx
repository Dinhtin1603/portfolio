import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

interface BaiViet {
    id: number
    title: string 
    body: string
}

function BaiViet() {
    const { data, isLoading, error } = useQuery<BaiViet[]>({
        queryKey: ['bai-viet'],
        queryFn: () => fetch('https://jsonplaceholder.typicode.com/posts').then(r => r.json())
    })

    if (isLoading) return <p>Đang tải...</p>
    if (error) return <p>Có lỗi xảy ra!</p>

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">Danh sách bài viết</h2>
            <ul className="space-y-3">
                {data?.slice(0, 10).map(bv => (
                    <li key={bv.id} className="border rounded-lg p-4" >
                        <Link to={`/bai-viet/${bv.id}`}>
                            <p className="font-medium">{bv.title}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BaiViet