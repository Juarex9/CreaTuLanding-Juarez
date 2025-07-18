import { Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { CartContext } from "../context/CartContext.jsx";
import { useNavigate } from "react-router";


const CartWidget = () => {
    const { getTotalCount, cart } = useContext(CartContext);
    const totalCount = getTotalCount();

    const navigate = useNavigate();

    return (
        <Flex alignItems="center" onClick={() => navigate('/cart')} cursor="pointer">
            <TiShoppingCart size={35} />{totalCount}
        </Flex>
    );
};

export default CartWidget;