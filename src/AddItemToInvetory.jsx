import { useState } from "react"
import { useDispatch } from "react-redux"
import { addItemToInventory, saveItemToInventory } from "./actions/actioncreators"

export default function AddItemToInventory(){

   const [itemName, setItemName] = useState("")
   const [itemQty, setItemQty] = useState("")
   const [itemPrice, setItemPrice] = useState("")

   
   const dispatch = useDispatch()

   
   const onSubmitClick = () =>{
       const item = {
        name: itemName,
        quantity: itemQty, 
        price: itemPrice
       }
       dispatch(saveItemToInventory(item))
   
   }

    return(
        <div> 
            <h2>Add Item To Inventory</h2>
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


           <button onClick={()=>{onSubmitClick()}} className="buttonstyle">Submit</button>
        </div>
    )
}