import React, { createContext, useEffect, useState } from 'react'
import { ProductsContext } from './ProductsContext';

export const ProductsContext = createContext(null);

const ProductsProvider = (childen) => {

    const [products, setProducts] = useState(null);

    useEffect(()=>{
        
        
      
    },[])



  return (
    <>
<ProductsContext.Provider value={{products, setProducts}}>

{childen}

</ProductsContext.Provider>


    </>
  )
}

export default ProductsProvider