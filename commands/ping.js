const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("ping").setDescription("🏓"),
  async execute(interaction) {
    await interaction.reply("pong");
  },
};
