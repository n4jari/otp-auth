import { useEffect, useState } from 'react'

export default function Couldown() {
    const [secondLeft, setSecondLeft] = useState(0)

    useEffect(() => {
        if (secondLeft <= 0) return

        const timer = setTimeout(() => {
            setSecondLeft(prev => prev - 1)
        }, 1000)

        return () => clearTimeout(timer)
    }, [secondLeft])

    const start = () => {
        setSecondLeft(120)
    }

    return { secondLeft, start }
}
