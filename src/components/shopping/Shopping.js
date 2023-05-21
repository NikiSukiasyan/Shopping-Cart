import "./Shopping.css";
import ShoppingBag from "../../images/shopping-bag.svg";
import Nike from "../../images/Nike.png";
import HM from "../../images/HM.png";
import Gucci from "../../images/Gucci.png";
import { useState } from "react";

function Shopping() {
  const [items, setItems] = useState([]);

  const addToCart = (price) => {
    items.push(price);
    setItems([...items]);
  };

  const cartCount = items.length;

  const Total = 0;
  const SumOfPrice = items
    .reduce((value, currentValue) => value + currentValue, Total)
    .toFixed(2);

  return (
    <>
      <div className="shopping-container">
        <h1>Shopping Cart</h1>
        <img src={ShoppingBag} alt="Shopping Bag" className="bag-image" />
        <button className="cart-items">{cartCount}</button>
        <div className="item-count">
          <span>3 Items</span>
        </div>
        <div className="nike">
          <img src={Nike} alt="Nike Shoes" />
          <div className="models">
            <p className="shoes">Nike</p>
            <p className="shoes-category">Superstar</p>
            <span>8.5</span>
          </div>
          <p className="price">$239,55</p>
          <button className="price-btn" onClick={() => addToCart(239.55)}>
            Add to cart
          </button>
          <div className="after"></div>
        </div>
        <div className="hm">
          <img src={HM} alt="H&M T-Shirt" />
          <div className="hm-models">
            <p className="shoes">H&M</p>
            <p className="shoes-category">T-Shirt</p>
            <span>S</span>
          </div>
          <p className="price">$14,99</p>
          <button className="price-btn" onClick={() => addToCart(14.99)}>
            Add to cart
          </button>
          <div className="after"></div>
        </div>
        <div className="gucci">
          <img src={Gucci} alt="Gucci Bag" />
          <div className="gucci-models">
            <p className="shoes">Gucci</p>
            <span>CG Marmont</span>
          </div>
          <p className="price">$1850,00</p>
          <button className="gucci-btn" onClick={() => addToCart(1850)}>
            Add to cart
          </button>
          <div className="after-gucci"></div>
        </div>
        <div className="total">
          <div className="total-container">
            <p className="total-text">Total</p>
            <span className="total-amount">{SumOfPrice}</span>
          </div>
          <button className="checkout">Checkout</button>
        </div>
      </div>
    </>
  );
}

export default Shopping;
