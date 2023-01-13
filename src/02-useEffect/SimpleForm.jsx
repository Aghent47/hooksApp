import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'neider',
        email: 'neider47hm@gmail.com',
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value,
        });
    }


    useEffect(() => {
      /* console.log('UsEffecto called!') */
    }, [])

    useEffect(() => {
        /* console.log('FormState Cambio') */
      }, [formState]);
    
    useEffect(() => {
      /* console.log('Email Cambio') */
    }, [email]);

  return (
    <>
        <h1>Simple Form</h1>
        <hr />

        <input type="text"
        className = "form-control"
        placeholder = "Username"
        name = "username" 
        value = { username }
        onChange = { onInputChange }
        />
        
        {
            (username === 'neider2') && <Message />
        }
        
        <input type="email"
        className = "form-control mt-2"
        placeholder = "neiderkk@gmail.com"
        name = "email" 
        value = { email }
        onChange={ onInputChange }
        />

        

    </>

     
  )
}
