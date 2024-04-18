import { Avatar, InputNumber, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getInventory } from "../../API";
import { Form, Input, Button } from "antd";
import TypedInputNumber from "antd/es/input-number";
function Inventory() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getInventory().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

    return (
        <div>
            <Form>
                <Form.Item label="Login Email">
                    <input />
                </Form.Item>
                <Form.Item label="Mobile Number">
                    <input />
                </Form.Item>
                <Form.Item label="Password">
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button type="primary">Create ID & Password</Button>
                </Form.Item>
            </Form>
        </div>
    );
  
}
export default Inventory;