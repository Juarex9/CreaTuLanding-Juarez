import { Flex } from "@chakra-ui/react";

const ItemListContainer = ({greeting}) => {
    return <Flex height="93%" fontSize="2rem" alignItems="center" justifyContent="center">{greeting}</Flex>;
};


export default ItemListContainer;