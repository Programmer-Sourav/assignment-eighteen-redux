import "../style.css"

export default function SalesReportItem({item}){
 
     return(
         <div >
             {
                 <div className="itemStyle">
                 <p><strong>Item name: </strong> {item.description}</p>
                 <p><strong>Item Quantity:</strong>{item.quantity}</p>
                 <p><strong>Item Price: </strong>{item.amount}</p>
                 <p><strong>Sales Date:</strong>{item.salesDate}</p>
                 <p><strong>Item Qty Left:</strong>{item.itemDetails && item.itemDetails.quantityLeft}</p>
                 <p><strong>Item Cost:</strong>{item.itemDetails && item.itemDetails.price}</p>
                 </div>
             }
         </div>
     )
 }