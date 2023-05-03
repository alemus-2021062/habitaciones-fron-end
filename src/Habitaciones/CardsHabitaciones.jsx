import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const CardsHabitaciones = () => {
  
  const [habitacion, sethabitacion ] = useState([])
  
  return (
    <>
      <div className="container">
        <div className="row">
          <Link className="card" to='/habitacion-especifica' style={{ width: "18rem" }}>
            <img src="https://definicion.de/wp-content/uploads/2019/12/habitacion.jpg" className="card-img-top mt-3" alt="..." />
            <div className="card-body">
              <h5 className="card-title">La suit 1</h5>
              <p className="card-text">La habitacion cuenta con una cama, un baño, una ducha, un balcon y servicio a la habitacion</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Disponibilidad:</li>
              <li className="list-group-item">costo:</li>
              <li className="list-group-item">Hotel:</li>
              <br />
            </ul>
          </Link>

          <Link className="card" to='/habitacion-especifica' style={{ width: "18rem" }}>
            <img src="https://definicion.de/wp-content/uploads/2019/12/habitacion.jpg" className="card-img-top mt-3" alt="..." />
            <div className="card-body">
              <h5 className="card-title">La suit</h5>
              <p className="card-text">La habitacion cuenta con una cama, un baño, una ducha, un balcon y servicio a la habitacion</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Disponibilidad:</li>
              <li className="list-group-item">costo:</li>
              <li className="list-group-item">Hotel:</li>
              <br />
            </ul>
          </Link>

          <Link className="card" to='/habitacion-especifica' style={{ width: "18rem" }}>
            <img src="https://definicion.de/wp-content/uploads/2019/12/habitacion.jpg" className="card-img-top mt-3" alt="..." />
            <div className="card-body">
              <h5 className="card-title">La suit</h5>
              <p className="card-text">La habitacion cuenta con una cama, un baño, una ducha, un balcon y servicio a la habitacion</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Disponibilidad:</li>
              <li className="list-group-item">costo:</li>
              <li className="list-group-item">Hotel:</li>
              <br />
            </ul>
          </Link>

          <Link className="card" to='/habitacion-especifica' style={{ width: "18rem" }}>
            <img src="https://definicion.de/wp-content/uploads/2019/12/habitacion.jpg" className="card-img-top mt-3" alt="..." />
            <div className="card-body">
              <h5 className="card-title">La suit</h5>
              <p className="card-text">La habitacion cuenta con una cama, un baño, una ducha, un balcon y servicio a la habitacion</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Disponibilidad:</li>
              <li className="list-group-item">costo:</li>
              <li className="list-group-item">Hotel:</li>
              <br />
            </ul>
          </Link>



          <Link className="card" to='/habitacion-especifica' style={{ width: "18rem" }}>
            <img src="https://definicion.de/wp-content/uploads/2019/12/habitacion.jpg" className="card-img-top mt-3" alt="..." />
            <div className="card-body">
              <h5 className="card-title">La suit</h5>
              <p className="card-text">La habitacion cuenta con una cama, un baño, una ducha, un balcon y servicio a la habitacion</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Disponibilidad:</li>
              <li className="list-group-item">costo:</li>
              <li className="list-group-item">Hotel:</li>
              <br />
            </ul>
          </Link>

          <Link className="card" to='/habitacion-especifica' style={{ width: "18rem" }}>
            <img src="https://definicion.de/wp-content/uploads/2019/12/habitacion.jpg" className="card-img-top mt-3" alt="..." />
            <div className="card-body">
              <h5 className="card-title">La suit</h5>
              <p className="card-text">La habitacion cuenta con una cama, un baño, una ducha, un balcon y servicio a la habitacion</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Disponibilidad:</li>
              <li className="list-group-item">costo:</li>
              <li className="list-group-item">Hotel:</li>
              <br />
            </ul>
          </Link>

          <Link className="card" to='/habitacion-especifica' style={{ width: "18rem" }}>
            <img src="https://definicion.de/wp-content/uploads/2019/12/habitacion.jpg" className="card-img-top mt-3" alt="..." />
            <div className="card-body">
              <h5 className="card-title">La suit</h5>
              <p className="card-text">La habitacion cuenta con una cama, un baño, una ducha, un balcon y servicio a la habitacion</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Disponibilidad:</li>
              <li className="list-group-item">costo:</li>
              <li className="list-group-item">Hotel:</li>
              <br />
            </ul>
          </Link>

          <Link className="card" to='/habitacion-especifica' style={{ width: "18rem" }}>
            <img src="https://definicion.de/wp-content/uploads/2019/12/habitacion.jpg" className="card-img-top mt-3" alt="..." />
            <div className="card-body">
              <h5 className="card-title">La suit</h5>
              <p className="card-text">La habitacion cuenta con una cama, un baño, una ducha, un balcon y servicio a la habitacion</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Disponibilidad:</li>
              <li className="list-group-item">costo:</li>
              <li className="list-group-item">Hotel:</li>
              <br />
            </ul>
          </Link>

        </div>
      </div>
    </>
  )
}
