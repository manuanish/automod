require("dotenv").config();
const fs = require("node:fs");
const path = require("node:path");

const {
  Client,
  GatewayIntentBits,
  Events,
  ActivityType,
  Collection,
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
    activities: [{ name: "updated 🤯", type: ActivityType.Streaming }],
  });
});

const copypasta = require("./copypasta.js").copypasta;

client.on(Events.MessageCreate, (message) => {
  // Check if message author is automod#0068
  // create a list of already sent copypastas
  var already_sent = [];
  // CHANGE THIS TO 1036552706459967520 WHNR WORKING ON THE BOT
  // OTHERWISE USE THIS 1056930155509075968
  if (message.author.id != 1056930155509075968) {
    // Loop through all copypasta
    for (let i = 0; i < copypasta.all.length; i++) {
      // Loop through all triggers
      for (let j = 0; j < copypasta.all[i].trigger.length; j++) {
        // Check if the message contains the trigger
        if (
          message.content.toLowerCase().includes(copypasta.all[i].trigger[j])
        ) {
          // Send the response

          // If the response type is a reaction, react to the message
          if (copypasta.all[i].type === "reaction") {
            message.react(copypasta.all[i].response);
          }
          // If the response type is text, send the message
          if (copypasta.all[i].type === "text") {
            // Group the message into groups containing 2000 characters
            var groups = [];
            for (let k = 0; k < copypasta.all[i].response.length; k += 2000) {
              groups.push(copypasta.all[i].response.substring(k, k + 2000));
            }

            // Send the message
            for (let k = 0; k < groups.length; k++) {
              if (!already_sent.includes(groups[k])) {
                message.reply({
                  content: groups[k],
                  allowedMentions: { repliedUser: false },
                });

                // Add the copypasta to the list of already sent copypastas
                already_sent.push(groups[k]);
              }
            }
          } else if (copypasta.all[i].type === "ascii") {
            if (!already_sent.includes(copypasta.all[i].response)) {
              message.reply({
                content: copypasta.all[i].response.substring(0, 2000),
                allowedMentions: { repliedUser: false },
              });

              // Add the copypasta to the list of already sent copypastas
              already_sent.push(copypasta.all[i].response);
            }
          }
        }
      }
    }

    if (new Collection(message.attachments).size > 0) {
      // Loop through all attachments
      var img_array = Array.from(new Collection(message.attachments));
      var once = false;
      for (let i = 0; i < img_array.length; i++) {
        if (img_array[i][1].name.startsWith("SPOILER_") && !once) {
          // Send the response
          message.reply({
            content: copypasta.all[2].response,
            allowedMentions: { repliedUser: false },
          });
          once = true;
        }
      }
    }
  }
});

client.commands = new Collection();

const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  // Set a new item in the Collection with the key as the command name and the value as the exported module
  if ("data" in command && "execute" in command) {
    client.commands.set(command.data.name, command);
  } else {
    console.log(
      `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`
    );
  }
}

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const command = interaction.client.commands.get(interaction.commandName);

  if (!command) {
    console.error(`No command matching ${interaction.commandName} was found.`);
    return;
  }

  // Log the command
  console.log(
    `[${Date().toLocaleString()}] Command /${
      interaction.commandName
    } issued by ${interaction.user.tag} in ${interaction.guild.name}`
  );

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: "bro messed up 😢",
      ephemeral: true,
    });
  }
});

client.login(token);
