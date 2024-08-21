import { useState } from "react"

export default function Filters() {
  const [minPrice, setPrice] = useState(0)

  const handleChange = (e) => {
    e.preventDefault()
    setPrice(e.target.value)
  }

  return (
    <section className="filters">
      <div className="dropdown">
          <label className="filter-name" htmlFor="category">
            Tipo de productos
          </label>
          <select id="category">
              <option value={'fruit'} className="dropdown-item">Frutas</option>
              <option value={'vegetable'} className="dropdown-item">Verduras</option>
              <option value={'hortaliza'} className="dropdown-item">Hortalizas</option>
              <option value={'grocery'} className="dropdown-item">Almacen</option>
          </select>
      </div>

      <div>
        <label htmlFor="price" className="price-filter">Precio: ${minPrice}</label>
        <input 
        type="range" 
        className="form-range" 
        id="price"
        onChange={handleChange}
        min='0'
        max='10000' />
      </div>
    </section>
  )
}
