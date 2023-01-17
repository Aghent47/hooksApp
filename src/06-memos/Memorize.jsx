import React, { useState } from 'react'
import { useCounter } from '../hooks'
import { Small } from './Small';

export const Memorize = () => {

  const {counter, increment } =  useCounter(7);

  const [show, setShow] = useState(true);

  return (
    <>
        <h1>Counter: <Small value={ counter } /> </h1>
        <hr />
        <button onClick={() => increment(1)} className='btn btn-primary' > +1 </button>

        <button onClick={() => setShow(!show)} className='btn btn-outline-primary ml-3' > 
            Show/Hide { JSON.stringify(show) } </button>
    </>
  )
}
