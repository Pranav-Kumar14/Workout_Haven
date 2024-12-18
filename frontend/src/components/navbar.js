import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <header>
            <div className="containter">
                <Link to="/">
                    <h1 className="navtitle">Workout Haven</h1>
                </Link>
            </div>
        </header>
    )
}

export default Navbar