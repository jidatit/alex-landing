
import React from "react";
import Navbar from "../Components/NavBar";
import { Form, Button, DatePicker, Select } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import home1 from "../Assets/home1.png"


const { Option } = Select;

const RentPage = () => {
    const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form Submitted:", values);
    alert("Form submitted successfully!");
    form.resetFields();
  };


  const apartmentSize = ['1BHK', '2BHK', '3BHK'];
  const AnnualIncome = ['1BHK', '2BHK', '3BHK'];
  const neighbourHood = ['1BHK', '2BHK', '3BHK'];
  const voucher = ['yes', 'no'];
   const creditScore = ['1BHK', '2BHK', '3BHK'];
   const familySize = ['7', '2', '3'];

  return (
    <div className="relative min-h-screen">
      {/* Navbar */}
      <Navbar />
     

      {/* Form Section */}
      <div className="flex flex-col items-center justify-center mt-[43px]">
        <h1 className="text-3xl font-bold font-poppins  mb-[24px]" style={{ color: "#1F4B43" }}>
          Rent An Apartment!
        </h1>
        <p className=" text-center font-poppins"  style={{ color: "#1F4B43" }}>
          Find Your Ideal Apartment With Ease—Choose Your Size, Neighborhood, And Move-In Date To
        </p>
        <p className=" text-center mb-[36px] font-poppins" style={{ color: "#1F4B43" }}>Get Started Today!</p>

        {/* Form */}
        <Form
        form={form}
          layout="vertical"
          onFinish={onFinish}
          className="w-full max-w-md  font-poppins px-4 "

        >
          {/* Apartment Size */}
          <Form.Item name="apartmentSize"
         className="mb-3  font-poppins"
           rules={[{ required: true }]}
           >
            <Select placeholder="Apartment Size"
             className="min-h-[50px]  font-poppins">
             {apartmentSize.map((option, index) => (
        <Option key={index} value={option}>
          {option}
        </Option>
      ))} 
            </Select>
          </Form.Item>

          {/* Annual Income */}
          <Form.Item name="income"
            className="mb-3  font-poppins" 
          rules={[{ required: true }]}>
            <Select placeholder="Annual Income"
            className="min-h-[50px]  font-poppins" >
              {AnnualIncome.map((option, index) => (
        <Option key={index} value={option}>
          {option}
        </Option>
      ))} 
            </Select>
          </Form.Item>

          {/* Vouchers */}
          <Form.Item name="vouchers"
            className="mb-3  font-poppins"
           rules={[{ required: true }]}>
            <Select placeholder="Vouchers"
            className="min-h-[50px]  font-poppins">
                {voucher.map((option, index) => (
        <Option key={index} value={option}>
          {option}
        </Option>
      ))} 
            </Select>
          </Form.Item>

          {/* Credit Score */}
          <Form.Item name="creditScore"
            className="mb-3  font-poppins"
           rules={[{ required: true }]}>
            <Select placeholder="Credit Score"
            className="min-h-[50px]  font-poppins" >
              {creditScore.map((option, index) => (
        <Option key={index} value={option}>
          {option}
        </Option>
      ))} 
            </Select>
          </Form.Item>

          {/* Move In Date */}
          <Form.Item name="moveInDate"
            className="mb-3  font-poppins" 
          rules={[{ required: true }]}
         >
            
            <DatePicker
              placeholder="Move In Date"
              className="w-full min-h-[50px]  font-poppins"
              suffixIcon={<CalendarOutlined />}
            style={{borderColor:"rgb(87, 85, 85)"}}
            />
          </Form.Item>

          {/* Neighborhood */}
          <Form.Item name="neighborhood"
            className="mb-3  font-poppins"
          rules={[{ required: true }]}
          >
            <Select placeholder="Neighborhood" 
            className="min-h-[50px]  font-poppins">
                 {neighbourHood.map((option, index) => (
        <Option key={index} value={option}>
          {option}
        </Option>
      ))} 
            </Select>
          </Form.Item>

          {/* Family Size */}
          <Form.Item name="familySize"
            className="mb-3  font-poppins"
           rules={[{ required: true }]}>
            <Select placeholder="Family Size"
             className="min-h-[50px]  font-poppins" >
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
              className="w-full mt-[20px] min-h-[50px]  font-poppins"
            //   style={{ color: "#1F4B43" }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>







         {/* Bottom Images */}
         {/* <div className="absolute bottom-0 right-0 w-1/5"> */}
         <div className="absolute bottom-0 right-0 w-1/5 sm:w-1/4 md:w-1/6 lg:w-1/8">
      <img
        src={home1}
        alt="house illustration"
        className="object-contain w-full"
      />
    </div>
    </div>
  );
};

export default RentPage;

