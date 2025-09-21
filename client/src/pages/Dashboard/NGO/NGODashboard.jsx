// src/pages/Dashboard/NGO/NGODashboard.jsx
import React, { useEffect, useState } from "react";
import {
  Layout,
  Card,
  Row,
  Col,
  Typography,
  Button,
  Modal,
  Form,
  Input,
  message,
  Table,
  Statistic,
} from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import axios from "axios";

const { Content } = Layout;
const { Title } = Typography;
const { confirm } = Modal;

const NGODashboard = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingCampaign, setEditingCampaign] = useState(null);

  const [form] = Form.useForm();

  const fetchCampaigns = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("authToken");
      const res = await axios.get("http://localhost:8000/api/campaigns", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCampaigns(res.data);
    } catch (error) {
      console.error(error);
      message.error("Failed to fetch campaigns");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const handleAdd = () => {
    form.resetFields();
    setEditingCampaign(null);
    setIsModalVisible(true);
  };

  const handleEdit = (campaign) => {
    setEditingCampaign(campaign);
    form.setFieldsValue(campaign);
    setIsModalVisible(true);
  };

  const handleDelete = (id) => {
    confirm({
      title: "Are you sure delete this campaign?",
      icon: <ExclamationCircleOutlined />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk: async () => {
        try {
          const token = localStorage.getItem("authToken");
          await axios.delete(`http://localhost:8000/api/campaigns/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          message.success("Campaign deleted successfully");
          fetchCampaigns();
        } catch (error) {
          console.error(error);
          message.error("Failed to delete campaign");
        }
      },
    });
  };

  const handleSubmit = async (values) => {
    const token = localStorage.getItem("authToken");
    try {
      if (editingCampaign) {
        // Update
        await axios.put(`http://localhost:8000/api/campaigns/${editingCampaign._id}`, values, {
          headers: { Authorization: `Bearer ${token}` },
        });
        message.success("Campaign updated successfully");
      } else {
        // Create
        await axios.post("http://localhost:8000/api/campaigns", values, {
          headers: { Authorization: `Bearer ${token}` },
        });
        message.success("Campaign created successfully");
      }
      setIsModalVisible(false);
      fetchCampaigns();
    } catch (error) {
      console.error(error);
      message.error("Failed to save campaign");
    }
  };

  // Table Columns
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      ellipsis: true,
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div>
          <Button type="link" onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Button type="link" danger onClick={() => handleDelete(record._id)}>
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh", background: "#f0f2f5" }}>
      <Content style={{ padding: "32px 50px" }}>
        {/* Header */}
        <Title level={2} style={{ textAlign: "center", color: "#3f8600", marginBottom: "40px" }}>
          NGO Dashboard
        </Title>

        {/* Top Stats */}
        <Row gutter={[24, 24]} style={{ marginBottom: 30 }}>
          <Col xs={24} sm={12} md={8}>
            <Card>
              <Statistic title="Total Campaigns" value={campaigns.length} />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card>
              <Statistic title="Active Campaigns" value={campaigns.filter(c => !c.completed).length} />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card>
              <Statistic title="Completed Campaigns" value={campaigns.filter(c => c.completed).length} />
            </Card>
          </Col>
        </Row>

        <Button type="primary" onClick={handleAdd} style={{ marginBottom: 20 }}>
          + Add Campaign
        </Button>

        {/* Campaigns Table */}
        <Table
          dataSource={campaigns}
          columns={columns}
          rowKey="_id"
          loading={loading}
          pagination={{ pageSize: 5 }}
          bordered
          scroll={{ x: "max-content" }}
        />

        {/* Modal Form */}
        <Modal
          title={editingCampaign ? "Edit Campaign" : "Add Campaign"}
          open={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={null}
        >
          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Form.Item
              label="Title"
              name="title"
              rules={[{ required: true, message: "Please enter campaign title" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: true, message: "Please enter campaign description" }]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                {editingCampaign ? "Update" : "Create"}
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </Content>
    </Layout>
  );
};

export default NGODashboard;
