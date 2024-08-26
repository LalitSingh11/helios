const { Modal, Blocks } = require("slack-block-builder");

module.exports = () =>
  Modal({
    title: "Something went wrong",
    callbackId: "mark-attendance-error-modal",
  })
    .blocks(
      Blocks.Section({
        text: `We couldn't mark your attendance. Sorry!`,
      })
    )
    .buildToJSON();
