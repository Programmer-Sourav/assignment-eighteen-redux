import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addItemToInventory, fetchItemsSuccess, saveItemToInventory } from "./actions/actioncreators"

export default function AddSalesItem(){

   const [itemSold, setItemSold] = useState("")
   const [itemQty, setItemQty] = useState("")
   const [itemPrice, setItemPrice] = useState("")
   const [saleDescription, setSaleDEscription] = useState("")

   
   const dispatch = useDispatch()


   const inventoryList = useSelector((state) => state.itemsList);

   const loading = useSelector((state) => state.loading);

   useEffect(()=>{dispatch(fetchItemsSuccess())},[])

   let totalRevenue;
   const onSubmitClick = () =>{
       const item = {
        sold: itemSold,
        quantity: itemQty, 
        amount: itemPrice,
        description: saleDescription, 
        revenue: totalRevenue
       }
       dispatch(saveItemToInventory(item))
       
   }

   let itemFound;
   if(itemSold){
    itemFound = getItem()
   }

   function getItem(){
    return inventoryList.find((item)=>(item.name.toLowerCase()===itemSold.toLocaleLowerCase()))
   }

   function getRevenue (){
    if(itemFound)
    return (itemQty * itemPrice) - (itemQty*itemFound.price);
   }

   if(itemPrice && itemQty){
    totalRevenue = getRevenue()
   }


    return(
        <div> 
            <h2>Add Item To Inventory</h2>
            <div>
            <label> Item To Add: 
            <input type="text" placeholder="Rice" value={itemSold}  onChange={(e)=>{setItemSold(e.target.value)}}/>
            </label>
            </div>
            <div>
            <label> Item Qty: 
            <input type="text" placeholder="Quantity" value={itemQty} onChange={(e)=>{setItemQty(e.target.value)}}/>
            </label>
            </div>
            <div>
            <label> Item Price: 
            <input type="text" placeholder="900" value={itemPrice} onChange={(e)=>{setItemPrice(e.target.value)}}/>
            </label>
            </div>
            <div>
            <label> Sale Description: 
            <input type="text" placeholder="Each bag was sold with Rs. 150 profit" value={saleDescription} onChange={(e)=>{setSaleDEscription(e.target.value)}}/>
            </label>
            </div>
            <div>
             { itemSold && !itemFound ? <p>No such item found in inventory</p>: ""}
             <p>Total Revenue: {totalRevenue}</p>
           
            </div>
         <button onClick={()=>{onSubmitClick()}} className="buttonstyle">Submit</button>
        </div>
    )
}