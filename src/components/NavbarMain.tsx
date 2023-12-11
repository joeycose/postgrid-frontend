import { Link } from "react-router-dom";

export const NavbarMain = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">PostGrid API Testing Letter</Link>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Create Letter</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/retrieve-letter-by-id">Retrieve Letter by ID</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavbarMain;