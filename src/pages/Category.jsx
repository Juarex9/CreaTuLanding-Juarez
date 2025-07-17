import ItemListContainer from "../components/ItemListContainer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "../services/products.services";

const Category = () => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        getProductsByCategory(categoryId)
            .then((res) => setProducts(res.data.products))
            .catch((error) => console.error(error));
    }, [categoryId]);

    return <ItemListContainer products={products}/>;
};

export default Category;