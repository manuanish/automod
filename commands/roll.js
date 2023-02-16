const { SlashCommandBuilder } = require("discord.js");

function rollDice(inputString) {
  var inputArray = inputString.split("d");
  var numDice = parseInt(inputArray[0]);
  var numSides = parseInt(inputArray[1]);
  var total = 0;
  var rolls = [];
  for (var i = 0; i < numDice; i++) {
    var roll = Math.floor(Math.random() * numSides) + 1;
    total += roll;
    rolls.push(roll);
  }
  return inputString + " rolled: `[" + rolls.join(", ") + "]` Total: " + total;
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName("roll")
    .setDescription("for dnd nerds 🤓")
    .addStringOption((option) =>
      option.setName("dice").setDescription("🎲").setRequired(true)
    )
    .addBooleanOption((option) =>
      option
        .setName("private")
        .setDescription("only you can see 😳")
        .setRequired(false)
    ),
  async execute(interaction) {
    if (interaction.options.getBoolean("private") === true) {
      await interaction.reply({
        content: rollDice(interaction.options.getString("dice")),
        ephemeral: true,
      });
    } else {
      await interaction.reply(rollDice(interaction.options.getString("dice")));
    }
  },
};
