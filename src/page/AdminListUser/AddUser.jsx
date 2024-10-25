import React, { useState } from "react";
import { Button, Modal, Form, Input, Select } from "antd";
import { adminService, movieService } from "../../service/movieService";

export let AddUser = ({fetchListUser}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const onFinish = (values) => {
    console.log("🚀 ~ onFinish ~ values:", values)
    
    setIsModalOpen(false);
    let user = { ...values, maNhom: "GP01" };
    adminService
      .themNguoiDung(user)
      .then((result) => {
      console.log("🚀 ~ .then ~ result:", result)
    //   fetchListUser();
      })
      .catch((err) => {
        console.log("🚀 ~ onFinish ~ err:", err)
        
      });
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        className="bg-orange-600 hover:bg-black"
      >
        Add User
      </Button>
      <Modal
        title="Create new User"
        open={isModalOpen}
        // onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        // initialValues={{
        //     maNhom: "maNhom",

        //   }}
      >
        <Form
          name="dangky"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Tài Khoản"
            name="taiKhoan"
            rules={[{ required: true, message: "Vui lòng nhập tài khoản!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mật Khẩu"
            name="matKhau"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Vui lòng nhập email!" },
              { type: "email", message: "Email không hợp lệ!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Số Điện Thoại"
            name="soDt"
            rules={[
              { required: true, message: "Vui lòng nhập số điện thoại!" },
            ]}
          >
            <Input />
          </Form.Item>
          {/* 
          <Form.Item
            label="Mã Nhóm"
            name="maNhom"
            rules={[{ required: true, message: "Vui lòng nhập mã nhóm!" }]}
          >
            <Input />
          </Form.Item> */}

          <Form.Item
            label="Mã Loại Người Dùng"
            name="maLoaiNguoiDung"
            rules={[
              { required: true, message: "Vui lòng nhập mã loại người dùng!" },
            ]}
          >
            <Select placeholder="Chọn loại người dùng">
              <Select.Option value="KhachHang">Khách Hàng</Select.Option>
              <Select.Option value="QuanTri">Quản Trị</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Họ Tên"
            name="hoTen"
            rules={[{ required: true, message: "Vui lòng nhập họ tên!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Đăng Ký
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
