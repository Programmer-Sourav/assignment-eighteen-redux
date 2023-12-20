import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSalesSuccess, fetchItemsSuccess, fetchItemsWithSales} from "./actions/actioncreators";
import SalesReportItem from "./Components/SalesReportItem";

export default function SalesTransaction(){

    const dispatch = useDispatch()

    const salesList = useSelector((state) => state.salesList);

    const salesReport = useSelector((state)=>state.salesReport)

    const loading = useSelector((state) => state.loading);



    const inventoryList = useSelector((state) => state.itemsList);


    useEffect(()=>{dispatch(fetchItemsSuccess())},[])

    useEffect(()=>{dispatch(fetchItemsWithSales())},[])

    useEffect(()=>{dispatch(fetchSalesSuccess())},[])


    function calculateTotalCost(){
        return inventoryList.reduce((acc, currentItem)=>(acc+ currentItem.price*currentItem.quantity),0)
    }

    function calculateTotalSales(){
        return salesList.reduce((acc, currentItem)=>(acc+currentItem.amount*currentItem.quantity),0)
    }

   console.log("Sales list", salesReport)
    return(
        <div>

         <h1> Total Cost: {calculateTotalCost()} </h1>
         <h1> Total Sales: {calculateTotalSales()} </h1>
         { salesReport.map((sale)=>(
            <SalesReportItem item = {sale} key={sale._id}/>
         ))}
        </div>
    )
}