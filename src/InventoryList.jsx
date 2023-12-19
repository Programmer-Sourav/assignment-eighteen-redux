import { useDispatch, useSelector } from "react-redux"
import InventoryItem from "./Components/InventoryItem"
import { useEffect } from "react"
import { fetchItemsFromInventory, fetchItemsSuccess } from "./actions/actioncreators"

export default function InventoryList(){

    const dispatch = useDispatch()

    const inventoryList = useSelector((state) => state.itemsList);

    const loading = useSelector((state) => state.loading);

   
    const categories = inventoryList.reduce((acc, currentItem) =>!acc.includes(currentItem.category.toLowerCase()) ? [...acc, currentItem.category.toLowerCase()] : acc,[]);

    

    useEffect(()=>{dispatch(fetchItemsSuccess())},[])


    return(
        <div>
         {categories.map((category, index) => (
         <ul key={index}>
         <h2>{category.charAt(0).toUpperCase() + category.substring(1)}</h2>
        {inventoryList
        .filter((currentItem) => currentItem.category === category)
        .map((inventory) => (
        <InventoryItem key={inventory.id} item={inventory} />
      ))}
  </ul>
))}
        </div>
    )
}