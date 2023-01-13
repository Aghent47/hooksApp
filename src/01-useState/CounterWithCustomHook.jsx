import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

    const { counter, decrement, increment, reset } = useCounter();



  return (
    <>
        <h1>Counter with Custom Hook: { counter } </h1>
        <button onClick={ () => increment(2) } className="btn btn-primary">+1</button>
        <button onClick={ () => decrement(2) } className="btn btn-primary">-1</button>
        <button onClick={ reset } className="btn btn-primary">Reset</button>
    </>
  )
}