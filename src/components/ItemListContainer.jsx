import { Flex } from "@chakra-ui/react";
import { getAllProducts } from "../services/products.services";
import { useEffect, useState } from "react";


const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState();

    useEffect(() => {
        getAllProducts().then((res) => {
            setProducts(res.data.products);
        });

    }, []);

    return (
        <Flex>
            {products.map((product) => {
                return <div>{product.title}</div>;
            })}
        </Flex>
    );
};




export default ItemListContainer;