// from data.js
var tableData = data;

//Get a reference to the Table body

var tbody = d3.select("tbody");

//Console.log the UFO sighting data  from data.js

console.log(data);

// Define a function to build a Table

function buildTable(tableContent) {

    // removes existing data in the Table

    tbody.html(""); 

    // Now define the anonymous function to read the data 
    // for each data item in order to build the Table

    tableContent.forEach(function(ufoEvent) {

        console.log(ufoEvent);

        var row = tbody.append("tr");

        Object.entries(ufoEvent).forEach(function([key, value]) {

        console.log(key, value);

        //Append a cell to the row for each value of UFO sighting

        var cell = row.append("td");

        cell.text(value);

        });

    });

};

// Select the button
var button = d3.select("#filter-btn");

// Define a function handleClickwhich is later called for the "on click" event

function handleClick() {

    // Following call prevents the page from refreshing

    d3.event.preventDefault();

    // We are selecting all input tags in the code below

    console.log("searching for all inputs");

    var allInputs = d3.selectAll("input");

    console.log("printing all inputs");

    console.log(allInputs);

    // Define two variables to hold individual value and ID for filters while looping
    // through the filter elements

    var filterValue;

    var filterID;

    console.log("inputValue = ", filterValue);

    console.log("inputID = ", filterID);

    // Define two arrays to hold "non-blank" filter values and ID

    listID = [];
    listValue = [];

    // way one - extract info from nodes
    allInputs.nodes().forEach(function(d, i) {

         filterID = allInputs.nodes()[i].id;  
         filterValue = allInputs.nodes()[i].value;

         console.log("id: " , filterID);
         console.log("value: ", filterValue);

         if (filterValue !== "") {
             listID.push(filterID);
             listValue.push(filterValue);
         };

    });

    // Define a new variable "filteredData" and initialize it to the initial data set

    var filteredData = tableData;

    for (var i = 0; i < listID.length; i++) {

        filteredData = filteredData.filter(event => event[listID[i]] === listValue[i]);

    }

    

    console.log("filteredData");

    console.log(filteredData);

    buildTable(filteredData);
   
};

button.on("click",handleClick);

buildTable(tableData);


