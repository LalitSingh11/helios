const { Modal, Blocks } = require("slack-block-builder");

module.exports = () =>
  Modal({
    title: "Something went wrong",
    callbackId: "login-error-modal",
  })
    .blocks(
      Blocks.Section({
        text: `There was some trouble. Sorry!`,
      })
    )
    .buildToJSON();
