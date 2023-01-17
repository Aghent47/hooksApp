import { useCounter, useFetch } from "../hooks"; // archivo de barril en la carpeta hooks.
import { LoadingQuote } from "../03-examples/LoadingQuote";
import { Quote } from "../03-examples/Quote";

export const UseLayoutEffect = () => {
    const { increment, counter } = useCounter();
    const {data, isLoading, haserror} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

    const {author, quote} = !!data && data[0];

    
  return (
   <>
    <h1>The Breaking Bad</h1>

    <hr />

    {
        isLoading ? 
        <LoadingQuote/>
        :
        
        <Quote author={author} quote={quote} />
    }

        <button className="btn btn-dark" onClick={() => increment(1)} disabled={isLoading} >
            Next Quote
        </button>
    

   </>
  )
}
