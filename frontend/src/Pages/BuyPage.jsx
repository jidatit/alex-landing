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
    
  const apartmentSize = ['1BHK', '2BHK', '3BHK'];
  const prequalified = ['1BHK', '2BHK', '3BHK'];
  const neighbourHood = ['1BHK', '2BHK', '3BHK'];
   const familySize = ['7', '2', '3'];

  return (
    <div className="relative min-h-screen">
    {/* Navbar */}
    <Navbar />
    {/* Form Section */}
    <div className="flex flex-col items-center justify-center mt-[43px]">
      <h1 className="text-3xl font-bold font-poppins  mb-[24px]" style={{ color: "#25A7E1" }}>
        Buy Now!
      </h1>
      <p className=" text-center font-poppins" style={{ color: "#25A7E1" }}>
      Find Your Dream Apartment—Tailored To Your Budget, Size, and Location. Start Your Journey To
      </p>
      <p className="text-center mb-[36px] font-poppins" style={{ color: "#25A7E1" }}>Ownership Today!</p>

      {/* Form */}
      <Form
      form={form}
        layout="vertical"
        onFinish={onFinish}
        className=" w-full max-w-md  font-poppins px-4"
      >
        {/* Apartment Size */}
        <Form.Item name="PriceRange"
         className="mb-3  font-poppins"
         rules={[{ required: true }]}>
          <Select placeholder="Price Range"
          className="min-h-[50px]  font-poppins"
          >
            {apartmentSize.map((option, index) => (
        <Option key={index} value={option}>
          {option}
        </Option>
      ))} 
          </Select>
        </Form.Item>

     
        <Form.Item name="prequalified"
        className="mb-3  font-poppins"
         rules={[{ required: true }]}>
          <Select placeholder="Are You Pre qualified"
          className="min-h-[50px]  font-poppins">
              {prequalified.map((option, index) => (
        <Option key={index} value={option}>
          {option}
        </Option>
      ))} 
          </Select>
        </Form.Item>

        {/* Neighborhood */}
        <Form.Item name="neighborhood" 
        className="mb-3  font-poppins"
        rules={[{ required: true }]}>
          <Select placeholder="Neighborhood"
          className="min-h-[50px]  font-poppins" >
          {neighbourHood.map((option, index) => (
        <Option key={index} value={option}>
          {option}
        </Option>
      ))} 
          </Select>
        </Form.Item>

        {/* Family Size */}
        <Form.Item name="units" 
        className="mb-3  font-poppins" rules={[{ required: true }]}>
          <Select placeholder="Units" 
          className="min-h-[50px]  font-poppins">
            {familySize.map((option, index) => (
        <Option key={index} value={option}>
          {option}
        </Option>
      ))} 
          </Select>
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button
          type="primary"
            htmlType="submit"
            className="w-full  mt-[20px] min-h-[50px]  font-poppins"
          //   style={{ color: "#25A7E1" }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>

    {/* Bottom Images */}
    {/* <div className="absolute bottom-0 right-0 w-1/5"> */}
    <div className="absolute bottom-0 right-0 z-[-1] w-2/4 md:w-1/4 lg:w-1/6">
      <img
        src={home1}
        alt="house illustration"
        className="object-contain w-full"
      />
    </div>

    {/* <div className="absolute bottom-0 left-0 w-1/5"> */}
    <div className="absolute bottom-0 left-0 z-[-1] w-2/4 md:w-1/4 lg:w-1/6">
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
