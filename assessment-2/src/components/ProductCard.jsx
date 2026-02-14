import React, { Component } from "react";
import "../style/product.css";

class ProductCard extends Component {
  render() {
    const { pImage, pName, pPrice, pRating } = this.props;

    return (
      <>
        <div className="col-3 my-3">
          <div className="card custom-card">
            <img src={pImage} alt="" className="card-img-top" />
            <div className="card-body">
              <p>
                <strong>Name: </strong>
                {pName}
              </p>
              <p>
                <strong>Price: </strong>
                {pPrice}
              </p>
              <p>
                <strong>Rating: </strong>
                {pRating}
              </p>
              <button className="btn btn-primary">Know More</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductCard;
