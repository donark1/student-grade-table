class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this)
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
  }
  handleGetGradesError(error) {
    console.error(error);
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades);
    var avg = 0;
    for (var i = 0; i < grades.length; i++) {
      avg += grades[i].grade;
    }
    avg = avg/grades.length;
    this.pageHeader.updateAverage(avg);
  }
  createGrade(name, course, grade) {
    $.ajax({
      url: "https://sgt.lfzprototypes.com/api/grades",
      method: "POST",
      data: {name, course, grade},
      headers: {
        "X-Access-Token": "bykh0Jvl"
      },
      success: this.handleCreateGradesSuccess,
      error: this.handleCreateGradesError
    });
  }
  handleCreateGradeError(error) {
    console.log(error);
  }
  handleCreateGradeSuccess() {
    this.getGrades();
  }
  getGrades() {
    $.ajax({
      url: "https://sgt.lfzprototypes.com/api/grades",
      method: "GET",
      headers: {
        "X-Access-Token": "bykh0Jvl"
      },
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    });
  }
  start() {
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade);
  }
}
