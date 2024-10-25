import React from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
// import { http } from "../../service/config";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { loginActionService, } from "../../redux/reducers/userSlice.js";


const FormLogin = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  // const onFinish2 = (values) => {
  //   console.log("Success:", values);
  //   // navigate("/");
  //   http
  //     .post("/api/QuanLyNguoiDung/DangNhap", values)
  //     .then((result) => {
  //       // console.log("result", result);
  //       message.success("Đăng nhập thành công");

  //       dispatch(setUserAction(result.data.content));

  //       let dataJson = JSON.stringify(result.data.content);

  //       localStorage.setItem("USER_LOGIN", dataJson);

  //       if (result.data.content.maLoaiNguoiDung == "QuanTri") {
  //         navigate("/list-user");
  //         // window.location.href = "/list-user";
  //       } else {
  //         navigate("/"); // Không gây reload trang
  //       }

  //       //window.location.href = "/"
  //     })
  //     .catch((err) => {
  //       dispatch(turnOffLoading());
  //       console.log("err", err);
  //     });
  // };
  const onFinish = (values) => {
    dispatch(loginActionService(values))
      .unwrap()
      .then((result) => {
        console.log("🚀 ~ .then ~ result:", result);
        let dataJson = JSON.stringify(result);

        localStorage.setItem("USER_LOGIN", dataJson);
        if (result.maLoaiNguoiDung === "QuanTri") {
          // navigate("/list-user");
          // navigate("/admin-page");
          navigate("/admin");
          // window.location.href = "/list-user";
        } else {
          navigate("/"); // Không gây reload trang
        }
      })
      .catch((err) => {
        console.log("🚀 ~ onFinish ~ err:", err);
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error("Thất bại");
  };
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 24,
      }}
      //   style={{
      //     maxWidth: 1200,
      //   }}
      initialValues={{
        taiKhoan: "testAdmin12",
        matKhau: "123",
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      <Form.Item
        label="Username"
        name="taiKhoan"
        rules={[
          {
            required: true,
            message: "Mật khẩu không được bỏ trống!",
          },
        ]}
      >
        <Input placeholder="Validate required onBlur" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="matKhau"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      {/* <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button
          type="primary"
          htmlType="submit"
          className="bg-white text-blue-700 border-blue-900"
        >
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};
export default FormLogin;
