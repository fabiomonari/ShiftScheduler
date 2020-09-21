function toResultHTML() {
    window.location.href = "result.html";
}

function toIndexHTML() {
    window.location.href = "index.html";
}

function addServer() {
    const serverTextArea = document.getElementById("txt_server").value;
    const valueOfServerTextArea = document.createTextNode(serverTextArea);

    const serverTableBody = document.getElementById("server-table-body");
    const newRow = serverTableBody.insertRow();
    const newCell = newRow.insertCell();

    newCell.appendChild(valueOfServerTextArea);

    for (let i = 1; i < 7; i++) {
        newRow.innerHTML += "<td>n/a</td>";
    }
}

function clearTable() {
    const serverTableBody = document.getElementById("server-table-body");
    document.getElementById("txt_server").value = "";

    while (serverTableBody.rows.length > 0) {
        serverTableBody.deleteRow(0);
    }
}

function changeDate() {
    // .datepicker input text is not vissiable
    const date = document.getElementById("datepicker").value;
    document.getElementById("week-date-text").innerHTML = "Week of " + date;
}

document.addEventListener("DOMContentLoaded", function () {
    // when page loaded display today's date
    const todaysDate = new Date();
    document.getElementById("week-date-text").innerHTML =
        "Week of " + todaysDate.toLocaleDateString().toString();

    // display when page loaded, but only when clicked throght date picker
    var elems = document.querySelectorAll(".datepicker");
    var instances = M.Datepicker.init(elems, {
        format: "mm/dd/yy",
    });
});
