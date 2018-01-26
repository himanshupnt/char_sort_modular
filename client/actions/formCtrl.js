import createForm from "../views/form";
import createResultsTable from "../views/results-table";
import createFormContainer from "../views/form-container";
import renderResult from "../views/result-row";

const onSubmitHandler = async unsorted => {
  let fetchSorted;
  let sorted;
  let unsortedJson = JSON.stringify({ unsorted });
  try {
    fetchSorted = await fetch("http://localhost:8080/sort", {
      method: "POST",
      body: unsortedJson,
      headers: {
        "Content-Type": "application/json"
      }
    });
    sorted = (await fetchSorted.json()).sorted;
    renderResult({ unsorted, sorted });
    return sorted;
  } catch (error) {
    console.error(error);
  }
};

const renderForm = () => {
  const formContainer = createFormContainer();
  const form = createForm(onSubmitHandler);
  const results = createResultsTable();

  formContainer.appendChild(form);
  formContainer.appendChild(results);
  document.body.appendChild(formContainer);
};

export default renderForm;
