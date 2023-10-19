import React, { useEffect, useState } from "react"
import Child1 from "./child_1"
import Child2 from './child_2';

export default function ReactState() {
    const [visible, setVisible] = useState(false)
    const [count, setCount] = useState(1)
    const [isHighValue, setIsHighValue] = useState(false)
    const [anotherCount, setAnotherCount] = useState(1)

    useEffect(() => {})

    /* State Handler Function */
    // Set Visibility State
    const handleVisibility = () => {
        setVisible(!visible)
    }
    // Set Count State
    const handleCount = () => {
        setCount((prevState) => {
            const currState = prevState + 1
            if (currState === 10) {
                setIsHighValue(true)
            }
            console.log('prev curr State', prevState, currState)
            return currState
        })
    }

    return (
        <div style={{ background: '#00ff99' }}>
            <p>React State</p>
            <p>Main Count: {count}</p>
            <p>Another Count: {anotherCount}</p>
            <button onClick={handleVisibility}>
                Show Child Components
            </button>
            <button onClick={handleCount}>
                Increase Count
            </button>
            {isHighValue && <h1>Very High Value</h1>}
            {visible &&
                <div style={{ display: 'flex', flexDirection: 'row', columnGap: '2rem', justifyContent: 'center' }}>
                    <Child1 mainCount={count} IncMainCount={handleCount} />
                    <Child2 mainCount={count} IncMainCount={handleCount} />
                </div>
            }
        </div>
    )
}