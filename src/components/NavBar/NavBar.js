import Cart from "../CartWidget/CartWidget";

const NavBar = () =>{
    return (
        <nav className='navbar navbar-expand-lg bd-body-tertiary'>
            <div className="container-fluid">
                <a className="navbar-brand" href='#'><h3>Logo Ecomerce</h3></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon" ></span>
                </button>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item"><a className="nav-link active" href="#">Opción 1</a></li>
                    <li className="nav-item"><a className="nav-link active" href="#">Opción 2</a></li>
                    <li className="nav-item"><a className="nav-link active" href="#">Opción 3</a></li>
                </ul>
            </div>
            <Cart/>
        </nav>
    )
};
export default NavBar;