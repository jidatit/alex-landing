import React, { useState } from "react";
import Navbar from "../Components/NavBar";
import {
  Form,
  Button,
  Select,
  Radio,
  Input,
  DatePicker,
  TimePicker,
  message,
  InputNumber,
} from "antd";

import home1 from "../Assets/home1.png";
import home2 from "../Assets/home2.png";
import { RentDataMail } from "../utils/SendDataEmail";
import { Toast } from "../utils/Toast";
import moment from "moment";

const { Option } = Select;
const BuyPage = () => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const onFinish = (values) => {
    const currentTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const resource = "buy";
    let moveInDate = "";
    RentDataMail(
      values,
      moveInDate,
      messageApi,
      currentTimeZone,
      resource,
      formattedDate,
      formattedTime
    );
    Toast("Your Buy Form submitted successfully", messageApi, "success");
    console.log("Form Submitted:", formattedTime);

    form.resetFields();
  };
  const [formattedDate, setFormattedDate] = useState(null);
  const [formattedTime, setFormattedTime] = useState(null);

  // Handle Date change and format it to DD-MM-YYYY
  const handleDateChange = (date) => {
    if (date) {
      const formatted = moment(date).format("DD-MM-YYYY");
      setFormattedDate(formatted); // Store the formatted date
    } else {
      setFormattedDate(null); // Clear the date if it's empty
    }
  };

  // Handle Time change and format it to HH:mm
  const handleTimeChange = (time) => {
    if (time && time.isValid()) {
      const formatted = time.format("hh:mm A"); // 12-hour format with AM/PM
      setFormattedTime(formatted);
    } else {
      setFormattedTime(null); // Clear the time if invalid or empty
    }
  };

  const apartmentSize = ["1BHK", "2BHK", "3BHK"];
  const prequalified = ["1BHK", "2BHK", "3BHK"];
  const neighbourHood = ["1BHK", "2BHK", "3BHK"];
  const familySize = ["7", "2", "3"];
  const neighborhoods = [
    { value: "crown_heights", label: "Crown Heights" },
    { value: "flatbush", label: "Flatbush" },
    { value: "canarsie", label: "Canarsie" },
    { value: "ditmasPark", label: "Ditmas Park" },
    { value: "eastNewYork", label: "East New York" },
    { value: "prospectHeights", label: "Prospect Heights" },
    { value: "eastFlatbush", label: "East Flatbush" },
    { value: "leffertsGarden", label: "Lefferts Garden" },
    { value: "other", label: "Other" },
  ];
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
            Buy Now!
          </h1>
          <p
            className=" text-center font-poppins md:px-0 px-5"
            style={{ color: "#25A7E1" }}
          >
            Find Your Dream Apartment—Tailored To Your Budget, Size, and
            Location. Start Your Journey To
          </p>
          <p
            className="text-center mb-[36px] font-poppins"
            style={{ color: "#25A7E1" }}
          >
            Ownership Today!
          </p>

          {/* Form */}
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            className=" w-full max-w-md  font-poppins px-8 md:px-4"
          >
            <Form.Item
              name="name"
              className="mb-3 font-poppins "
              rules={[{ required: true }]}
            >
              <Input
                placeholder="Name"
                className="min-h-[50px] font-poppins [&::placeholder]:text-gray-300 place"
              />
            </Form.Item>
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
                className="min-h-[50px] font-poppins place"
              />
            </Form.Item>
            <Form.Item
              name="phoneNumber"
              className="mb-3 font-poppins"
              rules={[{ required: true }]}
            >
              <InputNumber
                placeholder="Phone Number"
                className="py-2.5 font-poppins w-full"
                controls={true}
                style={{ borderColor: "#666666" }}
              />
            </Form.Item>
            {/* Apartment Size */}
            <Form.Item name="PriceRange" className="mb-3 font-poppins">
              <Select
                placeholder="Price Range"
                className="min-h-[50px] font-poppins"
              >
                {/* Generate price range dynamically */}
                {Array.from({ length: 11 }, (_, index) => {
                  const value = 500000 + index * 100000; // Starting from 500,000 with increment of 100,000
                  return (
                    <Option key={value} value={value}>
                      {"$"}
                      {value.toLocaleString()}

                      {/* Formats the number with commas (e.g., 500,000) */}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>

            {/* Neighborhood */}
            <Form.Item name="neighborhood" className="mb-3 font-poppins">
              <Select
                placeholder="Select Neighborhood"
                className="min-h-[50px] font-poppins"
                style={{ borderColor: "#666666" }}
              >
                {neighborhoods.map((neighborhood) => (
                  <Select.Option
                    key={neighborhood.value}
                    value={neighborhood.value}
                  >
                    {neighborhood.label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            {/* Family Size */}
            <Form.Item name="houseType" className="mb-3 font-poppins">
              <Select
                placeholder="House Type"
                className="min-h-[50px] font-poppins"
              >
                <Option key="coop" value="coop">
                  Co-op
                </Option>
                <Option key="condo" value="condo">
                  Condo
                </Option>
                {[...Array(6).keys()].map((index) => (
                  <Option key={index} value={`${index + 1} family home`}>
                    {`${index + 1} family home`}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item name="tourDate" className="mb-3 font-poppins">
              <DatePicker
                placeholder="Select Tour Date"
                className="py-3.5 w-full font-poppins"
                style={{ borderColor: "#666666" }}
                onChange={handleDateChange} // Set the date change handler
                format="DD-MM-YYYY" // Display format
              />
            </Form.Item>

            {/* Availability Time */}
            <Form.Item name="tourTime" className="mb-3 font-poppins">
              <TimePicker
                placeholder="Select Tour Time"
                className="py-3.5 w-full font-poppins"
                format="hh:mm A" // 12-hour format with AM/PM
                use12Hours // Enable 12-hour mode
                style={{ borderColor: "#666666" }}
                onChange={handleTimeChange}
                value={formattedTime ? moment(formattedTime, "hh:mm A") : null} // Set value correctly
              />
            </Form.Item>
            <Form.Item
              name="prequalified"
              className="mb-3 font-poppins"
              label="Are you prequalified?" // Added label here
            >
              <Radio.Group
                defaultValue="yes" // Optional: set default value to "yes"
                className="font-poppins"
              >
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Radio.Group>
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
      </div>{" "}
    </>
  );
};

export default BuyPage;
