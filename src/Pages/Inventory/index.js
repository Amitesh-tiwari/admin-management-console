//import { Avatar, InputNumber, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getInventory } from "../../API";
import { Form, Input, Button } from "antd";
import { Card } from "react-bootstrap";
//import TypedInputNumber from "antd/es/input-number";
//import { act } from "react-dom/test-utils";

const generateCard = () => {
    return (
        <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};
<Button type="primary" onClick={generateCard}>
    Next
</Button>
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
        <div className="form-create">
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
                    <Button
                        type="primary"
                        onClick={() => {
                            // Create ID and Password logic here
                            alert("Account Created Successfully!");
                        }}
                    >
                        Create ID & Password
                    </Button>
                    <Button type="primary" onClick= {generateCard}>
                        Next
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
export default Inventory
