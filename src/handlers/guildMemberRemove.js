const { deleteColor } = require('../config');
const sendLog = require('../util/sendLog');
const toCleanISOString = require('../util/toCleanISOString');

module.exports = guildMember =>
  sendLog(
    guildMember,
    deleteColor,
    `\nJoined server: ${toCleanISOString(guildMember.joinedAt)}`,
    `${guildMember.user.tag} left`
  );
