class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }
  updateGrades(grades) {
    var tbody = this.tableElement.querySelector("tbody");
    tbody.textContent = "";
    for (var i = 0; i < grades.length; i++) {
      var renderGrade = this.renderGradeRow(grades[i], this.deleteGrade);
      tbody.append(renderGrade);
    }
    if (grades.length > 0) {
      var pElement = document.getElementById("noGrades");
      pElement.classList = "d-none";
    } else {
      pElement.classList.remove("d-none");
    }
  }
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(data, deleteGrade) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var button = document.createElement("button");
    td4.append(button);
    button.classList = "buttonClass";
    button.type = "button";
    td1.textContent = data.name;
    td2.textContent = data.course;
    td3.textContent = data.grade;
    button.textContent = "DELETE";
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);
    button.addEventListener("click", function () {
      deleteGrade(data.id);
    });
    return tr;
  }
}
