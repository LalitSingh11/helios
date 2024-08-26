module.exports = () => {
  const beforeLoginView = {
    type: "home",
    callback_id: "home_view",
    /* body of the view */
    blocks: [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: "Helios Login",
          emoji: true,
        },
      },
      {
        type: "divider",
      },
      {
        type: "input",
        element: {
          type: "plain_text_input",
          action_id: "plain_text_input-action",
        },
        label: {
          type: "plain_text",
          text: "Email",
          emoji: false,
        },
        block_id: "Email",
      },
      {
        type: "input",
        element: {
          type: "plain_text_input",
          action_id: "plain_text_input-action",
        },
        label: {
          type: "plain_text",
          text: "Password",
          emoji: true,
        },
        block_id: "Password",
      },
      {
        type: "actions",
        elements: [
          {
            type: "button",
            text: {
              type: "plain_text",
              text: "Login",
              emoji: true,
            },
            value: "login-btn",
            action_id: "login-btn",
            style: "primary",
          },
        ],
      },
    ],
  };
  return beforeLoginView;
};
