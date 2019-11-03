// from data.js
var tableData = data;

console.log(data);

function buildTable(data) {
    tbody.html("");

    // Loop
    data.forEach((dataRow) => {
        var row = tbody.append("tr");

        Object.values(dataRow).forEach((val) => {
            var cell = row.append("td");
            cell.text(val);
        });
    });
}
// Tracking filters
var filters = {};
function updateFilters() {
    var element = d3.select(this).select("input");
    var value = element.property("value");
    var id = element.attr("id");

    // If a filter value was entered then add id and value
    // to the filters list. Otherwise, clear filter from the filters object
    if (value) {
        filters[id] = value;
    }
    else {
        delete filters[id];
    }
    // Call function to apply all filters and rebuild the table
    filterTable();
}
function filterTable() {

    // Set the filteredData to the tableData
    let filteredData = tableData;

    // Loop through all of the filters and keep any data that
    // matches the filter values
    Object.entries(filters).forEach(([key, value]) => {
        filteredData = filteredData.filter(row => row[key] === value);
    });

    // Rebuild the table using the filtered Data
    buildTable(filteredData);
}

// Attach an event to listen for changes to each filter
d3.selectAll(".filter").on("change", updateFilters);

// Build the table when the page loads
buildTable(tableData);