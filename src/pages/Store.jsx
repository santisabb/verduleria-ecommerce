import HeaderStore from "../components/HeaderStore.jsx"
import Card from "../components/ProductCard.jsx" 
import Filters from "../components/Filters.jsx"
import { products as initialProducts }  from '../mocks/products.json'
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
        <main>
            {/*TODO:
            ❌diseñar un header que incluya dos dropdowns para elegir categorias y otra para ordenar los productos
            ✅sino hacer un solo dropdown para elegir la categoria y una barra de rango para elegir un precio
            ✅siempre incluyendo una barra de busqueda */}
            <HeaderStore></HeaderStore>
            {/* ✅ - en vez de hacer map aquí, hacerlo directamente en el componente (?) */}
            <Card products={initialProducts} />
        </main>
    )
}

export default Store