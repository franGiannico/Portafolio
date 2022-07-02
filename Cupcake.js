import { number , string } from "prop-types"

const Cupcake = ( {descripcion, imagen, sabor, color, precio} ) => {
    return (
        <div className="s-radius-1 s-shadow-bottom background s-shadow-card-micro white-color s-pxy-2">
            <img src={ imagen } alt={ sabor }/>
            <p>{descripcion}</p>
            <span>Color: {color}</span>
            <span>Precio: {precio}</span>
        </div>
    )
}

Cupcake.propTypes = {
    precio: number,
    color: string.isRequired,
    descripcion: string.isRequired,
    sabor: string.isRequired,
    imagen: string
}

Cupcake.defaultProps = {
    imagen: "https://i.pinimg.com/564x/52/d3/96/52d39670e78af2b1962c9657d9921b6d.jpg",
    precio: 0
}

export default Cupcake