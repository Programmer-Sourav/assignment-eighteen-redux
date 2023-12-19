import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { editItemToInventory, editSale, editSalesItem } from "./actions/actioncreators"

export default function EditSalesItem(){


    const {id} = useParams()
    const dispatch = useDispatch()
    const salesList = useSelector((state)=>(state.salesList))

    const item = getItem()

    function getItem(){
      const item = salesList.find((item)=>(item._id===id))
      return item;
    }

   const [itemSold, setItemSold] = useState(item && item.sold)
   const [itemQty, setItemQty] = useState(item && item.quantity)
   const [itemPrice, setItemPrice] = useState(item && item.amount)
   const [saleDescription, setSaleDescription] = useState(item && item.description)


   
   const onSubmitClick = () =>{
       const item = {
        quantity: itemQty, 
        amount: itemPrice,
        description: saleDescription
       }
       dispatch(editSalesItem(item, id))
   
   }
 
     return(
         <div> 
             <h2>Edit Sales Item</h2>
            <div>
            <label> Qty Sold: 
            <input type="text" value={itemQty} onChange={(e)=>{setItemQty(e.target.value)}}/>
            </label>
            </div>
            <div>
            <label> Item Price: 
            <input type="text" value={itemPrice} onChange={(e)=>{setItemPrice(e.target.value)}}/>
            </label>
            </div>
            <div>
            <label> Sale Description: 
            <input type="text" value={saleDescription} onChange={(e)=>{setSaleDescription(e.target.value)}}/>
            </label>
            </div>
         <button onClick={()=>{onSubmitClick()}}>Submit</button>
         </div>
     )
}