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
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Tipo de productos
          </button>
          <ul className="dropdown-menu dropdown-menu-dark">
              <li value={'fruit'} className="dropdown-item">Frutas</li>
              <li value={'vegetable'} className="dropdown-item">Verduras</li>
              <li value={'hortaliza'} className="dropdown-item">Hortalizas</li>
              <li value={'grocery'} className="dropdown-item">Almacen</li>
          </ul>
      </div>

      <div>
        <label htmlFor="price" className="form-label">Precio: ${minPrice}</label>
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
