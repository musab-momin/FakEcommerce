import { data } from "../misc/dummy.data"


export const reducer = (prevState, action) =>{

    if(action.type === "onTypeChange"){
        prevState.type = action.payload
        if(prevState.size !== 'size'){
            prevState.data = data.filter( item => item.description.category === action.payload && item.description.size === prevState.size)
        }else{
            prevState.data = data.filter( item => item.description.category === action.payload )
        }


        return { ...prevState }
    }
    
    if(action.type === "onSizeChange"){
        prevState.size = action.payload
        if(prevState.type !== 'select'){
            prevState.data = data.filter( item => item.description.size === action.payload && item.description.category === prevState.type)
        }else{
            prevState.data = data.filter( item => item.description.size === action.payload)
        }
        
        return { ...prevState }
    }

    if(action.type === "onClearFilter"){
        prevState.type = "select"
        prevState.size = "size"
        prevState.data = data
        return {...prevState}
    }

    if(action.type === "onQueryChange"){
        prevState.searchQuery = action.payload;
        // clearing active filters on search
        prevState.type = "select"
        prevState.size = "size"

        prevState.data = data.filter( item => item.title.toLowerCase().includes(action.payload.toLowerCase()) )
        
        return {...prevState}
    }

    if(action.type === 'addToCart'){

        const id = (action.payload[0]+1) + 100
        const amount = parseInt(action.payload[1], 10)
        
        const updatedData = prevState.data.map(entry => {
            if(entry.id === id){
                const total = entry.quantity
                return {...entry, quantity: total-amount }
            }
            return entry
        })

        prevState.data = updatedData
        const item = data.find(entry => entry.id === id);
        item.quantity = amount
        prevState.cart = [...prevState.cart, item]

        prevState.totalBill += (item.price*amount)

        return {...prevState}
    }

    if(action.type === 'removeToCart'){
        const id = (action.payload[0]+1) + 100
        const amount = parseInt(action.payload[1], 10)
        // removing deselected item from cart
        const filteredCart = prevState.cart.filter(item => item.id !== id)
        prevState.cart = filteredCart
        
        // adding the quantity to that same item

        prevState.data = prevState.data.map(item => {
            if(item.id === id){
                item.quantity += amount
            }
            return {...item}
        })
        
        return {...prevState}
    }

    if(action.type === 'removeFromCart'){
        const filteredCart = prevState.cart.filter(item => item.id !== action.payload[0]);
        prevState.cart = filteredCart

        // also making changes in table data
        prevState.data = prevState.data.map(item => {
            if(item.id === action.payload[0]){
                item.quantity += action.payload[1]
            }
            return {...item}
        })

        prevState.totalBill = filteredCart.reduce( (sum, currentstate) => {
            return sum + (currentstate.price * currentstate.quantity)
        }, 0)

        return {...prevState}
    }

    if(action.type === 'toggleQuantity'){
        const [id, flag] = action.payload
        prevState.cart = prevState.cart.map(item=>{
            if(id === item.id && flag === 'increase'){
                item.quantity += 1
            }else if(id === item.id && flag === 'decrease'){
                item.quantity -= 1
            }
            return {...item}
        }).filter( item => item.quantity !== 0 );

        // also making changes in table data
        prevState.data = prevState.data.map(item=>{
            if(item.id === id && flag === "increase"){
                item.quantity -= 1
            }else if(item.id === id && flag === "decrease"){
                item.quantity += 1
            }
            return {...item}
        })

        prevState.totalBill = prevState.cart.reduce( (sum, currentstate) => {
            return sum + (currentstate.price * currentstate.quantity)
        }, 0)
        return { ...prevState }
    }

    if(action.type === 'CLEARCART'){
        prevState.cart = []
        return {...prevState}
    }

    return prevState
}