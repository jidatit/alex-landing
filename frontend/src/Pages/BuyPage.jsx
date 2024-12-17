import React from "react";
import Navbar from "../Components/NavBar";
import { Form, Button, Select } from "antd";

import home1 from "../Assets/home1.png"
import home2 from "../Assets/home2.png"

const { Option } = Select;
const BuyPage = () => {
    const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form Submitted:", values);
    alert("Form submitted successfully!");
        form.resetFields();
  };
  return (
    <div className="relative min-h-screen">
    {/* Navbar */}
    <Navbar />
    {/* Form Section */}
    <div className="flex flex-col items-center justify-center mt-[43px]">
      <h1 className="text-3xl font-bold font-poppins  mb-[24px]" style={{ color: "#1F4B43" }}>
        Buy Now!
      </h1>
      <p className=" text-center font-poppins" style={{ color: "#1F4B43" }}>
      Find Your Dream Apartment—Tailored To Your Budget, Size, and Location. Start Your Journey To
      </p>
      <p className=" text-center mb-[36px] font-poppins" style={{ color: "#1F4B43" }}>Ownership Today!</p>

      {/* Form */}
      <Form
      form={form}
        layout="vertical"
        onFinish={onFinish}
        className=" w-full max-w-md  font-poppins"
      >
        {/* Apartment Size */}
        <Form.Item name="PriceRange"
         className="mb-3  font-poppins"
         rules={[{ required: true }]}>
          <Select placeholder="Price Range"
          className="min-h-[50px]  font-poppins"
          >
            <Option value="1BHK">1 BHK</Option>
            <Option value="2BHK">2 BHK</Option>
            <Option value="3BHK">3 BHK</Option>
          </Select>
        </Form.Item>

     
        <Form.Item name="prequalified"
        className="mb-3  font-poppins"
         rules={[{ required: true }]}>
          <Select placeholder="Are You Pre qualified"
          className="min-h-[50px]  font-poppins">
            <Option value="yes">Yes</Option>
            <Option value="no">No</Option>
          </Select>
        </Form.Item>

        {/* Neighborhood */}
        <Form.Item name="neighborhood" 
        className="mb-3  font-poppins"
        rules={[{ required: true }]}>
          <Select placeholder="Neighborhood"
          className="min-h-[50px]  font-poppins" >
          <Option value="1BHK">1 BHK</Option>
            <Option value="2BHK">2 BHK</Option>
            <Option value="3BHK">3 BHK</Option>
          </Select>
        </Form.Item>

        {/* Family Size */}
        <Form.Item name="units" 
        className="mb-3  font-poppins" rules={[{ required: true }]}>
          <Select placeholder="Units" 
          className="min-h-[50px]  font-poppins">
          <Option value="1BHK">1 BHK</Option>
            <Option value="2BHK">2 BHK</Option>
            <Option value="3BHK">3 BHK</Option>
          </Select>
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button
          type="primary"
            htmlType="submit"
            className="w-full  mt-[20px] min-h-[50px]  font-poppins"
          //   style={{ color: "#1F4B43" }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>

    {/* Bottom Images */}
    <div className="absolute bottom-0 right-0 w-1/5">
      <img
        src={home1}
        alt="house illustration"
        className="object-contain w-full"
      />
    </div>

    <div className="absolute bottom-0 left-0 w-1/5">
      <img
        src={home2}
        alt="house illustration"
        className="object-contain w-full"
      />
    </div>
  </div>
  );
};

export default BuyPage;
