const email = document.querySelector("#email");
const form = document.querySelector("#form");
const btn = document.querySelector("#btn");

// Check if email is empty

if (email.value === "") {
  email.classList.add("error");
  email.style.border = "2px solid red";
  email.style.borderRadius = "20px";
} else if (email.value !== "") {
  email.classList.remove("error");
  email.style.border = "2px solid green";
} else {
  email.classList.remove("error");
}

// Check if email is valid

const validateEmail = (email) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(email);
};

if (validateEmail(email.value)) {
  email.classList.add("error");
  email.style.border = "2px solid red";
  email.style.borderRadius = "20px";
} else {
  email.classList.remove("error");
}
