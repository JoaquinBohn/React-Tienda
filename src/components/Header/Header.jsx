import Navbar from "../navbar/Navbar"
import CartWidget from "../CartWidget/CartWidget"

const Header = ()=>{
    
    return (
        <div style={
            {display: "flex",
            width: "100%",
            height:"20vh",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "purple"}
        }>
            <div>
                <h1 style={{margin: "0", fontSize: "55px"}}>The</h1>
                <h2 style={{margin: "0", color: "white"}}>Book Shop</h2>
            </div>
            <Navbar />
            <CartWidget />
        </div>
    )

}

export default Header