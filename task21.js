import React, { useState } from 'react';

function Product() {
  const [product, setProduct] = useState({
    name: 'Laptop',
    price: 1200,
    inStock: true,
    brand: 'Dell'
  });

  const updateProduct = () => {
    // We use the spread operator (...) to create a new object
    // and override only the properties we want to change.
    setProduct({
      ...product,
      price: 1350,
      inStock: false
    });
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px', borderRadius: '8px' }}>
      <h2>Product Details</h2>
      <p><strong>Name:</strong> {product.name}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>In Stock:</strong> {product.inStock ? 'Yes' : 'No'}</p>
      <p><strong>Brand:</strong> {product.brand}</p>
      <button onClick={updateProduct}>Update Product Info</button>
    </div>
  );
}

export default Product;