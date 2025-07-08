function Card({ image, title, text, price, customClass }){
    const imageClassName = `card-image ${customClass || ''}`;
    return(
        <div className="card">
            <img className={imageClassName} src={image} alt="profile pic"></img>
            <h2 className="card-title">{title}</h2>
            <p className="card-text">{text}</p>
            <p className="card-price">{price}</p>
        </div>
    );
}

export default Card;
