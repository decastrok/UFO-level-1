
var tableData = data;
var tbody = d3.select("tbody");
// YOUR CODE HERE!
tableData.forEach(function (element) {
    var tr = tbody.append("tr");
    tr.append("td").attr("class", "ufosight").text(element.datetime);
    tr.append("td").attr("class", "ufosight").text(titleCase(element.city));
    tr.append("td").attr("class", "ufosight").text(element.state);
    tr.append("td").attr("class", "ufosight").text(element.country);
    tr.append("td").attr("class", "ufosight").text(element.shape);
    tr.append("td").attr("class", "ufosight").text(element.durationMinutes);
    tr.append("td").attr("class", "ufosight").text(element.comments);

});


function ufo() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    var filterdata;
    var filterform = d3.select("#datetime").node();
    var date = filterform.value;

    console.log(date);
    console.log(tableData);

    filterdata = tableData;

    if (date.length > 0) {
        filterdata = tableData.filter(tableData => tableData.datetime === date);
    }
    var filterform = d3.select("#city").node();
    var city = filterform.value;

    if (city.length > 0) {
        filterdata = filterdata.filter(filterdata => filterdata.city === city);
    }
    var filterform = d3.select("#state").node();
    var state = filterform.value;

    if (state.length > 0) {
        filterdata = filterdata.filter(filterdata => filterdata.state === state);
    }

    var filterform = d3.select("#shape").node();
    var shape = filterform.value;

    if (shape.length > 0) {
        filterdata = filterdata.filter(filterdata => filterdata.shape === shape);
    }

    console.log(filterdata);
    d3.selectAll(".ufosight").remove();

    filterdata.forEach(function (element) {
        var tr = tbody.append("tr");
        tr.append("td").attr("class", "ufosight").text(element.datetime);
        tr.append("td").attr("class", "ufosight").text(titleCase(element.city));
        tr.append("td").attr("class", "ufosight").text(element.state);
        tr.append("td").attr("class", "ufosight").text(element.country);
        tr.append("td").attr("class", "ufosight").text(element.shape);
        tr.append("td").attr("class", "ufosight").text(element.durationMinutes);
        tr.append("td").attr("class", "ufosight").text(element.comments);
    }, this);

}

function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}

