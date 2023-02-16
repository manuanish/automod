const { SlashCommandBuilder } = require("discord.js");

function rateSexy(user) {
  var sexy = Math.floor(Math.random() * 10) + 1;
  if (user === "iHxp") {
    return "10 😩 god damn";
  } else {
    if (sexy === 1) {
      return "1 🤢 pass";
    } else if (sexy === 2) {
      return "2 😶 no thanks 🚫";
    } else if (sexy === 3) {
      return "3 😐 meh ";
    } else if (sexy === 4) {
      return "4 😶 not bad";
    } else if (sexy === 5) {
      return "5 😔 try harder";
    } else if (sexy === 6) {
      return "6 😉 not bad";
    } else if (sexy === 7) {
      return "7 🥺 nice";
    } else if (sexy === 8) {
      return "8 😏 aight";
    } else if (sexy === 9) {
      return "9 😳 hot";
    } else if (sexy === 10) {
      return "10 😩 god damn";
    }
  }
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName("sex")
    .setDescription("😳")
    .addBooleanOption((option) =>
      option
        .setName("private")
        .setDescription("only you can see 😳")
        .setRequired(false)
    ),
  async execute(interaction) {
    if (interaction.options.getBoolean("private") === true) {
      await interaction.reply({
        content: rateSexy(interaction.user.username),
        ephemeral: true,
      });
    } else {
      await interaction.reply(rateSexy(interaction.user.username));
    }
  },
};
