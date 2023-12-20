export const initialState = {
     itemsList: [],
     salesList: [],
     salesReport: [],
     error: "",
     loading: false
}


const InventoryReducer = (state = initialState, action) =>{

    switch(action.type){
        case "FETCH_ITEMS_SUCCESS":
            return {...state, itemsList: action.payload, loading: false, error: ""}
        case "FETCH_ITEMS_LOADIG":
            return {...state, loading: true, error: ""}    
        case "FETCH_ITEMS_ERROR":
            return {...state, loading: false, error: action.payload}
        case "FETCH_SALES_SUCCESS": 
           console.log(333, action.payload)
           return {...state, salesList: action.payload, loading: false, error: ""} 
        case "FETCH_SALES_LOADING":
            return {...state, loading: true, error: ""}   
        case "FETCH_SALES_ERROR":
           return {...state, loading: false, error: action.payload}   
        case "ADD_ITEM_TO_INVENTORY": 
           return {...state, itemsList: [...state.itemsList, action.payload]}   
        case "DELETE_INVENTORY_ITEM":
            return {...state, itemsList: state.itemsList.filter((item)=>item._id!==action.payload)}   
        case "EDIT_INVENTORY_ITEM":
            return {...state, itemsList: state.itemsList.map((item)=>(item._id===action.payload.id? {...item, 
                name: action.payload.name,
                quantity: action.payload.quantity,
                price: action.payload.price } : item))}  
        case "ADD_ITEM_TO_SALES": 
            return {...state, salesList: [...state.salesList, action.payload]}   
        case "DELETE_SALES_ITEM":
                 return {...state, salesList: state.salesList.filter((item)=>item._id!==action.payload)}   
        case "EDIT_SALES_ITEM":
                 return {...state, salesList: state.salesList.map((item)=>(item._id===action.payload.id? {...item, 
                     sold: action.payload.sold,
                     quantity: action.payload.quantity,
                     price: action.payload.price,
                     description : action.payload.description } : item))}   
                     
         case "FETCH_SALES_REPORT_SUCCESS": 
              return {...state, salesReport: action.payload, loading: false, error: ""} 
        case "FETCH_SALES_REPORT_LOADING":
              return {...state, loading: true, error: ""}   
        case "FETCH_SALES_REPORT_ERROR":
              return {...state, loading: false, error: action.payload}               
        default: 
        return state   
    }

}


export default InventoryReducer
