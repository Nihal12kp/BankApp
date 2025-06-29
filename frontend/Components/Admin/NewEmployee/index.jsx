import { Button, Card, Form, Input, Table } from "antd";
import Adminlayout from "../../Layout/Adminlayout";
import Item from "antd/es/list/Item";

  

const NewEmployee = () => {
    const { Item } = Form;
    const columns =[{
        title:"Fullname",
        dataIndex:"fullname",
        key:"fullname"
    }]


  return (
    <Adminlayout>
      <div className="grid md:grid-cols-3 gap-3">
        <Card title="Add new employee">
          <Form layout="vertical">
            <Item label="Profile" name="xyz">
              <Input type="file" />
            </Item>
            <div className="grid md:grid-cols-2 gap-x-2">
              <Item name="email" label="Email" rules={[{ required: true }]}>
                <Input />
              </Item>
              <Item
                name="password"
                label="password"
                rules={[{ required: true }]}
              >
                <Input type="number" />
              </Item>
              <Item
                name="fullname"
                label="Fullname"
                rules={[{ required: true }]}
              >
                <Input />
              </Item>
              <Item name="mobile" label="Mobile" rules={[{ required: true }]}>
                <Input />
              </Item>
            </div>
            <Item label="Address" name="address">
              <Input.TextArea />
            </Item>
            <Item>
              <Button
                type="text"
                htmlType="submit"
                className="!bg-blue-500 !text-white !font-bold !w-full"
              >
                Submit
              </Button>
            </Item>
          </Form>
        </Card>
        <Card className="md:col-span-2" title="Employee list">
            <Table columns={columns} dataSource={[]}/>
        </Card>
      </div>
    </Adminlayout>
  );
};
export default NewEmployee;
