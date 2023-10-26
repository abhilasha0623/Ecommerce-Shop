import React from "react";
import "../Styles/Home.css";
import Product from "../components/Product";
import data from "../json/data.json";
const Home = () => {
    return (
        <div className="home">
            <div className="home__container">

                <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="" className="home__image" />

                <div className="home__row">
                    <Product data={data}/>
                </div>

            </div>
        </div>
    );
}

export default Home;