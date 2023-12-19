import { useNavigate } from "react-router-dom"
import "./style.css"

export default function Home(){


    const menuItems = [{id: 1, title: "Add Item To Inventory", link: "/addItem"},
                       {id: 2, title: "Add Sales", link: "/addsales"},
                       {id: 3, title: "Inventory List", link: "/inventory"},
                       {id: 4, title: "Sales", link: "/sales"},
                       {id: 5, title: "Inventory Reports", link: "/inventoryreports"},
                       {id: 6, title: "Sales Reports", link: "/salestransaction"}]

    const navigate = useNavigate()                   

    const goToItem = (itemId) => {
        const menuItem = menuItems.find((menu) => menu.id === itemId);
        
        navigate(menuItem.link);
        
      };

    return(
        <div> 
         {
            menuItems.map((menu)=>(
                <li className="listItem" key={menu.id} onClick={()=>{goToItem(menu.id)}}>{menu.title}</li>
            ))
         }
        </div>
    )
}