import { useState } from 'react'

function useToggle(defaultValue: boolean = false) {
    const [value, setValue] = useState<boolean>(defaultValue)

    function toggle() {
        setValue(prev => !prev) // prev = giá trị mới nhất
    }

    return [value, toggle]
}

export default useToggle


