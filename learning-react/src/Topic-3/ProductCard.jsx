function ProductCard({ productName, productPrice, instock, tags }){
    return (
        <div style={{ borderRadius: 8, padding: 10, backgroundColor: "white", color: "black"}}>
            <h3>Product Name: {productName}</h3>
            <h4>Product Price: {productPrice}</h4>
            {instock ? <h4 style={{ color: 'green' }}>Available</h4> : <h4 style={{ color: "red" }}>Not Available</h4>}
            <h4>Tags:
                {tags.map((tag, index) => (
                    <span key={index}>{tag}, </span>
                ))}
            </h4>
        </div>
    );
}

export default ProductCard;