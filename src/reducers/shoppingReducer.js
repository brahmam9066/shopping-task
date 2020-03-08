import { ADD_ITEM,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING} from '../actions/actionTypes';


const initState = {
    items: [{"id":9090,"name":"Item1","price":200,"discount":10,"type":"fiction","img_url":"https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg"},
    {"id":9091,"name":"Item2","price":250,"discount":15,"type":"literature","img_url":"https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg"},
    {"id":9092,"name":"Item3","price":320,"discount":5,"type":"literature","img_url":"https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg"},
    {"id":9093,"name":"Item4","price":290,"discount":0,"type":"thriller","img_url":"https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg"},
    {"id":9094,"name":"Item1","price":500,"discount":25,"type":"thriller","img_url":"https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg"},
    {"id":9095,"name":"Item2","price":150,"discount":5,"type":"literature","img_url":"https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg"},
    {"id":9096,"name":"Item3","price":700,"discount":22,"type":"literature","img_url":"https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg"},
    {"id":9097,"name":"Item4","price":350,"discount":18,"type":"fiction","img_url":"https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg"}],
    addedItems:[],
    total: 0

}
const shoppingReducer= (state = initState,action)=>{
   
    if(action.type === ADD_ITEM){
          let addedItem = state.items.find(item=> item.id === action.id)
          let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== ADD_SHIPPING){
        return{
            ...state,
            total: state.total + 6
        }
  }

  if(action.type=== 'SUB_SHIPPING'){
      return{
          ...state,
          total: state.total - 6
      }
}
    
  else{
    return state
    }
    
}

export default shoppingReducer
