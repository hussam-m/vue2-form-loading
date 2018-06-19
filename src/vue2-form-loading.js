export default {
  install(Vue, options) {
    Vue.directive("loading", function(form, binding) {
      let button = {
        label:
          typeof binding.value === "object"
            ? binding.value.html
            : binding.value,
        className: typeof binding.value === "object" ? binding.value.class : ""
      };

      form.addEventListener("submit", function(event) {
        // disable submit button
        let submit = form.querySelector('[type="submit"]');
        submit.disabled = true;
        if (button.className !== "") {
          submit.classList.add(button.className);
        }

        if (submit.tagName === "INPUT") {
          if (binding.value) {
            submit.value = button.label;
          } else {
            submit.value = submit.value + "...";
          }
        } else {
          if (binding.value) {
            submit.innerHTML = button.label;
          } else {
            submit.innerHTML = submit.value + "...";
          }
        }
        // disable all inputs
        let inputs = form.querySelectorAll("input, select, textarea");
        inputs.forEach(function(element) {
          if (element.tagName === "SELECT" || element.type === 'range') {
            createHiddenInput(element, form)
            element.disabled = true;
          } else if (element.type === 'radio' || element.type === 'checkbox') {
            if (element.checked) {
              createHiddenInput(element, form)
            }
            element.disabled = true
          } else {
            element.readOnly = true;
          }
        });
      });
    });
  }
};

function createHiddenInput (element, form) {
  // create a hidden input
  var input = document.createElement('input')
  input.setAttribute('type', 'hidden')
  input.setAttribute('name', element.name)
  input.setAttribute('value', element.value)
  // append input to the form.
  form.appendChild(input)
}
