const { modals } = require("../../user-interface");

const markAttendanceButtonCallback = async ({ body, ack, client }) => {
  try {
    await ack();
    await client.views.open({
      trigger_id: body.trigger_id,
      view: modals.markAttendance(),
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

module.exports = { markAttendanceButtonCallback };
