import HeaderStore from "../components/HeaderStore.jsx"
import Card from "../components/ProductCard.jsx" 
import useFilters from "../hooks/useFilters.js"
import {products as initialProducts}  from '../mocks/products.json'
import { useState } from "react"




function Store(){

    const { filterProducts } = useFilters()

    const [products] = useState(initialProducts)

    const filteredProducts  = filterProducts(products)

    
    return(
        <main className="store-page">
            <h2 className="store-title">Tienda</h2>
            <HeaderStore />
            
            <Card products={filteredProducts} />
        </main>
    )
}

export default Store