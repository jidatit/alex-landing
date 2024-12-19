import React from "react";
import Navbar from "../Components/NavBar";
import { Form,  Button, Select } from "antd";

import home1 from "../Assets/home1.png"
import home2 from "../Assets/home2.png"


const { Option } = Select;

const SellPage = () => {

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log("Form Submitted:", values);
        alert("Form submitted successfully!");
        form.resetFields();
      };


      const residentialOptions = ['1BHK', '2BHK', '3BHK'];
      const mixUseOptions = ['1BHK', '2BHK', '3BHK'];
      const multiFamilyOptions = ['yes', 'no'];
  return (

    
    <div className="relative min-h-screen ">
    {/* Navbar */}
    <Navbar />

    {/* Form Section */}
    <div className="flex flex-col items-center justify-center mt-[43px]  ">
      <h1 className="text-3xl font-bold font-poppins mb-[24px] " style={{ color: "#1F4B43" }}>
        Sell Now!
      </h1>
      <p className=" text-center px-4 font-poppins" style={{ color: "#1F4B43" }}>
          Selling Your Apartment? List It Now And Connect With
      </p>
      <p className=" text-center mb-[36px] font-poppins" style={{ color: "#1F4B43" }}>Buyers Quickly!</p>

      {/* Form */}
      <Form
        form={form} 
        layout="vertical"
        onFinish={onFinish}
        className=" w-full max-w-md font-poppins px-4"
       
      >
        {/* Apartment Size */}
        <Form.Item name="residential"
        className="mb-3 ont-poppins"
         rules={[{ required: true }]}>
          <Select 
           className="min-h-[50px]  font-poppins "
          placeholder="Residential">
            {residentialOptions.map((option, index) => (
        <Option key={index} value={option}>
           {option}
          </Option>
          ))}
          </Select>
        </Form.Item>

        {/* Annual Income */}
        <Form.Item name="mixuse"
        className="mb-3  font-poppins"
         rules={[{ required: true }]}>
          <Select
           className="min-h-[50px]  font-poppins"
            placeholder="Mix Use" >
           {mixUseOptions.map((option, index) => (
         <Option key={index} value={option}>
           {option}
         </Option>
       ))}
          </Select>
        </Form.Item>

        {/* Vouchers */}
        <Form.Item name="multifamily"
        className="mb-3  font-poppins"
         rules={[{ required: true }]}
         >
          
          <Select  className="min-h-[50px]  font-poppins"
          placeholder="Multi Family">
            {multiFamilyOptions.map((option, index) => (
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
            className="w-full mt-[20px] min-h-[50px]  font-poppins "
          //   style={{ color: "#1F4B43" }}
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

export default SellPage;





