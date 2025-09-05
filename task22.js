import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for validation
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// Task 21, Part 2 & Task 22, Part 2: Product Object with State
function ProductInfo({ name, price, brand, inStock, onUpdate }) {
  // Use Props Validation
  return (
    <div className="card my-4 p-3">
      <div className="card-body">
        <h5 className="card-title">Product Details</h5>
        <p className="card-text"><strong>Name:</strong> {name}</p>
        <p className="card-text"><strong>Price:</strong> ${price}</p>
        <p className="card-text"><strong>In Stock:</strong> {inStock ? 'Yes' : 'No'}</p>
        <p className="card-text"><strong>Brand:</strong> {brand}</p>
        <button className="btn btn-primary" onClick={onUpdate}>Update Product</button>
      </div>
    </div>
  );
}

// Props validation for the ProductInfo component
ProductInfo.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  brand: PropTypes.string.isRequired,
  inStock: PropTypes.bool.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

// Task 21, Part 1 & Task 22, Part 1 & 3: Main App Component
function App() {
  // Task 21, Part 1: Employee Data in State (Array of Objects)
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Alice', age: 30, salary: 60000, designation: 'Developer' },
    { id: 2, name: 'Bob', age: 25, salary: 55000, designation: 'Designer' },
    { id: 3, name: 'Charlie', age: 35, salary: 70000, designation: 'Manager' },
  ]);

  // Task 22, Part 1: Update an item at the second index of the array
  const updateSecondEmployee = () => {
    setEmployees(employees.map((emp, index) => {
      if (index === 1) { // Index 1 is the second element
        return { ...emp, name: 'Bob Updated', salary: 65000 };
      }
      return emp;
    }));
  };

  // Task 21, Part 2: Product Object in State & Task 22, Part 2: Update 2 properties
  const [product, setProduct] = useState({
    name: 'Laptop',
    price: 1200,
    inStock: true,
    brand: 'Dell'
  });

  const updateProductProperties = () => {
    // We create a new object and update the 'price' and 'inStock' properties
    setProduct({
      ...product,
      price: 1350,
      inStock: false
    });
  };

  // Task 22, Part 3: All data types for state variables
  const [dataTypes, setDataTypes] = useState({
    stringVal: 'Hello World',
    numberVal: 123,
    boolVal: true,
    arrayVal: [1, 2, 3],
    objectVal: { key: 'value' },
  });

  const updateDataTypes = () => {
    setDataTypes({
      stringVal: 'New String',
      numberVal: 456,
      boolVal: false,
      arrayVal: [...dataTypes.arrayVal, 4],
      objectVal: { ...dataTypes.objectVal, newKey: 'newValue' },
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">React State & Props Practice</h1>

      {/* Task 21, Part 1 & Task 22, Part 1: Employee Data */}
      <div className="card p-3">
        <h2 className="card-title">Employee Data</h2>
        <ul className="list-group list-group-flush">
          {employees.map(emp => (
            <li className="list-group-item" key={emp.id}>
              <strong>{emp.name}</strong> - Age: {emp.age}, Salary: ${emp.salary}, Designation: {emp.designation}
            </li>
          ))}
        </ul>
        <button className="btn btn-warning mt-3" onClick={updateSecondEmployee}>Update Second Employee</button>
      </div>
      
      {/* Task 21, Part 2 & Task 22, Part 2: Product Object */}
      <ProductInfo
        name={product.name}
        price={product.price}
        inStock={product.inStock}
        brand={product.brand}
        onUpdate={updateProductProperties}
      />

      {/* Task 22, Part 3: All Data Types */}
      <div className="card my-4 p-3">
        <div className="card-body">
          <h5 className="card-title">State Data Types</h5>
          <p><strong>String:</strong> {dataTypes.stringVal}</p>
          <p><strong>Number:</strong> {dataTypes.numberVal}</p>
          <p><strong>Boolean:</strong> {dataTypes.boolVal.toString()}</p>
          <p><strong>Array:</strong> {dataTypes.arrayVal.join(', ')}</p>
          <p><strong>Object:</strong> {JSON.stringify(dataTypes.objectVal)}</p>
          <button className="btn btn-info" onClick={updateDataTypes}>Update Data Types</button>
        </div>
      </div>
    </div>
  );
}

export default App;