function getFormData(userName, userMail, userPhone) {
  const userData = {
    userName,
    userMail,
    userPhone,
  };
  let formMessage = "Sending...";
  fetch("https://test-key-d6afb-default-rtdb.firebaseio.com/test.json", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: { "Content-type": "application/json" },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else throw new Error("New Error");
    })
    .then(() => {
      formMessage = "We will contact you soon";
    })
    .catch((e) => {
      formMessage = "Something went wrong!";
    })
    .finally(() => {
      setTimeout(() => {
        formMessage = "";
      }, 3000);
    });
  return formMessage;
}
export default getFormData;
