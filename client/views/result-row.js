const renderResult = props => {
  const result = document.createElement("tr");
  result.innerHTML = `<td>${props.unsorted}</td><td>${props.sorted}</td>`;
  document.getElementById("results").appendChild(result);
};

export default renderResult;
