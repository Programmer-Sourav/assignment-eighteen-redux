export const addItemToInventory = (itemToAdd) =>(
    {
        type: "ADD_ITEM_TO_INVENTORY",
        payload: itemToAdd
    })
    

 export const fetchItemsFromInventory = (items) =>({
    type: "FETCH_ITEMS_SUCCESS",
    payload: items
 })   

 export const fetchItemsLoading = () =>{
    return {type: "FETCH_ITEMS_LOADING"}
 }

 export const fetchItemError = (error) =>{
    return {type: "FETCH_ITEMS_ERROR", payload: error}
 }

 export const deleteItem = (itemId) =>({
     type: "DELETE_INVENTORY_ITEM",
     payload: itemId
 })

 export const editItem = (itemId) =>({
    type: "EDIT_INVENTORY_ITEM",
    payload: itemId
 })

 export const addSalesToInventory = (itemToAdd) =>(
    {
        type: "ADD_SALES_TO_INVENTORY",
        payload: itemToAdd
    })

    export const fetchSalesFromInventory = (items) =>({
        type: "FETCH_SALES_SUCCESS",
        payload: items
     })   
    
     export const fetchSalesLoading = () =>{
        return {type: "FETCH_SALES_LOADING"}
     }
    
     export const fetchSalesError = (error) =>{
        return {type: "FETCH_SALES_ERROR", payload: error}
     }
    
     export const deleteSale = (itemId) =>({
         type: "DELETE_SALE_ITEM",
         payload: itemId
     })
    
     export const editSale = (itemId) =>({
        type: "EDIT_SALE_ITEM",
        payload: itemId
     })

     
  export const saveItemToInventory = (itemToAdd) => async (dispatch) =>{
   
    dispatch(addItemToInventory(itemToAdd))
   
    try {
        const response = await fetch("https://inventory-assignment18-be.developersourav.repl.co/items", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(itemToAdd),
        });
        if (response.ok) {
          console.log("Item added successfully to the server.");
        } else {
          console.error("Failed to add item to the server.");
        }
      } catch (error) {
        console.error("Error occurred while adding item:", error);
      }
  }  


  export const fetchItemsSuccess = () => async (dispatch) =>{
     try{
        fetchItemsLoading()
        const response = await fetch("https://inventory-assignment18-be.developersourav.repl.co/items")
        if(response.ok){    
        const receivedResponse = await response.json();
        const itemList = receivedResponse.items;
        dispatch(fetchItemsFromInventory(itemList))
        }
        else{
            fetchItemError("Error while fetching data")
        }
     }
     catch(error){
        dispatch(fetchItemError(error.message));
     }
  }

  export const deleteItemFromInventory = (itemToBeDeleted) => async (dispatch) =>{
   
    dispatch(deleteItem(itemToBeDeleted))
   
    try {
        const response = await fetch("https://inventory-assignment18-be.developersourav.repl.co/items", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(itemToBeDeleted),
        });
        if (response.ok) {
          console.log("Item deleted successfully from the server.");
        } else {
          console.error("Failed to delete item from the server.");
        }
      } catch (error) {
        console.error("Error occurred while adding item:", error);
      }
  }
  
  export const editItemToInventory = (itemToEdit) => async (dispatch) =>{
   
    dispatch(editItem(itemToEdit))
   
    try {
        const response = await fetch("", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(itemToEdit),
        });
        if (response.ok) {
          console.log("Item edited successfully to the server.");
        } else {
          console.error("Failed to edit item to the server.");
        }
      } catch (error) {
        console.error("Error occurred while editing item:", error);
      }
  } 

  export const saveSalesToInventory = (itemToAdd) => async (dispatch) =>{
   
    dispatch(addItemToInventory(itemToAdd))
   
    try {
        const response = await fetch("https://inventory-assignment18-be.developersourav.repl.co/items", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(itemToAdd),
        });
        if (response.ok) {
          console.log("Item added successfully to the server.");
        } else {
          console.error("Failed to add item to the server.");
        }
      } catch (error) {
        console.error("Error occurred while adding item:", error);
      }
  }  



  