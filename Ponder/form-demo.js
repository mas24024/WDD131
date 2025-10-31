// form-demo.js

function validateForm(event) {
  const theForm = event.target;
  const errors = [];
  let isValid = true;

  // Validate that the name is "Bob"
  const nameValue = theForm.fullName.value.trim();
  if (nameValue.toLowerCase() !== "bob") {
    isValid = false;
    errors.push("Only users named Bob may place an order.");
  }

  // Validate credit card number ONLY if credit card is selected
  if (theForm.paymentMethod.value === "creditCard") {
    const cardNumber = theForm.creditCardNumber.value.trim();
    const allowedNumber = "1234123412341234";

    if (cardNumber !== allowedNumber) {
      isValid = false;
      errors.push(
        "Invalid credit card number. (For testing use: 1234123412341234)"
      );
    }
  }

  if (!isValid) {
    event.preventDefault();
    showErrors(errors);
    return false;
  }
}

function togglePaymentDetails(e) {
  const theForm = document.querySelector("#checkoutForm");
  const creditCardContainer = document.getElementById("creditCardNumberContainer");
  const paypalContainer = document.getElementById("paypalUsernameContainer");

  // Hide both sections
  creditCardContainer.classList.add("hide");
  paypalContainer.classList.add("hide");

  // Disable required on both so hidden fields don't trigger an error
  theForm.creditCardNumber.required = false;
  theForm.paypalUsername.required = false;

  // Show only the selected method’s container
  if (theForm.paymentMethod.value === "creditCard") {
    creditCardContainer.classList.remove("hide");
    theForm.creditCardNumber.required = true;
  } else if (theForm.paymentMethod.value === "paypal") {
    paypalContainer.classList.remove("hide");
    theForm.paypalUsername.required = true;
  }
}

// Display our gathered error messages
function showErrors(errors) {
  const errorEl = document.querySelector(".errors");
  const html = errors.map((error) => `<p>${error}</p>`);
  errorEl.innerHTML = html.join("");
}

// Listen for payment method changing
document
  .querySelector("#paymentMethod")
  .addEventListener("change", togglePaymentDetails);

// Listen for form submission
document
  .querySelector("#checkoutForm")
  .addEventListener("submit", validateForm);
