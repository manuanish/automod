const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

const mainEmbed = new EmbedBuilder()
  .setColor("#46D160")
  .setTitle("source code")
  .setDescription("for nerds only 🤓")
  .setAuthor({
    name: "automod",
    iconURL:
      "https://b.thumbs.redditmedia.com/TG8E0KvVnynLtRITb13AQL7c9riS6QXdDHylVpDrOYc.png",
    url: "https://github.com/manuanish/automod",
  })
  .setURL("https://github.com/manuanish/automod")
  .setTimestamp()
  .setFooter({ text: "iHxp#6160 • MIT License" });

module.exports = {
  data: new SlashCommandBuilder()
    .setName("source")
    .setDescription("source code 😎")
    .addBooleanOption((option) =>
      option
        .setName("private")
        .setDescription("only you can see 😳")
        .setRequired(false)
    ),
  async execute(interaction) {
    if (interaction.options.getBoolean("private") === true) {
      await interaction.reply({
        ephemeral: true,
        embeds: [mainEmbed],
      });
    } else {
      await interaction.reply({
        embeds: [mainEmbed],
      });
    }
  },
};
