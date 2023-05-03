import { Link, NavLink } from "react-router-dom"

export const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#A4907C" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand text-light fs-1" to="/">-Menu Principal-</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active text-light fs-1" aria-current="page" to="/">-Habitaciones-</Link>
                            <Link className="nav-link text-light fs-1" to="/habitacion-especifica">-Habitacion Especifica-</Link>
                            <a className="nav-link text-light fs-1" href="#">-Otra otra cosa-</a>
                            <Link className="nav-link disabled text-light fs-1">-Otra otra otra cosa-</Link>
                        </div>
                    </div>
                </div>
            </nav>
            {/* colores: https://colorhunt.co/palette/8d7b68a4907cc8b6a6f1dec9 */}
        </>
        
    )
}
