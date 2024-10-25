import React, { useState, useEffect } from "react";
import { Layout, Menu, theme, Button } from "antd";
import { TeamOutlined, UnorderedListOutlined } from "@ant-design/icons";
import Header from "../../component/Header/Header";
import { adminService, movieService } from "../../service/movieService";
import UserTable from "./UserTable";
import MovieTable from "./MovieTable";

const { Content, Footer, Sider } = Layout;

const AdminPage = () => {
  const [listUser, setListUser] = useState([]);
  const [state, setState] = useState([]);
  const [selectedKey, setSelectedKey] = useState("1");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const result = await adminService.layDanhSachUser();
        setListUser(result.data.content);
      } catch (err) {
        console.log("Error fetching user list:", err);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const result = await movieService.layDanhSachPhim();
        setState(result.data.content);
      } catch (err) {
        console.log("Error fetching movies:", err);
      }
    };
    fetchMovies();
  }, []);

  const renderContent = () => {
    if (selectedKey === "1") {
      return <UserTable listUser={listUser} />;
    } else if (selectedKey === "2") {
      return <MovieTable state={state} />;
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout>
        <Sider width={250} style={{ background: theme.colorBgContainer }}>
          <div className="logo" style={{ textAlign: "center", padding: 16 }}>
            <img
              className="mx-auto"
              src="./netflix.png"
              alt="Netflix Logo"
              style={{ width: 50 }}
            />
          </div>
          <Menu
            mode="inline"
            selectedKeys={[selectedKey]}
            onClick={(e) => setSelectedKey(e.key)}
            style={{ height: "100%", borderRight: 0 }}
            theme="dark"
          >
            <Menu.Item key="1" icon={<TeamOutlined />}>
              Quản Lý Người Dùng 
            </Menu.Item>
            <Menu.Item key="2" icon={<UnorderedListOutlined />}>
              Quản Lý Phim
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Header />
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: theme.colorBgContainer,
            }}
          >
            {renderContent()}
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2024 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AdminPage;
