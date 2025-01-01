import React, { useState } from "react";
import Navbar from "../Components/NavBar";
import {
  Form,
  Button,
  DatePicker,
  Select,
  Input,
  message,
  Space,
  InputNumber,
  TimePicker,
} from "antd";
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
      // Check if the time object is valid
      const formatted = time.format("HH:mm");

      setFormattedTime(formatted);
    } else {
      setFormattedTime(null); // Clear the time if invalid or empty
    }
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
    console.log("valuesPhone", values.phoneNumber);
    const currentTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const resource = "rent";
    RentDataMail(
      values,
      formValues.moveInDate,
      messageApi,
      currentTimeZone,
      resource,
      formattedDate,
      formattedTime
    );
    success("Your Rent Form submitted successfully");
    console.log(
      "Form Submitted:",
      formValues.moveInDate,
      "Time Zone:",
      currentTimeZone
    );

    form.resetFields();
  };

  const apartmentSize = ["Room", "studio", "1Br", "2Br", "3Br's", "4Br's"];
  // const AnnualIncome = ["1BHK", "2BHK", "3BHK"];
  // const neighbourHood = ["1BHK", "2BHK", "3BHK"];
  // const voucher = ["yes", "no"];
  // const creditScore = ["1BHK", "2BHK", "3BHK"];
  // const familySize = ["7", "2", "3"];
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
  const [isTourAvailable, setIsTourAvailable] = useState(false);

  const handleTourAvailabilityChange = (e) => {
    setIsTourAvailable(e.target.value === "yes");
  };

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
          <p
            className=" text-center font-poppins md:px-0 px-5"
            style={{ color: "#25A7E1" }}
          >
            Find Your Ideal Apartment With Ease—Choose Your Size, Neighborhood,
            And Move-In Date To
          </p>
          <p
            className=" text-center mb-[36px] font-poppins mt-2"
            style={{ color: "#25A7E1" }}
          >
            Get Started Today!
          </p>

          {/* Form */}
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            className="w-full max-w-md  font-poppins px-8 md:px-4 "
          >
            <Form.Item
              name="name"
              rules={[{ required: true }]}
              className="mb-3 font-poppins "
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
            <Form.Item name="apartmentSize" className="mb-3  font-poppins">
              <Select
                placeholder="Apartment Size"
                className="min-h-[50px]  font-poppins"
                style={{ borderColor: "#666666" }}
              >
                {apartmentSize.map((option, index) => (
                  <Option key={index} value={option}>
                    {option}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item name="income" className="mb-3 font-poppins">
              <Select
                placeholder="Select Annual Income"
                className="min-h-[50px] font-poppins"
                style={{ borderColor: "#666666" }}
              >
                {Array.from({ length: 22 }, (_, i) => {
                  const value = 40000 + i * 10000;
                  return (
                    <Select.Option key={value} value={value}>
                      {value.toLocaleString()}$
                    </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>

            {/* Vouchers */}
            <Form.Item name="vouchers" className="mb-3 font-poppins">
              <Select
                placeholder="Select Voucher"
                className="min-h-[50px] font-poppins"
                style={{ borderColor: "#666666" }}
              >
                <Select.Option value="section_8">Section 8</Select.Option>
                <Select.Option value="CityFheps">CityFheps</Select.Option>
                <Select.Option value="hassa">Hassa</Select.Option>
                <Select.Option value="other">Other</Select.Option>
              </Select>
            </Form.Item>

            {/* Credit Score */}
            <Form.Item name="creditScore" className="mb-3 font-poppins">
              <InputNumber
                placeholder="Credit Score"
                className="py-2.5 font-poppins w-full"
                controls={true}
                style={{ borderColor: "#666666" }}
                min={0}
              />
            </Form.Item>
            <Form.Item name="commercialSpace" className="mb-3 font-poppins">
              <Input.Group compact>
                <Form.Item name="commercialSpace" noStyle>
                  <InputNumber
                    placeholder="Commercial Space"
                    className="py-2.5 font-poppins w-full"
                    min={0}
                    controls={true}
                    style={{
                      width: "calc(100% - 50px)",
                      borderColor: "#666666",
                    }} // Adjust width for the suffix
                  />
                </Form.Item>
                <span
                  className="py-3.5 font-poppins"
                  style={{
                    width: "50px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid #d9d9d9",
                    borderColor: "#666666",
                    borderLeft: "none",
                    backgroundColor: "#fafafa",
                  }}
                >
                  (Sqft)
                </span>
              </Input.Group>
            </Form.Item>

            {/* Move In Date */}
            <Form.Item name="moveInDate" className="mb-3 font-poppins">
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
                style={{ borderColor: "#666666" }}
              />
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
            <Form.Item name="familySize" className="mb-3 font-poppins">
              <InputNumber
                placeholder="Family Size"
                className="py-2.5 font-poppins w-full"
                controls={true}
                min={0} // Restrict to non-negative numbers
                max={20}
                style={{ borderColor: "#666666" }}
              />
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

            {/* Tour Time */}
            <Form.Item name="tourTime" className="mb-3 font-poppins">
              <TimePicker
                placeholder="Select Tour Time"
                className="py-3.5 w-full font-poppins"
                format="HH:mm"
                style={{ borderColor: "#666666" }}
                onChange={handleTimeChange}
                value={formattedTime ? moment(formattedTime, "HH:mm") : null} // Set value correctly
              />
            </Form.Item>
            {/* Submit Button */}
            <></>
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
