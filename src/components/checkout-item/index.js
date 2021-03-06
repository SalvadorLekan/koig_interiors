import React from "react";
import "./style.scss";
import { connect } from "react-redux";
import { removeItem, decreaseQuantity, increaseQuantity } from "../../Redux/cart/cartActions";

const CheckoutItem = ({ cartItems, removeItem, decreaseQuantity, increaseQuantity }) => {
    return (
        <div className="checkout-wrapper">
            <h2> Your Cart</h2>
            <div className="checkout-item">
                {cartItems.map((item) => {
                    const { imageUrl, price, name, quantity, id } = item;
                    return (
                        <div className="item-wrapper" key={id}>
                            <div className="image-container">
                                <img src={imageUrl} alt="item" />

                            </div>

                            <div className="name">{name}</div>

                            <div className="quantity">
                                <span className="price">{price}</span> &nbsp;
                                <button className="arrow" onClick={() => decreaseQuantity(item)}> - </button>
                                <button className="value">{quantity}</button>
                                <button className="arrow" onClick={() => increaseQuantity(item)}>
                                    +
                            </button>
                                <button className="remove-button" onClick={() => removeItem(item)}>
                                    &#10005;
                             </button>
                            </div>


                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const mapStateToProps = ({ cart }) => {
    return {
        cartItems: cart.cartItems,
    };
};
const mapDispatchToProps = {
    removeItem,
    decreaseQuantity,
    increaseQuantity
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItem);
