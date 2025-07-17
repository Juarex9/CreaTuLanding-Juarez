import { Box, SimpleGrid, Heading, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ItemCard = ({ id, image, title, description, price }) => {
    const navigate = useNavigate();
    return (
        <Box
            borderWidth={'1px'}
            borderRadius={'lg'}
            color={'black'}
            transition={'transform 0.3s, box-shadow 0.3s'}
            _hover={{ transform: "translateY(-5px)", boxShadow: "lg" }}
            onClick={() => navigate(`/item/${id}`)}
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


const ItemListContainer = ({ products }) => {
    return (
        <Box maxWidth={'100%'} overflowX={'hidden'} p={4}>
            <SimpleGrid columns={{ lg: 6 }} spacing={4} width={'100%'}>
                {products.map((product) => {
                    return (
                        <ItemCard
                            key={product.id}
                            id={product.id}
                            image={product.thumbnail}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            discount={product.discountPercentage}
                        />
                    );
                })}
            </SimpleGrid>
        </Box >
    );
};




export default ItemListContainer;