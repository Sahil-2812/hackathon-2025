import React, { useState } from "react";
import { Col, Form, Input, Row, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuthContext } from "../../../contexts/Auth/AuthContext"; // ✅ import

const initialState = { email: "", password: "" };

const Login = () => {
  const [state, setState] = useState(initialState);
  const navigate = useNavigate();
  const { setIsAuth } = useAuthContext(); // ✅ get setIsAuth

  const handleChange = (e) =>
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { email, password } = state;

    if (!email) return message.error("Please enter your email");
    if (!password) return message.error("Please enter your password");

    email = email.trim().toLowerCase();

    try {
      const res = await axios.post("http://localhost:8000/api/login", {
        email,
        password,
      });

      // ✅ Save token
      localStorage.setItem("authToken", res.data.token);

      // ✅ Update context immediately
      setIsAuth(true);

      message.success("Login successful!");
      navigate("/donations");
    } catch (error) {
      console.error(error);
      message.error(error.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen auth p-3 flex justify-center items-center">
      <div className="bg-white p-3 max-w-[500px] rounded-2xl w-full">
        <Form layout="vertical">
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <h3 className="text-4xl text-center font-bold my-2">Login</h3>
            </Col>
            <Col span={24}>
              <Form.Item label="Email:">
                <Input name="email" type="email" onChange={handleChange} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Password:">
                <Input.Password name="password" onChange={handleChange} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Link to="/auth/register">Don&apos;t have an account?</Link>
            </Col>
            <Col span={24}>
              <button onClick={handleSubmit} className="btn-primary">
                Login
              </button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default Login;
