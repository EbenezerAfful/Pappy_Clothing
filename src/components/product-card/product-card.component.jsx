import { useContext } from 'react';

import { CartContext } from '../../context/cart.contex';
import Button from '../button/button.component';
import './product-card.styles.scss'

const ProductCard = ({product})=>{
  const {name,price,imageUrl} = product
  const {addItemtoCart} = useContext(CartContext)
  const addProductToCart = () => addItemtoCart(product)
  console.log(product)
  
    
return(<div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`}/>
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick ={addProductToCart} > Add to Cart </Button>



</div>

)}








export default ProductCard;