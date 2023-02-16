var MAX_EMOJIS_PER_BLOCK = 2;
const { SlashCommandBuilder } = require("discord.js");

const fs = require("node:fs");
const path = require("node:path");
// Read EMOJI_MAPPINGS from "./data/emoji-mappings.json"
const EMOJI_MAPPINGS = JSON.parse(
  fs.readFileSync(
    path.join(process.cwd(), "commands", "data", "emoji-mappings.json"),
    "utf8"
  )
);

function splitIntoBlocks(text) {
  return text.match(/\s*[^\s]*/g);
}

function generateEmojisFrom(block) {
  var trimmedBlock = trimNonAlphanumericalChars(block);
  var matchingEmojis = getMatchingEmojis(trimmedBlock);
  var emojis = [];
  if (matchingEmojis) {
    var numEmojis = Math.floor(Math.random() * (MAX_EMOJIS_PER_BLOCK + 1));
    for (var i = 0; i < numEmojis; i++) {
      emojis.push(
        matchingEmojis[Math.floor(Math.random() * matchingEmojis.length)]
      );
    }
  }
  return emojis.join("");
}

function trimNonAlphanumericalChars(text) {
  return text.replace(/^\W*/, "").replace(/\W*$/, "");
}

function getMatchingEmojis(word) {
  var key = getAlphanumericPrefix(word.toLowerCase());
  if (key in EMOJI_MAPPINGS) {
    return EMOJI_MAPPINGS[key];
  }
  return [];
}

function getAlphanumericPrefix(s) {
  return s.match(/^[a-z0-9]*/i);
}

function generateEmojipasta(text) {
  var blocks = splitIntoBlocks(text);
  var newBlocks = [];
  blocks.forEach((block) => {
    newBlocks.push(block);
    var emojis = generateEmojisFrom(block);
    if (emojis) {
      newBlocks.push(" " + emojis);
    }
  });
  return newBlocks.join("");
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName("emojify")
    .setDescription("👉👌😏")
    .addStringOption((option) =>
      option.setName("message").setDescription("type here 😀").setRequired(true)
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
        content: generateEmojipasta(interaction.options.getString("message")),
        ephemeral: true,
      });
    } else {
      await interaction.reply(
        generateEmojipasta(interaction.options.getString("message"))
      );
    }
  },
};
