import React from 'react';
import './main.css'; 
import { Link } from 'react-router-dom';
import Product from '../products/product';
const ProductCard = ({ title, desc, price, img }) => (
  <div className="product-card card me-3 shadow-sm">
    <img src={img} className="card-img-top" alt={title} />
    <div className="card-body text-center">
      <h6 className="card-title">{title}</h6>
      <p className="card-text small text-muted">{desc}</p>
      <p className="fw-bold text-primary">{price}</p>
    </div>
  </div>
);

const ProductSection = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Our Products</h2>

      {/* Row 1 */}
      <div className="product-row mb-4">
        <Link to="/product">
        <ProductCard title="Apple Watch" desc="Smart wearable device" price="$199.99" img="https://via.placeholder.com/150?text=Watch" /></Link>
        <ProductCard title="Wireless Earbuds" desc="Noise-cancelling audio" price="$49.99" img="https://via.placeholder.com/150?text=Earbuds" />
        <ProductCard title="Gaming Mouse" desc="RGB wired mouse" price="$29.99" img="https://via.placeholder.com/150?text=Mouse" />
        <ProductCard title="Mechanical Keyboard" desc="Backlit keys" price="$89.99" img="https://via.placeholder.com/150?text=Keyboard" />
        <ProductCard title="Bluetooth Speaker" desc="Portable audio" price="$59.99" img="https://via.placeholder.com/150?text=Speaker" />
        <ProductCard title="Smartphone" desc="Latest Android model" price="$699.99" img="https://via.placeholder.com/150?text=Phone" />
        <ProductCard title="Laptop Stand" desc="Adjustable & ergonomic" price="$34.99" img="https://via.placeholder.com/150?text=Stand" />
        <ProductCard title="Webcam" desc="HD streaming cam" price="$39.99" img="https://via.placeholder.com/150?text=Webcam" />
        <ProductCard title="Tablet" desc="10-inch screen" price="$299.99" img="https://via.placeholder.com/150?text=Tablet" />
        <ProductCard title="Fitness Tracker" desc="Health monitoring" price="$79.99" img="https://via.placeholder.com/150?text=Tracker" />
      </div>

      {/* Row 2 */}
      <div className="product-row mb-4">
        <ProductCard title="Drone Camera" desc="4K aerial photography" price="$499.99" img="https://via.placeholder.com/150?text=Drone" />
        <ProductCard title="LED Monitor" desc="24-inch display" price="$149.99" img="https://via.placeholder.com/150?text=Monitor" />
        <ProductCard title="Power Bank" desc="10,000mAh capacity" price="$24.99" img="https://via.placeholder.com/150?text=PowerBank" />
        <ProductCard title="VR Headset" desc="Immersive experience" price="$299.99" img="https://via.placeholder.com/150?text=VR" />
        <ProductCard title="Portable SSD" desc="500GB storage" price="$119.99" img="https://via.placeholder.com/150?text=SSD" />
        <ProductCard title="Smart Light" desc="Voice controlled bulb" price="$19.99" img="https://via.placeholder.com/150?text=Light" />
        <ProductCard title="Wi-Fi Router" desc="High-speed dual band" price="$89.99" img="https://via.placeholder.com/150?text=Router" />
        <ProductCard title="Graphic Tablet" desc="For digital art" price="$149.99" img="https://via.placeholder.com/150?text=Tablet" />
        <ProductCard title="Tripod Stand" desc="Lightweight tripod" price="$29.99" img="https://via.placeholder.com/150?text=Tripod" />
        <ProductCard title="Microphone" desc="Podcast-ready mic" price="$59.99" img="https://via.placeholder.com/150?text=Mic" />
      </div>

      {/* Row 3 */}
      <div className="product-row mb-4">
        <ProductCard title="Camera Lens" desc="Wide angle zoom" price="$249.99" img="https://via.placeholder.com/150?text=Lens" />
        <ProductCard title="Flash Drive" desc="128GB USB 3.0" price="$19.99" img="https://via.placeholder.com/150?text=USB" />
        <ProductCard title="Smart TV" desc="43-inch 4K UHD" price="$499.99" img="https://via.placeholder.com/150?text=TV" />
        <ProductCard title="Action Cam" desc="Waterproof 4K" price="$199.99" img="https://via.placeholder.com/150?text=ActionCam" />
        <ProductCard title="Gaming Console" desc="Next-gen console" price="$399.99" img="https://via.placeholder.com/150?text=Console" />
        <ProductCard title="Desk Lamp" desc="USB powered lamp" price="$14.99" img="https://via.placeholder.com/150?text=Lamp" />
        <ProductCard title="Backpack" desc="Laptop-friendly bag" price="$39.99" img="https://via.placeholder.com/150?text=Bag" />
        <ProductCard title="Smart Thermostat" desc="Energy saving" price="$129.99" img="https://via.placeholder.com/150?text=Thermostat" />
        <ProductCard title="HDMI Cable" desc="High-speed cable" price="$9.99" img="https://via.placeholder.com/150?text=HDMI" />
        <ProductCard title="Surge Protector" desc="6-outlet strip" price="$19.99" img="https://via.placeholder.com/150?text=Surge" />
      </div>
    </div>
  );
};

export default ProductSection;
