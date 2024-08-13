const Item = ({ producto }) => {
    return (
        <div>
            <img src={producto.imagen} alt={producto.titulo} />
            <h2>{producto.titulo}</h2>
            <p>$ {producto.precio}</p>
            <p>{producto.descripcion}</p>
        </div>
    );
};

export default Item; // Asegúrate de que esta línea esté presente y correcta
