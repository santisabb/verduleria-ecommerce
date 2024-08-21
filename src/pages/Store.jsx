import HeaderStore from "../components/HeaderStore.jsx"
import Card from "../components/ProductCard.jsx" 
import {products as initialProducts}  from '../mocks/products.json'
import { useState } from "react"


function Store(){

    const [products] = useState(initialProducts)

    const [filters, setFilters] = useState({
        category: "all",
        minPrice: 0
    })

    const filterProducts = (products) => {
        return products.filter(product => {
            return (
                product.price >= filters.minPrice && (
                    filters.category === "all" || 
                    product.category === filters.category 
                )
            )
        })
    }

    const filteredProducts = filterProducts(products)

    


    return(
        <main className="store-page">
            <h2 className="store-title">Tienda</h2>

            <HeaderStore></HeaderStore>

            
            <Card products={products} />
        </main>
    )
}

export default Store