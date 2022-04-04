//js intro
let number = document.querySelectorAll(".number");
function count(element) {
  let numTarget = element.innerHTML;
  for (let i = 0; i <= numTarget; i++) {
    setTimeout(() => {
      const n = i;
      element.innerHTML = n;
    }, (3000.0 / numTarget) * i);
  }
}

number.forEach((el) => {
  count(el);
});
//js contact
//tạo object Validator
function Validator(options) {
  var formElement = document.querySelector(options.form);
  function validate(inputElement, rule) {
    var errorElement = inputElement.parentElement.querySelector(
      options.errorSelector
    );
    var errorMessage = rule.test(inputElement.value);
    if (errorMessage) {
      errorElement.innerText = errorMessage;
      inputElement.parentElement.classList.add("invalid");
    } else {
      errorElement.innerText = "";
      inputElement.parentElement.classList.remove("invalid");
    }
  }
  if (formElement) {
    options.rules.forEach(function (rule) {
      var inputElement = formElement.querySelector(rule.selector);
      if (inputElement) {
        inputElement.onblur = function () {
          validate(inputElement, rule);
          inputElement.oninput = function () {
            var errorElement = inputElement.parentElement.querySelector(
              options.errorSelector
            );
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add("invalid");
          };
        };
      }
    });
  }
}
//Định nghĩa rules
Validator.isRequired = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim()
        ? undefined
        : `Please enter your ${selector.slice(1)}`;
    },
  };
};

Validator.isEmail = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value) ? undefined : "Please enter your email";
    },
  };
};

Validator({
  form: "#contact-form",
  errorSelector: ".form-message",
  rules: [
    Validator.isRequired("#name"),
    Validator.isEmail("#email"),
    Validator.isRequired("#subject"),
  ],
});
