import { useContext, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import SalesItem from "./Components/SalesItem"
import { fetchSalesFromInventory, fetchSalesSuccess } from "./actions/actioncreators"

export default function Sales() {

    const [selectedRange, setSelectedRange] = useState('last');
  
    const dispatch = useDispatch();
    const salesList = useSelector((state) => state.salesList);
    const loading = useSelector((state) => state.loading);
  
    useEffect(() => {
      dispatch(fetchSalesSuccess());
    }, [dispatch]);
  
    function formatDate(dateString) {
      const date = new Date(dateString);
      const day = ('0' + date.getDate()).slice(-2);
      const month = ('0' + (date.getMonth() + 1)).slice(-2);
      const year = date.getFullYear();
      return `${day}-${month}-${year}`;
    }
  
    const getInitialDate = (today) => {
      const yesterday = new Date(today);
      yesterday.setDate(today.getDate() - 1);
      const initialDate = new Date(yesterday)
      initialDate.setDate(initialDate.getDate() - 7)
      return formatDate(initialDate);
    };
  
    const getFutureDate = (today) => {
      const sevenDaysAfter = new Date(today);
      sevenDaysAfter.setDate(today.getDate() + 7);
      return formatDate(sevenDaysAfter);
    };


    const getOneDayBefore = (today) =>{
      const yesterday = new Date(today);
      yesterday.setDate(today.getDate() - 1);
      return yesterday;
    }
  
    const today = new Date();
  
    useEffect(() => {
      getInitialDate(today);
    }, [today]);
  
    useEffect(() => {
      getFutureDate(today);
    }, [today]);


    useEffect(()=>{getOneDayBefore(today)}, [today])
  
    const handleRangeChange = (e) => {
      setSelectedRange(e.target.value);
    };

    const filteredSalesList = salesList.filter((sales) => {
        const saleDate = formatDate(sales.salesDate);
        //console.log(222,  getInitialDate(today), saleDate, formatDate(today))
        if (selectedRange === 'last') {
          return saleDate >= getInitialDate(today) && saleDate < formatDate(today);
        } else if (selectedRange === 'future') {
          return saleDate >= formatDate(today) && saleDate <= getFutureDate(today);
        }
        return true; 
      });
  
    return (
      <div>
        <label>Select Date Range: </label>
        <select onChange={(e) => handleRangeChange(e)} value={selectedRange}>
          <option value="last">{getInitialDate(today)} to {formatDate(getOneDayBefore(today))}</option>
          <option value="future">{formatDate(today)} to {getFutureDate(today)}</option>
        </select>
  
        {filteredSalesList.map((sales) => (
          <SalesItem sales={sales} key={sales._id} />
        ))}
      </div>
    );
  }