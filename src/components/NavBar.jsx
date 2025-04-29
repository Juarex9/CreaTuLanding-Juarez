import { Flex, MenuItem, Text, Menu, MenuList, Button, MenuButton} from "@chakra-ui/react";
import Cartwidget from "./CartWidget";
const NavBar = () => {
    return (
        <Flex
            alignItems='center'
            justifyContent='space-between'
            padding='0 20px'
            width='100vw'
            backgroundColor='#ada0a0'
            height="7%"
            border= "1px solid black"
        >
            <Text className="test">Tienda de Agustin</Text>
            <Menu>
                <MenuButton  as={Button} bg='#ada0a0'>
                    Actions
                </MenuButton>
                <MenuList>
                    <MenuItem>Remeras</MenuItem>
                    <MenuItem>Accesorios</MenuItem>
                    <MenuItem>Pantalones</MenuItem>
                    <MenuItem>Zapatillas</MenuItem>
                    <MenuItem>Ofertas</MenuItem>
                </MenuList>
            </Menu>
            <Cartwidget />
        </Flex>
    );
};


export default NavBar;