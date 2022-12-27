require("dotenv").config();

const {
  Client,
  GatewayIntentBits,
  Events,
  ActivityType
} = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const token = process.env.DISCORD_TOKEN;

client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
  client.user.setPresence({
    activities: [{ name: "mod simulator 🤢", type: ActivityType.Streaming }],
  });
});

client.on(Events.MessageCreate, (message) => {
  if (message.content === "ping") {
    message.reply({
      content: "pong",
      allowedMentions: { repliedUser: false },
    });
  }
});

client.login(token);