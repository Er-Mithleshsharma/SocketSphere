const moment = require('moment-timezone');

// Set the timezone to Indian Standard Time
moment.tz.setDefault('Asia/Kolkata');

function formatMessage(username, text) {
  return {
    username,
    text,
    time: moment().format('h:mm a')
  };
}

module.exports = formatMessage;
