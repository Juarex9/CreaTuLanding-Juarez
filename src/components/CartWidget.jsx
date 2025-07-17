import { Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { CartContext } from "../context/CartContext.jsx";

const CartWidget = () => {
    const { cart } = useContext(CartContext);
    const total = cart.reduce((acc, item) => acc + (item.cantidad || 1), 0);

    return (
        <Flex alignItems="center">
            <TiShoppingCart size={35} />{total}
        </Flex>
    );
};

export default CartWidget;