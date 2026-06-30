import { useState } from 'react'

function useLocalStorage<T>(key: string, defaultValue: T) {
    const [value, setValue] = useState<T>(() => {
        const saved = localStorage.getItem(key)
        if (saved) {
            return JSON.parse(saved)
        }
        return defaultValue
    })   

    function setItem(newValue: T) {
        setValue(newValue)
        localStorage.setItem(key, JSON.stringify(newValue))
    }

    return [value, setItem]
}

export default useLocalStorage