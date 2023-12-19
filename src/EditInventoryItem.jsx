import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { editItemToInventory } from "./actions/actioncreators"

export default function EditInventoryItem(){


    const {id} = useParams()
    const dispatch = useDispatch()
    const itemsList = useSelector((state)=>(state.itemsList))

    const item = getItem()

    function getItem(){
      const item = itemsList.find((item)=>(item._id===id))
      return item;
    }

    const [itemName, setItemName] = useState(item && item.name)
    const [itemQty, setItemQty] = useState(item && item.quantity)
    const [itemPrice, setItemPrice] = useState(item && item.price)

    const onSubmitClick = () =>{
        const item = {
         id: id,   
         name: itemName,
         quantity: itemQty, 
         price: itemPrice
        }
        dispatch(editItemToInventory(item, id))
    
    }
 
     return(
         <div> 
             <h2>Edit Inventory Item</h2>
             <div>
             <label> Item To Add: 
             <input type="text" value={itemName}  onChange={(e)=>{setItemName(e.target.value)}}/>
             </label>
             </div>
             <div>
             <label> Item Qty: 
             <input type="text" value={itemQty} onChange={(e)=>{setItemQty(e.target.value)}}/>
             </label>
             </div>
             <div>
             <label> Item Price: 
             <input type="text" value={itemPrice} onChange={(e)=>{setItemPrice(e.target.value)}}/>
             </label>
             </div>
 
 
            <button onClick={()=>{onSubmitClick()}}>Edit</button>
         </div>
     )
}