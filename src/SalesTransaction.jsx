import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSalesSuccess } from "./actions/actioncreators";
import SalesReportItem from "./Components/SalesReportItem";

export default function SalesTransaction(){

    const dispatch = useDispatch()

    const salesList = useSelector((state) => state.salesList);

    const loading = useSelector((state) => state.loading);



    useEffect(()=>{dispatch(fetchSalesSuccess())},[])


    return(
        <div>
         { salesList.map((sale)=>(
            <SalesReportItem item = {sale} key={sale._id}/>
         ))}
        </div>
    )
}