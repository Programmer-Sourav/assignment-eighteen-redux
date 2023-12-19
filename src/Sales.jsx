import { useContext, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import SalesItem from "./Components/SalesItem"
import { fetchSalesFromInventory, fetchSalesSuccess } from "./actions/actioncreators"

export default function Sales(){
    
    const dispatch = useDispatch()

    const salesList = useSelector((state)=>(state.salesList))

    const loading = useSelector((state) => state.loading);


    useEffect(() => {
        dispatch(fetchSalesSuccess());
      }, []);
      
    
    return(
        <div> 
            {
               salesList.map((sales)=>(
                <SalesItem sales = {sales} key={sales._id}/>
               ))
            }
        </div>
    )
}