import { useState } from 'react'

function useToggle(defaultValue: boolean = false) {
    const [value, setValue] = useState<boolean>(defaultValue)

    function toggle() {
        setValue(!value) 
    }

    return [value, toggle]
}

export default useToggle


