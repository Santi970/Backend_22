import React, {useContext, useState, createContext, useEffect} from 'react';
const FormContext = createContext();


//Custom Hooks (esta se importa)
export function UseForm(){
    return useContext(FormContext) //Basicamente hace esto: CartContext.Consumer
}

export const FormProvider = ({children}) => {

    let [userInfo, setForm] = useState([]);

    const saveForm = (data) =>{
            setForm([...userInfo, data])
            console.log(userInfo)
    }

  useEffect(() => {
        
    if(localStorage.getItem('form')){
        // De Json a objeto
        userInfo = JSON.parse(localStorage.getItem('form'))
        setForm(userInfo)
    }
    },[])

   return (
    <div>
        <FormContext.Provider value = {{saveForm, userInfo}}>
        {children}
        </FormContext.Provider>
        
    </div>
)}

export default FormProvider
