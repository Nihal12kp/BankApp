import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input } from "antd";
const { Item } = Form;

const Login = () => {
  const onFinish = (value) => {
    console.log(value);
  };

  return (
    <div className="flex">
      <div className="w-1/2 hidden md:flex items-center justify-center">
        <img className="w-4/5 object-contain" src="/bank-img.jpg" alt="" />
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 bg-white">
        <Card className="w-full max-w-sm shadow-xl">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Bank Login
          </h2>
          <Form name="login" onFinish={onFinish} layout="vertical">
            <Item name="Username" label="Username" rules={[{ required: true }]}>
              <Input prefix={<UserOutlined />} placeholder="Emter your name" />
            </Item>
            <Item name="Password" label="Password" rules={[{ required: true }]}>
              <Input
                prefix={<LockOutlined />}
                placeholder="Emter your password"
              />
            </Item>
            <Item>
              <Button className="!bg-blue-500 !text-white !font-bold" type="text" htmlType="submit" block>Login</Button>
            </Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
