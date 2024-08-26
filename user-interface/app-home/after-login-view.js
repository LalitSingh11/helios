module.exports = () => {
  const afterLoginView = {
    type: "home",
    callback_id: "home_view",
    /* body of the view */
    blocks: [
      {
        type: "actions",
        elements: [
          {
            type: "button",
            text: {
              type: "plain_text",
              text: "Mark Attendance",
              emoji: true,
            },
            value: "mark-attendance-btn",
            action_id: "mark-attendance-btn",
            style: "primary",
          },
        ],
      },
    ],
  };
  return afterLoginView;
};
