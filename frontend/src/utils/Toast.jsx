export const Toast = (message, messageApi, type) => {
  messageApi.open({
    type: type,
    content: message,
  });
};
