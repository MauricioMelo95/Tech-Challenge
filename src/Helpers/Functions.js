import { useState } from "react";




export const getFunctions = ({type}) =>{
const [Title, setTitle] = useState('');

    if(type === 1){
        setTitle('Iniciar sesión');
    }
    else{
        setTitle('Crear una cuenta');
    }
return Title;

}


