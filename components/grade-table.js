class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }
  updateGrades(grades) {
    console.log(grades);
    var tbody = this.tableElement.querySelector("tbody");
    tbody.textContent = "";
    for (var i = 0; i < grades.length; i++) {
      var tr = document.createElement("tr");
      var td1 = document.createElement("td");
      var td2 = document.createElement("td");
      var td3 = document.createElement("td");
      td1.textContent = grades[i].name;
      td2.textContent = grades[i].course;
      td3.textContent = grades[i].grade;
      tr.append(td1);
      tr.append(td2);
      tr.append(td3);
      tbody.append(tr);
    }
  }
}
