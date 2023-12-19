import "../style.css"

import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { deleteSale, deleteSaleFromInventory } from "../actions/actioncreators"

export default function SalesItem({sales}){

    const dispatch = useDispatch()

    const navigate = useNavigate()


    const deleteItem = (itemId) =>{
        dispatch(deleteSaleFromInventory(itemId))
    }


    const editItem = (id) =>{
     navigate(`/editsalesitem/${id}`)
    }

    return(
        <div> 
            {
               <div className="itemStyle">
                <p><strong>Item Sold: </strong> {sales.quantity}</p>
                <p><strong>Item Description:</strong>{sales.description}</p>
                <p><strong>Item Price: </strong>{sales.amount}</p>
                <p><strong>Revenue</strong>: {sales.revenue}</p>
                <p><strong>Sales Date</strong>: {sales.salesDate}</p>
                <button onClick={()=>{deleteItem(sales._id)}} className="buttonstyle">Delete</button>
                <button onClick={()=>{editItem(sales._id)}} className="buttonstyle">Edit</button>
                </div>
            }
        </div>
    )
}