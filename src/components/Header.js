import React from "react";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";

import "../Styles/Header.css";

const Header = () => {
    const productList = useSelector(state =>state.productList);
    return (
        <div className="header">
            <div className="header__logo">
                <StorefrontIcon className="header__logoImage" fontSize="large" />
               <Link to ="/"><h2 className="header__logoTitle">eShop</h2></Link> 
            </div>

            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon" />
                </div>
            <div className="header__nav">
                <div className="nav__item">
                    <span className="nav__itemLineOne">Hello Guest</span>
                    <span className="nav__itemLineTwo">Sign In</span>
                </div>
                <div className="nav__item">
                    <span className="nav__itemLineOne">Your</span>
                    <span className="nav__itemLineTwo">Shop</span>
                </div>
                <div className="nav__item">
                   <Link to ="/checkout"><ShoppingBasketIcon className="itemBasket"/></Link> 
                    <span className="nav__itemLineTwo nav__basketCount">{productList.productItems.length}</span>
                </div>
            </div>
        </div>
    );
}

export default Header;