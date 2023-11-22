
import { UserContext } from "../../context/user.context";

import { ProductsContext } from "../../context/products.contex";
import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import './shop.styles.scss'

const Shop =()=>{
    const {products}= useContext(ProductsContext)
    return(<div className="products-container">
        {products.map((product)=>(
         <ProductCard key={product.id} product={product}/>



        ))}


    </div>)
}



export default Shop;