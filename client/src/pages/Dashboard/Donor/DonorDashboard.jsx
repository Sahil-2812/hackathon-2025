// src/pages/Dashboard/DonorDashboard.jsx
import React from "react";
import { Layout, Card, Row, Col, Typography, Button, Divider, Statistic } from "antd";
import { UserOutlined, HeartOutlined, FileTextOutlined } from "@ant-design/icons";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const DonorDashboard = () => {
  return (
    <Layout style={{ minHeight: "100vh", background: "#f0f2f5" }}>
      <Content style={{ padding: "32px 50px" }}>
        {/* Header */}
        <Title level={2} style={{ textAlign: "center", color: "#3f8600", marginBottom: "40px" }}>
          Donor Dashboard
        </Title>

        {/* Statistics / Quick Overview */}
        <Row gutter={[24, 24]} justify="center" style={{ marginBottom: 40 }}>
          <Col xs={24} sm={12} md={6}>
            <Card hoverable style={{ borderRadius: "12px", textAlign: "center" }}>
              <Statistic
                title="Total Donations"
                value={12}
                prefix={<HeartOutlined style={{ color: "#f5222d" }} />}
              />
              <Button type="link" style={{ marginTop: 10 }}>
                View All
              </Button>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card hoverable style={{ borderRadius: "12px", textAlign: "center" }}>
              <Statistic
                title="Active Campaigns"
                value={4}
                prefix={<FileTextOutlined style={{ color: "#1890ff" }} />}
              />
              <Button type="link" style={{ marginTop: 10 }}>
                Explore
              </Button>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card hoverable style={{ borderRadius: "12px", textAlign: "center" }}>
              <Statistic
                title="Profile Completion"
                value={80}
                suffix="%"
                prefix={<UserOutlined style={{ color: "#52c41a" }} />}
              />
              <Button type="link" style={{ marginTop: 10 }}>
                Update Profile
              </Button>
            </Card>
          </Col>
        </Row>

        <Divider />

        {/* Action Cards */}
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} sm={24} md={12} lg={10}>
            <Card
              hoverable
              title="My Donations"
              bordered={false}
              style={{ borderRadius: "12px", minHeight: "200px" }}
            >
              <Paragraph>
                View your donation history, receipts, and track your contributions here.
              </Paragraph>
              <Button type="primary" block>
                View Donations
              </Button>
            </Card>
          </Col>

          <Col xs={24} sm={24} md={12} lg={10}>
            <Card
              hoverable
              title="Profile Settings"
              bordered={false}
              style={{ borderRadius: "12px", minHeight: "200px" }}
            >
              <Paragraph>
                Update your personal information, password, and account preferences.
              </Paragraph>
              <Button type="primary" block>
                Edit Profile
              </Button>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default DonorDashboard;
