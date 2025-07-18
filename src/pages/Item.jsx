import { useParams } from "react-router";
import ItemDetailContainer from "../components/ItemDetailContainer";
import { useEffect, useState } from "react";
import { collection, getDoc, doc } from "firebase/firestore";
import { db } from "../services/config/firebase";

const Item = () => {
    const { ProductId } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const productDoc = doc(db, "products", ProductId);

        getDoc(productDoc)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setProduct({ id: snapshot.id, ...snapshot.data() });
                } else {
                    console.error("No such document!");
                }
            })
            .catch((error) => {
                console.error("Error getting document:", error);
            })
            .finally(() => setLoading(false));
    }, []);
    
    return loading ? <>Loading...</> :<ItemDetailContainer product={product}/>;
};

export default Item;