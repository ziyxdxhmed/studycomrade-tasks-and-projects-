// src/App.js
import React, { Component, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Optional: for basic styling

// 1. Class-Based Component for Signup Form
class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      dob: '',
      contact: '',
      email: '',
      password: '',
      errors: {},
      isSubmitted: false,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validateForm = () => {
    const { name, age, dob, contact, email, password } = this.state;
    let errors = {};
    let isValid = true;

    if (!name) { isValid = false; errors.name = 'Name is required.'; }
    if (!age || age < 18) { isValid = false; errors.age = 'Age must be 18 or older.'; }
    if (!dob) { isValid = false; errors.dob = 'Date of Birth is required.'; }
    if (!contact || !/^\d{10}$/.test(contact)) { isValid = false; errors.contact = 'Contact must be 10 digits.'; }
    if (!email || !/\S+@\S+\.\S+/.test(email)) { isValid = false; errors.email = 'Email is invalid.'; }
    if (!password || password.length < 6) { isValid = false; errors.password = 'Password must be at least 6 characters.'; }
    
    this.setState({ errors });
    return isValid;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      this.setState({ isSubmitted: true });
      console.log('Signup Form data:', this.state);
    }
  };

  render() {
    const { isSubmitted, errors } = this.state;
    return (
      <div className="container mt-4 p-4 border rounded">
        <h2 className="mb-3">Sign Up (Class Component)</h2>
        {isSubmitted ? (
          <div className="alert alert-success">Form is submitted successfully!</div>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
              <input type="text" className="form-control" name="name" placeholder="Name" onChange={this.handleChange} />
              {errors.name && <div className="text-danger">{errors.name}</div>}
            </div>
            <div className="mb-3">
              <input type="number" className="form-control" name="age" placeholder="Age" onChange={this.handleChange} />
              {errors.age && <div className="text-danger">{errors.age}</div>}
            </div>
            <div className="mb-3">
              <input type="date" className="form-control" name="dob" onChange={this.handleChange} />
              {errors.dob && <div className="text-danger">{errors.dob}</div>}
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" name="contact" placeholder="Contact (10 digits)" onChange={this.handleChange} />
              {errors.contact && <div className="text-danger">{errors.contact}</div>}
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" name="email" placeholder="Email" onChange={this.handleChange} />
              {errors.email && <div className="text-danger">{errors.email}</div>}
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" name="password" placeholder="Password (min 6 chars)" onChange={this.handleChange} />
              {errors.password && <div className="text-danger">{errors.password}</div>}
            </div>
            <button type="submit" className="btn btn-primary">Sign Up</button>
          </form>
        )}
      </div>
    );
  }
}

// 2. Function-Based Component for Login Form
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState(null);

  // useEffect runs when formData changes
  useEffect(() => {
    if (formData) {
      console.log('Login Form data:', formData);
    }
  }, [formData]);

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;
    const emailRegex = /^\S+@\S+\.\S+$/;

    if (!email || !emailRegex.test(email)) {
      tempErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }
    if (!password || password.length < 6) {
      tempErrors.password = 'Password must be at least 6 characters.';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setFormData({ email, password });
    } else {
      setFormData(null);
    }
  };

  return (
    <div className="container mt-4 p-4 border rounded">
      <h2 className="mb-3">Log In (Function Component)</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {errors.password && <div className="text-danger">{errors.password}</div>}
        </div>
        <button type="submit" className="btn btn-success">Log In</button>
      </form>

      {formData && (
        <div className="mt-4 p-3 bg-light rounded">
          <h4 className="mb-2">User Entered Data:</h4>
          <p className="mb-1"><strong>Email:</strong> {formData.email}</p>
          <p className="mb-0"><strong>Password:</strong> {formData.password}</p>
        </div>
      )}
    </div>
  );
};

// Main App component that renders both forms
function App() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">Task 24: Forms with React</h1>
      <SignUpForm />
      <LoginForm />
    </div>
  );
}

export default App;