import { Box, Input } from "@chakra-ui/react";
import { useState } from "react";





const Memo = () => {
    const [count, setCount] = React.useState(0);
    const [text, setText] = useState("");

    return (
        <Box>
            <Button onClick={() => setCount(count + 1)}>+1</Button>
            <Input placeholder= "ingrese: " type="text"/>
        </Box>
    );
};

export default Memo;