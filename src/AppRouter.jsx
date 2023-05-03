import { Route, Routes } from "react-router-dom"
import { CardsHabitaciones } from "./Habitaciones/CardsHabitaciones"
import { NavBar } from "./NavBar"
import { HabitacionEspecifica } from "./Habitaciones/HabitacionEspecifica"

export const AppRouter = () => {
  return (
    <>
        <NavBar />
        
        <Routes>

          <Route path="/" element={<CardsHabitaciones />}>
          </Route>

          <Route path="/habitacion-especifica" element={<HabitacionEspecifica />}>
            
          </Route>

        </Routes>
    </>
  )
}
