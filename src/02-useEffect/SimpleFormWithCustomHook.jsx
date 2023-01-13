import { useEffect } from "react";
import { useForm } from "../hooks/useForm";

export const SimpleFormWithCustomHook = () => {

 /*    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
    });

    const { username, email, password } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value,
        });
    } */

    const { formState, onInputChange, username, email, password } = useForm({
      username: '',
      email: '',
      password: '',
    });

    /* const { username, email, password } = formState; */

    /* useEffect(() => {
       console.log('UsEffecto called!') 
    }, [])

    useEffect(() => {
         console.log('FormState Cambio') 
      }, [formState]);
    
    useEffect(() => {
       console.log('Email Cambio') 
    }, [email]);
 */
  return (
    <>
        <h1>Form With Custom Hook</h1>
        <hr />

        <input type="text"
        className = "form-control"
        placeholder = "Username"
        name = "username" 
        value = { username }
        onChange = { onInputChange }
        />
    
        <input type="email"
        className = "form-control mt-2"
        placeholder = "neiderkk@gmail.com"
        name = "email" 
        value = { email }
        onChange={ onInputChange }
        />

        <input type="password"
        className = "form-control mt-2"
        placeholder = "Contraseña"
        name = "password" 
        value = { password }
        onChange={ onInputChange }
        />

        

    </>

     
  )
}
