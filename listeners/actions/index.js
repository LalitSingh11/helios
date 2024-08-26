const { markAttendanceButtonCallback } = require("./block_mark-attendance-btn");
const { loginUserCallback } = require("./block_login-btn");

module.exports.register = (app) => {
  app.action(
    { action_id: "mark-attendance-btn", type: "block_actions" },
    markAttendanceButtonCallback
  );
  app.action(
    { action_id: "login-btn", type: "block_actions" },
    loginUserCallback
  );
  app.action(
    { action_id: "mark-attendance-message-btn", type: "block_actions" },
    markAttendanceButtonCallback
  );
};
