import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react'

interface BaiVietMoi {
    title: string
    body: string
}

function ThemBaiViet() {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const queryClient = useQueryClient()

    const { mutate, isPending, isSuccess, isError, data } = useMutation({
        mutationFn: (newPost: BaiVietMoi) => 
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(newPost),
                headers: { 'Content-Type': 'application/json' }
            }).then(r => r.json()),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['bai-viet'] })
        }
    })

    function xuLySubmit(e: React.SubmitEvent) {
        e.preventDefault()
        mutate({ title, body })
    }

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">Thêm bài viết</h2>
            <form onSubmit={xuLySubmit} className="space-y-4">
                <input 
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Tiêu đề"
                    className="w-full border rounded p-2"    
                />
                <textarea 
                    value={body}
                    onChange={e => setBody(e.target.value)}
                    placeholder="Nội dung"
                    className="w-full border rounded p-2 h-32"
                />
                <button 
                    type="submit"
                    disabled={isPending}
                    className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
                >
                    {isPending ? 'Đang gửi...' : 'Đăng bài'}
                </button>
            </form>
            {isSuccess && (
                <div className="mt-4 text-green-500">
                    <p>Đăng bài thành công!</p>
                    <p>Server trả về id: {data?.id}</p>
                </div>
            )}
            {isError && <p className="mt-4 text-red-500">Có lỗi xảy ra!</p>}
        </div> 
    ) 
}

export default ThemBaiViet