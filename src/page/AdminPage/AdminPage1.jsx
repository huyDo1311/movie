import React, { useState, useEffect } from "react";
import {
  EyeInvisibleOutlined,
  EyeOutlined,
  TeamOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Table, Button, Tag, Checkbox } from "antd";
import Header from "../../component/Header/Header";
import { adminService, movieService } from "../../service/movieService";

const { Content, Footer, Sider } = Layout;

const AdminPage1 = () => {
  const [listUser, setListUser] = useState([]);
  const [state, setState] = useState([]);
  const [selectedKey, setSelectedKey] = useState("1");
  const [selectedRowKeys, setSelectedRowKeys] = useState([]); // Track selected rows

  // Fetch users
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

  // Fetch movies
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const result = await movieService.layDanhSachPhim();
        console.log("🚀 ~ fetchMovies ~ result:", result);

        setState(result.data.content);
      } catch (err) {
        console.log("Error fetching movies:", err);
      }
    };
    fetchMovies();
  }, []);

  // Row selection configuration
  const rowSelection = {
    selectedRowKeys,
    onChange: (keys) => setSelectedRowKeys(keys),
  };

  // Delete handler (example)
  const handleDelete = (maPhim) => {
    console.log(`Deleting movie with ID: ${maPhim}`);
    // Add delete logic here (e.g., API call)
  };

  const onDeleteAll = () => {
    // Implement delete logic here
    console.log("Deleting movies with IDs:", selectedRowKeys);
    // Reset the selection after deletion
    setSelectedRowKeys([]);
  };

  //   // Movie table columns
  //   const columnsListMovie = [
  //     {
  //       title: "Mã Phim",
  //       dataIndex: "maPhim",
  //       key: "maPhim",
  //       sorter: (a, b) => a.maPhim - b.maPhim,
  //       render: (maPhim) => maPhim || "N/A",
  //     },
  //     {
  //       title: "Tên Phim",
  //       dataIndex: "tenPhim",
  //       key: "tenPhim",
  //       render: (tenPhim) => tenPhim || "N/A",
  //     },
  //     {
  //       title: "Bí Danh",
  //       dataIndex: "biDanh",
  //       key: "biDanh",
  //       render: (biDanh) => biDanh || "N/A",
  //     },
  //     {
  //       title: "Trailer",
  //       dataIndex: "trailer",
  //       key: "trailer",
  //       render: (trailer) =>
  //         trailer ? (
  //           <a href={trailer} target="_blank" rel="noopener noreferrer">
  //             Xem Trailer
  //           </a>
  //         ) : (
  //           "Không có"
  //         ),
  //     },
  //     {
  //       title: "Hình Ảnh",
  //       dataIndex: "hinhAnh",
  //       key: "hinhAnh",
  //       render: (imgSrc) =>
  //         imgSrc ? (
  //           <img src={imgSrc} alt="Hình ảnh phim" style={{ width: 100 }} />
  //         ) : (
  //           "Không có"
  //         ),
  //     },
  //     {
  //       title: "Ngày Khởi Chiếu",
  //       dataIndex: "ngayKhoiChieu",
  //       key: "ngayKhoiChieu",
  //       sorter: (a, b) => new Date(a.ngayKhoiChieu) - new Date(b.ngayKhoiChieu),
  //       render: (date) =>
  //         date ? new Date(date).toLocaleDateString("vi-VN") : "N/A",
  //     },
  //     {
  //       title: "Đánh Giá",
  //       dataIndex: "danhGia",
  //       key: "danhGia",
  //       sorter: (a, b) => a.danhGia - b.danhGia,
  //       render: (danhGia) => danhGia || "Chưa đánh giá",
  //     },
  //     {
  //       title: "Hot",
  //       dataIndex: "hot",
  //       key: "hot",
  //       filters: [
  //         { text: "Hot", value: true },
  //         { text: "Không", value: false },
  //       ],
  //       onFilter: (value, record) => record.hot === value,
  //       render: (isHot) =>
  //         isHot ? <Tag color="red">Hot</Tag> : <Tag>Không</Tag>,
  //     },
  //     {
  //       title: "Thao Tác",
  //       key: "action",
  //       render: (_, record) => (
  //         <Button
  //           type="primary"
  //           danger
  //           onClick={() => handleDelete(record.maPhim)}
  //         >
  //           Xoá
  //         </Button>
  //       ),
  //     },
  //   ];

  const columnsListMovie = [
    {
      title: "Mã Phim",
      dataIndex: "maPhim",
      key: "maPhim",
      sorter: (a, b) => a.maPhim - b.maPhim,
      render: (maPhim) => maPhim || "N/A",
    },
    {
      title: "Tên Phim",
      dataIndex: "tenPhim",
      key: "tenPhim",
      render: (tenPhim) => tenPhim || "N/A",
    },
    {
      title: "Trailer",
      dataIndex: "trailer",
      key: "trailer",
      render: (trailer) =>
        trailer ? (
          <a href={trailer} target="_blank" rel="noopener noreferrer">
            Xem Trailer
          </a>
        ) : (
          "Không có"
        ),
    },
    {
      title: "Hình Ảnh",
      dataIndex: "hinhAnh",
      key: "hinhAnh",
      render: (imgSrc) =>
        imgSrc ? (
          <img src={imgSrc} alt="Hình ảnh phim" style={{ width: 100 }} />
        ) : (
          "Không có"
        ),
    },
    {
      title: "Ngày Khởi Chiếu",
      dataIndex: "ngayKhoiChieu",
      key: "ngayKhoiChieu",
      sorter: (a, b) => new Date(a.ngayKhoiChieu) - new Date(b.ngayKhoiChieu),
      render: (date) =>
        date ? new Date(date).toLocaleDateString("vi-VN") : "N/A",
    },
    {
      title: "Đánh Giá",
      dataIndex: "danhGia",
      key: "danhGia",
      sorter: (a, b) => a.danhGia - b.danhGia,
      render: (danhGia) => danhGia || "Chưa đánh giá",
    },
    {
      title: "Mã Nhóm",
      dataIndex: "maNhom",
      key: "maNhom",
      render: (maNhom) => maNhom || "N/A",
    },
    {
      title: "Đang Chiếu",
      dataIndex: "dangChieu",
      key: "dangChieu",
      filters: [
        { text: "Đang chiếu", value: true },
        { text: "Không", value: false },
      ],
      onFilter: (value, record) => record.dangChieu === value,
      render: (isDangChieu) =>
        isDangChieu ? <Tag color="green">Có</Tag> : <Tag>Không</Tag>,
    },
    {
      title: "Sắp Chiếu",
      dataIndex: "sapChieu",
      key: "sapChieu",
      filters: [
        { text: "Sắp chiếu", value: true },
        { text: "Không", value: false },
      ],
      onFilter: (value, record) => record.sapChieu === value,
      render: (isSapChieu) =>
        isSapChieu ? <Tag color="blue">Có</Tag> : <Tag>Không</Tag>,
    },
    {
      title: "Hot",
      dataIndex: "hot",
      key: "hot",
      filters: [
        { text: "Hot", value: true },
        { text: "Không", value: false },
      ],
      onFilter: (value, record) => record.hot === value,
      render: (isHot) =>
        isHot ? <Tag color="red">Hot</Tag> : <Tag>Không</Tag>,
    },
    {
      title: "Thao Tác",
      key: "action",
      render: (_, record) => (
        <Button
          type="primary"
          danger
          onClick={() => handleDelete(record.maPhim)}
        >
          Xoá
        </Button>
      ),
    },
  ];

  const columnsListUser = [
    {
      title: "Tài Khoản",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
      sorter: (a, b) => a.taiKhoan.localeCompare(b.taiKhoan),
      render: (taiKhoan) => taiKhoan || "N/A",
    },
    {
      title: "Họ Tên",
      dataIndex: "hoTen",
      key: "hoTen",
      render: (hoTen) => hoTen || "N/A",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (email) => email || "N/A",
    },
    {
      title: "Số Điện Thoại",
      dataIndex: "soDT",
      key: "soDT",
      render: (soDT) => soDT || "N/A",
    },
    {
      title: "Mật Khẩu",
      dataIndex: "matKhau",
      key: "matKhau",
      render: (text, record) => <PasswordField password={text} />, // Hide password for security
    },
    {
      title: "Loại Người Dùng",
      dataIndex: "maLoaiNguoiDung",
      key: "maLoaiNguoiDung",
      filters: [
        { text: "Khách Hàng", value: "KhachHang" },
        { text: "Quản Trị", value: "QuanTri" },
      ],
      onFilter: (value, record) => record.maLoaiNguoiDung === value,
      render: (loai) =>
        loai === "KhachHang" ? (
          <Tag color="green">Khách Hàng</Tag>
        ) : (
          <Tag color="blue">Quản Trị</Tag>
        ),
    },
    {
      title: "Thao Tác",
      key: "action",
      render: (_, record) => (
        <Button
          type="primary"
          danger
          onClick={() => handleDelete(record.taiKhoan)}
        >
          Xoá
        </Button>
      ),
    },
  ];

  // PasswordField Component for Toggle Visibility
  const PasswordField = ({ password }) => {
    const [visible, setVisible] = useState(false);

    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={{ marginRight: 8 }}>{visible ? password : "*******"}</span>
        <Button
          type="text"
          icon={visible ? <EyeInvisibleOutlined /> : <EyeOutlined />}
          onClick={() => setVisible(!visible)}
        />
      </div>
    );
  };

  const renderContent = () => {
    if (selectedKey === "1") {
      return (
        <div className="">
          <Button
            type="primary"
            danger
            onClick={onDeleteAll}
            disabled={selectedRowKeys.length === 0}
          >
            Xoá Tất Cả
          </Button>
          <Table
            className="mt-5"
            rowSelection={rowSelection}
            columns={columnsListUser}
            dataSource={listUser}
            rowKey="taiKhoan"
          />
        </div>
      );
    } else if (selectedKey === "2") {
      return (
        <>
          <Button
            type="primary"
            danger
            onClick={onDeleteAll}
            disabled={selectedRowKeys.length === 0}
          >
            Xoá Tất Cả
          </Button>
          <Table
            className="mt-5"
            rowSelection={rowSelection}
            columns={columnsListMovie}
            dataSource={state}
            rowKey="maPhim"
          />
        </>
      );
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout>
        <Sider width={200} style={{ background: theme.colorBgContainer }}>
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

export default AdminPage1;

//----------------------------------------------
