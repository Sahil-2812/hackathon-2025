import React, { useState } from "react";
import { Col, Form, Input, message, Row } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [state, setState] = useState(initialState);
  const navigate = useNavigate(); // ✅ hook for navigation

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) =>
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { firstName, lastName, email, password, confirmPassword } = state;

    // ✅ Validation
    if (!firstName) return message.error("Please enter your first name");
    if (!lastName) return message.error("Please enter your last name");
    if (!email) return message.error("Please enter your email");
    if (!emailRegex.test(email)) return message.error("Invalid Email");
    if (!password) return message.error("Please enter your password");
    if (password.length < 6)
      return message.error("Password must be at least 6 characters long");
    if (!confirmPassword)
      return message.error("Please enter your password again");
    if (password !== confirmPassword)
      return message.error("Passwords do not match");

    // Data Cleaning
    firstName = firstName.trim();
    lastName = lastName.trim();
    email = email.trim().toLowerCase();

    // Form Data
    const formData = { firstName, lastName, email, password };

    // API Request
    try {
      const res = await axios.post(
        "http://localhost:8000/api/register",
        formData
      );
      console.log("res.data", res.data);

      message.success("Registration successful! Redirecting to login...");
      navigate("/auth/login"); // ✅ Navigate to login page
    } catch (error) {
      console.error(error);
      message.error(
        error.response?.data?.msg || "Something went wrong. Try again."
      );
    }
  };

  return (
    <div className="min-h-screen auth p-3 flex justify-center items-center">
      <div className="bg-white p-6 max-w-[500px] rounded-2xl w-full shadow-md">
        <Form layout="vertical">
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <h3 className="text-4xl text-center font-bold my-2">Register</h3>
            </Col>

            <Col lg={12} md={12} sm={24} xs={24}>
              <Form.Item label="First Name:" className="!my-1">
                <Input
                  name="firstName"
                  onChange={handleChange}
                  placeholder="First Name"
                />
              </Form.Item>
            </Col>

            <Col lg={12} md={12} sm={24} xs={24}>
              <Form.Item label="Last Name:" className="!my-1">
                <Input
                  name="lastName"
                  onChange={handleChange}
                  placeholder="Last Name"
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item label="Email:" className="!my-1">
                <Input name="email" onChange={handleChange} placeholder="Email" />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item label="Password:" className="!my-1">
                <Input.Password
                  name="password"
                  onChange={handleChange}
                  placeholder="Password"
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item label="Confirm Password:" className="!my-1">
                <Input.Password
                  name="confirmPassword"
                  onChange={handleChange}
                  placeholder="Confirm Password"
                />
              </Form.Item>
            </Col>

            <Col span={24} className="text-center mb-2">
              <Link to="/auth/login" className="text-blue-600">
                Already have an account? Login
              </Link>
            </Col>

            <Col span={24}>
              <button
                onClick={handleSubmit}
                className="btn-primary w-full py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
              >
                Register
              </button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default Register;
