import React from 'react';
import CartItem from './CartItem'

function CartList({value}) {

    
    const {cart} = value;
    console.log(value,cart);
    return (
        
        <div> helklow from cart Cart List

            <CartItem></CartItem>
        </div>

        


    )
    

}

export default CartList;