import { useDispatch, useSelector } from "react-redux"
import InventoryItem from "./Components/InventoryItem"
import { useEffect } from "react"
import { fetchItemsFromInventory, fetchItemsSuccess } from "./actions/actioncreators"

export default function InventoryList(){

    const dispatch = useDispatch()

    const inventoryList = useSelector((state) => state.itemsList);

    const loading = useSelector((state) => state.loading);



    useEffect(()=>{dispatch(fetchItemsSuccess())},[])


    return(
        <div>
         { inventoryList.map((inventory)=>(
            <InventoryItem item = {inventory}/>
         ))}
        </div>
    )
}