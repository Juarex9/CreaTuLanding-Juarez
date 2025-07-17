import { Flex, MenuItem, Text, Menu, MenuList, Button, MenuButton} from "@chakra-ui/react";
import Cartwidget from "./CartWidget";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getAllCategories } from "../services/products.services";
import { useState } from "react";

const NavBar = () => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getAllCategories()
            .then((res) => setCategories(res.data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <Flex
            alignItems='center'
            justifyContent='space-between'
            padding='0 20px'
            width='100%'
            backgroundColor='#ada0a0'
            height="7%"
            border= "1px solid black"
        >
            <Text className="test" onClick={() => navigate("/")} cursor={"pointer"}>Tienda de Agustin</Text>
            <Menu>
                <MenuButton  as={Button} bg='#ada0a0'>
                    Categorias
                </MenuButton>
                <MenuList>
                    {
                        categories.map(item => {
                            return <MenuItem key={item.slug} onClick={() => navigate(`/category/${item.slug}`)}>{item.name}</MenuItem>
                        })  
                    }
                </MenuList>
            </Menu>
            <Cartwidget />
        </Flex>
    );
};


export default NavBar;