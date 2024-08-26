module.exports = () => {
  const time = new Date().toLocaleString();

  const markAttendanceModal = {
    title: {
      type: "plain_text",
      text: "Mark Attendance",
    },
    submit: {
      type: "plain_text",
      text: "Submit Request",
    },
    callback_id: "mark-attendance-modal",
    blocks: [
      {
        type: "context",
        elements: [
          {
            type: "plain_text",
            text: "Punch Time",
            emoji: true,
          },
        ],
      },
      {
        type: "header",
        text: {
          type: "plain_text",
          text: time,
        },
      },
      {
        type: "input",
        element: {
          type: "plain_text_input",
          action_id: "plain_text_input-action",
        },
        label: {
          type: "plain_text",
          text: "Comments",
          emoji: true,
        },
        block_id: "Comments",
        optional: true,
      },
    ],
    type: "modal",
  };
  return markAttendanceModal;
};
