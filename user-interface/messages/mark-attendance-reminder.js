const { Message, Section, Button } = require("slack-block-builder");

module.exports = (postAt, channel) =>
  Message({
    channel,
    postAt,
    text: `Here's a reminder to mark your attendance.`,
  })
    .blocks(
      Section({
        text: `:wave: Here's a reminder to mark your attendance.`,
      }).accessory(
        Button({
          text: "Mark Attendance",
          value: `mark-attendance-message-btn`,
          actionId: "mark-attendance-message-btn",
          style: "primary",
        })
      )
    )
    .buildToObject();
