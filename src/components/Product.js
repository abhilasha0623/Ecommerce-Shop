import React from "react";
import "../Styles/Product.css"
const Product = ({ data }) => {
    console.log(data)
    return (
        <>
            {data.data.map((val,index) => {
                return (
                    <div className="product">
                        <div className="product__info">
                            <p>{val.title}</p>
                            <p className="product__price">
                                <small> $</small>
                                <strong>{val.price}</strong>
                            </p>
                            <div className="product__rating">
                                <p>⭐</p>
                            </div>
                        </div>
                        <img src={val.image} alt="productImage"/>
                        <button>Add To Basket</button>
                    </div>)
            })}

        </>
    );
}

export default Product;