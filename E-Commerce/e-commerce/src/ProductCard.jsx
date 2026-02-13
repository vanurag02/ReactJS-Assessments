import React, { Component } from "react";

export class ProductCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="col-3 my-3">
          <div className="card shadow">
            <img src={this.props.imgsrc} className="card-img-top" alt="..." />
            <div className="card-body" style={{ minHeight: "120px" }}>
              <h5 className="card-title">{this.props.productname}</h5>
              <p className="card-text">
                <strong>Price:</strong> {this.props.price}
              </p>
              <p className="card-text">
                <strong>Rating:</strong> {this.props.rating}
              </p>
              <a href="#" className="btn btn-primary me-3">
                Add to cart
              </a>
              <a href="#" className="btn btn-outline-secondary">
                Know more
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductCard;
