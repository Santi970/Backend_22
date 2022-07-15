import {FETCHING, FETCH_SUCCES} from "./actions/products"; //importamos las acciones. 

export const initialState = {
    fetching: true, 
    products: [],
    categories: [],
    errors: false,
};

//Funcion pura: (para los mismos datos de entrada siempre va a tener los mismos datos de salida)
//Siempre la info que se dispara con un dispatch tiene dos elementos, el type y el PAYLOAD.
export function productsReducer(state = initialState, action){  
    switch (action.type){
        case FETCHING:
        return {
            ...initialState,
            fetching:  true,
        };
        //Que le vamos a pedir a la api y como lo quermos armar
        case FETCH_SUCCES:
            return {
                fetching: false,
                products: action.payload.data, 
                categories: action.payload.categories,
                errors: false, 
        };
        default: 
            return state; //funcion pura siempre retorna algo. 
    }
}