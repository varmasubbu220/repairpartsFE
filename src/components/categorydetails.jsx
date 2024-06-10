import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

const CategoryDetail = () => {
  const { category } = useParams();

  // Example data for the category details
  const categoryData = {
    brake: {
      description: "Brakes are essential for safety, providing the necessary stopping power.",
      images: [
        "https://www.re-india.co.in/FileUpload/1/CMS_PAGE/30/SPAREPARTS.jpg",
        "https://i.ebayimg.com/images/g/floAAOSwNB5ixF23/s-l1200.jpg",
      ],
      relatedProducts: [
        "Brake Pads",
        "Brake Discs",
        "Brake Fluid",
      ],
      features: [
        "High performance",
        "Durable",
        "Affordable",
      ],
      reviews: [
        { user: "John Doe", comment: "Great quality and performance!" },
        { user: "Jane Smith", comment: "Very reliable product." },
      ],
    },
    chain: {
      description: "Chains are crucial for transmitting power in bicycles and motorcycles.",
      images: [
        "data:image/jpeg;base64,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",
        "data:image/jpeg;base64,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",
      ],
      relatedProducts: [
        "Chain Lubricant",
        "Chain Cleaner",
        "Chain Sprocket",
      ],
      features: [
        "Smooth transmission",
        "Long-lasting",
        "Easy maintenance",
      ],
      reviews: [
        { user: "Alice Johnson", comment: "Smooth and reliable!" },
        { user: "Bob Brown", comment: "Highly recommend this product." },
      ],
    },
    steering: {
      description: "Steering mechanisms are vital for controlling the direction of vehicles.",
      images: [
        "https://www.re-india.co.in/FileUpload/1/CMS_PAGE/30/SPAREPARTS.jpg",
        "https://i.ebayimg.com/images/g/floAAOSwNB5ixF23/s-l1200.jpg",
      ],
      relatedProducts: [
        "Steering Wheel",
        "Steering Column",
        "Steering Pump",
      ],
      features: [
        "Precise control",
        "Ergonomic design",
        "Durability",
      ],
      reviews: [
        { user: "Charlie Davis", comment: "Excellent control and comfort." },
        { user: "Dana Lee", comment: "Very durable and easy to use." },
      ],
    },
    suspensions: {
      description: "Suspensions are designed to absorb shocks and provide a smooth ride.",
      images: [
        "https://www.re-india.co.in/FileUpload/1/CMS_PAGE/30/SPAREPARTS.jpg",
        "https://i.ebayimg.com/images/g/floAAOSwNB5ixF23/s-l1200.jpg",
      ],
      relatedProducts: [
        "Shock Absorbers",
        "Struts",
        "Springs",
      ],
      features: [
        "Excellent shock absorption",
        "Smooth ride",
        "Highly durable",
      ],
      reviews: [
        { user: "Eva Green", comment: "Smoothest ride ever!" },
        { user: "Frank Harris", comment: "Great quality and performance." },
      ],
    },
    horns: {
      description: "Horns are essential for alerting others and ensuring safety on the road.",
      images: [
        "https://www.re-india.co.in/FileUpload/1/CMS_PAGE/30/SPAREPARTS.jpg",
        "https://i.ebayimg.com/images/g/floAAOSwNB5ixF23/s-l1200.jpg",
      ],
      relatedProducts: [
        "Electric Horns",
        "Air Horns",
        "Horn Relay",
      ],
      features: [
        "Loud and clear sound",
        "Durable build",
        "Energy efficient",
      ],
      reviews: [
        { user: "George King", comment: "Very loud and clear." },
        { user: "Hannah Lewis", comment: "Reliable and durable product." },
      ],
    },
    tyre: {
      description: "Tyres provide traction and absorb shocks, ensuring a smooth and safe ride.",
      images: [
        "https://www.re-india.co.in/FileUpload/1/CMS_PAGE/30/SPAREPARTS.jpg",
        "https://i.ebayimg.com/images/g/floAAOSwNB5ixF23/s-l1200.jpg",
      ],
      relatedProducts: [
        "All-Season Tyres",
        "Performance Tyres",
        "Tyre Sealant",
      ],
      features: [
        "Excellent grip",
        "Long-lasting tread",
        "Puncture resistant",
      ],
      reviews: [
        { user: "Ian Morgan", comment: "Best tyres I've ever used!" },
        { user: "Julia Norris", comment: "Great durability and performance." },
      ],
    },
    clutch: {
      description: "Clutches are used to engage and disengage the power transmission from the engine to the drivetrain.",
      images: [
        "https://www.re-india.co.in/FileUpload/1/CMS_PAGE/30/SPAREPARTS.jpg",
        "https://i.ebayimg.com/images/g/floAAOSwNB5ixF23/s-l1200.jpg",
      ],
      relatedProducts: [
        "Clutch Plates",
        "Clutch Cable",
        "Clutch Kit",
      ],
      features: [
        "Smooth engagement",
        "Durable materials",
        "Reliable performance",
      ],
      reviews: [
        { user: "Kevin Owens", comment: "Smooth and reliable clutch." },
        { user: "Laura Peterson", comment: "Very durable and high performance." },
      ],
    },
  };
  

  const data = categoryData[category] || {};

  return (
    <div className="container mt-4">
      <motion.h2 className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {category} Details
      </motion.h2>

      {/* Description */}
      <motion.section className="mb-5"
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h4>Description</h4>
        <p>{data.description || "No description available for this category."}</p>
      </motion.section>

      {/* Image Gallery */}
      <motion.section className="mb-5"
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h4>Image Gallery</h4>
        <div className="row">
          {data.images ? data.images.map((img, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-md-4 mb-4">
              <motion.img src={img} alt={`${category} ${idx + 1}`} className="img-fluid rounded shadow-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          )) : <p>No images available.</p>}
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section className="mb-5"
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h4>Features</h4>
        <ul>
          {data.features ? data.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          )) : <p>No features available.</p>}
        </ul>
      </motion.section>

      {/* Related Products */}
      <motion.section className="mb-5"
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h4>Related Products</h4>
        <ul className="list-group">
          {data.relatedProducts ? data.relatedProducts.map((product, idx) => (
            <li key={idx} className="list-group-item">{product}</li>
          )) : <p>No related products available.</p>}
        </ul>
      </motion.section>

      {/* Reviews Section */}
      <motion.section className="mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h4>Customer Reviews</h4>
        {data.reviews ? data.reviews.map((review, idx) => (
          <div key={idx} className="mb-3 p-3 border rounded">
            <strong>{review.user}</strong>
            <p>{review.comment}</p>
          </div>
        )) : <p>No reviews available.</p>}
      </motion.section>
    </div>
  );
};

export default CategoryDetail;
