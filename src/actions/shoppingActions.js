
import { ADD_ITEM,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY} from './actionTypes'

export const addItem= (id)=>{
    return{
        type: ADD_ITEM,
        id
    }
}

export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}

export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}

export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}
