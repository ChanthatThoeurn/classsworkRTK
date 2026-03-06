'use client'

import { useAppDispatch, useAppSelector } from "@/lib/hok"
import { count } from "console"

export default function Card(){
    const count = useAppSelector((state) => state.counterSlice.value)

    const dispatch = useAppDispatch()
    return (
        <section>
            <p>Call global state {count}</p>
            <button onClick={() => dispatch({type: 'counterSlice/increment'})}>Increment</button>
            <br></br>
            <button onClick={() => dispatch({type: 'counterSlice/decrement'})}>Decrement</button>
        </section>
            
    )
}