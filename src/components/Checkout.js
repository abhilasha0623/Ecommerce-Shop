import React from "react";
import { useSelector,useDispatch } from "react-redux";
import Subtotal from "./Subtotal";
import "../Styles/Checkout.css"
import allActions from "../Redux/Actions";
import { REMOVE_PRODUCT } from "../Redux/Actions/type";
const Checkout = () => {
    const productList = useSelector(state => state.productList);
    const dispatch =useDispatch();
    const removeProduct = (id) =>{
        dispatch({type:REMOVE_PRODUCT,payload: id,})
    }
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout__ad" />
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {productList.productItems.map((items, key) => {
                        return (
                            <div className="checkoutProduct">
                                <img src={items.image} alt="" className="checkoutProduct__image" />

                                <div className="checkoutProduct__info">
                                    <p className="checkoutProduct__title">{items.title}
                                    </p>
                                    <p className="checkoutProduct__price">
                                        <small>$</small>
                                        <strong>{items.price}</strong>
                                    </p>
                                    <div className="checkoutProduct__rating">
                                                <p>⭐</p>
                                    </div>
                                    <button onClick={()=>removeProduct(items.id)}>Remove from Basket</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    );
}


export default Checkout;