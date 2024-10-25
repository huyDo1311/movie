import React, { useState } from "react";
import { EyeInvisibleOutlined, EyeOutlined, Button } from "antd";

const PasswordField = ({ password }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <span style={{ marginRight: 8 }}>{visible ? password : "*******"}</span>
      <Button
        type="text"
        // icon={visible ? <EyeInvisibleOutlined /> : <EyeOutlined />}
        onClick={() => setVisible(!visible)}
      />
    </div>
  );
};

export default PasswordField;
