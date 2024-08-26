const { modals } = require("../../user-interface");
// eslint-disable-next-line no-unused-vars
const markAttendanceModalCallback = async ({ ack, view, body, client }) => {
  try {
    // api call to mark attendance
    console.log(view.state.values);
    throw new Error("");
  } catch (error) {
    await ack({
      response_action: "update",
      view: modals.markAttendanceError(),
    });
    // eslint-disable-next-line no-console
    console.error(error);
  }
};
module.exports = { markAttendanceModalCallback };
