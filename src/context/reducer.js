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
        prevState.cart = [...prevState.cart, item]

        return {...prevState}
    }

    return prevState
}