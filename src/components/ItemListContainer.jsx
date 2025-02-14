import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { pedirProductos } from "./pedirProductos";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        pedirProductos().then((res) => {
            setProductos(res);
        });
    }, []);

    return (
        <div>
            <ItemList productos={productos} />
        </div>
    );
};

export default ItemListContainer;
