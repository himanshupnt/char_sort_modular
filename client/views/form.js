const formTemplate = `
<label id="unsorted-label" for="unsorted">Sortinator</label>
<input id="unsorted" type="text" name="unsorted" placeholder="Type a string to sort!" required>
<input id="submit-btn" type="submit" value="SORT">`;

const addEventListenerOnSubmit = (form, submitHandler) => {
  form.addEventListener("submit", async event => {
    const formData = new FormData(form).get("unsorted");
    try {
      event.preventDefault();
      return await submitHandler(formData);
    } catch (error) {
      console.error(error);
    }
  });
};

const createForm = submitHandler => {
  const form = document.createElement("form");
  form.id = "sortify";
  form.innerHTML = formTemplate;
  addEventListenerOnSubmit(form, submitHandler);
  return form;
};

export default createForm;
