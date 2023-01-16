import { useCounter, useFetch } from "../hooks"; // archivo de barril en la carpeta hooks.
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

export const MultipleCustomHooks = () => {
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
