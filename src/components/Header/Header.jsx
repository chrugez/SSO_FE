import React, { useState } from "react";
import { MenuItems } from "../../utils/Menu";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [current, setCurrent] = useState("");
  const navigate = useNavigate();
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    navigate(e.key);
  };
  return (
    <div>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={MenuItems}
      />
    </div>
  );
};

export default Header;
