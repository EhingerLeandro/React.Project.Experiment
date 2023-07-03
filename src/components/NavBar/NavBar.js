import Cart from "../CartWidget/CartWidget";

const NavBar = () =>{
    return (
        <nav>
            <h3>Logo Ecomerce</h3>
            <div>
                <button>Opción 1</button>
                <button>Opción 2</button>
                <button>Opción 3</button>
            </div>
            <Cart/>
        </nav>
    )
};
export default NavBar;