import {
    CreditCardTwoTone,
    AppstoreOutlined,
    PlusOutlined,
    ShoppingCartOutlined,
    UserOutlined,
  } from "@ant-design/icons";
  import { IoSettings } from "react-icons/io5";
  import { CiSearch } from "react-icons/ci";
  import { FaBatteryFull } from "react-icons/fa";
  import { Menu } from "antd";
  import { useEffect, useState } from "react";
  import { useLocation, useNavigate } from "react-router-dom";
  //import Card from "../../Pages/Card"
  
  function SideMenu() {
    const location = useLocation();
    const [selectedKeys, setSelectedKeys] = useState("/");
  
    useEffect(() => {
      const pathName = location.pathname;
      setSelectedKeys(pathName);
    }, [location.pathname]);
  
    const navigate = useNavigate();
    return (
      <div className="SideMenu">
        <Menu
          className="SideMenuVertical"
          mode="vertical"
          onClick={(item) => {
            //item.key
            navigate(item.key);
          }}
          selectedKeys={[selectedKeys]}
          items={[
            {
              label: "Dashbaord",
              icon: <AppstoreOutlined />,
              key: "/",
            },
            {
              label: "Create New User",
              key: "/inventory",
              icon: <PlusOutlined />,
            },
            {
              label: "Recharge My Wallet",
              key: "/orders",
              icon: <ShoppingCartOutlined />,
            },
            {
              label: "Manage User",
              key: "/customers",
              icon: <UserOutlined />,
            },
            {
              label: "Manage User Cards",
              key: "/customers",
              icon: <CreditCardTwoTone />,
            },
            {
              label: "Search ",
              key: "/customers",
              icon: <CiSearch/>,
            },
            {
              label: "Recharge My Wallet ",
              key: "/customers",
              icon: <FaBatteryFull />,
            },
            {
              label: "Settings ",
              key: "/customers",
              icon: <IoSettings />,
            },
          ]}
        ></Menu>
       
      </div>
    );
  }
  export default SideMenu;