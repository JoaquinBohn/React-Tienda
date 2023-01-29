
import { BsFillCartCheckFill } from 'react-icons/bs';

const CartWidget = ()=>{

    return (
        <div style={
            {display: "flex",
            alignItems: "center",
            color: "white",
            fontSize: "20px"}
        }>
            <p>3</p>
            <BsFillCartCheckFill />
        </div>
    )

}

export default CartWidget