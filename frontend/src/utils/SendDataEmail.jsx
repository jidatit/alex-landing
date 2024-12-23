import emailjs from "@emailjs/browser";
import { Toast } from "./Toast";
import { message } from "antd";
//done

export function RentDataMail(values, moveInDate, messageApi) {
  const templateParams = {
    from_name: "Alex Landing",
    apartmentSize: values.apartmentSize,
    creditScore: values.creditScore,
    email: values.email,
    familySize: values.familySize,
    income: values.income,
    neighborhood: values.neighborhood,
    vouchers: values.vouchers,
    moveInDate: moveInDate,
  };
  emailjs
    .send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_QR_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_KEY
    )
    .then((response) => {
      Toast("Rent Data is send to your mail!", messageApi, "success");
    })
    .catch((err) => {
      console.log("Failed Sending Mail...", err);
    });
}
