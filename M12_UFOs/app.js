// import the data from data.js

const tableData = data;

//reference the HTML table using d3
var tbody = d3.select("tbody");

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
        Object.values(dataRow).forEach((val) => {
            //append each value of the object to a cell in the table
            let cell = row.append("td");
            //extract the text from each value from the object's {key:value} pair
            cell.text(val);
        });
    });
};

data
