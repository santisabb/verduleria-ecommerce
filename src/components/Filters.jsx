import { useState } from "react"

export default function Filters({ onChange }) {
  const [minPrice, setPrice] = useState(0)

  const handleChangePrice = (e) => {
    e.preventDefault()
    setPrice(e.target.value)
    onChange(prevState => ({
      ...prevState,
      minPrice: e.target.value
    }))
  }

  const handleChangeCategory = (e) => {
    onChange(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }

  return (
    <section className="filters">
      <div className="dropdown">
          <label className="filter-name" htmlFor="category">
            Tipo de productos
          </label>
          <select onChange={handleChangeCategory} id="category">
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
        id="price"
        onChange={handleChangePrice}
        min='0'
        max='10000' />
        <label htmlFor="price" className="price-filter">Precio a partir de:  ${minPrice}</label>
      </div>
    </section>
  )
}
