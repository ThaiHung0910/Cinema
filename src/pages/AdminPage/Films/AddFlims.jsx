import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Switch,
  Upload,
} from "antd";

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const AddFlims = () => {
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <div>
      <h1 className="text-3xl">Thêm phim mới</h1>
      <div className="container mx-auto mt-3">
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          initialValues={{
            size: componentSize,
          }}
          onValuesChange={onFormLayoutChange}
          size={componentSize}
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item label="Form Size" name="size">
            <Radio.Group>
              <Radio.Button value="small">Small</Radio.Button>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="large">Large</Radio.Button>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="Tên phim">
            <Input />
          </Form.Item>
          <Form.Item label="Trailer">
            <Input />
          </Form.Item>
          <Form.Item label="Mô tả">
            <Input />
          </Form.Item>
          <Form.Item label="Ngày chiếu">
            <DatePicker />
          </Form.Item>
          <Form.Item label="Đang chiếu" valuePropName="checked">
            <Switch />
          </Form.Item>
          <Form.Item label="Sắp chiếu" valuePropName="checked">
            <Switch />
          </Form.Item>
          <Form.Item label="Hot" valuePropName="checked">
            <Switch />
          </Form.Item>
          <Form.Item label="Số sao">
            <InputNumber />
          </Form.Item>
          <Form.Item
            label="Hình ảnh"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload action="/upload.do" listType="picture-card">
              <button
                style={{
                  border: 0,
                  background: "none",
                }}
                type="button"
              >
                <PlusOutlined />
                <div
                  style={{
                    marginTop: 8,
                  }}
                >
                  Upload
                </div>
              </button>
            </Upload>
          </Form.Item>
          <Form.Item label="Thêm phim">
            <Button>Thêm phim</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AddFlims;
