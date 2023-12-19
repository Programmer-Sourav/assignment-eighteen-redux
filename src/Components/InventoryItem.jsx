import { useDispatch } from "react-redux"
import { deleteItemFromInventory } from "../actions/actioncreators"
import { useNavigate } from "react-router-dom"

import "../style.css"

export default function InventoryItem({item}){

   const dispatch = useDispatch()
   const navigate = useNavigate()

    const deleteItem = (itemId) =>{
        dispatch(deleteItemFromInventory(itemId))
    }


    const editItem = (id) =>{
     navigate(`/editinventoryitem/${id}`)
    }

    return(
        <div >
            {
                <div className="itemStyle">
                <p><strong>Item name: </strong> {item.name}</p>
                <p><strong>Item Quantity:</strong>{item.quantity}</p>
                <p><strong>Item Price: </strong>{item.price}</p>
                <p><strong>Quantity Left:</strong>{item.quantityLeft}</p>
                <button onClick={()=>{deleteItem(item._id)}} className="buttonstyle">Delete</button>
                <button onClick={()=>{editItem(item._id)}} className="buttonstyle">Edit</button>
                </div>
            }
        </div>
    )
}