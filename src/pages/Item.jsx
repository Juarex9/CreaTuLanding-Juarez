import { useParams } from "react-router";
import ItemDetailContainer from "../components/ItemDetailContainer";
import { useEffect, useState } from "react";
import { getProductById } from "../services/products.services";


const Item = () => {
    const { ProductId } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        getProductById(ProductId)
        .then((res) => setProduct(res.data))
        .catch((error) => console.error(error)).finally(() => setLoading(false));
    }, []);
    
    return loading ? <>Loading...</> :<ItemDetailContainer product={product}/>;
};

export default Item;