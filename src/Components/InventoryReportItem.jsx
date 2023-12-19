
import "../style.css"




export default function InventoryReportItem({item}){

 
     return(
         <div >
             {
                 <div className="itemStyle">
                 <p><strong>Item name: </strong> {item.name}</p>
                 <p><strong>Item Quantity:</strong>{item.quantity}</p>
                 <p><strong>Item Price: </strong>{item.price}</p>
                 <p><strong>Quantity Left:</strong>{item.quantityLeft}</p>
             
                 </div>
             }
         </div>
     )
 }