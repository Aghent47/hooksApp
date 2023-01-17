import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks';

const heavyStuff = (iterations) => {
  for (let i = 0; i < iterations; i++) {
    console.log('Ahi vamos...');
  }
  return `${iterations} iteraciones realizadas`;
}


export const MemorizeHook = () => {

  const {counter, increment } =  useCounter(1000);
  const [show, setShow] = useState(true);

  const MemorizeValue = useMemo(() => heavyStuff(counter), [counter])

  return (
    <>
        <h1>Counter: <small>{counter}</small> </h1>
        <hr />
        <h5>{MemorizeValue}</h5>
        <button onClick={() => increment(1)} className='btn btn-primary' > +1 </button>

        <button onClick={() => setShow(!show)} className='btn btn-outline-primary ml-3' > 
            Show/Hide { JSON.stringify(show) } </button>
    </>
  )
}
