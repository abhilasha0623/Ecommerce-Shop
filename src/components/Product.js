import React from "react";
import { useDispatch } from 'react-redux'
import allActions from '../Redux/Actions';
import "../Styles/Product.css"
const Product = ({ data }) => {
    const dispatch = useDispatch();
    console.log(data)
    const addToBasket = (val) =>{
        dispatch(allActions.ProductActions.addProduct(val)) 
    }
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
                        <button onClick={addToBasket(val)}>Add To Basket</button>
                    </div>)
            })}

        </>
    );
}

export default Product;