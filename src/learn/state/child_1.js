import { useState } from "react"

export default function Child1({ mainCount, IncMainCount }) {
    const [count, setCount] = useState(1)
    const handleCount = () => {
        setCount(count + 1)
    }
    return (
        <div style={{ background: '#ffe1f3', padding: '2rem', margin: '1rem' }}>
            <p>Main Count: {mainCount}</p>
            <p>Child Count: {count}</p>
            <button onClick={handleCount}>
                Increase Count
            </button>
            <button onClick={() => IncMainCount()}>
                Increase Main Count
            </button>
        </div>
    )
}