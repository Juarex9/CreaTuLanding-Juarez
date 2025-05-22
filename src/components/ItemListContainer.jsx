import { Box, SimpleGrid, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { getAllProducts } from "../services/products.services";
import { useEffect, useState } from "react";

const ItemCard = ({ image, title, description, price }) => {
    return (
        <Box
            borderWidth={'1px'}
            borderRadius={'lg'}
            color={'black'}
            transition={'transform 0.3s, box-shadow 0.3s'}
            _hover={{transform: "translateY(-5px)", boxShadow: "lg"}}
        >
            <Image src={image} height={'200px'} width={'100%'} objectFit={'cover'} />
            <Box padding={'4'}>
                <Heading size={'md'} marginBottom={'2'}>{title}</Heading>
                <Text noOfLines={'2'} height={'60px'}>{description}</Text>
                <Text fontSize={'18px'}>${price}</Text>
            </Box>
        </Box>
    )
}


const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts().then((res) => {
            setProducts(res.data.products);
        });
    }, []);

    return (
        <Box width={'100%'} overflowX={'hidden'} p={4}>
            <SimpleGrid columns={{ lg: 6 }} spacing={4} width={'100%'}>
                {products.map((product) => {
                    return (
                        <ItemCard
                            image={product.thumbnail}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                        />
                    );
                })}
            </SimpleGrid>
        </Box >
    );
};




export default ItemListContainer;