import React, { useState } from "react";
import Navbar from "../Components/NavBar";
import { Form, Button, DatePicker, Select, Input, message, Space } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import home1 from "../Assets/home1.png";
import { RentDataMail } from "../utils/SendDataEmail";
import moment from "moment";
const { Option } = Select;
const RentPage = () => {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState({
    moveInDate: null,
  });
  const [messageApi, contextHolder] = message.useMessage();
  const success = (message) => {
    messageApi.open({
      type: "success",
      content: message,
    });
  };

  const handleInputChange = (field, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [field]:
        field === "moveInDate" && value
          ? moment(value).format("DD-MM-YYYY")
          : value,
    }));
  };
  const onFinish = (values) => {
    RentDataMail(values, formValues.moveInDate, messageApi);
    success("Your Rent Form submitted successfully");
    console.log("Form Submitted:", formValues.moveInDate);

    form.resetFields();
  };

  const apartmentSize = ["1Br", "2Br", "3Br's", "4Br's"];
  // const AnnualIncome = ["1BHK", "2BHK", "3BHK"];
  // const neighbourHood = ["1BHK", "2BHK", "3BHK"];
  // const voucher = ["yes", "no"];
  // const creditScore = ["1BHK", "2BHK", "3BHK"];
  // const familySize = ["7", "2", "3"];

  return (
    <>
      {contextHolder}
      <div className="relative min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Form Section */}
        <div className="flex flex-col items-center justify-center mt-[43px]">
          <h1
            className="text-3xl font-bold font-poppins  mb-[24px]"
            style={{ color: "#25A7E1" }}
          >
            Rent An Apartment!
          </h1>
          <p className=" text-center font-poppins" style={{ color: "#25A7E1" }}>
            Find Your Ideal Apartment With Ease—Choose Your Size, Neighborhood,
            And Move-In Date To
          </p>
          <p
            className=" text-center mb-[36px] font-poppins"
            style={{ color: "#25A7E1" }}
          >
            Get Started Today!
          </p>

          {/* Form */}
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            className="w-full max-w-md  font-poppins px-4 "
          >
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                },
              ]}
              className="mb-3 font-poppins"
            >
              <Input
                placeholder="Email"
                className="min-h-[50px] font-poppins"
              />
            </Form.Item>
            {/* Apartment Size */}
            <Form.Item
              name="apartmentSize"
              className="mb-3  font-poppins"
              rules={[{ required: true }]}
            >
              <Select
                placeholder="Apartment Size"
                className="min-h-[50px]  font-poppins"
              >
                {apartmentSize.map((option, index) => (
                  <Option key={index} value={option}>
                    {option}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              name="income"
              className="mb-3 font-poppins"
              rules={[{ required: true }]}
            >
              <Input
                placeholder="Annual Income"
                className="min-h-[50px] font-poppins "
              />
            </Form.Item>

            {/* Vouchers */}
            <Form.Item
              name="vouchers"
              className="mb-3 font-poppins"
              rules={[{ required: true }]}
            >
              <Input
                placeholder="Vouchers"
                className="min-h-[50px] font-poppins"
              />
            </Form.Item>

            {/* Credit Score */}
            <Form.Item
              name="creditScore"
              className="mb-3 font-poppins"
              rules={[{ required: true }]}
            >
              <Input
                placeholder="Credit Score"
                className="min-h-[50px] font-poppins"
              />
            </Form.Item>

            {/* Move In Date */}
            <Form.Item
              name="moveInDate"
              className="mb-3 font-poppins"
              rules={[{ required: true }]}
            >
              <DatePicker
                placeholder="Move In Date"
                className="w-full min-h-[50px] font-poppins"
                value={
                  formValues.moveInDate
                    ? moment(formValues.moveInDate, "DD-MM-YYYY")
                    : null
                }
                onChange={(date) => handleInputChange("moveInDate", date)}
                suffixIcon={<CalendarOutlined />}
                style={{ borderColor: "rgb(87, 85, 85)" }}
              />
            </Form.Item>

            {/* Neighborhood */}
            <Form.Item
              name="neighborhood"
              className="mb-3 font-poppins"
              rules={[{ required: true }]}
            >
              <Input
                placeholder="Neighborhood"
                className="min-h-[50px] font-poppins"
              />
            </Form.Item>

            {/* Family Size */}
            <Form.Item
              name="familySize"
              className="mb-3 font-poppins"
              rules={[{ required: true }]}
            >
              <Input
                placeholder="Family Size"
                className="min-h-[50px] font-poppins"
              />
            </Form.Item>
            {/* Submit Button */}
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full mt-[20px] min-h-[50px]  font-poppins"
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
      </div>
    </>
  );
};

export default RentPage;
