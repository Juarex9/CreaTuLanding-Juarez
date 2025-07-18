import ItemListContainer from "../components/ItemListContainer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {collection, getDocs, query, where} from "firebase/firestore";
import { db } from "../services/config/firebase";

const Category = () => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const productsQuery = query(
            collection(db, "products"),
            where("category", "==", categoryId)
        )

        getDocs(productsQuery).then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setProducts(data);
        });
    }, [categoryId]);

    return <ItemListContainer products={products}/>;
};

export default Category;