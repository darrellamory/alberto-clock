import { useCart } from '../Cart.jsx'; // Import the useCart hook

function Card({ id, image, title, text, price, customClass }){ // Add id to props
    const { addToCart } = useCart(); // Use the addToCart function from context
    const imageClassName = `card-image ${customClass || ''}`;

    // Function to handle adding item to cart
    const handleAddToCart = () => {
        // Remove '$' and ',' from price string and convert to number
        const numericPrice = parseFloat(price.replace(/[^0-9.-]+/g,""));
        addToCart({ id, image, title, text, price: numericPrice });
    };

    return(
        <div className="card">
            <img className={imageClassName} src={image} alt={title}></img> {/* Use title for alt text */}
            <h2 className="card-title">{title}</h2>
            <p className="card-text">{text}</p>
            <p className="card-price">{price}</p>
            <button onClick={handleAddToCart} className="add-to-cart-button">Add to Cart</button>
        </div>
    );
}

export default Card;
