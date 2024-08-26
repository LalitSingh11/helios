const axios = require("axios");
const reloadAppHome = require("../../utilities/reload-app-home");
const { User } = require("../../models");
const { modals } = require("../../user-interface");

const loginUserCallback = async ({ body, ack, client }) => {
  console.log(
    "qw456789okjhgfdszxcvghn xzsdf1234567890---------------------------------=========1111111111111111111"
  );
  try {
    console.log("hi", body);
    await ack();
    const result = await axios.get("https://dummyjson.com/users/1");
    console.log(" ---------------------------------", result.data);
    const user = await User.create({
      firstName: result.data.firstName,
      lastName: result.data.lastName,
      slackUserID: body.user.id,
      slackWorkspaceID: body.team.id,
      token: result.data.ssn,
      email: result.data.email,
    });

    console.log("db", user);

    await client.views.open({
      trigger_id: body.trigger_id,
      view: reloadAppHome(client, body.user.id, body.team.id, ""),
    });
  } catch (error) {
    await ack({
      response_action: "update",
      view: modals.loginError(),
    });
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

module.exports = { loginUserCallback };
