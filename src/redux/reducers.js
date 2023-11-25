import {createReducer} from "@reduxjs/toolkit"


export const cartReducer = createReducer({ 
     
    cartitems:[],subTotal:0,shipping:0,tax:0,total:0,
},{
     addToCart:(state,action)=>{
        const items = action.payload; 
        const isitemexist = state.cartitems.find((i)=>i.id === items.id);
   if(isitemexist){ 
      state.cartitems.forEach(i=>{ 
        if(i.id===items.id) i.quantity +=1
      })
   }
   else{
     state.cartitems.push(items);
   }
     },
     decrement:(state,action)=>{ 
        const item = state.cartitems.find((i)=>i.id === action.payload);
        if(item.quantity > 1){
            state.cartitems.forEach(i=>{
                if(i.id===item.id) i.quantity -=1
            })
        }
     },
     delete:(state,action)=>{ 
        state.cartitems= state.cartitems.filter(i=>i.id!== action.payload)
        
     },
     calculate:(state)=>{  
        let sum =0
        state.cartitems.forEach(i=>sum+=i.price*i.quantity)
        state.subTotal=sum
        state.shipping=state.subTotal>1000? 0: 200
        state.tax=+ (state.subTotal*0.18).toFixed()
        state.total=state.subTotal + state.shipping + state.tax
     }
})