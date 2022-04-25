const form = document.querySelector(".login-form");
const onFormSubmit = (event) => {
  event.preventDefault();

  const formEl = event.currentTarget.elements;
  const mail = formEl.email.value;
  const password = formEl.password.value;
  const formData = {
    mail,
    password,
  };

  if (mail === "" || password === "") {
    const message = "Всі поля повинні бути заповнені.";
    alert(message);
  }
  console.log(formData);
  event.currentTarget.reset();
};
form.addEventListener("submit", onFormSubmit);
