import React from "react";
import "../Styles/Subtotal.css";
import { useSelector,useDispatch } from "react-redux";
import CurrencyFormat from "react-currency-format";


const Subtotal = () => {
    const productList = useSelector(state => state.productList);
    const getTotalBasket = (basket) =>{
        return basket.reduce((accumulator, object) => {
            return accumulator + object.price;
          }, 0);
        // return(basket?.reduce((amount, item) => item.price + amount, 0));
    }
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>Subtotal ({productList.productItems.length} items):<strong>{value}</strong></p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                value={getTotalBasket(productList.productItems)}
                // prefix="$"
                decimalScale={2}
                displayType="text"
                thousandSeparator={true} />
                  <button>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;