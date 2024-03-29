import { useContext } from 'react';
import { CartContext } from '../../context/cart.contex';

import './checkout-item.styles.scss'


const CheckoutItem = ({cartItem})=>{
    const {name,imageUrl,price,quantity}= cartItem;
    const {clearItemFromCart,addItemtoCart,removeItemFromCart} = useContext(CartContext)
    const clearItemhandler=()=>{clearItemFromCart(cartItem)}
    const addItemHandler=()=>{addItemtoCart(cartItem)}
    const removeItemHandler=()=>{removeItemFromCart(cartItem)}

    return(<div className='checkout-item-container'>
        <div className='iamge-container'>
         <img src={imageUrl} alt={`${name}`}/>
        </div>
        <span className='name' >{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={removeItemHandler}>
             &#10094;
            </div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={addItemHandler}>
            &#10095;
            </div>
        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={clearItemhandler}>&#10005;</div>
    </div>

    )
}


export default CheckoutItem