import React, { useState } from "react";
import Button from "../ui/button";
import "./product.css";
import Navbar from "../Home/navbarlogin";
import Footer from "../Home/footer";

const ProductCard = ({
  title,
  image,
  gallery = [],
  price,
  originalPrice,
  discount,
  offers = [],
  rating,
  reviewCount,
  specs = [],
  warranty,
  additionalSpec = "Fast Charging (33W)",
}) => {
  const [mainImage, setMainImage] = useState(image);

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div
            className="col-12 col-lg-6 d-flex flex-column align-items-center mb-4 h-100 mb-lg-0 "
            style={{ borderRight: "1px solid #ccc" }}
          >
            <div className="w-100 max-w-md p-3 rounded-xl ml-3 shadow-sm h-100 border border-primary">
              <div
                className="container d-flex justify-content-center align-items-center"
                style={{
                  height: "400px",
                  maxWidth: "100%",
                  overflow: "hidden",
                }}
              >
                <img
                  src={mainImage}
                  alt={title}
                  className="img-fluid rounded-xl main-product-image border border-primary p-3 shadow-sm"
                  style={{
                    height: "100%",
                    width: "auto",
                  }}
                />
              </div>

              <div className="gallery-thumbnails mt-4  ">
                {gallery.slice(0, 10).map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`thumb-${i}`}
                    className={`thumbnail-img ${
                      mainImage === img ? "active-thumb" : ""
                    } rounded-3 p-2 `}
                    style={{ border: "1px solid #ccc" }}
                    onClick={() => setMainImage(img)}
                  />
                ))}
              </div>
              <div className="mt-4 d-flex gap-3 flex-column flex-sm-row">
                <button className="btn btn-info btn-lg w-100 rounded-pill text-white">
                  <i className="bi bi-cart me-2"></i> Add to Cart
                </button>
                <button className="btn btn-warning btn-lg w-100 rounded-pill text-dark">
                  <i className="bi bi-bolt me-2"></i> Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="mb-4">
              <h1 className="display-5">{title}</h1>
              <p className="text-success h4">
                ₹{price}
                <span className="text-muted text-decoration-line-through ms-2">
                  ₹{originalPrice}
                </span>
                <span className="text-success ms-2">({discount}% off)</span>
              </p>
            </div>

            <div className="mb-4">
              <h2 className="h5">Available Offers</h2>
              <ul className="list-unstyled ms-4">
                {offers.map((offer, index) => (
                  <li key={index}>
                    <i className="bi bi-check-circle text-success"></i> {offer}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h2 className="h5">Delivery</h2>
              <input
                type="text"
                placeholder="Enter Pincode"
                className="form-control w-75 rounded-3 shadow-sm"
              />
              <p className="text-muted mt-2">Check if delivery is available</p>
            </div>

            <div className="mb-4">
              <h2 className="h5">Ratings & Reviews</h2>
              <div className="d-flex align-items-center">
                <span className="badge bg-success text-white me-2">
                  {rating} ★
                </span>
                <span className="text-muted">({reviewCount} reviews)</span>
              </div>
            </div>

            <div className="mb-4">
              <h2 className="h5">Product Specifications</h2>
              <ul className="list-unstyled ms-4">
                {specs.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h2 className="h5">Additional Specification</h2>
              <p className="ms-4">{additionalSpec}</p>
            </div>

            <div className="mb-4">
              <h2 className="h5">Warranty</h2>
              <p className="text-muted">{warranty}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductCard;
