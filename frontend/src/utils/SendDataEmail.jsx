import emailjs from "@emailjs/browser";
import { Toast } from "./Toast";
import { message } from "antd";
//done

export function RentDataMail(
  values,
  moveInDate = "",
  messageApi,
  currentTimeZone,
  resource,
  formattedDate,
  formattedTime
) {
  let templateParams = {
    from_name: "Alex Landing",
    email: values.email,
    name: values.name,
    neighborhood: values.neighborhood,
    availabilityDate: formattedDate,
    availabilityTime: formattedTime,
    currentTimeZone: currentTimeZone,
    resource: resource,
    // Add conditional flags
    rental: resource === "rent",
    purchase: resource === "buy",
    selling: resource === "sell",
  };

  // Add resource-specific parameters
  if (resource === "rent") {
    Object.assign(templateParams, {
      apartmentSize: values.apartmentSize,
      CommercialSpace: values.commercialSpace,
      creditScore: values.creditScore,
      familySize: values.familySize,
      income: values.income,
      vouchers: values.vouchers,
      moveInDate: moveInDate,
    });
  } else if (resource === "buy") {
    Object.assign(templateParams, {
      prequalified: values.prequalified,
      houseType: values.houseType,
      PriceRange: values.PriceRange,
    });
  } else if (resource === "sell") {
    Object.assign(templateParams, {
      propertyType: values.propertyType,
      PriceRange: values.PriceRange,
    });
  }

  emailjs
    .send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_QR_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_KEY
    )
    .then((response) => {
      Toast(`${resource} Data is sent to your mail!`, messageApi, "success");
    })
    .catch((err) => {
      console.log("Failed Sending Mail...", err);
      Toast("Failed to send email", messageApi, "error");
    });
}
