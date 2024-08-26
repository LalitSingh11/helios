const { markAttendanceModalCallback } = require("./mark-attendance-modal");

module.exports.register = (app) => {
  app.view("mark-attendance-modal", markAttendanceModalCallback);
};
