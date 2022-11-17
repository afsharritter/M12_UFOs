// import the data from data.js
const tableData = data

//reference the HTML table using d3
var tbody = d3.select("tbody")

//build a table to be filled with data ONLY
function buildTable(data) {
    //clear existing data in the table
    tbody.html("");

    //now loop through each object in data
    //arrow function to chain a for loop to each row of data
    data.forEach((dataRow) => {
        // append a row to the table body 
        //(tells JS to find <tbody> and append a <tr> table row)
        let row = tbody.append("tr");

        //add each UFO sighting to one row of Data
        //1. reference one object{key:value, ...} in the data table
        //2. add the values to each dataRow
        //3. specify one object (val) per row
            //append each value of the object to a cell in the table
            //extract the text from each value from the object's {key:value} pair
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}

//create handle click function to select/store datetime
// d3 select function chooses the first element that matches selector (item we're telling d3.js to look for)
//1. tell d3.js to select the #datetime HTML tag, which will be listed with the "datetime" id
//2. chain .property("value") to store the value as the "date" variable, as defined
function handleClick() {
    let date = d3.select("#datetime").property("value");
    //set a default filter and save it to a new variable: default filter will be original table data so users can filter on their own terms
    let filteredData = tableData;

    //use if statement to check for a date, if entered, return only the data with that date
    if (date) {
        //apply a filter method to match the datetime value to filtered date value
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    //rebuild the table using the filtered data
    //if no date was entered, then filteredData will just be the original tableData
    buildTable(filteredData);
}

//Attach an event to listen to the form button
d3.selectAll("#filter-btn").on("click", handleClick)

//Build the table when the page loads
buildTable(tableData);