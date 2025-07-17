import { Box, Button} from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

const ItemCount = ({product}) => {

    const {addToCart, removeFromCart} = useContext(CartContext);

    return (
        <Box>
            <Button onClick={() => {removeFromCart(product)}}> Quitar del carrito</Button>
            <Button ml={3} onClick={() => addToCart(product)}>Agregar al carrito</Button>
        </Box>
    );
};

export default ItemCount;