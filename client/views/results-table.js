const resultsTemplate = `
<table id="results">
  <tr>
    <th>Input</th>
    <th>Output</th>
  </tr>
</table>`;

const createResultsTable = () => {
  const div = document.createElement("div");
  div.id = "sorted";
  div.innerHTML = resultsTemplate;
  return div;
};

export default createResultsTable;
