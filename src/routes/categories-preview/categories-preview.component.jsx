import { CartegoriesContext } from "../../context/Categories.contex";
import {useContext,Fragment } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";


const CategoriesPreview =()=>{
    const {categoriesMap}= useContext(CartegoriesContext)
    return(
    <Fragment >
        {Object.keys(categoriesMap).map((title)=>{
         const products = categoriesMap[title];
         return <CategoryPreview key={title} title={title} products={products}/>    
        }
      )}
   
    </Fragment>
 )
}



export default CategoriesPreview;