import { useState, useEffect, useRef } from "react";
import usePrevious from "../../CustomHooks/UsePreviosHook";

export default function UseEffect() {
    const [count, setCount] = useState(0);
    const [anotherCount, setAnotherCount] = useState(0)

    // const prevCountRef = useRef();
    // useEffect(() => {
    //     prevCountRef.current = count;
    //     console.log(1, 'rendered')
    //     console.log(1, prevCountRef.current)
    // });
    const prevCount = usePrevious(count);

    console.log(2, prevCount)

    return (
        <>
            <h1>Now: {count}, before: {prevCount}</h1>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <button onClick={() => setAnotherCount(anotherCount + 1)}>
                Another Increment
            </button>
        </>
    )
}