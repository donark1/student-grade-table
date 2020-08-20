class App {
  handleGetGradesError(error) {
    console.error(error);
  }
  handleGetGradesSuccess(grades) {
    console.log(grades);
  }
  constructor() {
    this.handleGetGradesError = handleGetGradesError;
    this.handleGetGradesSuccess = handleGetGradesSuccess;
  }
  getGrades() {
    $.ajax({
      url: "https://sgt.lfzprototypes.com/api/grades",
      method: "GET",
      data: "none",
      headers: {
        "X-Access-Token": "bykh0Jvl"
      },
      success: this.handleGetGradesSuccess();
      error: this.handleGetGradesError();
    });
  }
  start() {
    this.getGrades(),
  }
}
