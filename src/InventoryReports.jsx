import { useDispatch, useSelector } from "react-redux";
import { fetchItemsSuccess } from "./actions/actioncreators";
import { useEffect } from "react";
import InventoryReportItem from "./Components/InventoryReportItem";

export default function InventoryReports(){
    
    const dispatch = useDispatch()

    const inventoryList = useSelector((state) => state.itemsList);

    const loading = useSelector((state) => state.loading);



    useEffect(()=>{dispatch(fetchItemsSuccess())},[])


    return(
        <div>
         { inventoryList.map((inventory)=>(
            <InventoryReportItem item = {inventory}/>
         ))}
        </div>
    )
}