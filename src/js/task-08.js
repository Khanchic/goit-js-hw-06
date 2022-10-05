const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onFormSubmit);

const userData = {
  email: "",
  password: "",
};
function onFormSubmit(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const passWord = event.currentTarget.elements.password.value;
  if (email === "" || passWord === "") {
    alert("please be a human");
  } else {
    userData.email = email;
    userData.password = passWord;
    formRef.reset();
  }
}
console.log(onFormSubmit);
