import React, { useState } from 'react'



//Custom Hook 
export function useLocalStorage(key, initialvalue) {

    const [storedValue, setvalue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key)
            return item != null ? JSON.parse(item) : initialvalue
        } catch (e) {
            return initialvalue
        }
    })

    const setLocalStorage = value => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value))
            setvalue(value)
        } catch (e) {
            console.error(e)
        }
    }

    return [storedValue, setLocalStorage]
}