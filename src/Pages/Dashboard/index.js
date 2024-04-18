import {
    DollarCircleOutlined,
    ShoppingCartOutlined,
    ShoppingOutlined,
    UserOutlined,
  } from "@ant-design/icons";
  import { PiCardsFill } from "react-icons/pi";
  import { LuWalletCards } from "react-icons/lu";
  import { LiaAddressCardSolid } from "react-icons/lia";
  import { Card, Space, Statistic, Table, Typography } from "antd";
  import { useEffect, useState } from "react";
  import { getCustomers, getInventory, getOrders, getRevenue } from "../../API";
  
  import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Bar } from "react-chartjs-2";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
function Dashboard() {
    const [orders, setOrders] = useState(0);
    const [inventory, setInventory] = useState(0);
    const [customers, setCustomers] = useState(0);
    const [revenue, setRevenue] = useState(0);

    useEffect(() => {
        getOrders().then((res) => {
            setOrders(res.total);
            setRevenue(res.discountedTotal);
        });
        getInventory().then((res) => {
            setInventory(res.total);
        });
        getCustomers().then((res) => {
            setCustomers(res.total);
        });
    }, []);

    return (
        <div> {/* Wrap the JSX elements inside a div */}
            <Space size={20} direction="vertical">
                <Typography.Title level={4}>Dashboard</Typography.Title>
                <Space direction="horizontal">
                    <DashboardCard
                        icon={
                            <PiCardsFill
                                style={{
                                    color: "green",
                                    backgroundColor: "rgba(0,255,0,0.25)",
                                    borderRadius: 20,
                                    fontSize: 24,
                                    padding: 8,
                                }}
                            />
                        }
                        title={"Total Cards"}
                        value={orders}
                    />
                    <DashboardCard
                        icon={
                            <ShoppingOutlined
                                style={{
                                    color: "blue",
                                    backgroundColor: "rgba(0,0,255,0.25)",
                                    borderRadius: 20,
                                    fontSize: 24,
                                    padding: 8,
                                }}
                            />
                        }
                        title={"Franchise Cards"}
                        value={inventory}
                    />
                    <DashboardCard
                        icon={
                            <LuWalletCards
                                style={{
                                    color: "purple",
                                    backgroundColor: "rgba(0,255,255,0.25)",
                                    borderRadius: 20,
                                    fontSize: 24,
                                    padding: 8,
                                }}
                            />
                        }
                        title={"User Cards"}
                        value={customers}
                    />

                    <DashboardCard
                        icon={
                            <LiaAddressCardSolid
                                style={{
                                    color: "red",
                                    backgroundColor: "rgba(255,0,0,0.25)",
                                    borderRadius: 20,
                                    fontSize: 24,
                                    padding: 8,
                                }}
                            />
                        }
                        title={"Franchise Cards"}
                        value={revenue}
                    />
                </Space>
                <Space>
                    <RecentOrders />
                </Space>
            </Space>
        </div>
    );
}
  
  function DashboardCard({ title, value, icon }) {
    return (
      <Card>
        <Space direction="horizontal">
          {icon}
          <Statistic title={title} value={value} />
        </Space>
      </Card>
    );
  }
  function RecentOrders() {
    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      getOrders().then((res) => {
        setDataSource(res.products.splice(0, 3));
        setLoading(false);
      });
    }, []);
  
   
    return (
        <Table dataSource={[
            { name: 'Total Cards', value: 37 },
            { name: 'Active Cards', value: 11 },
            { name: 'Inactive Cards', value: 0 },
            { name: 'Trial Cards', value: 25 },
        ]}>
            <Table.Column title="Cards" dataIndex="name" key="name" />
            <Table.Column title="Values" dataIndex="value" key="value" />
        </Table>
    );
  }
  export default Dashboard;