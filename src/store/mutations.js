import{
    ADD_COUNTER,
    ADD_TO_CART
}from './mutation-types'

export default {
    //arrayAPI:push pop shift unshift sort reverse map filter reduce join
    //mutations中的每个方法尽可能完成的事情比较单一
    [ADD_COUNTER](state,payload){
        payload.count++
    },
    [ADD_TO_CART](state,payload){
        payload.checked = true
        state.cartList.push(payload)
    }
}