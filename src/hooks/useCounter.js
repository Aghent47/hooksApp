import { useState } from "react";

export const useCounter = ( inicialValue = 10 ) => {

    const [counter, setCounter] = useState(inicialValue);

    const increment = (value) => {
        setCounter(counter + value);
    }

    const decrement = (value) => {
        if(counter === 0)return;
        setCounter(counter - value);
    }

    const reset = () => {
        setCounter(inicialValue);
    }

    return{
        counter,
        increment,
        decrement,
        reset,
    }
}