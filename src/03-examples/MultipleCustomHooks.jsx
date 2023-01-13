import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {
    const { increment, counter } = useCounter();
    const {data, isLoading, haserror} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
   
    /* console.log(data, isLoading, haserror); */
    
    const {author, quote} = !!data && data[0];

    
  return (
   <>
    <h1>The Breaking Bad</h1>

    <hr />

    {
        isLoading ? (
        <div className="alert alert-info text-center">
            <h1>
                Loading...
            </h1>
        </div>)
        :
        <blockquote className="blockquote text-end">
            <p className="mb-1" > {quote} </p>
            <footer className="blockquote-footer">{author}</footer>
        </blockquote>
    }

        <button className="btn btn-dark" onClick={() => increment(1)} disabled={isLoading} >
            Next Quote
        </button>
    

   </>
  )
}
