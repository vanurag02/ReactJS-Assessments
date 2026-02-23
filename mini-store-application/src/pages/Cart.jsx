import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);
  const navigate = useNavigate();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) =>
      sum + Number(item.price.replace(/[^0-9]/g, "")) * item.quantity,
    0,
  );

  if (!cartItems.length)
    return (
      <div className="text-center mt-5">
        <h3>Oops! Your shopping cart is feeling lonely 😢</h3>
        <p>Looks like you haven’t added any products yet.</p>
        <button
          className="btn btn-primary mt-3"
          onClick={() => navigate("/products")}
        >
          Browse products
        </button>
      </div>
    );

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Shopping Cart</h2>

      <div className="row">
        {/* Left Column: Product List */}
        <div className="col-lg-8 col-md-7 mb-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="d-flex align-items-center border rounded mb-3 p-3"
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "contain",
                }}
                className="me-3"
              />

              <div className="flex-grow-1">
                <h5>{item.name}</h5>
                <p className="mb-1">Price: {item.price}</p>

                <div className="d-flex align-items-center">
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => decreaseQuantity(item.id)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span
                    className="mx-3 fw-bold"
                    style={{ minWidth: "25px", textAlign: "center" }}
                  >
                    {item.quantity}
                  </span>
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                className="btn btn-danger btn-sm ms-3"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Right Column: Summary */}
        <div className="col-lg-4 col-md-5">
          <div
            className="border rounded p-4 sticky-top"
            style={{ top: "80px" }}
          >
            <h4>Order Summary</h4>
            <hr />
            <p>
              Total Items: <strong>{totalItems}</strong>
            </p>
            <p>
              Total Price: <strong>₹{totalPrice.toLocaleString()}</strong>
            </p>
            <button className="btn btn-warning w-100 mb-3">
              Proceed to Buy
            </button>
            <button
              className="btn btn-outline-secondary w-100"
              onClick={() => navigate("/products")}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
