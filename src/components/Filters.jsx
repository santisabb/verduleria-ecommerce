import { useId } from "react"
import useFilters from "../hooks/useFilters.js"

export default function Filters() {
  const { filters, setFilters } = useFilters() // estado global
  //const [minPrice, setPrice] = useState(0) //estado local
  //tener dos estados de esta forma es MALA PRACTICA ❌
  //usar el estado global, para no tener dos fuentes de la verdad
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangePrice = (e) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: e.target.value
    }))
  }

  const handleChangeCategory = (e) => {
    setFilters(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }

  return (
    <section className="filters">
      <div className="dropdown">
          <label className="filter-name" htmlFor={categoryFilterId}>
            Tipo de productos
          </label>
          <select onChange={handleChangeCategory} id={categoryFilterId}>
            <option value={'all'} className="dropdown-item">Todos los productos</option>
            <option value={'fruit'} className="dropdown-item">Frutas</option>
            <option value={'vegetable'} className="dropdown-item">Verduras</option>
            <option value={'hortaliza'} className="dropdown-item">Hortalizas</option>
            <option value={'grocery'} className="dropdown-item">Almacen</option>
          </select>
      </div>

      <div>
        <input 
        type="range" 
        className="form-range" 
        id={minPriceFilterId}
        onChange={handleChangePrice}
        value={filters.minPrice}
        min='0'
        max='10000' />
        <label htmlFor={minPriceFilterId} className="price-filter">Precio a partir de:  ${filters.minPrice}</label>
      </div>
    </section>
  )
}
