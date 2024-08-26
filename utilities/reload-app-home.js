require("sequelize");
const { markAttendanceReminder } = require("../user-interface/messages/index");
const { DateTime } = require("luxon");

const {
  beforeLoginView,
  afterLoginView,
} = require("../user-interface/app-home");
const { User } = require("../models");

// eslint-disable-next-line no-unused-vars
module.exports = async (client, slackUserID, slackWorkspaceID, navTab) => {
  try {
    console.log(slackUserID);
    const scheduledTime1 = new Date(1674376440545);
    console.log(scheduledTime1);
    const dateObject = DateTime.fromJSDate(scheduledTime1);
    console.log(dateObject, "---------------", dateObject.toSeconds());

    // const today = new Date();
    // today.setMinutes(today.getMinutes() + 1);
    // today.setHours(10, 0, 0);

    // const response = await client.chat.scheduleMessage(
    //   markAttendanceReminder(today.getTime() / 1000, slackUserID)
    // );
    // console.log(response);
    // console.log(response.scheduled_message_id);

    let isLoggedIn = false;
    const queryResult = await User.findOne({
      where: {
        slackUserID,
        slackWorkspaceID,
      },
    });

    if (queryResult) {
      isLoggedIn = true;
    }

    console.log(isLoggedIn);
    if (!isLoggedIn) {
      await client.views.publish({
        user_id: slackUserID,
        view: beforeLoginView(),
      });
    }

    if (isLoggedIn) {
      await client.views.publish({
        user_id: slackUserID,
        view: afterLoginView(),
      });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};
