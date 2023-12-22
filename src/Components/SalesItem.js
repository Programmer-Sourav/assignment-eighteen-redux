import "../style.css"

import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { deleteSale, deleteSaleFromInventory } from "../actions/actioncreators"
import { useEffect, useState } from "react"

export default function SalesItem({sales}){

    const dispatch = useDispatch()

    const navigate = useNavigate()



    const deleteItem = (itemId) =>{
        dispatch(deleteSaleFromInventory(itemId))
    }


    const editItem = (id) =>{
     navigate(`/editsalesitem/${id}`)
    }

    function formatDate(dateString) {
        const date = new Date(dateString);
        
        const day = ('0' + date.getDate()).slice(-2);
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const year = date.getFullYear();
        const hours = ('0' + date.getHours()).slice(-2);
        const minutes = ('0' + date.getMinutes()).slice(-2);
        const seconds = ('0' + date.getSeconds()).slice(-2);
      
        return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
      }
      
    

    return(
        <div> 
            {
               <div className="itemStyle">
                <p><strong>Item Sold: </strong> {sales.quantity}</p>
                <p><strong>Item Description:</strong>{sales.description}</p>
                <p><strong>Item Price: </strong>{sales.amount}</p>
                <p><strong>Revenue</strong>: {sales.revenue}</p>
                <p><strong>Sales Date</strong>: {formatDate(sales.salesDate)}</p>
                <button onClick={()=>{deleteItem(sales._id)}} className="buttonstyle">Delete</button>
                <button onClick={()=>{editItem(sales._id)}} className="buttonstyle">Edit</button>
                </div>
            }
        </div>
    )


}